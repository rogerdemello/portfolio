"use client";

/**
 * BugMascot - an interactive, cursor-aware bug mascot for the portfolio.
 *
 * Visual language is borrowed from the reference rover illustration:
 *   thick dark outlines, minimal geometric shapes, a large orange "visor",
 *   big expressive eyes and light/neutral body fills. Colors are pulled from
 *   the site's CSS custom properties (`--primary`, `--accent`, `--foreground`,
 *   `--background`) so the mascot always matches the active theme.
 *
 * Behaviour:
 *   - Eyes (pupils) smoothly track the cursor.
 *   - The head rotates slightly toward the cursor, with hard angle limits.
 *   - Randomized blinking (with the occasional double-blink for personality).
 *   - A gentle "breathing" bob plus a slow look-around when the cursor is idle.
 *   - Fully `prefers-reduced-motion` aware (renders a calm, static pose).
 *
 * Performance:
 *   - A single requestAnimationFrame loop drives everything.
 *   - Per-frame work mutates SVG transforms imperatively via refs, so React
 *     never re-renders during animation (the component renders ~once).
 *   - The loop pauses when the tab is hidden.
 */

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ *
 * Tunable constants - the "personality" of the mascot lives here.
 * ------------------------------------------------------------------ */

// SVG geometry (must stay in sync with the markup below).
const VIEWBOX = { w: 220, h: 240 };
const HEAD_PIVOT = { x: 110, y: 120 }; // neck joint the head rotates around
const EYE_LEFT = { x: 88, y: 92 };
const EYE_RIGHT = { x: 132, y: 92 };
const EYE_LID_TOP = 76; // y of the top of the eye, used as the blink pivot

// Motion limits / feel.
const MAX_HEAD_DEG = 12; // head never turns more than this toward the cursor
const HEAD_RANGE_PX = 520; // cursor distance over which max head angle is reached
const MAX_PUPIL_X = 6; // furthest a pupil travels horizontally inside the eye
const MAX_PUPIL_Y = 5; // ...and vertically
const EASE = 0.12; // 0..1 - higher = snappier, lower = floatier
const BREATH_PX = 2.2; // vertical "breathing" amplitude
const IDLE_MS = 2600; // cursor still for this long → idle behaviour kicks in

// Blink timing.
const BLINK_MIN_MS = 2800;
const BLINK_MAX_MS = 6500;
const BLINK_CLOSE_MS = 70;
const BLINK_OPEN_MS = 90;
const DOUBLE_BLINK_CHANCE = 0.18;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

// Personality lines the mascot shows in a small bubble. Just character — no chatbot.
const MESSAGES = [
  "Roger is probably debugging something.",
  "Currently training a model.",
  "Investigating bugs.",
  "Probably overengineering something.",
  "Powered by coffee.",
];

/* ------------------------------------------------------------------ *
 * Hook: prefers-reduced-motion
 * Returns true when the user has asked the OS to minimize animation.
 * ------------------------------------------------------------------ */
function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

/* ------------------------------------------------------------------ *
 * Hook: cursor tracking
 * Records the raw pointer position (viewport coords) and the timestamp of
 * the last movement in refs - never in state, so it triggers no re-renders.
 * The render loop reads these refs each frame.
 * ------------------------------------------------------------------ */
function usePointerTracking(enabled: boolean) {
  const pointer = useRef({ x: 0, y: 0 });
  const seen = useRef(false); // has the pointer ever moved? (avoids a jump from 0,0)
  const lastMove = useRef(0); // performance.now() of the last movement

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      seen.current = true;
      lastMove.current = performance.now();
    };

    // `passive` - we never call preventDefault, so let the browser optimize.
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  return { pointer, seen, lastMove };
}

/* ------------------------------------------------------------------ */

export default function BugMascot() {
  const reduced = useReducedMotion();
  const animate = !reduced;
  const { pointer, seen, lastMove } = usePointerTracking(animate);

  // One-time mount flag so we can fade the mascot in (no layout thrash).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Speech bubble: a personality line shown on hover, plus a gentle idle cycle.
  const [bubble, setBubble] = useState<string | null>(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    if (reduced) return; // respect reduced-motion: no auto-cycling
    let cancelled = false;
    let showT: ReturnType<typeof setTimeout>;
    let hideT: ReturnType<typeof setTimeout>;
    const cycle = () => {
      if (cancelled) return;
      setBubble(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
      hideT = setTimeout(() => {
        if (!cancelled && !hoveredRef.current) setBubble(null);
      }, 4500);
      showT = setTimeout(cycle, 9000);
    };
    showT = setTimeout(cycle, 3500);
    return () => {
      cancelled = true;
      clearTimeout(showT);
      clearTimeout(hideT);
    };
  }, [reduced]);

  // Element refs we mutate imperatively in the rAF loop.
  const svgRef = useRef<SVGSVGElement | null>(null);
  const rootRef = useRef<SVGGElement | null>(null); // breathing bob
  const headRef = useRef<SVGGElement | null>(null); // head rotation
  const pupilLRef = useRef<SVGGElement | null>(null);
  const pupilRRef = useRef<SVGGElement | null>(null);
  const lidLRef = useRef<SVGGElement | null>(null);
  const lidRRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    if (!animate) return;

    let raf = 0;
    let running = true;

    // Smoothed ("current") values that ease toward their targets each frame.
    const cur = { head: 0, px: 0, py: 0, bob: 0 };

    // Cached mascot centre in viewport coords (recomputed on resize/scroll).
    let center = { x: 0, y: 0 };
    const measure = () => {
      const r = svgRef.current?.getBoundingClientRect();
      if (r) center = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    };
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });

    // Blink scheduler state.
    let nextBlink = performance.now() + 1200;
    let blinkStart = 0;
    let blinking = false;
    let queuedBlinks = 0; // remaining blinks in a (possibly double) sequence
    let lid = 0; // 0 = open, 1 = fully closed

    const tick = (t: number) => {
      if (!running) return;

      /* --- 1. Decide where the head + eyes WANT to be (targets) ---------- */
      const idle = !seen.current || t - lastMove.current > IDLE_MS;

      let headTarget: number;
      let pxTarget: number;
      let pyTarget: number;

      if (idle) {
        // Idle: a slow, gentle look-around using offset sine waves so the
        // horizontal and vertical drift feel uncorrelated (more lifelike).
        headTarget = Math.sin(t * 0.0006) * MAX_HEAD_DEG * 0.3;
        pxTarget = Math.sin(t * 0.0007) * MAX_PUPIL_X * 0.55;
        pyTarget = Math.cos(t * 0.0011) * MAX_PUPIL_Y * 0.5;
      } else {
        // Active: aim at the cursor.
        const dx = pointer.current.x - center.x;
        const dy = pointer.current.y - center.y;
        const dist = Math.hypot(dx, dy) || 1;

        // Head turn: proportional to horizontal offset, normalized over
        // HEAD_RANGE_PX and hard-clamped to ±MAX_HEAD_DEG so it never spins.
        headTarget = clamp(dx / HEAD_RANGE_PX, -1, 1) * MAX_HEAD_DEG;

        // Pupils: take the UNIT vector toward the cursor and scale it by the
        // eye's travel radius. This makes the pupil sit on the rim of the eye
        // in the cursor's direction - i.e. the eyes genuinely "look at" it.
        pxTarget = (dx / dist) * MAX_PUPIL_X;
        pyTarget = (dy / dist) * MAX_PUPIL_Y;
      }

      // Breathing bob is always on - a touch faster while idle (resting).
      const bobTarget = Math.sin(t * (idle ? 0.0016 : 0.0024)) * BREATH_PX * (idle ? 1.3 : 1);

      /* --- 2. Ease current values toward the targets -------------------- */
      // Standard exponential smoothing: cur += (target - cur) * EASE.
      cur.head += (headTarget - cur.head) * EASE;
      cur.px += (pxTarget - cur.px) * EASE;
      cur.py += (pyTarget - cur.py) * EASE;
      cur.bob += (bobTarget - cur.bob) * EASE;

      /* --- 3. Blink state machine --------------------------------------- */
      if (!blinking && t >= nextBlink) {
        blinking = true;
        blinkStart = t;
        // Occasionally fire a quick double-blink.
        queuedBlinks = Math.random() < DOUBLE_BLINK_CHANCE ? 1 : 0;
      }
      if (blinking) {
        const e = t - blinkStart;
        if (e <= BLINK_CLOSE_MS) {
          lid = e / BLINK_CLOSE_MS; // closing
        } else if (e <= BLINK_CLOSE_MS + BLINK_OPEN_MS) {
          lid = 1 - (e - BLINK_CLOSE_MS) / BLINK_OPEN_MS; // opening
        } else {
          lid = 0;
          blinking = false;
          if (queuedBlinks > 0) {
            queuedBlinks -= 1;
            nextBlink = t + 120; // immediate follow-up blink
          } else {
            nextBlink = t + BLINK_MIN_MS + Math.random() * (BLINK_MAX_MS - BLINK_MIN_MS);
          }
        }
      }

      /* --- 4. Write the transforms (the only per-frame DOM work) -------- */
      rootRef.current?.setAttribute("transform", `translate(0 ${cur.bob.toFixed(2)})`);
      headRef.current?.setAttribute(
        "transform",
        `rotate(${cur.head.toFixed(2)} ${HEAD_PIVOT.x} ${HEAD_PIVOT.y})`,
      );

      const pl = `translate(${cur.px.toFixed(2)} ${cur.py.toFixed(2)})`;
      pupilLRef.current?.setAttribute("transform", pl);
      pupilRRef.current?.setAttribute("transform", pl);

      // Eyelid closes from the top down: scale a full-eye shape vertically
      // about the eye's top edge (lid 0 → collapsed/open, 1 → full/closed).
      const lidT = (cx: number) =>
        `translate(${cx} ${EYE_LID_TOP}) scale(1 ${lid.toFixed(3)}) translate(${-cx} ${-EYE_LID_TOP})`;
      lidLRef.current?.setAttribute("transform", lidT(EYE_LEFT.x));
      lidRRef.current?.setAttribute("transform", lidT(EYE_RIGHT.x));

      raf = requestAnimationFrame(tick);
    };

    // Pause the loop entirely when the tab isn't visible (saves battery/CPU).
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        measure();
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [animate, pointer, seen, lastMove]);

  return (
    <div
      // Fixed bottom-right, hidden on touch/small screens (no cursor to track).
      // The wrapper stays pointer-events:none so only the bug itself is interactive.
      className="hidden md:block fixed bottom-3 right-3 z-30 select-none"
      style={{
        pointerEvents: "none",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 700ms cubic-bezier(0.33,1,0.68,1), transform 700ms cubic-bezier(0.33,1,0.68,1)",
      }}
    >
      {/* Speech bubble — visual only, never blocks clicks. */}
      {bubble && (
        <div
          className="absolute bottom-full right-0 mb-3 w-max max-w-[230px] panel px-3 py-2 font-mono text-[0.72rem] leading-snug text-foreground/85 shadow-sm"
          style={{ pointerEvents: "none" }}
        >
          {bubble}
          <span className="absolute -bottom-[6px] right-8 w-3 h-3 rotate-45 bg-card border-r border-b border-card-border" />
        </div>
      )}

      {/* Only the bug box is hoverable; the rest of the corner stays click-through. */}
      <div
        style={{
          width: "clamp(160px, 13vw, 220px)",
          pointerEvents: "auto",
          filter: "drop-shadow(0 5px 12px hsl(var(--foreground) / 0.18))",
        }}
        onMouseEnter={() => { hoveredRef.current = true; setBubble(MESSAGES[0]); }}
        onMouseLeave={() => { hoveredRef.current = false; setBubble(null); }}
      >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`}
        width="100%"
        height="100%"
        role="img"
        // Theme-aware palette via CSS variables.
        style={
          {
            display: "block",
            ["--ink" as string]: "hsl(var(--foreground))",
            ["--body" as string]: "hsl(42 55% 96%)",
            ["--orange" as string]: "hsl(var(--primary))",
            ["--amber" as string]: "hsl(var(--accent))",
          } as React.CSSProperties
        }
      >
        <defs>
          <radialGradient id="bug-ground" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft orange "ground" glow - grounds the bug on the dark canvas. */}
        <ellipse cx="110" cy="220" rx="78" ry="16" fill="url(#bug-ground)" />

        {/* rootRef: receives the breathing bob (whole-body vertical motion). */}
        <g ref={rootRef}>
          {/* Legs (drawn first so they tuck behind the body). 3 per side. */}
          <g
            fill="none"
            stroke="var(--ink)"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M70 150 L42 140 L34 160" />
            <path d="M64 168 L32 168 L24 188" />
            <path d="M68 184 L42 194 L38 212" />
            <path d="M150 150 L178 140 L186 160" />
            <path d="M156 168 L188 168 L196 188" />
            <path d="M152 184 L178 194 L182 212" />
          </g>

          {/* Body / abdomen. */}
          <ellipse
            cx="110"
            cy="166"
            rx="66"
            ry="52"
            fill="var(--body)"
            stroke="var(--ink)"
            strokeWidth={6}
          />
          {/* Subtle wing-case seam + accent dots for a little detail. */}
          <path
            d="M110 120 L110 214"
            stroke="var(--ink)"
            strokeWidth={3}
            strokeOpacity={0.35}
            strokeLinecap="round"
          />
          <circle cx="86" cy="158" r="4" fill="var(--orange)" opacity={0.8} />
          <circle cx="134" cy="174" r="3.5" fill="var(--amber)" opacity={0.8} />

          {/* Neck joint (part of the body; the head pivots above it). */}
          <rect
            x="98"
            y="112"
            width="24"
            height="20"
            rx="8"
            fill="var(--body)"
            stroke="var(--ink)"
            strokeWidth={5}
          />

          {/* headRef: rotates toward the cursor about HEAD_PIVOT. */}
          <g ref={headRef}>
            {/* Antennae with friendly amber tips. */}
            <g fill="none" stroke="var(--ink)" strokeWidth={5} strokeLinecap="round">
              <path d="M92 64 C84 46 80 36 78 28" />
              <path d="M128 64 C136 46 140 36 142 28" />
            </g>
            <circle cx="78" cy="26" r="6" fill="var(--amber)" stroke="var(--ink)" strokeWidth={3} />
            <circle cx="142" cy="26" r="6" fill="var(--amber)" stroke="var(--ink)" strokeWidth={3} />

            {/* Head shell. */}
            <rect
              x="48"
              y="58"
              width="124"
              height="68"
              rx="28"
              fill="var(--body)"
              stroke="var(--ink)"
              strokeWidth={6}
            />

            {/* Orange visor (echoes the rover's orange head band). */}
            <rect
              x="58"
              y="70"
              width="104"
              height="44"
              rx="20"
              fill="var(--orange)"
              stroke="var(--ink)"
              strokeWidth={5}
            />

            {/* ---- Eyes ---- each: white sclera, tracking pupil, blink lid. */}
            {/* Left eye */}
            <g>
              <circle cx={EYE_LEFT.x} cy={EYE_LEFT.y} r="15" fill="#fff" stroke="var(--ink)" strokeWidth={3} />
              <g ref={pupilLRef}>
                <circle cx={EYE_LEFT.x} cy={EYE_LEFT.y} r="7.5" fill="var(--ink)" />
                <circle cx={EYE_LEFT.x - 2.5} cy={EYE_LEFT.y - 2.5} r="2.4" fill="#fff" />
              </g>
              {/* Lid: orange disc that scales down over the eye when blinking.
                  Uses the SVG `transform` attribute (not CSS) so the per-frame
                  setAttribute in the loop isn't overridden by an inline style. */}
              <g ref={lidLRef} transform="scale(1 0)">
                <circle cx={EYE_LEFT.x} cy={EYE_LEFT.y} r="16.5" fill="var(--orange)" />
              </g>
            </g>
            {/* Right eye */}
            <g>
              <circle cx={EYE_RIGHT.x} cy={EYE_RIGHT.y} r="15" fill="#fff" stroke="var(--ink)" strokeWidth={3} />
              <g ref={pupilRRef}>
                <circle cx={EYE_RIGHT.x} cy={EYE_RIGHT.y} r="7.5" fill="var(--ink)" />
                <circle cx={EYE_RIGHT.x - 2.5} cy={EYE_RIGHT.y - 2.5} r="2.4" fill="#fff" />
              </g>
              <g ref={lidRRef} transform="scale(1 0)">
                <circle cx={EYE_RIGHT.x} cy={EYE_RIGHT.y} r="16.5" fill="var(--orange)" />
              </g>
            </g>
          </g>
        </g>
      </svg>
      </div>
    </div>
  );
}

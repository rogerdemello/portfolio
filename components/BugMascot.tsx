"use client";

/**
 * BugMascot - an interactive, cursor-aware rover mascot for the portfolio.
 *
 * The body is the rover illustration (`public/rover-mascot.png`). A transparent
 * SVG overlay is registered exactly over the rover's printed eyes and draws
 * fresh, living eyes on top: a white mask disc (covers the printed pupil), a
 * tracking pupil, and an orange blink lid. Lid/highlight colors come from the
 * site's CSS custom properties (`--primary`, `--foreground`) so the eyes match
 * the active theme.
 *
 * Behaviour:
 *   - Eyes (pupils) smoothly track the cursor.
 *   - Randomized blinking (with the occasional double-blink for personality).
 *   - A gentle "breathing" bob plus a slow look-around when the cursor is idle.
 *   - Fully `prefers-reduced-motion` aware (renders a calm, static pose).
 *
 * Performance:
 *   - A single requestAnimationFrame loop drives everything.
 *   - Per-frame work mutates transforms imperatively via refs, so React never
 *     re-renders during animation (the component renders ~once).
 *   - The loop pauses when the tab is hidden.
 */

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ *
 * Tunable constants - the "personality" of the mascot lives here.
 * ------------------------------------------------------------------ */

// Overlay geometry. The overlay SVG uses the PNG's native pixel space as its
// viewBox (so these coords map 1:1 onto the rover image). Calibrated against
// public/rover-mascot.png (957x1024) - tweak if the eyes drift off the art.
const VIEWBOX = { w: 1229, h: 992 };
// Eye centres measured from the printed eyes in rover-mascot.png.
const EYE_LEFT = { x: 437, y: 89 };
const EYE_RIGHT = { x: 638, y: 98 };
const EYE_WHITE_R = 47; // white mask disc - large enough to hide the printed eye
const PUPIL_R = 34; // big to preserve the rover's kawaii dark-eye look
const HIGHLIGHT_R = 9;
const LID_R = 50; // orange blink-lid disc (slightly larger than the white)
const EYE_LID_TOP = 47; // y of the top of the eye, used as the blink pivot

// Motion limits / feel.
const MAX_PUPIL_X = 11; // furthest a pupil travels horizontally inside the eye
const MAX_PUPIL_Y = 9; // ...and vertically
const EASE = 0.12; // 0..1 - higher = snappier, lower = floatier
const BREATH_PX = 6; // vertical "breathing" amplitude (in viewBox units)
const IDLE_MS = 2600; // cursor still for this long → idle behaviour kicks in

// Blink timing.
const BLINK_MIN_MS = 2800;
const BLINK_MAX_MS = 6500;
const BLINK_CLOSE_MS = 70;
const BLINK_OPEN_MS = 90;
const DOUBLE_BLINK_CHANCE = 0.18;

// Personality lines the mascot shows in a small bubble. Just character - no chatbot.
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
  const rootRef = useRef<HTMLDivElement | null>(null); // breathing bob (wraps img + overlay)
  const pupilLRef = useRef<SVGGElement | null>(null);
  const pupilRRef = useRef<SVGGElement | null>(null);
  const lidLRef = useRef<SVGGElement | null>(null);
  const lidRRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    if (!animate) return;

    let raf = 0;
    let running = true;

    // Smoothed ("current") values that ease toward their targets each frame.
    const cur = { px: 0, py: 0, bob: 0 };

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

      /* --- 1. Decide where the eyes WANT to be (targets) ---------------- */
      const idle = !seen.current || t - lastMove.current > IDLE_MS;

      let pxTarget: number;
      let pyTarget: number;

      if (idle) {
        // Idle: a slow, gentle look-around using offset sine waves so the
        // horizontal and vertical drift feel uncorrelated (more lifelike).
        pxTarget = Math.sin(t * 0.0007) * MAX_PUPIL_X * 0.55;
        pyTarget = Math.cos(t * 0.0011) * MAX_PUPIL_Y * 0.5;
      } else {
        // Active: aim at the cursor.
        const dx = pointer.current.x - center.x;
        const dy = pointer.current.y - center.y;
        const dist = Math.hypot(dx, dy) || 1;

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
      // Breathing bob translates the whole rover (img + eye overlay) vertically.
      if (rootRef.current) rootRef.current.style.transform = `translateY(${cur.bob.toFixed(2)}px)`;

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
      {/* Speech bubble - visual only, never blocks clicks. */}
      {bubble && (
        <div
          className="absolute bottom-full right-0 mb-3 w-max max-w-[230px] panel px-3 py-2 font-mono text-[0.72rem] leading-snug text-foreground/85 shadow-sm"
          style={{ pointerEvents: "none" }}
        >
          {bubble}
          <span className="absolute -bottom-[6px] right-8 w-3 h-3 rotate-45 bg-card border-r border-b border-card-border" />
        </div>
      )}

      {/* Only the rover box is hoverable; the rest of the corner stays click-through. */}
      <div
        style={{
          width: "clamp(160px, 13vw, 220px)",
          pointerEvents: "auto",
          filter: "drop-shadow(0 5px 12px hsl(var(--foreground) / 0.18))",
        }}
        onMouseEnter={() => { hoveredRef.current = true; setBubble(MESSAGES[0]); }}
        onMouseLeave={() => { hoveredRef.current = false; setBubble(null); }}
      >
        {/* rootRef: receives the breathing bob (whole rover bobs vertically). */}
        <div ref={rootRef} style={{ position: "relative", lineHeight: 0, willChange: "transform" }}>
          {/* The rover illustration is the body. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rover-mascot.png?v=3"
            alt="Rover mascot"
            width={VIEWBOX.w}
            height={VIEWBOX.h}
            draggable={false}
            style={{ display: "block", width: "100%", height: "auto" }}
          />

          {/* Transparent overlay registered exactly over the printed eyes.
              viewBox matches the PNG's pixel space so eye coords map 1:1. */}
          <svg
            ref={svgRef}
            viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
            aria-hidden="true"
          >
            {/* ---- Eyes ---- each: white mask disc (hides the printed pupil),
                tracking pupil, then orange blink lid on top. */}
            {/* Left eye */}
            <g>
              <circle cx={EYE_LEFT.x} cy={EYE_LEFT.y} r={EYE_WHITE_R} fill="#fff" stroke="hsl(var(--foreground))" strokeWidth={4} />
              <g ref={pupilLRef}>
                <circle cx={EYE_LEFT.x} cy={EYE_LEFT.y} r={PUPIL_R} fill="hsl(var(--foreground))" />
                <circle cx={EYE_LEFT.x - PUPIL_R * 0.35} cy={EYE_LEFT.y - PUPIL_R * 0.35} r={HIGHLIGHT_R} fill="#fff" />
              </g>
              {/* Lid: orange disc that scales down over the eye when blinking.
                  Uses the SVG `transform` attribute (not CSS) so the per-frame
                  setAttribute in the loop isn't overridden by an inline style. */}
              <g ref={lidLRef} transform="scale(1 0)">
                <circle cx={EYE_LEFT.x} cy={EYE_LEFT.y} r={LID_R} fill="hsl(var(--primary))" />
              </g>
            </g>
            {/* Right eye */}
            <g>
              <circle cx={EYE_RIGHT.x} cy={EYE_RIGHT.y} r={EYE_WHITE_R} fill="#fff" stroke="hsl(var(--foreground))" strokeWidth={4} />
              <g ref={pupilRRef}>
                <circle cx={EYE_RIGHT.x} cy={EYE_RIGHT.y} r={PUPIL_R} fill="hsl(var(--foreground))" />
                <circle cx={EYE_RIGHT.x - PUPIL_R * 0.35} cy={EYE_RIGHT.y - PUPIL_R * 0.35} r={HIGHLIGHT_R} fill="#fff" />
              </g>
              <g ref={lidRRef} transform="scale(1 0)">
                <circle cx={EYE_RIGHT.x} cy={EYE_RIGHT.y} r={LID_R} fill="hsl(var(--primary))" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

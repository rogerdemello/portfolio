"use client";
import { useEffect, useId, useRef, useState } from "react";
import { profile } from "@/lib/content";

const trigger = {
  ink: "btn btn-ink",
  line: "btn btn-line",
  nav: "font-sans text-[0.93rem] font-semibold underline decoration-pen decoration-2 underline-offset-4 transition-colors hover:text-pen",
} as const;

/**
 * "My CV" button that drops down to View or Download. Plain disclosure pattern: a button that
 * toggles a short list of links, closed by Escape, a click outside, or choosing an option.
 */
export default function CvMenu({
  variant = "ink",
  align = "left",
  label = "My CV",
}: {
  variant?: keyof typeof trigger;
  align?: "left" | "right";
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLSpanElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const item = "block whitespace-nowrap px-4 py-2 transition-colors hover:bg-ink/[0.06] focus-visible:bg-ink/[0.06]";

  return (
    <span ref={root} className="relative inline-block print:hidden">
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        data-tap={variant === "nav" ? "" : undefined}
        className={trigger[variant]}
      >
        {label}{" "}
        <span aria-hidden className={`inline-block text-[0.8em] transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <ul
          id={id}
          className={`absolute z-50 mt-2 min-w-[11rem] overflow-hidden rounded-md border border-ink/15 bg-paper py-1 font-sans text-[0.95rem] font-medium shadow-[0_10px_30px_-12px_rgb(0_0_0/0.35)] ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          <li>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className={item}>
              View resume <span aria-hidden>↗</span>
            </a>
          </li>
          <li>
            <a href={profile.cv} download={profile.cvFile} onClick={() => setOpen(false)} className={item}>
              Download resume <span aria-hidden>↓</span>
            </a>
          </li>
        </ul>
      )}
    </span>
  );
}

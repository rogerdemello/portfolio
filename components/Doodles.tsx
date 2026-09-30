/**
 * Pen doodles for the margin notes. Paths are drawn by hand (uneven on purpose), stroked in
 * the ballpoint colour, and use non-scaling strokes so they stay pen-thin at any size.
 */
type SvgProps = { className?: string };

const pen = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

/** Curly arrow. `kind` is the direction it travels. */
export function Arrow({ kind, className = "" }: SvgProps & { kind: "down-left" | "left" | "down" | "up-left" }) {
  const shapes = {
    "down-left": { box: "0 0 84 60", d: ["M76 5 C 70 24, 46 36, 14 43", "M14 43 C 20 39, 24 35, 28 30", "M14 43 C 21 44, 26 46, 31 50"] },
    left: { box: "0 0 84 40", d: ["M80 22 C 60 6, 32 8, 9 22", "M9 22 C 15 19, 19 14, 21 8", "M9 22 C 16 24, 21 27, 24 32"] },
    down: { box: "0 0 44 64", d: ["M12 4 C 26 18, 8 36, 21 58", "M21 58 C 16 53, 12 48, 10 42", "M21 58 C 26 52, 30 49, 35 44"] },
    "up-left": { box: "0 0 84 60", d: ["M78 54 C 72 34, 46 26, 12 17", "M12 17 C 19 20, 24 24, 28 30", "M12 17 C 19 14, 25 10, 30 5"] },
  }[kind];
  return (
    <svg aria-hidden viewBox={shapes.box} className={`text-pen ${className}`} overflow="visible">
      {shapes.d.map((d) => (
        <path key={d} d={d} {...pen} />
      ))}
    </svg>
  );
}

/** A loose pen circle drawn around whatever it wraps. */
export function Circled({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative mx-2 inline-block whitespace-nowrap">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -inset-x-2.5 -inset-y-2.5 h-[calc(100%+1.25rem)] w-[calc(100%+1.25rem)] text-pen"
        overflow="visible"
      >
        <path d="M16 34 C 6 12, 72 3, 116 6 S 198 16, 192 33 S 132 57, 94 54 S 4 50, 9 25 C 12 15, 26 9, 46 7" {...pen} />
      </svg>
    </span>
  );
}

/** A wobbly underline. */
export function Squiggle({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-pen"
        overflow="visible"
      >
        <path d="M1 7 C 11 2, 19 11, 31 6 S 51 2, 63 7 S 85 11, 99 4" {...pen} />
      </svg>
    </span>
  );
}

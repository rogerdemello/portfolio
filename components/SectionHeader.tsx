"use client";

/**
 * SectionHeader - a subsystem console header.
 *   ● SUBSYSTEM 04 · FLIGHT-LOG ──────────────────── NOMINAL
 *   Timeline
 */
export default function SectionHeader({
  n,
  label,
  title,
  sub,
}: {
  n: string;
  label: string;   // subsystem name, e.g. FLIGHT-LOG
  title: string;
  sub?: string;
}) {
  const t = parseInt(n, 10);
  return (
    <div className="mb-9">
      <div className="flex items-center gap-3 mb-4 font-mono text-xs">
        <span className="led" aria-hidden />
        <span className="text-foreground/45 draft-letter">Subsystem {String(t).padStart(2, "0")}</span>
        <span className="text-primary draft-letter">· {label}</span>
        <span aria-hidden className="flex-1 h-px bg-card-border" />
        <span className="hidden sm:inline text-primary/80 draft-letter">Nominal</span>
      </div>

      <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-none tracking-tight">
        {title}
      </h2>
      {sub && <p className="text-foreground/55 mt-3 max-w-lg text-sm">{sub}</p>}
    </div>
  );
}

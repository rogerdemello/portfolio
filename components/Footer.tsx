"use client";

export default function Footer() {
  return (
    <footer className="border-t border-card-border mt-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 py-8">
        {/* Telemetry status bar */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.7rem] draft-letter">
          <span className="flex items-center gap-1.5 text-primary"><span className="led" aria-hidden /> RD.OPS</span>
          <span className="text-foreground/25">|</span>
          <span className="text-foreground/55">AI / ML Engineer</span>
          <span className="text-foreground/25">|</span>
          <span className="text-foreground/45">Ground station — Nagpur, India</span>
          <span className="text-foreground/25">|</span>
          <span className="text-primary">● all systems nominal</span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-auto text-foreground/60 hover:text-primary transition-colors"
          >
            ▲ return to console
          </button>
        </div>

        <p className="mt-3 font-mono text-[0.65rem] text-foreground/30 leading-relaxed">
          © 2026 Roger Demello · telemetry is illustrative · end of transmission.
        </p>
      </div>
    </footer>
  );
}

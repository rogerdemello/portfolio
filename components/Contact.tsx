"use client";

const lines = [
  { cmd: "email", value: "rogerdemello289@gmail.com", href: "mailto:rogerdemello289@gmail.com" },
  { cmd: "linkedin", value: "linkedin.com/in/rogerdemello", href: "https://linkedin.com/in/rogerdemello" },
  { cmd: "github", value: "github.com/rogerdemello", href: "https://github.com/rogerdemello" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-card-border">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm text-accent">05</span>
        <span className="readout">Contact</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-3 mb-10 leading-none">
        Get in touch
      </h2>

      {/* Terminal */}
      <div className="rounded-xl overflow-hidden border border-card-border max-w-2xl">
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-background-tertiary border-b border-card-border">
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <span className="ml-3 font-mono text-xs text-foreground/40">bash - contact</span>
        </div>

        {/* body */}
        <div className="bg-background-secondary font-mono text-sm sm:text-[0.92rem] p-5 sm:p-7 leading-relaxed">
          <p className="mb-4">
            <span className="text-accent">roger@demello</span>
            <span className="text-foreground/35">:</span>
            <span className="text-secondary">~</span>
            <span className="text-foreground/35">$</span>{" "}
            <span className="text-foreground/80">contact</span>
          </p>

          <div className="space-y-2">
            {lines.map((l) => (
              <div key={l.cmd} className="flex items-baseline gap-x-3">
                <span className="text-foreground/35 w-24 shrink-0 whitespace-nowrap">→ {l.cmd}</span>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4 break-all"
                >
                  {l.value}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-5 flex items-center gap-3 flex-wrap">
            <span className="text-foreground/35">status:</span>
            <span className="text-secondary">Open to full-time AI Engineering roles</span>
            <span aria-hidden className="inline-block w-2 h-[1.05em] bg-primary/80 animate-pulse translate-y-0.5" />
          </p>
        </div>
      </div>
    </section>
  );
}

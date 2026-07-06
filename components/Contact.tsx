"use client";
import SectionHeader from "@/components/SectionHeader";

const channels = [
  { band: "PRIMARY", chan: "EMAIL", value: "rogerdemello289@gmail.com", href: "mailto:rogerdemello289@gmail.com" },
  { band: "SECONDARY", chan: "LINKEDIN", value: "linkedin.com/in/rogerdemello", href: "https://linkedin.com/in/rogerdemello" },
  { band: "DATA", chan: "GITHUB", value: "github.com/rogerdemello", href: "https://github.com/rogerdemello" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-card-border">
      <SectionHeader n="06" label="Uplink" title="Get in touch" />

      <div className="panel panel-live overflow-hidden max-w-2xl">
        {/* console header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-card-border bg-background-secondary/60">
          <span className="readout flex items-center gap-2"><span className="led-cyan led" aria-hidden /> Comms Channels</span>
          <span className="font-mono text-xs text-primary draft-letter">Signal — Strong</span>
        </div>

        {/* column headers */}
        <div className="grid grid-cols-[6rem_6rem_1fr] gap-x-3 px-4 py-2 border-b border-card-border readout">
          <span>Band</span>
          <span>Channel</span>
          <span>Address</span>
        </div>

        {channels.map((c) => (
          <div
            key={c.chan}
            className="grid grid-cols-[6rem_6rem_1fr] gap-x-3 px-4 py-3 border-b border-card-border/60 last:border-0 items-center"
          >
            <span className="font-mono text-xs text-accent draft-letter">{c.band}</span>
            <span className="font-mono text-xs text-foreground/65 draft-letter">{c.chan}</span>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary hover:underline underline-offset-4 break-all text-sm transition-colors"
            >
              {c.value}
            </a>
          </div>
        ))}

        <div className="flex items-center gap-2 px-4 py-3 bg-background-secondary/40">
          <span className="inline-flex items-center gap-2 text-primary font-mono text-xs draft-letter">
            <span className="led" aria-hidden />
            Standing by — open to AI Engineering roles · response window: immediate
          </span>
        </div>
      </div>
    </section>
  );
}

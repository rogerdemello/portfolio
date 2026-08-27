"use client";

const timeline = [
  { year: "May - Jul 2025", company: "CFM, RCOEM", role: "Machine Learning Research Intern", detail: "Data cleaning & preprocessing pipelines · 1,000+ records · 30% faster development", current: false, last: false },
  { year: "Jan - Jun 2026", company: "AI LifeBOT", role: "AI Engineer Intern", detail: "Backend services behind 3 production apps · 200+ users · 35% lower latency · 99.5% uptime", current: false, last: false },
  { year: "Aug 2026 - Now", company: "Innovun Global", role: "AI Engineer Intern, Remote", detail: "Multi-channel enrollment agent · WhatsApp, Instagram & web · RAG pipeline behind FastAPI webhooks", current: true, last: false },
  { year: "Next", company: "?", role: "Open to full-time AI roles", detail: "Let's build something.", current: false, last: true },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-card-border">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm text-accent">03</span>
        <span className="readout">Experience</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-3 mb-12 leading-none">
        Timeline
      </h2>

      {/* Desktop: horizontal */}
      <div className="hidden md:block relative">
        <div aria-hidden className="absolute top-[7px] left-0 right-0 h-px bg-foreground/20" />
        <ol className="grid grid-cols-4">
          {timeline.map((t) => (
            <li key={t.year} className="relative pr-6 lg:pr-10">
              <span
                className={`block w-4 h-4 rounded-full relative z-10 mb-6 ${
                  t.last
                    ? "bg-background border-2 border-dashed border-accent"
                    : t.current
                      ? "bg-primary border-2 border-primary"
                      : "bg-background border-2 border-primary"
                }`}
              />
              <p className={`font-mono text-sm mb-1.5 ${t.last ? "text-accent" : "text-primary"}`}>{t.year}</p>
              <h3 className="font-display text-2xl text-foreground leading-tight">{t.company}</h3>
              <p className="text-sm text-foreground/70 mt-1">{t.role}</p>
              <p className="font-mono text-xs text-foreground/50 mt-3 leading-relaxed">{t.detail}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile: vertical */}
      <ol className="md:hidden relative border-l border-foreground/20 ml-2 pl-7 space-y-9">
        {timeline.map((t) => (
          <li key={t.year} className="relative">
            <span
              className={`absolute -left-[2.35rem] top-0.5 w-4 h-4 rounded-full ${
                t.last
                  ? "bg-background border-2 border-dashed border-accent"
                  : t.current
                    ? "bg-primary border-2 border-primary"
                    : "bg-background border-2 border-primary"
              }`}
            />
            <p className={`font-mono text-sm mb-1 ${t.last ? "text-accent" : "text-primary"}`}>{t.year}</p>
            <h3 className="font-display text-2xl text-foreground leading-tight">{t.company}</h3>
            <p className="text-sm text-foreground/70 mt-1">{t.role}</p>
            <p className="font-mono text-xs text-foreground/50 mt-2 leading-relaxed">{t.detail}</p>
          </li>
        ))}
      </ol>

      {/* Selected highlights */}
      <div className="mt-14">
        <p className="eyebrow mb-4">Selected highlights</p>
        <ul className="space-y-2.5 text-foreground/80">
          {[
            "Building a multi-channel enrollment agent across WhatsApp, Instagram and web.",
            "Integrating WhatsApp Business Cloud and Instagram Graph APIs over webhooks behind FastAPI.",
            "Shipped backend services behind 3 production applications serving 200+ users.",
            "Cut response latency 35% at 99.5% uptime by optimizing pipeline hot paths.",
            "Compressed release cycles 50% through automated validation and test pipelines.",
            "Built data cleaning and preprocessing pipelines over 1,000+ records.",
          ].map((h) => (
            <li key={h} className="flex items-baseline gap-3">
              <span className="text-accent font-mono text-sm">-</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footnote: education + certs as terse lines */}
      <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-6 text-sm">
        <div>
          <div className="flex items-baseline justify-between mb-3">
            <p className="eyebrow">Education</p>
            <span className="readout">CGPA</span>
          </div>
          <ul className="space-y-2 text-foreground/75">
            <li className="flex justify-between gap-4"><span>B.Tech, Electronics &amp; Communication</span><span className="font-mono text-foreground/50">8.90</span></li>
            <li className="flex justify-between gap-4"><span>Minor, AI &amp; Machine Learning</span><span className="font-mono text-foreground/50">9.67</span></li>
          </ul>
          <p className="font-mono text-xs text-foreground/45 mt-3">RCOEM, Nagpur · 2022 - 2026</p>
        </div>
        <div>
          <p className="eyebrow mb-3">Credentials</p>
          <ul className="space-y-2 text-foreground/75">
            <li>AWS Certified Cloud Practitioner - Oct 2025</li>
            <li>Finalist, Paytm × Sarvam × Logitech AI National Hackathon</li>
            <li>2nd Place, ByteSize Sage AI National Hackathon</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

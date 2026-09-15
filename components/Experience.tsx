"use client";

const timeline = [
  { year: "May - Jul 2025", company: "CFM, RCOEM", role: "Machine Learning Research Intern", detail: "Clinical classification model · 1,000+ health records · 87% accuracy · 30% faster development", current: false, last: false },
  { year: "Jan - Jun 2026", company: "AI LifeBOT", role: "AI Engineer Intern", detail: "3 production apps · 200+ users · 40% task efficiency · 35% lower latency · 99.5% uptime", current: false, last: false },
  { year: "Aug 2026 - Now", company: "Innovun Global", role: "AI Engineer Intern, Remote", detail: "Live RAG agent for Cruz Roja Mexicana · two platform APIs across 3 channels · one schema", current: true, last: false },
  { year: "Next", company: "?", role: "Open to full-time roles", detail: "Immediate joiner. Let's build something.", current: false, last: true },
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
            "Building the retrieval pipeline and prompts behind a live RAG agent for Cruz Roja Mexicana (Red Cross, Mexico).",
            "Unified two external platform APIs across 3 channels into one consistent schema behind a live service.",
            "Engineered 3 production applications for 200+ users, raising task efficiency 40%.",
            "Cut query and response latency 35% by profiling an inherited codebase across the full request path.",
            "Shipped 5+ features end to end, compressing delivery and validation cycles 50%.",
            "Automated pytest suites inside CI/CD pipelines and reviewed teammate code in an Agile team.",
            "Trained a clinical classification model on 1,000+ health records to 87% accuracy on held-out data.",
            "Raised result reliability 25% through cross-validation across multiple splits, not one sample.",
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

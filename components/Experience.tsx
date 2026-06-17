"use client";

const timeline = [
  { year: "2025", company: "CFM, RCOEM", role: "Machine Learning Intern", detail: "Sleep-disorder prediction · 87% accuracy · Python, Scikit-learn", last: false },
  { year: "2026", company: "AI LifeBOT", role: "AI Engineer Intern", detail: "3+ LLM apps & agents · 200+ users · RAG, LangChain", last: false },
  { year: "Next", company: "?", role: "Open to AI Engineering roles", detail: "Let's build something.", last: true },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-card-border">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm text-accent">03</span>
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/40">Experience</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-3 mb-12 leading-none">
        Timeline
      </h2>

      {/* Desktop: horizontal */}
      <div className="hidden md:block relative">
        <div aria-hidden className="absolute top-[7px] left-0 right-0 h-px bg-foreground/20" />
        <ol className="grid grid-cols-3">
          {timeline.map((t) => (
            <li key={t.year} className="relative pr-10">
              <span
                className={`block w-4 h-4 rounded-full relative z-10 mb-6 ${
                  t.last ? "bg-background border-2 border-dashed border-accent" : "bg-background border-2 border-primary"
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
                t.last ? "bg-background border-2 border-dashed border-accent" : "bg-background border-2 border-primary"
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
            "Deployed 3+ production LLM apps and autonomous agents to 200+ users.",
            "Cut inference latency through optimized retrieval and caching.",
            "Built a sleep-disorder ML model at 87% accuracy with rigorous validation.",
            "Designed AWS architecture - EC2, S3, IAM, Auto Scaling, Load Balancer.",
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
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/40">CGPA</span>
          </div>
          <ul className="space-y-2 text-foreground/75">
            <li className="flex justify-between gap-4"><span>B.Tech, Electronics &amp; Communication</span><span className="font-mono text-foreground/50">8.9</span></li>
            <li className="flex justify-between gap-4"><span>Minor, AI &amp; Machine Learning</span><span className="font-mono text-foreground/50">9.6</span></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">Credentials</p>
          <ul className="space-y-2 text-foreground/75">
            <li>AWS Certified Cloud Practitioner - 2025</li>
            <li>2nd Place, Bytesage AI National Hackathon</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

const notes = [
  { year: "2024", line: "Fell for the math behind ML.", sub: "An electronics undergrad who got pulled into models, gradients, and messy real data." },
  { year: "2025", line: "Built ML systems.", sub: "Data pipelines over 1,000+ records - preprocessing, validation, the boring parts that matter." },
  { year: "2026", line: "Shipped to production.", sub: "Six months at AI LifeBOT - backend services behind 3 production apps, 200+ users, 35% lower latency." },
  { year: "Now", line: "Graduated, and building at full speed.", sub: "B.Tech done. Building multi-channel agents and RAG pipelines at Innovun Global - open to full-time AI roles." },
];

const principles = [
  "Ship small, measure, iterate.",
  "Latency and reliability over leaderboard scores.",
  "Make retrieval honest; make agents finish.",
  "Document so the next person - or model - can pick it up.",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-card-border">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm text-accent">06</span>
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/40">About</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-3 mb-10 leading-none">
        Field Notes
      </h2>

      {/* Notebook: red margin rule + ruled rows */}
      <div className="panel relative overflow-hidden">
        <span aria-hidden className="absolute top-0 bottom-0 left-12 sm:left-16 w-px bg-primary/40" />
        <div className="pl-16 sm:pl-24 pr-6">
          {notes.map((n) => (
            <div key={n.year} className="flex flex-col sm:flex-row gap-1 sm:gap-6 py-5 border-b border-dashed border-card-border last:border-0">
              <span className="font-mono text-sm text-primary sm:w-16 shrink-0 sm:pt-1">{n.year}</span>
              <div>
                <p className="font-display text-xl sm:text-2xl text-foreground leading-snug">{n.line}</p>
                <p className="text-sm text-foreground/60 mt-1.5 leading-relaxed">{n.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How I work */}
      <div className="mt-10 grid sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/45 sm:pt-1">How I work</p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
          {principles.map((p) => (
            <li key={p} className="flex items-baseline gap-3 text-foreground/80">
              <span className="text-accent font-mono text-sm">-</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

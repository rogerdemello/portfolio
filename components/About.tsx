"use client";

const notes = [
  { year: "2025", line: "Built ML systems.", sub: "Sleep-disorder prediction at 87% accuracy — feature engineering, validation, the boring parts that matter." },
  { year: "2026", line: "Started building agents.", sub: "Shipped 3+ LLM apps and autonomous agents to 200+ users at AI LifeBOT." },
  { year: "Now", line: "Obsessed with making AI useful.", sub: "RAG that actually retrieves, agents that actually finish the task." },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-card-border">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm text-accent">01</span>
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
    </section>
  );
}

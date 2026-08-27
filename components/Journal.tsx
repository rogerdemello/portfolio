"use client";

const entries = [
  { date: "Jul 2026", title: "Let the model explain, not decide.", note: "A deterministic engine computes the answer; the LLM only says why. That's how the numbers stay auditable." },
  { date: "Jul 2026", title: "Offline-first is a feature.", note: "If it needs five services and an API key just to boot, nobody will ever run it." },
  { date: "Jun 2026", title: "Interfaces beat infrastructure.", note: "Put every backend behind a protocol and local swaps for distributed without touching the logic." },
  { date: "May 2026", title: "Why most RAG systems fail.", note: "It's retrieval quality, not model size, that decides whether the answer is useful." },
  { date: "Apr 2026", title: "Evals are the real moat.", note: "If you can't measure it, you can't improve it - agents especially." },
];

export default function Journal() {
  return (
    <section id="writing" className="py-20 md:py-28 border-t border-card-border">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm text-accent">04</span>
        <span className="readout">Writing</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-3 mb-3 leading-none">
        Engineering Journal
      </h2>
      <p className="text-foreground/60 mb-10 max-w-lg">Recent thoughts - short notes from building things.</p>

      <ul>
        {entries.map((e) => (
          <li key={e.title} className="group grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-6 py-6 border-t border-card-border">
            <span className="font-mono text-sm text-foreground/45 sm:pt-1.5">{e.date}</span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-foreground leading-tight group-hover:text-primary transition-colors">
                {e.title}
              </h3>
              <p className="text-sm text-foreground/60 mt-2 leading-relaxed max-w-xl">{e.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

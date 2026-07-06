"use client";
import SectionHeader from "@/components/SectionHeader";

const entries = [
  { date: "May 2026", title: "Why most RAG systems fail.", note: "It's retrieval quality, not model size, that decides whether the answer is useful." },
  { date: "Apr 2026", title: "Latency matters more than model size.", note: "Users feel p95 latency. They never see your benchmark scores." },
  { date: "Apr 2026", title: "Building reliable agents.", note: "Guardrails, evals, and knowing when the agent should stop." },
  { date: "Mar 2026", title: "Evals are the real moat.", note: "If you can't measure it, you can't improve it - agents especially." },
  { date: "Feb 2026", title: "Prompt engineering is spec-writing.", note: "Be precise about the contract, not clever with the words." },
];

export default function Journal() {
  return (
    <section id="writing" className="py-20 md:py-28 border-t border-card-border">
      <SectionHeader n="05" label="Comms-Log" title="Engineering Journal" sub="Recent transmissions - short notes from building things." />

      <ul>
        {entries.map((e, i) => (
          <li key={e.title} className="group grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-6 py-6 border-t border-card-border">
            <span className="font-mono text-sm text-foreground/45 sm:pt-1.5">{e.date}</span>
            <div>
              <h3 className="font-sans font-bold text-lg sm:text-xl text-foreground leading-snug group-hover:text-primary transition-colors">
                <span className="font-mono text-accent text-sm">TX-0{i + 1} </span>{e.title}
              </h3>
              <p className="text-sm text-foreground/60 mt-2 leading-relaxed max-w-xl">{e.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

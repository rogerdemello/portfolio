"use client";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

const entries = [
  {
    date: "Jul 2026",
    title: "Let the model explain, not decide.",
    note: "A deterministic engine computes the answer; the LLM only says why. That's how the numbers stay auditable.",
  },
  {
    date: "Jul 2026",
    title: "Offline-first is a feature.",
    note: "If it needs five services and an API key just to boot, nobody will ever run it.",
  },
  {
    date: "Jun 2026",
    title: "Interfaces beat infrastructure.",
    note: "Put every backend behind a protocol and local swaps for distributed without touching the logic.",
  },
  {
    date: "May 2026",
    title: "Why most RAG systems fail.",
    note: "It's retrieval quality, not model size, that decides whether the answer is useful.",
  },
  {
    date: "Apr 2026",
    title: "Evals are the real moat.",
    note: "If you can't measure it, you can't improve it - agents especially.",
  },
];

export default function Journal() {
  return (
    <Section id="writing">
      <SectionHeader
        eyebrow="Writing"
        title={<>Notes from building things.</>}
        description="Short opinions, earned the hard way."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {entries.map((e, i) => (
          <FadeIn key={e.title} delay={Math.min(i, 3) * 70} className="h-full">
            <article className="card card-hover flex h-full flex-col p-6">
              <span className="text-[0.8rem] font-bold uppercase tracking-wide text-ink-subtle">
                {e.date}
              </span>
              <h3 className="mt-3 font-display text-[1.2rem] font-extrabold leading-snug track-tight text-ink">
                {e.title}
              </h3>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-ink-muted">{e.note}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

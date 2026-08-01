"use client";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

const journey = [
  {
    year: "2024",
    title: "Fell for the math behind ML.",
    note: "An electronics undergrad who got pulled into models, gradients, and messy real data.",
  },
  {
    year: "2025",
    title: "Built ML systems.",
    note: "Data pipelines over 1,000+ records - preprocessing, validation, the boring parts that matter.",
  },
  {
    year: "2026",
    title: "Shipped to production.",
    note: "Six months at AI LifeBOT - backend services behind 3 production apps, 200+ users, 35% lower latency.",
  },
  {
    year: "Now",
    title: "Graduated, and building at full speed.",
    note: "Agentic systems, retrieval, and ML infrastructure - open to AI engineering roles.",
  },
];

const principles = [
  { title: "Ship small, measure, iterate.", note: "Small releases surface problems while they're still cheap." },
  { title: "Reliability over leaderboards.", note: "Latency and uptime matter more than a benchmark score." },
  { title: "Honest retrieval, finished agents.", note: "A confident wrong answer is worse than no answer." },
  { title: "Document for whoever's next.", note: "Including the model that picks it up after me." },
];

export default function About() {
  return (
    <Section id="about" tone="sunk">
      <SectionHeader
        eyebrow="About"
        title={<>How I got here, and how I work.</>}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Journey */}
        <FadeIn className="h-full">
        <div className="card h-full p-6 sm:p-7">
          <h3 className="font-display text-[1.1rem] font-bold text-ink">The short version</h3>

          <ol className="mt-6 space-y-6">
            {journey.map((j) => (
              <li key={j.year} className="relative flex gap-5">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-[0.78rem] font-extrabold ${
                    j.year === "Now"
                      ? "bg-accent text-white"
                      : "bg-paper-sunk text-ink-muted"
                  }`}
                >
                  {j.year}
                </span>
                <div className="pb-1">
                  <p className="font-display text-[1.02rem] font-bold text-ink">{j.title}</p>
                  <p className="mt-1.5 text-[0.93rem] leading-relaxed text-ink-muted">{j.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        </FadeIn>

        {/* Principles */}
        <FadeIn delay={80} className="h-full">
        <div className="card h-full p-6 sm:p-7">
          <h3 className="font-display text-[1.1rem] font-bold text-ink">How I work</h3>

          <ul className="mt-6 space-y-5">
            {principles.map((p, i) => (
              <li key={p.title} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-accent-soft font-display text-[0.8rem] font-extrabold text-accent-hover">
                  {i + 1}
                </span>
                <div>
                  <p className="font-display text-[1rem] font-bold text-ink">{p.title}</p>
                  <p className="mt-1 text-[0.93rem] leading-relaxed text-ink-muted">{p.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        </FadeIn>
      </div>
    </Section>
  );
}

"use client";
import { FaGraduationCap, FaAward, FaArrowRight } from "react-icons/fa6";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";

const timeline = [
  {
    initials: "AL",
    tint: "bg-[#F6ECEA] text-[#9C5544]",
    period: "Jan — Jun 2026",
    company: "AI LifeBOT",
    role: "AI Engineer Intern",
    points: [
      "Shipped backend services behind 3 production applications serving 200+ users.",
      "Cut response latency 35% at 99.5% uptime by optimizing pipeline hot paths.",
      "Compressed release cycles 50% through automated validation and test pipelines.",
    ],
    current: false,
  },
  {
    initials: "CF",
    tint: "bg-[#EEF1F7] text-[#41597D]",
    period: "May — Jul 2025",
    company: "CFM, RCOEM",
    role: "Machine Learning Research Intern",
    points: [
      "Built data cleaning and preprocessing pipelines over 1,000+ records.",
      "Cut development time 30% by standardising the validation workflow.",
    ],
    current: false,
  },
];

const education = [
  { title: "B.Tech, Electronics & Communication", meta: "RCOEM, Nagpur · 2022 — 2026", score: "8.90" },
  { title: "Minor, AI & Machine Learning", meta: "RCOEM, Nagpur", score: "9.67" },
];

const credentials = [
  { title: "AWS Certified Cloud Practitioner", meta: "Issued Oct 2025" },
  { title: "Finalist — Paytm × Sarvam × Logitech AI Hackathon", meta: "National" },
  { title: "2nd Place — ByteSize Sage AI Hackathon", meta: "National" },
];

export default function Experience() {
  return (
    <Section id="experience" tone="sunk">
      <SectionHeader
        eyebrow="Experience"
        title={<>Where I&rsquo;ve worked.</>}
        description="Two internships, both spent on things that ran in production rather than in a notebook."
      />

      <div className="grid gap-5">
        {timeline.map((t, i) => (
          <FadeIn key={t.company} delay={i * 80}>
          <div className="card card-hover p-6 sm:p-7">
            <div className="flex flex-wrap items-center gap-4">
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-sm font-display text-sm font-extrabold ${t.tint}`}
              >
                {t.initials}
              </span>

              <div className="min-w-0">
                <h3 className="font-display text-[1.25rem] font-extrabold track-tight text-ink">
                  {t.company}
                </h3>
                <p className="text-[0.95rem] text-ink-muted">{t.role}</p>
              </div>

              <span className="ml-auto rounded-full border border-edge bg-paper px-3 py-1.5 text-[0.8rem] font-semibold text-ink-subtle">
                {t.period}
              </span>
            </div>

            <ul className="mt-6 space-y-2.5 border-t border-edge pt-5">
              {t.points.map((p) => (
                <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-muted">
                  <FaArrowRight size={11} className="mt-1.5 shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          </FadeIn>
        ))}

        {/* Open slot - reads as the natural next card rather than a dead end. */}
        <FadeIn delay={160}>
        <div className="rounded-[var(--r)] border border-dashed border-edge-strong p-6 text-center sm:p-8">
          <p className="font-display text-[1.15rem] font-bold text-ink">
            Open to AI engineering roles
          </p>
          <p className="mx-auto mt-2 max-w-md text-[0.95rem] text-ink-muted">
            Graduated and building at full speed. If you&rsquo;re hiring for agents,
            retrieval or ML infrastructure, let&rsquo;s talk.
          </p>
          <a href="#contact" className="btn mt-5">
            Get in touch
            <FaArrowRight size={13} />
          </a>
        </div>
        </FadeIn>
      </div>

      {/* Education + credentials */}
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <FadeIn className="h-full">
        <div className="card h-full p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-[#EDF2EC] text-[#3F6B4F]">
              <FaGraduationCap size={15} />
            </span>
            <h3 className="font-display text-[1.05rem] font-bold text-ink">Education</h3>
          </div>

          <ul className="mt-5 space-y-4">
            {education.map((e) => (
              <li key={e.title} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.95rem] font-semibold text-ink">{e.title}</p>
                  <p className="mt-0.5 text-[0.85rem] text-ink-subtle">{e.meta}</p>
                </div>
                <span className="shrink-0 rounded-full bg-paper-sunk px-2.5 py-1 font-display text-[0.85rem] font-bold text-ink">
                  {e.score}
                </span>
              </li>
            ))}
          </ul>
        </div>
        </FadeIn>

        <FadeIn delay={80} className="h-full">
        <div className="card h-full p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-[#F7EFE6] text-[#8A6238]">
              <FaAward size={15} />
            </span>
            <h3 className="font-display text-[1.05rem] font-bold text-ink">Credentials</h3>
          </div>

          <ul className="mt-5 space-y-4">
            {credentials.map((c) => (
              <li key={c.title}>
                <p className="text-[0.95rem] font-semibold text-ink">{c.title}</p>
                <p className="mt-0.5 text-[0.85rem] text-ink-subtle">{c.meta}</p>
              </li>
            ))}
          </ul>
        </div>
        </FadeIn>
      </div>
    </Section>
  );
}

"use client";
import { FaDownload } from "react-icons/fa";

const exploring = [
  { label: "Autonomous Agents", note: "tool-using, goal-driven" },
  { label: "Retrieval Systems", note: "RAG that actually retrieves" },
  { label: "Machine Learning", note: "models that generalize" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center py-28 overflow-hidden">
      {/* Oversized faint glyph for editorial depth */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-10 -right-16 font-display text-foreground/[0.04] leading-none text-[22rem] hidden sm:block"
      >
        R
      </span>

      <div className="relative">
        {/* Availability */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-secondary mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          Available for AI Engineering roles
        </div>

        <h1 className="font-display text-foreground leading-[0.9] tracking-tight text-6xl sm:text-7xl lg:text-8xl">
          Roger Demello
        </h1>

        <p className="font-display italic text-foreground/85 mt-5 text-2xl sm:text-3xl lg:text-[2.6rem] leading-[1.12] max-w-2xl">
          Building systems that{" "}
          <span className="text-primary not-italic font-display">think</span>,{" "}
          <span className="text-primary not-italic font-display">reason</span> and{" "}
          <span className="text-primary not-italic font-display">ship</span>.
        </p>

        <p className="mt-7 text-base sm:text-lg text-foreground/65 max-w-xl leading-relaxed">
          AI Engineer focused on agents, retrieval, and real-world systems —
          reasoning, retrieving, automating, and scaling.
        </p>

        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Roger_Demello_Resume.pdf"
          className="btn-solid mt-8 group"
        >
          <FaDownload size={13} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          Download résumé
        </a>

        {/* Currently exploring */}
        <div className="mt-12 pt-8 border-t border-card-border grid sm:grid-cols-[auto_1fr] gap-x-12 gap-y-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/40 pt-2">
            Currently<br className="hidden sm:block" /> exploring
          </p>
          <ul className="space-y-3">
            {exploring.map((item) => (
              <li key={item.label} className="group flex items-baseline gap-3.5">
                <span className="font-mono text-secondary text-sm pt-0.5">↳</span>
                <span className="font-display text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors duration-200">
                  {item.label}
                </span>
                <span className="hidden sm:inline font-mono text-xs text-foreground/40 self-center">
                  — {item.note}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex items-center gap-2 font-mono text-sm text-foreground/50">
          <span className="text-accent">◆</span> Nagpur, India
        </div>
      </div>
    </section>
  );
}

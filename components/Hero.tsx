"use client";
import { FaDownload } from "react-icons/fa";

const Building = [
  { label: "Autonomous Agents", note: "tool-using, goal-driven" },
  { label: "Retrieval Systems", note: "RAG that actually retrieves" },
  { label: "ML Infrastructure", note: "training through to serving" },
];

// Every figure here is carried verbatim from the CV.
const metrics = [
  { value: "3", label: "production apps" },
  { value: "200+", label: "users served" },
  { value: "99.5%", label: "uptime" },
  { value: "35%", label: "lower latency" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center py-16 overflow-hidden">
      <div className="relative">
        {/* Status readout */}
        <p className="font-mono text-xs text-secondary leading-tight mb-6">
          AI Engineer Intern at Innovun Global - immediate joiner, open to full-time roles
        </p>

        <h1 className="font-display text-foreground leading-[0.9] tracking-tight text-6xl sm:text-7xl lg:text-8xl">
          Roger Demello
        </h1>

        {/* Role readout + hairline */}
        <div className="mt-5 flex items-center gap-4">
          <span className="font-mono text-sm uppercase tracking-[0.22em] text-primary whitespace-nowrap">
            Software Engineer, AI/ML
          </span>
          <span aria-hidden className="h-px flex-1 bg-card-border" />
          <span className="hidden sm:inline font-mono text-xs text-foreground/40 whitespace-nowrap">
            agents · retrieval · ml infra
          </span>
        </div>

        <p className="font-display italic text-foreground/85 mt-5 text-2xl sm:text-3xl lg:text-[2.4rem] leading-[1.14] max-w-2xl">
          Building systems that{" "}
          <span className="text-primary not-italic font-display">think</span>,{" "}
          <span className="text-primary not-italic font-display">reason</span> and{" "}
          <span className="text-primary not-italic font-display">ship</span>.
        </p>

        <p className="mt-4 text-base text-foreground/60 max-w-xl leading-relaxed">
          Software engineer shipping machine learning and generative AI systems
          end to end - Python and TypeScript services over PostgreSQL, Docker
          delivery through CI/CD, shipped to 200+ users at 99.5% uptime.
        </p>

        {/* Metric readout. dt precedes dd for valid <dl> semantics; .metric
            reverses them visually so the figure sits above its label. */}
        <dl className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl">
          {metrics.map((m) => (
            <div key={m.label} className="metric">
              <dt className="metric-label">{m.label}</dt>
              <dd className="metric-value">{m.value}</dd>
            </div>
          ))}
        </dl>

        <a
          href="/Roger_Demello_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Roger_Demello_CV.pdf"
          className="btn-solid mt-6 group"
        >
          <FaDownload size={12} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          Download CV
        </a>

        {/* Currently Building */}
        <div className="mt-10 pt-8 border-t border-card-border grid sm:grid-cols-[auto_1fr] gap-x-12 gap-y-5">
          <p className="readout pt-2">
            Currently<br className="hidden sm:block" /> Building
          </p>
          <ul className="space-y-3">
            {Building.map((item) => (
              <li key={item.label} className="group flex items-baseline gap-3.5">
                <span className="font-mono text-primary text-sm pt-0.5">↳</span>
                <span className="font-display text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors duration-200">
                  {item.label}
                </span>
                <span className="hidden sm:inline font-mono text-xs text-foreground/35 self-center">
                  - {item.note}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex items-center gap-2 font-mono text-sm text-foreground/45">
          <span className="text-accent">◆</span> Nagpur, India · fully remote, any timezone - open to relocating internationally
        </div>
      </div>
    </section>
  );
}

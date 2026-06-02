"use client";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Executive Email Copilot",
    problem: "Executives spend hours triaging email.",
    approach: ["Multi-agent architecture.", "RAG memory.", "Tool calling."],
    result: "20% reduction in irrelevant responses.",
    stack: "Python · FastAPI · LangChain · OpenAI API · Vector DBs · PostgreSQL",
    links: [{ label: "Source", href: "https://github.com/rogerdemello/autonomous-executive-email-copilot" }],
  },
  {
    title: "DealSentry - Proposal Guard",
    problem: "Enterprises review proposals for compliance by hand - slow and inconsistent.",
    approach: ["Rule engine + AI risk scoring.", "PDF / DOCX ingestion.", "Approval workflows + audit trails.", "CRM integrations."],
    result: "Less manual review, faster compliance sign-off.",
    stack: "React · TypeScript · Node.js · PostgreSQL · Azure OpenAI",
    links: [{ label: "Source", href: "https://github.com/rogerdemello/DealSentry/" }],
  },
  {
    title: "AI Marketing Agent",
    problem: "No way to engage every customer in real time across WhatsApp, Instagram, and Messenger.",
    approach: ["AI agents for responses + follow-ups.", "Async multi-channel backend."],
    result: "Higher engagement efficiency, less manual work.",
    stack: "Python · MongoDB · OpenAI API · FastAPI · Messaging APIs",
    links: [{ label: "Source", href: "https://github.com/rogerdemello/contentflow-ai" }],
  },
];

function Row({ label, color, children }: { label: string; color: string; children: React.ReactNode }) {
  return (
    <div className="grid sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4">
      <dt className={`font-mono text-xs uppercase tracking-[0.16em] pt-1 ${color}`}>{label}</dt>
      <dd className="text-foreground/85">{children}</dd>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-card-border">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm text-accent">02</span>
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/40">Projects</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-3 mb-4 leading-none">
        Case Studies
      </h2>

      <div>
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group grid sm:grid-cols-[3.5rem_1fr] gap-x-6 py-12 border-t border-card-border"
          >
            <span className="font-mono text-sm text-foreground/35 pt-2 group-hover:text-accent transition-colors duration-200">[0{i + 1}]</span>
            <div>
              <h3 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mb-6 group-hover:text-primary transition-colors duration-200">{p.title}</h3>

              <dl className="space-y-4">
                <Row label="Problem" color="text-foreground/45">{p.problem}</Row>
                <Row label="Approach" color="text-secondary">
                  <span className="flex flex-wrap gap-x-2">
                    {p.approach.map((a) => (
                      <span key={a}>{a}</span>
                    ))}
                  </span>
                </Row>
                <Row label="Result" color="text-primary">
                  <span className="font-medium">{p.result}</span>
                </Row>
                <Row label="Stack" color="text-foreground/45">
                  <span className="font-mono text-xs text-foreground/60">{p.stack}</span>
                </Row>
              </dl>

              <div className="mt-6 flex flex-wrap gap-6">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    <FaArrowRight size={11} /> {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

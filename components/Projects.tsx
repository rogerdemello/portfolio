"use client";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "@/components/SectionHeader";

const projects = [
  {
    title: "Executive Email Copilot",
    problem: "No reproducible way to benchmark autonomous email-triage agents.",
    approach: ["Deterministic RL-style inbox simulation.", "Baseline, perturbation, LLM & hybrid policy modes.", "Bounded, numerically stable grading metrics."],
    result: "Honest benchmarks on classification, prioritization & full inbox management.",
    stack: "Python · FastAPI · Pydantic · SQLAlchemy · SciPy · React · OpenAI API",
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/autonomous-executive-email-copilot" }],
  },
  {
    title: "SentinelOps",
    problem: "Ops teams react to incidents after they've already caused damage.",
    approach: ["Anomaly detection with IsolationForest.", "Multi-agent root-cause analysis.", "Dependency-graph impact modeling.", "Human-approved self-healing."],
    result: "Shifts operations from reactive firefighting to proactive prevention.",
    stack: "Python · FastAPI · scikit-learn · statsmodels · NetworkX · React · Azure OpenAI",
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/sentinel-ops" }],
  },
  {
    title: "Shadow GTM",
    problem: "GTM teams can't watch every competitor move in real time.",
    approach: ["Gemini-grounded competitor page scans.", "Diffs signals against prior snapshots.", "Ranked, source-cited revenue plays.", "Multi-tenant autonomous scheduling."],
    result: "Live, explainable competitive intelligence grounded in verbatim evidence.",
    stack: "Next.js · TypeScript · Gemini API · Supabase · Stripe · Recharts · Zod",
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/shadow-gtm" }],
  },
  {
    title: "contentflow-ai",
    problem: "Enterprise content cycles stall on manual compliance and localization.",
    approach: ["Multi-agent draft → comply → localize → publish.", "Policy-aware RAG with auto-remediation.", "Human-in-the-loop approval gates."],
    result: "Channel-ready output with audit logging; ~₹2.1 Cr/yr modeled savings.",
    stack: "Python · LangGraph · scikit-learn RAG · FastAPI · Streamlit · Azure OpenAI",
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/contentflow-ai" }],
  },
  {
    title: "DealSentry",
    problem: "Enterprises review proposals for compliance by hand - slow and inconsistent.",
    approach: ["Automated compliance rules engine + risk scoring.", "Document upload with auto-parsing.", "Approval routing with SLA tracking.", "Salesforce / HubSpot / Gmail integrations."],
    result: "Faster, more consistent sign-off; risky terms flagged before execution.",
    stack: "React · TypeScript · Express · Prisma · PostgreSQL · OpenAI API · Puppeteer",
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/DealSentry" }],
  },
  {
    title: "Engram",
    problem: "AI memory is locked inside apps with no user control or auditability.",
    approach: ["User-owned, verifiable memory layer on Sui.", "On-chain consent grants / revokes.", "Seal-encrypted Walrus storage.", "Receipts citing the exact memories used."],
    result: "Portable, auditable AI memory with real-time on-chain consent.",
    stack: "Next.js · TypeScript · Sui Move · Walrus · Seal · Azure OpenAI · Playwright",
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/engram" }],
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
      <SectionHeader n="02" label="Deployed Systems" title="Projects" sub="Active missions - problem, approach, result." />

      <div>
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group grid sm:grid-cols-[3.5rem_1fr] gap-x-6 py-12 border-t border-card-border"
          >
            <span className="font-mono text-sm text-foreground/35 pt-2 group-hover:text-accent transition-colors duration-200">[0{i + 1}]</span>
            <div>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-foreground leading-tight mb-6 group-hover:text-primary transition-colors duration-200">
                {p.title}
              </h3>

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
                    <FaGithub size={13} /> {l.label}
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

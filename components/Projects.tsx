"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// The first three are the projects carried on the CV, in CV order.
const projects = [
  {
    title: "music-recsys",
    problem: "Recommender demos rarely survive contact with production constraints.",
    approach: ["Two-tower embeddings → ANN retrieval → LightGBM ranker.", "Retrain, embedding-refresh and candidate-precompute jobs against an MLflow registry.", "Simulated A/B tests across ranking variants, with Prometheus and Grafana on model and serving metrics.", "Cache, event bus, feature store and ANN index each behind an interface."],
    result: "Runs CPU-only with zero external services; scales to Kafka and Kubernetes by flipping one config value.",
    stack: "Python · PyTorch · LightGBM · FastAPI · MLflow · Redis · Kafka · Prometheus · Grafana · Docker",
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/music-recsys" }],
  },
  {
    title: "sentinelops",
    problem: "Incidents get diagnosed after they page someone - by then the service that actually caused it is three hops upstream.",
    approach: ["IsolationForest anomaly detection over service telemetry.", "Service dependencies modelled as a NetworkX graph.", "Slack and PagerDuty alerting with simulated self-healing.", "Optional hookup to real Kubernetes and webhooks without changing core service contracts."],
    result: "Names the dependency chain behind an incident before the page fires, with a structured audit log per action.",
    stack: "Python · FastAPI · Scikit-learn · statsmodels · NetworkX · React · Vite · TypeScript · Supabase",
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/sentinel-ops" }],
  },
  {
    title: "DealSentry",
    problem: "Enterprises review proposals for compliance by hand - slow, inconsistent, expensive.",
    approach: ["Rules engine scoring pricing, legal and structural risk before signature rather than after.", "Document upload, parsing and PDF generation.", "Approval routing with SLA tracking, audit logging and RBAC.", "Salesforce, HubSpot, Gmail and Google Drive integrations."],
    result: "Risky terms surface before anything gets signed, and every review step stays attributable and time-bound.",
    stack: "React · TypeScript · Express · Prisma · PostgreSQL · Node.js · OpenAI API · Puppeteer",
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/DealSentry" },
      { label: "Live", href: "https://dealsentry.onrender.com" },
    ],
  },
  {
    title: "Shadow GTM",
    problem: "GTM teams can't watch every competitor move in real time.",
    approach: ["Gemini-grounded competitor page scans.", "Diffs signals against prior snapshots.", "Ranked, source-cited revenue plays.", "Multi-tenant autonomous scheduling."],
    result: "Live, explainable competitive intelligence grounded in verbatim evidence.",
    stack: "Next.js · TypeScript · Gemini API · Supabase · Stripe · Recharts · Zod",
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/shadow-gtm" },
      { label: "Live", href: "https://shadow-gtm.vercel.app" },
    ],
  },
  {
    title: "ML Guardian",
    problem: "ML pipelines fail silently - stale upstreams and renamed columns only surface once a KPI moves.",
    approach: ["Scan → score → incident → write-back loop.", "Freshness, null-rate and schema-drift detection.", "Findings written back to DataHub as tags and glossary terms.", "Generates fail-fast remediation code."],
    result: "Names the exact downstream models and dashboards at risk, before the damage shows up.",
    stack: "Python · FastAPI · MCP · DataHub · Gemini · GitHub Actions",
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/ml-guardian" }],
  },
  {
    title: "Engram",
    problem: "AI memory is locked inside apps with no user control or auditability.",
    approach: ["User-owned, verifiable memory layer on Sui.", "On-chain consent grants / revokes.", "Seal-encrypted Walrus storage.", "Receipts citing the exact memories used."],
    result: "Portable, auditable AI memory with real-time on-chain consent.",
    stack: "Next.js · TypeScript · Sui Move · Walrus · Seal · Azure OpenAI · Playwright",
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/engram" },
      { label: "Live", href: "https://engram-alpha-sage.vercel.app" },
    ],
  },
  {
    title: "Executive Email Copilot",
    problem: "No reproducible way to benchmark autonomous email-triage agents.",
    approach: ["Deterministic RL-style inbox simulation.", "Four policy modes - baseline, perturbation, LLM, hybrid.", "Bounded, numerically stable grading metrics.", "Telemetry, approval workflows and episode replay."],
    result: "Honest benchmarks on classification, prioritization and full inbox management.",
    stack: "Python · FastAPI · Pydantic · SQLAlchemy · SciPy · React · OpenAI API",
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/autonomous-executive-email-copilot" },
      { label: "Live", href: "https://exec-email-copilot.onrender.com" },
    ],
  },
  {
    title: "SplitChain",
    problem: "Settling a group bill onchain normally costs one transaction per debt.",
    approach: ["Vision LLM reads receipt line items in any currency.", "Tap who had what; the split is recorded onchain.", "Balances simplified to the fewest transfers needed.", "USD-denominated entry via a Pyth MON/USD feed."],
    result: "One-tap settleMany clears every debt in a single transaction on Monad.",
    stack: "Next.js · TypeScript · Solidity · Monad · Pyth · Express · Tailwind CSS",
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/splitchain" },
      { label: "Live", href: "https://splitchain.onrender.com" },
    ],
  },
  {
    title: "BharatOS",
    problem: "India's small businesses get voice APIs, not an AI that reasons about the business.",
    approach: ["Five agents - CFO, Inventory, Marketing, Risk, Growth.", "Business Twin for historical recall.", "Sarvam-105B reasoning over real transaction data.", "Full voice loop - Saaras STT, Bulbul TTS, Mayura translate."],
    result: "A multilingual AI co-founder for kirana stores, with a network-proof demo mode.",
    stack: "TypeScript · Node.js · Express · Sarvam-105B · Web Audio API · Tailwind CSS",
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/bharatos" }],
  },
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid sm:grid-cols-[5.5rem_1fr] gap-1 sm:gap-5">
      <dt className="readout sm:pt-1">{label}</dt>
      <dd className="text-foreground/80 leading-relaxed max-w-2xl">{children}</dd>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-card-border">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm text-accent">01</span>
        <span className="readout">Projects</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-3 mb-2 leading-none">
        Projects
      </h2>
      <p className="font-mono text-xs text-foreground/40 mb-4">
        {projects.length} shipped · ordered by what a recruiter can verify fastest
      </p>

      <div>
        {projects.map((p, i) => (
          <article key={p.title} className="group py-11 border-t border-card-border">
            {/* Header: index + title on the left, actions on the right */}
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
              <h3 className="flex items-baseline gap-3.5 min-w-0">
                <span className="font-mono text-sm text-accent/70 group-hover:text-accent transition-colors duration-200 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-3xl sm:text-4xl text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                  {p.title}
                </span>
              </h3>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    {l.label === "Live" ? <FaExternalLinkAlt size={11} /> : <FaGithub size={12} />}
                    [{l.label.toLowerCase()}]
                  </a>
                ))}
              </div>
            </div>

            <div aria-hidden className="h-px bg-card-border my-6 group-hover:bg-primary/25 transition-colors duration-300" />

            <dl className="space-y-4">
              <Row label="Problem">{p.problem}</Row>
              <Row label="Approach">
                <ul className="space-y-1.5">
                  {p.approach.map((a) => (
                    <li key={a} className="flex items-baseline gap-2.5">
                      <span aria-hidden className="font-mono text-xs text-primary/70 shrink-0">+</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </Row>
              <Row label="Result">
                <span className="text-foreground font-medium">{p.result}</span>
              </Row>
              <Row label="Stack">
                <span className="font-mono text-xs text-foreground/50">{p.stack}</span>
              </Row>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

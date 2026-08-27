"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
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
    title: "music-recsys",
    problem: "Recommender demos rarely survive contact with production constraints.",
    approach: ["Two-tower embeddings → ANN retrieval → LightGBM ranker.", "Event bus, feature updater, online store, model registry.", "Retrain, embedding-refresh and candidate-precompute jobs.", "Every backend behind a Protocol - local or networked."],
    result: "Runs CPU-only with zero external services; scales to Kafka and Kubernetes by flipping one config value.",
    stack: "Python · PyTorch · LightGBM · FastAPI · MLflow · Redis · Kafka · Prometheus",
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/music-recsys" }],
  },
  {
    title: "DealSentry",
    problem: "Enterprises review proposals for compliance by hand - slow, inconsistent, expensive.",
    approach: ["Rules engine paired with AI risk scoring.", "DOCX / PDF ingestion with automated parsing.", "Approval routing with SLA tracking and RBAC.", "Salesforce, HubSpot and Gmail integrations."],
    result: "Cut manual review effort ~70%; risky terms surface before anything gets signed.",
    stack: "React · TypeScript · Express · Prisma · PostgreSQL · Azure OpenAI · Puppeteer",
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/DealSentry" },
      { label: "Live", href: "https://dealsentry.onrender.com" },
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
        <span className="font-mono text-sm text-accent">01</span>
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/40">Projects</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-3 mb-4 leading-none">
        Projects
      </h2>

      <div>
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group grid sm:grid-cols-[3.5rem_1fr] gap-x-6 py-12 border-t border-card-border"
          >
            <span className="font-mono text-sm text-foreground/35 pt-2 group-hover:text-accent transition-colors duration-200">
              [{String(i + 1).padStart(2, "0")}]
            </span>
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
                    {l.label === "Live" ? <FaExternalLinkAlt size={12} /> : <FaGithub size={13} />} {l.label}
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

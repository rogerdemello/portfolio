"use client";
import { useId, useState } from "react";
import {
  FaGithub, FaArrowUpRightFromSquare, FaCheck, FaChevronDown,
} from "react-icons/fa6";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { techIcon } from "@/lib/techIcons";

type Project = {
  title: string;
  tagline: string;
  problem: string;
  approach: string[];
  result: string;
  stack: string[];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "ML Guardian",
    tagline: "Data-quality sentinel for ML pipelines",
    problem:
      "ML pipelines fail silently - stale upstreams and renamed columns only surface once a KPI moves.",
    approach: [
      "Scan → score → incident → write-back loop.",
      "Freshness, null-rate and schema-drift detection.",
      "Findings written back to DataHub as tags and glossary terms.",
      "Generates fail-fast remediation code.",
    ],
    result:
      "Names the exact downstream models and dashboards at risk, before the damage shows up.",
    stack: ["Python", "FastAPI", "MCP", "DataHub", "Gemini", "GitHub Actions"],
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/ml-guardian" }],
  },
  {
    title: "music-recsys",
    tagline: "Production-shaped recommender, CPU-only",
    problem: "Recommender demos rarely survive contact with production constraints.",
    approach: [
      "Two-tower embeddings → ANN retrieval → LightGBM ranker.",
      "Event bus, feature updater, online store, model registry.",
      "Retrain, embedding-refresh and candidate-precompute jobs.",
      "Every backend behind a Protocol - local or networked.",
    ],
    result:
      "Runs CPU-only with zero external services; scales to Kafka and Kubernetes by flipping one config value.",
    stack: ["Python", "PyTorch", "LightGBM", "FastAPI", "MLflow", "Redis", "Kafka", "Prometheus"],
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/music-recsys" }],
  },
  {
    title: "Executive Email Copilot",
    tagline: "Benchmark harness for triage agents",
    problem: "No reproducible way to benchmark autonomous email-triage agents.",
    approach: [
      "Deterministic RL-style inbox simulation.",
      "Four policy modes - baseline, perturbation, LLM, hybrid.",
      "Bounded, numerically stable grading metrics.",
      "Telemetry, approval workflows and episode replay.",
    ],
    result: "Honest benchmarks on classification, prioritization and full inbox management.",
    stack: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "SciPy", "React", "OpenAI API"],
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/autonomous-executive-email-copilot" },
      { label: "Live", href: "https://exec-email-copilot.onrender.com" },
    ],
  },
  {
    title: "DealSentry",
    tagline: "Automated proposal compliance review",
    problem:
      "Enterprises review proposals for compliance by hand - slow, inconsistent, expensive.",
    approach: [
      "Rules engine paired with AI risk scoring.",
      "DOCX / PDF ingestion with automated parsing.",
      "Approval routing with SLA tracking and RBAC.",
      "Salesforce, HubSpot and Gmail integrations.",
    ],
    result: "Cut manual review effort ~70%; risky terms surface before anything gets signed.",
    stack: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Azure OpenAI", "Puppeteer"],
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/DealSentry" },
      { label: "Live", href: "https://dealsentry.onrender.com" },
    ],
  },
  {
    title: "BharatOS",
    tagline: "Multilingual AI co-founder for kirana stores",
    problem: "India's small businesses get voice APIs, not an AI that reasons about the business.",
    approach: [
      "Five agents - CFO, Inventory, Marketing, Risk, Growth.",
      "Business Twin for historical recall.",
      "Sarvam-105B reasoning over real transaction data.",
      "Full voice loop - Saaras STT, Bulbul TTS, Mayura translate.",
    ],
    result: "A multilingual AI co-founder for kirana stores, with a network-proof demo mode.",
    stack: ["TypeScript", "Node.js", "Express", "Sarvam-105B", "Web Audio API", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/bharatos" }],
  },
  {
    title: "SplitChain",
    tagline: "One-transaction group bill settlement",
    problem: "Settling a group bill onchain normally costs one transaction per debt.",
    approach: [
      "Vision LLM reads receipt line items in any currency.",
      "Tap who had what; the split is recorded onchain.",
      "Balances simplified to the fewest transfers needed.",
      "USD-denominated entry via a Pyth MON/USD feed.",
    ],
    result: "One-tap settleMany clears every debt in a single transaction on Monad.",
    stack: ["Next.js", "TypeScript", "Solidity", "Monad", "Pyth", "Express", "Tailwind CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/splitchain" },
      { label: "Live", href: "https://splitchain.onrender.com" },
    ],
  },
  {
    title: "Engram",
    tagline: "User-owned, auditable AI memory",
    problem: "AI memory is locked inside apps with no user control or auditability.",
    approach: [
      "User-owned, verifiable memory layer on Sui.",
      "On-chain consent grants / revokes.",
      "Seal-encrypted Walrus storage.",
      "Receipts citing the exact memories used.",
    ],
    result: "Portable, auditable AI memory with real-time on-chain consent.",
    stack: ["Next.js", "TypeScript", "Sui Move", "Walrus", "Seal", "Azure OpenAI", "Playwright"],
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/engram" },
      { label: "Live", href: "https://engram-alpha-sage.vercel.app" },
    ],
  },
  {
    title: "Shadow GTM",
    tagline: "Grounded competitive intelligence",
    problem: "GTM teams can't watch every competitor move in real time.",
    approach: [
      "Gemini-grounded competitor page scans.",
      "Diffs signals against prior snapshots.",
      "Ranked, source-cited revenue plays.",
      "Multi-tenant autonomous scheduling.",
    ],
    result: "Live, explainable competitive intelligence grounded in verbatim evidence.",
    stack: ["Next.js", "TypeScript", "Gemini API", "Supabase", "Stripe", "Recharts", "Zod"],
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/shadow-gtm" },
      { label: "Live", href: "https://shadow-gtm.vercel.app" },
    ],
  },
];

/* Muted cover tints, cycled across the grid. Desaturated on purpose - candy
   colours would fight the coral accent. */
const TINTS = [
  "bg-[#EDF2EC]",
  "bg-[#EEF1F7]",
  "bg-[#F7EFE6]",
  "bg-[#F6ECEA]",
  "bg-[#EFEDF6]",
  "bg-[#E8F1F0]",
];

// The first two get a wide, two-column treatment.
const FEATURED_COUNT = 2;

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const featured = index < FEATURED_COUNT;
  const live = p.links.find((l) => l.label === "Live");

  // Only stack entries with a real logo make it onto the cover.
  const coverIcons = p.stack
    .map((name) => ({ name, Icon: techIcon(name) }))
    .filter((s): s is { name: string; Icon: NonNullable<ReturnType<typeof techIcon>> } =>
      Boolean(s.Icon)
    )
    .slice(0, featured ? 6 : 4);

  return (
    <article
      className={`card card-hover flex h-full overflow-hidden ${
        featured ? "flex-col lg:flex-row" : "flex-col"
      }`}
    >
      {/* Cover art built from the project's own toolchain. */}
      <div
        className={`relative shrink-0 ${TINTS[index % TINTS.length]} ${
          featured
            ? "flex flex-col justify-between p-6 lg:w-[34%]"
            : "flex items-end p-5 pt-16"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="font-display text-sm font-extrabold text-ink/25">
            {String(index + 1).padStart(2, "0")}
          </span>

          {live && (
            <span className="flex items-center gap-1.5 rounded-full bg-card/80 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-go">
              <span className="h-1.5 w-1.5 rounded-full bg-go animate-pulse-dot" />
              Live
            </span>
          )}
        </div>

        {featured && (
          <p className="my-6 font-display text-[1.05rem] font-bold leading-snug text-ink/70">
            {p.tagline}
          </p>
        )}

        <div className={`flex flex-wrap gap-2.5 ${featured ? "" : "absolute bottom-5 left-5"}`}>
          {coverIcons.map(({ name, Icon }) => (
            <span
              key={name}
              title={name}
              className="grid h-11 w-11 place-items-center rounded-sm bg-card/90 text-ink-muted shadow-[var(--lift-sm)]"
            >
              <Icon size={19} />
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3
          className={`font-display font-extrabold track-tight text-ink ${
            featured ? "text-[1.7rem]" : "text-[1.35rem]"
          }`}
        >
          {p.title}
        </h3>

        {!featured && (
          <p className="mt-1 text-[0.88rem] font-semibold text-ink-subtle">{p.tagline}</p>
        )}

        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{p.problem}</p>

        <div className="mt-5 flex gap-3 rounded-sm bg-accent-soft/60 p-4">
          <FaCheck size={12} className="mt-1 shrink-0 text-accent-hover" />
          <p className="text-[0.93rem] font-medium leading-relaxed text-ink">{p.result}</p>
        </div>

        {/* Approach, collapsed by default - eight cards of open bullet lists is
            what made this section feel like a wall of text. */}
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-5 flex w-fit items-center gap-2 text-[0.88rem] font-bold text-ink transition-colors hover:text-accent-hover"
        >
          How it works
          <FaChevronDown
            size={10}
            className={`transition-transform duration-300 ease-smooth ${open ? "rotate-180" : ""}`}
          />
        </button>

        <div
          id={panelId}
          className={`grid transition-all duration-300 ease-smooth ${
            open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="space-y-2">
              {p.approach.map((a) => (
                <li
                  key={a}
                  className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-muted"
                >
                  <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-ink-subtle" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stack + links, pushed down so cards align on a row */}
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="pill !px-2.5 !py-1 !text-[0.76rem]">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-5 border-t border-edge pt-5">
            {p.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-go"
              >
                {l.label === "Live" ? (
                  <FaArrowUpRightFromSquare size={12} />
                ) : (
                  <FaGithub size={14} />
                )}
                {l.label === "Live" ? "View live" : "Source"}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" tone="sunk">
      <SectionHeader
        eyebrow="Selected work"
        title={<>Things I&rsquo;ve designed, built and shipped.</>}
        description="Eight systems taken end to end - the problem behind each one, how it works, and what it actually does."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <FadeIn
            key={p.title}
            delay={Math.min(i, 3) * 70}
            className={i < FEATURED_COUNT ? "lg:col-span-2" : "h-full"}
          >
            <ProjectCard p={p} index={i} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

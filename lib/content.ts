/*
 * Single source of truth for every word on the site.
 * Components import from here - edit copy in this file, not in the JSX.
 * Figures are carried verbatim from the previous version of the portfolio.
 */

export const profile = {
  name: "Roger Demello",
  fullName: "Roger Richard Demello",
  role: "Software Engineer, AI/ML",
  status: "AI Engineer Intern at Innovun Global",
  availability: "Immediate joiner",
  location: "India",
  work: "Fully remote, any timezone",
  summary:
    "Software engineer shipping machine learning and generative AI systems end to end - Python and TypeScript services over PostgreSQL, Docker delivery through CI/CD, shipped to 200+ users at 99.5% uptime.",
  email: "rogerdemello289@gmail.com",
  phone: "+91 94217 78898",
  phoneHref: "tel:+919421778898",
  linkedin: "https://linkedin.com/in/rogerdemello",
  linkedinLabel: "linkedin.com/in/rogerdemello",
  github: "https://github.com/rogerdemello",
  githubLabel: "github.com/rogerdemello",
  cv: "/Roger_Demello_CV.pdf",
  cvFile: "Roger_Demello_CV.pdf",
};

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export interface Role {
  period: string;
  company: string;
  role: string;
  place?: string;
  current?: boolean;
  /** Three short lines: the part of this job that matters most for the next one. */
  summary: [string, string, string];
  /** The full account, shown when the role is expanded. */
  details: string[];
  /** Tools worked with in this role (names that exist in lib/tech-icons.ts get a logo). */
  tools: string[];
}

export const experience: Role[] = [
  {
    period: "Aug 2026 - Now",
    company: "Innovun Global",
    role: "AI Engineer Intern",
    place: "Remote",
    current: true,
    summary: [
      "Live RAG agent for the Red Cross in Mexico, built on LangChain and LangGraph.",
      "WhatsApp and Instagram APIs unified into one agent schema across 3 channels.",
      "A natural-language-to-SQL agent over 2 enterprise systems.",
    ],
    details: [
      "Building the retrieval pipeline and prompts behind a live multi-channel conversational agent for Cruz Roja Mexicana (Red Cross, Mexico), on LangChain and LangGraph.",
      "Integrated the WhatsApp Business Cloud API and Instagram Graph API across 3 channels into one consistent agent schema behind a live service.",
      "Developing a natural-language-to-SQL agent that consolidates 2 enterprise source systems into one queryable database.",
      "Troubleshooting production defects end to end and writing technical documentation for client stakeholders.",
    ],
    tools: ["LangChain", "LangGraph", "RAG Pipelines", "SQL", "WhatsApp Business Cloud API", "Instagram Graph API"],
  },
  {
    period: "Jan - Jun 2026",
    company: "AI LifeBOT",
    role: "AI Engineer Intern",
    summary: [
      "3 production apps for 200+ users, with RAG pipelines and real-time streaming.",
      "99.5% uptime, and latency cut 35% by profiling the full request path.",
      "Code reviews, pytest in CI/CD, and 5+ features shipped in an Agile team.",
    ],
    details: [
      "Engineered 3 production applications for 200+ users, raising task efficiency 40%, with RAG pipelines and real-time streaming inside them.",
      "Sustained 99.5% uptime with telemetry and audit logging, owning incident response and root cause analysis.",
      "Cut query and response latency 35% by profiling an inherited codebase across the full request path.",
      "Shipped 5+ features end to end, compressing delivery and validation cycles 50%.",
      "Conducted code reviews and automated pytest suites inside CI/CD pipelines, working in an Agile team.",
    ],
    tools: ["RAG Pipelines", "pytest", "CI/CD"],
  },
  {
    period: "May - Jul 2025",
    company: "CFM, RCOEM",
    role: "Machine Learning Research Intern",
    summary: [
      "Clinical classifier on 1,000+ health records: 87% accuracy on held-out data.",
      "Cross-validation across multiple splits raised result reliability 25%.",
      "Reusable, tested data pipelines cut development time 30%.",
    ],
    details: [
      "Engineered measurable features in Python and Pandas from 1,000+ raw, inconsistent health records.",
      "Trained and validated a clinical classification model, reaching 87% accuracy on held-out data.",
      "Raised result reliability 25% through cross-validation across multiple splits, not one sample.",
      "Standardised data pipelines into tested, reusable components, cutting development time 30%.",
    ],
    tools: ["Python", "Pandas"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const categories = ["GenAI & Agents", "ML Systems", "Full-stack", "Web3"] as const;
export type Category = (typeof categories)[number];

export interface Project {
  title: string;
  categories: Category[];
  /** One of the three projects carried on the CV. */
  onCv?: boolean;
  /** Real 16:10 screenshot in /public/projects. */
  image?: string;
  imageAlt?: string;
  /** Hand-drawn architecture sketch (components/Sketches.tsx) for projects with no presentable UI. */
  sketch?: "music-recsys" | "dealsentry";
  problem: string;
  approach: string[];
  result: string;
  stack: string[];
  links: { label: "GitHub" | "Live"; href: string }[];
}

/** URL-safe id for a project ("Shadow GTM" -> "shadow-gtm"), used for in-page links. */
export const slug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** 640px variant of a project screenshot, for thumbnails. */
export const thumb = (image: string) => image.replace(/\.webp$/, "-sm.webp");

// The ones with onCv: true get the full write-up, in this order; the rest sit under "Also built".
export const projects: Project[] = [
  {
    title: "music-recsys",
    sketch: "music-recsys",
    categories: ["ML Systems"],
    onCv: true,
    problem: "Recommender demos rarely survive contact with production constraints.",
    approach: [
      "Two-tower embeddings → ANN retrieval → LightGBM ranker.",
      "Retrain, embedding-refresh and candidate-precompute jobs against an MLflow registry.",
      "Simulated A/B tests across ranking variants, with Prometheus and Grafana on model and serving metrics.",
      "Cache, event bus, feature store and ANN index each behind an interface.",
    ],
    result:
      "Runs CPU-only with zero external services; scales to Kafka and Kubernetes by flipping one config value.",
    stack: ["Python", "PyTorch", "LightGBM", "FastAPI", "MLflow", "Redis", "Kafka", "Prometheus", "Grafana", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/music-recsys" }],
  },
  {
    title: "sentinelops",
    image: "/projects/sentinelops.webp",
    imageAlt: "SentinelOps incident view: a predicted degradation on the Auth Database with lead signal, business impact and multi-agent root-cause analysis.",
    categories: ["ML Systems", "Full-stack"],
    onCv: true,
    problem:
      "Incidents get diagnosed after they page someone - by then the service that actually caused it is three hops upstream.",
    approach: [
      "IsolationForest anomaly detection over service telemetry.",
      "Service dependencies modelled as a NetworkX graph.",
      "Slack and PagerDuty alerting with simulated self-healing.",
      "Optional hookup to real Kubernetes and webhooks without changing core service contracts.",
    ],
    result:
      "Names the dependency chain behind an incident before the page fires, with a structured audit log per action.",
    stack: ["Python", "FastAPI", "Scikit-learn", "statsmodels", "NetworkX", "React", "Vite", "TypeScript", "Supabase"],
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/sentinel-ops" }],
  },
  {
    title: "DealSentry",
    sketch: "dealsentry",
    categories: ["Full-stack", "GenAI & Agents"],
    onCv: true,
    problem: "Enterprises review proposals for compliance by hand - slow, inconsistent, expensive.",
    approach: [
      "Rules engine scoring pricing, legal and structural risk before signature rather than after.",
      "Document upload, parsing and PDF generation.",
      "Approval routing with SLA tracking, audit logging and RBAC.",
      "Salesforce, HubSpot, Gmail and Google Drive integrations.",
    ],
    result:
      "Cut manual review effort ~70%; risky terms surface before anything gets signed, and every review step stays attributable and time-bound.",
    stack: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Node.js", "OpenAI API", "Puppeteer"],
    links: [
      { label: "GitHub", href: "https://github.com/rogerdemello/DealSentry" },
      { label: "Live", href: "https://dealsentry.onrender.com" },
    ],
  },
  {
    title: "Executive Email Copilot",
    image: "/projects/email-copilot.webp",
    imageAlt: "Executive Email Copilot inbox with triage counts, a selected urgent message and the copilot’s priority and risk reasoning.",
    categories: ["GenAI & Agents"],
    onCv: true,
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
    title: "Shadow GTM",
    image: "/projects/shadow-gtm.webp",
    imageAlt: "Shadow GTM dashboard showing a competitor matrix, ranked AI-recommended plays and a live intelligence feed.",
    categories: ["GenAI & Agents", "Full-stack"],
    problem: "GTM teams can’t watch every competitor move in real time.",
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
  {
    title: "ML Guardian",
    image: "/projects/ml-guardian.webp",
    imageAlt: "ML Guardian dashboard listing a critical freshness incident and a high quality incident with risk scores.",
    categories: ["ML Systems", "GenAI & Agents"],
    problem: "ML pipelines fail silently - stale upstreams and renamed columns only surface once a KPI moves.",
    approach: [
      "Scan → score → incident → write-back loop.",
      "Freshness, null-rate and schema-drift detection.",
      "Findings written back to DataHub as tags and glossary terms.",
      "Generates fail-fast remediation code.",
    ],
    result: "Names the exact downstream models and dashboards at risk, before the damage shows up.",
    stack: ["Python", "FastAPI", "MCP", "DataHub", "Gemini", "GitHub Actions"],
    links: [{ label: "GitHub", href: "https://github.com/rogerdemello/ml-guardian" }],
  },
  {
    title: "BharatOS",
    image: "/projects/bharatos.webp",
    imageAlt: "BharatOS dashboard with CFO, Inventory, Marketing, Risk and Growth agent tiles, a Business Twin, a Paytm transaction feed and a supplier call agent.",
    categories: ["GenAI & Agents"],
    problem: "India’s small businesses get voice APIs, not an AI that reasons about the business.",
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
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C++", "C", "Bash", "YAML"] },
  { label: "Generative AI", items: ["RAG Pipelines", "LangChain", "LangGraph", "Multi-Agent Systems", "FAISS", "OpenAI API"] },
  { label: "Machine Learning", items: ["Scikit-learn", "PyTorch", "XGBoost", "LightGBM", "Anomaly Detection", "NLP", "Computer Vision"] },
  { label: "Backend & APIs", items: ["FastAPI", "Flask", "Express", "Node.js", "REST APIs", "Microservices", "React", "Next.js"] },
  { label: "Data & Cloud", items: ["PostgreSQL", "Redis", "Pandas", "NumPy", "MLflow", "Docker", "AWS", "CI/CD", "GitHub Actions", "MLOps"] },
  { label: "CS Fundamentals", items: ["Data Structures", "Algorithms", "System Design", "OOP", "pytest"] },
] as const;

/* ------------------------------------------------------------------ */
/* Education & credentials                                             */
/* ------------------------------------------------------------------ */

export const education = {
  school: "Shri Ramdeobaba College of Engineering and Management (RCOEM)",
  short: "RCOEM, Nagpur",
  years: "2022 - 2026",
  degrees: [
    { title: "B.Tech, Electronics & Communication", cgpa: 8.9, label: "8.90" },
    { title: "Minor, AI & Machine Learning", cgpa: 9.67, label: "9.67" },
  ],
};

export const credentials = [
  { title: "AWS Certified Cloud Practitioner", meta: "Amazon Web Services · Oct 2025", tag: "Certification" },
  { title: "Finalist, Paytm × Sarvam × Logitech AI National Hackathon", meta: "National hackathon", tag: "Finalist" },
  { title: "2nd Place, ByteSize Sage AI National Hackathon", meta: "National hackathon", tag: "2nd place" },
] as const;

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const story = [
  { year: "2024", line: "Fell for the math behind ML.", sub: "An electronics undergrad who got pulled into models, gradients, and messy real data." },
  { year: "2025", line: "Trained models on real, messy data.", sub: "A clinical classifier over 1,000+ health records to 87% accuracy - plus the preprocessing and cross-validation that made the number trustworthy." },
  { year: "2026", line: "Shipped to production.", sub: "Six months at AI LifeBOT - 3 production apps, 200+ users, 40% task efficiency, 35% lower latency." },
  { year: "Now", line: "Graduated, and building at full speed.", sub: "B.Tech done. Building the retrieval pipeline behind a live RAG agent for the Red Cross in Mexico - immediate joiner, fully remote." },
];

export const principles = [
  "Ship small, measure, iterate.",
  "Latency and reliability over leaderboard scores.",
  "Make retrieval honest; make agents finish.",
  "Document so the next person - or model - can pick it up.",
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const nav = [
  { name: "Work", id: "work" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

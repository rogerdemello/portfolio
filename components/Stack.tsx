"use client";

import type { IconType } from "react-icons";
import {
  SiPython, SiTypescript, SiCplusplus, SiC, SiScikitlearn, SiPytorch,
  SiNumpy, SiPandas, SiFastapi, SiFlask, SiPostgresql, SiVercel,
  SiGit, SiGithub, SiLangchain, SiHuggingface, SiSupabase, SiDocker,
  SiLinux, SiGithubactions, SiNextdotjs, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiRedis, SiMlflow, SiOpenai,
} from "react-icons/si";
import {
  FaJava, FaDatabase, FaProjectDiagram, FaRobot, FaTerminal, FaSitemap,
  FaBrain, FaSearch, FaExchangeAlt, FaAws, FaChartLine, FaLayerGroup,
  FaCloud,
} from "react-icons/fa";

const groups = [
  { label: "Languages", items: ["Python", "TypeScript", "C++", "Java", "C", "SQL"] },
  { label: "Agentic & GenAI", items: ["RAG Pipelines", "Multi-Agent Systems", "LangChain", "LangGraph", "Prompt Engineering", "Semantic Search", "Azure OpenAI", "Hugging Face"] },
  { label: "Machine Learning", items: ["Scikit-learn", "PyTorch", "XGBoost", "Anomaly Detection", "NumPy", "Pandas", "Model Evaluation"] },
  { label: "Data & Vector Stores", items: ["FAISS", "Pinecone", "ChromaDB", "PostgreSQL", "Supabase", "Redis", "MLflow"] },
  { label: "Backend & Frontend", items: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs", "Next.js", "React", "Tailwind CSS"] },
  { label: "DevOps & Cloud", items: ["Docker", "CI/CD", "AWS", "Vercel", "Render", "Git", "GitHub", "Linux"] },
];

// Small logo per skill. Brand marks where they exist; otherwise a representative glyph.
const ICONS: Record<string, IconType> = {
  "Python": SiPython,
  "TypeScript": SiTypescript,
  "C++": SiCplusplus,
  "Java": FaJava,
  "C": SiC,
  "SQL": FaDatabase,
  "RAG Pipelines": FaProjectDiagram,
  "Multi-Agent Systems": FaRobot,
  "LangChain": SiLangchain,
  "LangGraph": FaSitemap,
  "Prompt Engineering": FaTerminal,
  "Semantic Search": FaSearch,
  "Azure OpenAI": SiOpenai,
  "Hugging Face": SiHuggingface,
  "Scikit-learn": SiScikitlearn,
  "PyTorch": SiPytorch,
  "XGBoost": FaChartLine,
  "Anomaly Detection": FaBrain,
  "NumPy": SiNumpy,
  "Pandas": SiPandas,
  "Model Evaluation": FaChartLine,
  "FAISS": FaLayerGroup,
  "Pinecone": FaLayerGroup,
  "ChromaDB": FaDatabase,
  "PostgreSQL": SiPostgresql,
  "Supabase": SiSupabase,
  "Redis": SiRedis,
  "MLflow": SiMlflow,
  "FastAPI": SiFastapi,
  "Flask": SiFlask,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "REST APIs": FaExchangeAlt,
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Docker": SiDocker,
  "CI/CD": SiGithubactions,
  "AWS": FaAws,
  "Vercel": SiVercel,
  "Render": FaCloud,
  "Git": SiGit,
  "GitHub": SiGithub,
  "Linux": SiLinux,
};

export default function Stack() {
  return (
    <section id="stack" className="py-20 md:py-28 border-t border-card-border">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm text-accent">02</span>
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/40">Stack</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-3 mb-3 leading-none">
        Toolkit
      </h2>
      <p className="text-foreground/60 mb-10 max-w-lg">What I reach for - chosen because it ships, not because it&apos;s trendy.</p>

      <dl className="divide-y divide-card-border border-y border-card-border">
        {groups.map((g) => (
          <div key={g.label} className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 py-5">
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/45 sm:pt-2">{g.label}</dt>
            <dd className="flex flex-wrap gap-2.5">
              {g.items.map((item) => {
                const Icon = ICONS[item];
                return (
                  <span
                    key={item}
                    className="group inline-flex items-center gap-2 rounded-lg border border-card-border bg-card/60 pl-2.5 pr-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-primary/45 hover:text-foreground"
                  >
                    {Icon && <Icon size={15} className="shrink-0 text-foreground/45 transition-colors group-hover:text-primary" aria-hidden />}
                    {item}
                  </span>
                );
              })}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

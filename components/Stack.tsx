"use client";

import type { IconType } from "react-icons";
import {
  SiPython, SiCplusplus, SiC, SiScikitlearn, SiPytorch, SiTensorflow,
  SiNumpy, SiPandas, SiFastapi, SiFlask, SiPostgresql, SiVercel,
  SiGit, SiGithub, SiLangchain, SiHuggingface, SiSupabase, SiDocker,
  SiLinux, SiGithubactions,
} from "react-icons/si";
import {
  FaJava, FaDatabase, FaProjectDiagram, FaRobot, FaTerminal, FaSitemap,
  FaBrain, FaSearch, FaExchangeAlt, FaAws,
} from "react-icons/fa";

const groups = [
  { label: "Languages", items: ["Python", "C++", "Java", "C", "SQL"] },
  { label: "Agentic & GenAI", items: ["RAG Pipelines", "Vector Databases", "Multi-Agent Systems", "Prompt Engineering", "Agentic Workflows"] },
  { label: "Machine Learning", items: ["Scikit-learn", "PyTorch", "TensorFlow", "NumPy", "Pandas", "LLMs", "Semantic Search"] },
  { label: "Backend & DevOps", items: ["FastAPI", "Flask", "REST APIs", "CI/CD", "PostgreSQL", "AWS", "Vercel"] },
  { label: "Tools & Platforms", items: ["Git", "GitHub", "LangChain", "Hugging Face", "Supabase", "Docker", "Linux"] },
];

// Small logo per skill. Brand marks where they exist; otherwise a representative glyph.
const ICONS: Record<string, IconType> = {
  "Python": SiPython,
  "C++": SiCplusplus,
  "Java": FaJava,
  "C": SiC,
  "SQL": FaDatabase,
  "RAG Pipelines": FaProjectDiagram,
  "Vector Databases": FaDatabase,
  "Multi-Agent Systems": FaRobot,
  "Prompt Engineering": FaTerminal,
  "Agentic Workflows": FaSitemap,
  "Scikit-learn": SiScikitlearn,
  "PyTorch": SiPytorch,
  "TensorFlow": SiTensorflow,
  "NumPy": SiNumpy,
  "Pandas": SiPandas,
  "LLMs": FaBrain,
  "Semantic Search": FaSearch,
  "FastAPI": SiFastapi,
  "Flask": SiFlask,
  "REST APIs": FaExchangeAlt,
  "CI/CD": SiGithubactions,
  "PostgreSQL": SiPostgresql,
  "AWS": FaAws,
  "Vercel": SiVercel,
  "Git": SiGit,
  "GitHub": SiGithub,
  "LangChain": SiLangchain,
  "Hugging Face": SiHuggingface,
  "Supabase": SiSupabase,
  "Docker": SiDocker,
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

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
import SectionHeader from "@/components/SectionHeader";

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
      <SectionHeader n="03" label="Subsystems" title="Toolkit" sub="What I reach for - chosen because it ships, not because it's trendy." />

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
                    className="group inline-flex items-center gap-2 rounded-sm border border-card-border/70 bg-card/40 pl-2.5 pr-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-primary/50 hover:text-foreground"
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

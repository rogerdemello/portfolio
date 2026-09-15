"use client";

import type { IconType } from "react-icons";
import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiC, SiScikitlearn,
  SiPytorch, SiNumpy, SiPandas, SiFastapi, SiFlask, SiPostgresql,
  SiLangchain, SiDocker, SiGithubactions, SiNextdotjs, SiReact,
  SiNodedotjs, SiExpress, SiRedis, SiMlflow, SiOpenai, SiPytest,
} from "react-icons/si";
import {
  FaJava, FaDatabase, FaProjectDiagram, FaRobot, FaTerminal, FaSitemap,
  FaBrain, FaExchangeAlt, FaAws, FaChartLine, FaLayerGroup, FaFileCode,
  FaLanguage, FaEye, FaCubes, FaInfinity, FaCodeBranch,
} from "react-icons/fa";

const groups = [
  { label: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C++", "C", "Bash", "YAML"] },
  { label: "Generative AI", items: ["RAG Pipelines", "LangChain", "LangGraph", "Multi-Agent Systems", "FAISS", "OpenAI API"] },
  { label: "Machine Learning", items: ["Scikit-learn", "PyTorch", "XGBoost", "LightGBM", "Anomaly Detection", "NLP", "Computer Vision"] },
  { label: "Backend & APIs", items: ["FastAPI", "Flask", "Express", "Node.js", "REST APIs", "Microservices", "React", "Next.js"] },
  { label: "Data & Cloud", items: ["PostgreSQL", "Redis", "Pandas", "NumPy", "MLflow", "Docker", "AWS", "CI/CD", "GitHub Actions", "MLOps"] },
  { label: "CS Fundamentals", items: ["Data Structures", "Algorithms", "System Design", "OOP", "pytest"] },
];

// Small logo per skill. Brand marks where they exist; otherwise a representative glyph.
const ICONS: Record<string, IconType> = {
  "Python": SiPython,
  "Java": FaJava,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "SQL": FaDatabase,
  "C++": SiCplusplus,
  "C": SiC,
  "Bash": FaTerminal,
  "YAML": FaFileCode,
  "RAG Pipelines": FaProjectDiagram,
  "LangChain": SiLangchain,
  "LangGraph": FaSitemap,
  "Multi-Agent Systems": FaRobot,
  "FAISS": FaLayerGroup,
  "OpenAI API": SiOpenai,
  "Scikit-learn": SiScikitlearn,
  "PyTorch": SiPytorch,
  "XGBoost": FaChartLine,
  "LightGBM": FaChartLine,
  "Anomaly Detection": FaBrain,
  "NLP": FaLanguage,
  "Computer Vision": FaEye,
  "FastAPI": SiFastapi,
  "Flask": SiFlask,
  "Express": SiExpress,
  "Node.js": SiNodedotjs,
  "REST APIs": FaExchangeAlt,
  "Microservices": FaCubes,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "Pandas": SiPandas,
  "NumPy": SiNumpy,
  "MLflow": SiMlflow,
  "Docker": SiDocker,
  "AWS": FaAws,
  "CI/CD": SiGithubactions,
  "GitHub Actions": SiGithubactions,
  "MLOps": FaInfinity,
  "Data Structures": FaSitemap,
  "Algorithms": FaCodeBranch,
  "System Design": FaProjectDiagram,
  "OOP": FaCubes,
  "pytest": SiPytest,
};

export default function Stack() {
  return (
    <section id="stack" className="py-20 md:py-28 border-t border-card-border">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm text-accent">02</span>
        <span className="readout">Stack</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-3 mb-3 leading-none">
        Toolkit
      </h2>
      <p className="text-foreground/55 mb-10 max-w-lg">What I reach for - chosen because it ships, not because it&apos;s trendy.</p>

      <dl className="divide-y divide-card-border border-y border-card-border">
        {groups.map((g) => (
          <div key={g.label} className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6 py-5">
            <dt className="readout sm:pt-2">{g.label}</dt>
            <dd className="flex flex-wrap gap-2">
              {g.items.map((item) => {
                const Icon = ICONS[item];
                return (
                  <span key={item} className="chip group">
                    {Icon && <Icon size={14} className="shrink-0 text-foreground/40 transition-colors group-hover:text-primary" aria-hidden />}
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

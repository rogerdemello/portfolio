"use client";
import { FaCode, FaDatabase, FaServer, FaBrain, FaTools, FaRobot, FaProjectDiagram, FaComments, FaSearch } from "react-icons/fa";
import {
  SiPython,
  SiFastapi,
  SiTensorflow,
  SiScikitlearn,
  SiAmazon,
  SiLangchain,
  SiOpenai,
  SiHuggingface,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGithub,
} from "react-icons/si";

const categories = [
  {
    title: "AI & Machine Learning",
    icon: <FaBrain size={20} />,
    tint: "bg-primary text-primary-foreground",
    skills: [
      { name: "LLMs & RAG", icon: <FaBrain size={15} /> },
      { name: "Agentic AI", icon: <FaRobot size={15} /> },
      { name: "LangChain", icon: <SiLangchain size={15} /> },
      { name: "LlamaIndex", icon: <FaProjectDiagram size={15} /> },
      { name: "OpenAI API", icon: <SiOpenai size={15} /> },
      { name: "Hugging Face", icon: <SiHuggingface size={15} /> },
      { name: "Prompt Engineering", icon: <FaComments size={15} /> },
      { name: "Vector Databases", icon: <FaDatabase size={15} /> },
      { name: "Semantic Search", icon: <FaSearch size={15} /> },
      { name: "TensorFlow & PyTorch", icon: <SiTensorflow size={15} /> },
      { name: "Scikit-learn", icon: <SiScikitlearn size={15} /> },
    ],
  },
  {
    title: "Backend Engineering",
    icon: <FaServer size={20} />,
    tint: "bg-accent text-accent-foreground",
    skills: [
      { name: "Python", icon: <SiPython size={15} /> },
      { name: "FastAPI", icon: <SiFastapi size={15} /> },
      { name: "REST APIs", icon: <FaServer size={15} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={15} /> },
      { name: "MongoDB", icon: <SiMongodb size={15} /> },
      { name: "Async Programming", icon: <FaCode size={15} /> },
      { name: "Microservices", icon: <FaProjectDiagram size={15} /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <SiAmazon size={20} />,
    tint: "bg-secondary text-secondary-foreground",
    skills: [
      { name: "AWS", icon: <SiAmazon size={15} /> },
      { name: "Docker", icon: <SiDocker size={15} /> },
      { name: "Git & GitHub", icon: <SiGithub size={15} /> },
      { name: "CI/CD", icon: <FaTools size={15} /> },
    ],
  },
];

const alsoProficient = ["Pandas", "NumPy", "Feature Engineering", "Statistical Analysis", "EDA", "C++", "Java", "SQL", "DSA", "Linux"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-background-secondary border-y-2 border-foreground relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-end gap-4 mb-12 md:mb-16">
            <span className="font-display font-black text-primary text-3xl sm:text-4xl leading-none">02</span>
            <div>
              <p className="eyebrow mb-2">Toolkit</p>
              <h2 className="font-display font-black text-foreground text-4xl sm:text-5xl leading-[0.95]">
                The stack I ship with
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 md:gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="ink-card ink-card--hover p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`grid place-items-center w-11 h-11 rounded-xl border-2 border-foreground ${cat.tint}`}>
                    {cat.icon}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s.name} className="ink-tag hover:bg-primary hover:text-primary-foreground hover:border-foreground transition-colors duration-200 cursor-default">
                      <span className="opacity-80">{s.icon}</span>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer chips */}
          <div className="mt-8 ink-card p-5 sm:p-6 flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-xs uppercase tracking-[0.18em] font-semibold text-foreground/60 mr-2">
              Also proficient in:
            </span>
            {alsoProficient.map((s) => (
              <span key={s} className="ink-tag !border-foreground/30 !bg-background-tertiary cursor-default">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

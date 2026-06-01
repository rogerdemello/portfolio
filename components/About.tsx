"use client";
import { FaBrain, FaServer, FaCode, FaChartLine } from "react-icons/fa";

const highlights = [
  {
    icon: <FaBrain size={22} />,
    title: "LLM Apps & AI Agents",
    description:
      "Built and deployed 3+ production-grade LLM applications and autonomous agents serving 200+ users - tool integration, long-term memory, goal-driven workflows.",
    tint: "bg-primary text-primary-foreground",
  },
  {
    icon: <FaServer size={22} />,
    title: "RAG, Vector DBs & Backend",
    description:
      "RAG pipelines and multi-agent orchestration (LangChain, LlamaIndex) over vector databases, served by scalable async FastAPI backends with real-time observability.",
    tint: "bg-accent text-accent-foreground",
  },
  {
    icon: <FaChartLine size={22} />,
    title: "Machine Learning",
    description:
      "Trained and evaluated ML models with TensorFlow, PyTorch, and Scikit-learn - reaching 87% accuracy on a health-prediction system through robust design and validation.",
    tint: "bg-secondary text-secondary-foreground",
  },
  {
    icon: <FaCode size={22} />,
    title: "Data Science & Analytics",
    description:
      "Feature engineering, statistical analysis, and preprocessing with Pandas and NumPy - turning lifestyle and physiological data into reliable, generalizable predictions.",
    tint: "bg-decorative text-primary-foreground",
  },
];

const competencies = [
  {
    title: "Generative & Agentic AI",
    items: ["LLM apps & AI agents", "RAG pipelines & vector DBs", "Multi-agent orchestration", "Prompt engineering & semantic search"],
  },
  {
    title: "Machine Learning & Data Science",
    items: ["Supervised & unsupervised learning", "Deep learning (TensorFlow, PyTorch)", "Feature engineering & evaluation", "Statistical analysis & EDA"],
  },
  {
    title: "Backend & Cloud",
    items: ["FastAPI, Flask, REST APIs", "Async programming & streaming", "AWS (EC2, S3, Lambda) - Certified", "Python, C++, Git & CI/CD"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-end gap-4 mb-12 md:mb-16">
            <span className="font-display font-black text-primary text-3xl sm:text-4xl leading-none">01</span>
            <div>
              <p className="eyebrow mb-2">About</p>
              <h2 className="font-display font-black text-foreground text-4xl sm:text-5xl leading-[0.95]">
                Builder across the stack
              </h2>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-foreground/75 max-w-3xl leading-relaxed mb-12 md:mb-16">
            I build and deploy production-grade LLM applications and autonomous AI agents, train and
            evaluate machine-learning models, and turn raw data into actionable insight - backed by
            scalable, async AI infrastructure.
          </p>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mb-14 md:mb-20">
            {highlights.map((h, i) => (
              <div key={h.title} className={`ink-card ink-card--hover p-6 ${i % 2 === 1 ? "sm:translate-y-3" : ""}`}>
                <div className={`inline-grid place-items-center w-12 h-12 rounded-xl border-2 border-foreground mb-4 ${h.tint}`}>
                  {h.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{h.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>

          {/* Competencies */}
          <div className="ink-card p-6 sm:p-8 md:p-10">
            <p className="eyebrow mb-8">Core competencies</p>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {competencies.map((c, i) => (
                <div key={c.title} className={i > 0 ? "md:pl-10 md:border-l-2 md:border-dashed md:border-foreground/20" : ""}>
                  <h4 className="font-display text-lg font-bold text-foreground mb-4">{c.title}</h4>
                  <ul className="space-y-3">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-foreground/75">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 border border-foreground" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

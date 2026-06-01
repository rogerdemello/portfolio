"use client";
import { FaBrain, FaServer, FaCode, FaChartLine } from "react-icons/fa";
import { SiPython } from "react-icons/si";

export default function About() {
  const highlights = [
    {
      icon: <FaBrain size={28} />,
      title: "LLM Apps & AI Agents",
      description: "Built and deployed 3+ production-grade LLM applications and autonomous agents serving 200+ users, with tool integration, long-term memory, and goal-driven workflows.",
      gradient: "from-accent to-primary"
    },
    {
      icon: <FaServer size={28} />,
      title: "RAG, Vector DBs & Backend",
      description: "Architected RAG pipelines and multi-agent orchestration (LangChain, LlamaIndex) over vector databases, served via scalable async FastAPI backends with real-time observability.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: <FaCode size={28} />,
      title: "Machine Learning",
      description: "Built and evaluated ML models with TensorFlow, PyTorch, and Scikit-learn — reaching 87% accuracy on a health prediction system through robust model design and validation.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Data Science & Analytics",
      description: "Feature engineering, statistical analysis, and data preprocessing with Pandas and NumPy — turning lifestyle and physiological data into reliable, generalizable predictions.",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-5 py-2 sm:px-6 bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm">
              <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
                About Me
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
              AI &amp; ML Engineer <span className="gradient-text">/ Data Scientist</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
              I build and deploy production-grade LLM applications and autonomous AI agents, train and evaluate machine learning models, and turn raw data into actionable insight. From RAG pipelines and agentic workflows to feature engineering and statistical analysis, I take problems end to end — backed by scalable, async AI infrastructure.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 md:mb-16 max-w-7xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-card/50 backdrop-blur-md rounded-2xl border border-card-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${item.gradient} rounded-xl mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/10`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Core Competencies */}
          <div className="bg-card/40 backdrop-blur-md rounded-2xl md:rounded-3xl border border-card-border p-6 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] hover:border-primary/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground mb-8 md:mb-10 text-center relative z-10">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <FaBrain className="text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Generative & Agentic AI</h4>
                </div>
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>LLM Applications & AI Agents</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>RAG Pipelines & Vector Databases</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Multi-Agent Orchestration (LangChain)</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Prompt Engineering & Semantic Search</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <FaChartLine className="text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Machine Learning & Data Science</h4>
                </div>
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Supervised & Unsupervised Learning</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Deep Learning (TensorFlow, PyTorch)</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Feature Engineering & Model Evaluation</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-accent mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Statistical Analysis & EDA</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                    <SiPython className="text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Backend & Cloud</h4>
                </div>
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-secondary mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>FastAPI, Flask, REST APIs</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-secondary mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Async Programming & Streaming</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-secondary mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>AWS (EC2, S3, Lambda) — Certified</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-secondary mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span>Python, C++, Git & CI/CD</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

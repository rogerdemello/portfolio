"use client";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaShieldAlt, FaBullhorn, FaEnvelope } from "react-icons/fa";
import { SiPython, SiFastapi, SiPandas, SiReact } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "DealSentry",
      description:
        "Built an AI-powered proposal compliance and risk analysis platform with automated document validation, approval workflows, and audit logging. Integrated LLM-based analysis with rule-based engines and enterprise tools for real-world B2B proposal operations.",
      problem: "Enterprise sales teams needed fast proposal validation against compliance policies without slowing down approvals.",
      approach: "Combined LLM-powered clause analysis with deterministic rule engines and database-driven workflows for reliable, traceable decision making.",
      cloudArchitecture: "Designed scalable backend services with workflow orchestration, approval state tracking, and full audit trails across enterprise integrations.",
      results: [
        "Automated proposal document validation and AI-assisted risk analysis",
        "Integrated CRM, email, and storage tools into approval workflows",
        "Implemented complete audit logging for traceability and compliance",
        "Built scalable services for high-reliability B2B review pipelines"
      ],
      technologies: ["Python", "FastAPI", "LLM Workflows", "PostgreSQL", "Rule Engines", "CRM Integrations"],
      techIcons: [SiPython, SiFastapi, SiPandas, SiReact],
      github: "https://github.com/rogerdemello/DealSentry/",
      demo: "#",
      gradient: "from-accent to-primary",
      icon: <FaShieldAlt size={40} />
    },
    {
      title: "ContentFlow AI (AI Marketing Agent)",
      description:
        "Developed a multi-agent AI system for automated content generation, compliance validation, and multi-channel distribution. Implemented RAG-based policy checks with multilingual generation and approval workflows for enterprise marketing pipelines.",
      problem: "Marketing teams needed to scale content production while maintaining policy compliance and brand governance across channels.",
      approach: "Built modular agents for generation, retrieval, compliance, and distribution, with human approval gates and centralized orchestration.",
      cloudArchitecture: "Designed deployment-ready APIs and analytics instrumentation to support enterprise publishing workflows and monitoring.",
      results: [
        "Automated content generation and compliance checks with multi-agent orchestration",
        "RAG-based policy validation with multilingual output generation",
        "Enabled multi-channel publishing flows with approval checkpoints",
        "Integrated analytics tracking with deployment-ready API services"
      ],
      technologies: ["Python", "FastAPI", "RAG", "Multi-Agent Systems", "Analytics", "API Orchestration"],
      techIcons: [SiPython, SiFastapi, SiPandas, SiReact],
      github: "https://github.com/rogerdemello/contentflow-ai",
      demo: "#",
      gradient: "from-primary to-secondary",
      icon: <FaBullhorn size={40} />
    },
    {
      title: "Autonomous Executive Email Copilot",
      description:
        "Designed an AI-driven inbox automation system with agent-based triage, decision policies, and approval mechanisms. Built deterministic evaluation pipelines with scoring, benchmarking, and telemetry for reliable performance analysis.",
      problem: "Executive teams needed inbox automation that was both efficient and trustworthy with clear approval controls.",
      approach: "Implemented policy-aware triage agents, deterministic evaluation benchmarks, and full-stack operational tooling for observability.",
      cloudArchitecture: "Developed FastAPI services, test pipelines, and interactive dashboards to monitor agent behavior and operational reliability.",
      results: [
        "Delivered agent-based inbox triage with approval-aware decision policies",
        "Built deterministic scoring and benchmarking workflows for evaluation",
        "Added telemetry instrumentation for reliable agent performance analysis",
        "Shipped full-stack monitoring tools and test-ready API services"
      ],
      technologies: ["Python", "FastAPI", "Agent Workflows", "Telemetry", "Evaluation Pipelines", "Dashboards"],
      techIcons: [SiPython, SiFastapi, SiPandas, SiReact],
      github: "https://github.com/rogerdemello/autonomous-executive-email-copilot",
      demo: "#",
      gradient: "from-decorative to-decorative-light",
      icon: <FaEnvelope size={40} />
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 px-5 py-2 sm:px-6 bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm">
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-foreground-muted max-w-4xl mx-auto text-base md:text-lg">  
            A selection of projects showcasing my work in AI systems, multi-agent workflows, and enterprise automation. Each project highlights a real-world problem, the solution architecture, and measurable outcomes.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-md rounded-2xl border border-card-border hover:border-primary/50 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsla(var(--primary),0.15)] flex flex-col md:flex-row relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Left: Gradient Header */}
              <div className={`bg-gradient-to-br ${project.gradient} p-6 relative overflow-hidden md:w-64 flex items-center justify-center flex-shrink-0 group-hover:brightness-110 transition-all duration-500`}>
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)] opacity-30"></div>
                </div>
                <div className="absolute inset-0 opacity-10">
                  {project.techIcons.slice(0, 3).map((Icon, idx) => (
                    <Icon 
                      key={idx} 
                      className="absolute text-white/40 text-6xl" 
                      style={{
                        top: `${(idx % 2) * 50}%`,
                        left: `${(idx % 3) * 50}%`,
                        transform: `rotate(${idx * 20}deg)`
                      }}
                    />
                  ))}
                </div>
                <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500">
                  <div className="text-white mb-3 flex justify-center drop-shadow-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white leading-tight drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-6 flex-1 relative z-10">
                {/* Description */}
                <div className="mb-4">
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Quick Info - Side by side on larger screens */}
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-background-tertiary/50 rounded-lg p-3 border border-card-border/50 hover:border-card-border transition-colors">
                    <h4 className="text-xs font-bold text-secondary mb-1.5 uppercase tracking-wide">Problem</h4>
                    <p className="text-xs text-foreground-muted leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="bg-background-tertiary/50 rounded-lg p-3 border border-card-border/50 hover:border-card-border transition-colors">
                    <h4 className="text-xs font-bold text-accent mb-1.5 uppercase tracking-wide">Solution</h4>
                    <p className="text-xs text-foreground-muted leading-relaxed">{project.approach}</p>
                  </div>
                </div>

                {/* Bottom row: Key Results, Tech Stack, and Buttons */}
                <div className="space-y-4">
                  {/* Key Results */}
                  <div>
                    <h4 className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">Key Results</h4>
                    <div className="space-y-1.5">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-foreground-muted leading-relaxed">
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={10} />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack & Buttons Row */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    {/* Tech Stack */}
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-background-secondary/80 text-foreground rounded text-xs font-mono border border-card-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 sm:w-auto w-full">
                      <a
                        href={project.demo && project.demo !== "#" ? project.demo : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300
                          ${project.demo && project.demo !== "#" ? "bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-105" : "bg-background-tertiary text-foreground-muted cursor-not-allowed"}`}
                        style={project.demo && project.demo !== "#" ? {} : { pointerEvents: "none" }}
                      >
                        <FaExternalLinkAlt size={12} />
                        {project.demo && project.demo !== "#" ? "Demo" : "Soon"}
                      </a>
                      <a
                        href={project.github && project.github !== "#" ? project.github : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300
                          ${project.github && project.github !== "#" ? "bg-background-tertiary text-foreground border border-card-border hover:bg-background-secondary hover:scale-105" : "bg-background-tertiary text-foreground-muted cursor-not-allowed"}`}
                        style={project.github && project.github !== "#" ? {} : { pointerEvents: "none" }}
                      >
                        <FaGithub size={12} />
                        {project.github && project.github !== "#" ? "Code" : "Private"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaShieldAlt, FaBullhorn, FaEnvelope } from "react-icons/fa";
import { SiPython, SiFastapi, SiPandas, SiReact } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Autonomous Executive Email Copilot",
      description:
        "An AI-powered email assistant that automates classification, prioritization, response generation, and task extraction using LLMs and retrieval-based context.",
      problem: "Executives lose hours triaging high-volume inboxes, and naive LLM assistants surface irrelevant or low-trust responses.",
      solution: "Context-aware response generation with RAG over a vector store, multi-agent workflow orchestration for categorization, prioritization, and action-item extraction, plus real-time monitoring and observability.",
      impact: [
        "Reduced irrelevant AI responses by 20% via context-aware retrieval",
        "Improved email-handling efficiency through end-to-end automation"
      ],
      technologies: ["Python", "FastAPI", "LangChain", "OpenAI API", "Vector Databases", "PostgreSQL"],
      techIcons: [SiPython, SiFastapi, SiPandas, SiReact],
      github: "https://github.com/rogerdemello/autonomous-executive-email-copilot",
      demo: "#",
      gradient: "from-accent to-primary",
      icon: <FaEnvelope size={40} />
    },
    {
      title: "DealSentry — Intelligent Proposal Guard",
      description:
        "An enterprise AI platform that automates compliance checks, risk analysis, and proposal validation for business documents.",
      problem: "Enterprise teams manually review proposals against compliance policies — slow, inconsistent, and hard to audit.",
      solution: "AI-powered risk scoring backed by a compliance rule engine, automated PDF/DOCX ingestion, approval workflows with full audit trails, and CRM integrations.",
      impact: [
        "Reduced manual proposal review effort",
        "Accelerated compliance validation workflows"
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Azure OpenAI"],
      techIcons: [SiReact, SiPython, SiFastapi, SiPandas],
      github: "https://github.com/rogerdemello/DealSentry/",
      demo: "#",
      gradient: "from-primary to-secondary",
      icon: <FaShieldAlt size={40} />
    },
    {
      title: "AI Marketing Agent",
      description:
        "A marketing automation platform that uses AI agents to engage customers across multiple communication channels.",
      problem: "Marketing teams can't manually engage every customer in real time across WhatsApp, Instagram, and Messenger.",
      solution: "AI agents that automate customer interactions, generate responses and follow-ups, and drive campaign workflow automation across integrated messaging channels.",
      impact: [
        "Improved customer engagement efficiency",
        "Reduced manual marketing workload"
      ],
      technologies: ["Python", "MongoDB", "OpenAI API", "FastAPI", "Messaging APIs"],
      techIcons: [SiPython, SiFastapi, SiPandas, SiReact],
      github: "https://github.com/rogerdemello/contentflow-ai",
      demo: "#",
      gradient: "from-decorative to-decorative-light",
      icon: <FaBullhorn size={40} />
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
            A selection of AI systems and agentic workflows I&apos;ve shipped. Each is framed around the problem it solves, the solution I built, the impact it delivered, and the stack behind it.
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
                {/* Overview */}
                <div className="mb-4">
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Problem & Solution - side by side on larger screens */}
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-background-tertiary/50 rounded-lg p-3 border border-card-border/50 hover:border-card-border transition-colors">
                    <h4 className="text-xs font-bold text-secondary mb-1.5 uppercase tracking-wide">Problem</h4>
                    <p className="text-xs text-foreground-muted leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="bg-background-tertiary/50 rounded-lg p-3 border border-card-border/50 hover:border-card-border transition-colors">
                    <h4 className="text-xs font-bold text-accent mb-1.5 uppercase tracking-wide">Solution</h4>
                    <p className="text-xs text-foreground-muted leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Bottom row: Impact, Tech Stack, and Buttons */}
                <div className="space-y-4">
                  {/* Impact */}
                  <div>
                    <h4 className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">Impact</h4>
                    <div className="space-y-1.5">
                      {project.impact.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-foreground-muted leading-relaxed">
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={10} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack & Buttons Row */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    {/* Tech Stack */}
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-foreground-muted mb-2 uppercase tracking-wide">Tech Stack</h4>
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
                    <div className="flex gap-3 sm:w-auto w-full sm:self-end">
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

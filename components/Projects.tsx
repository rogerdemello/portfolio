"use client";
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaBullhorn, FaEnvelope, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Autonomous Executive Email Copilot",
    description:
      "An AI-powered email assistant that automates classification, prioritization, response generation, and task extraction using LLMs and retrieval-based context.",
    problem: "Executives lose hours triaging high-volume inboxes, and naive LLM assistants surface irrelevant or low-trust responses.",
    solution: "Context-aware response generation with RAG over a vector store, multi-agent workflow orchestration for categorization, prioritization, and action-item extraction, plus real-time observability.",
    impact: [
      "Reduced irrelevant AI responses by 20% via context-aware retrieval",
      "Improved email-handling efficiency through end-to-end automation",
    ],
    technologies: ["Python", "FastAPI", "LangChain", "OpenAI API", "Vector Databases", "PostgreSQL"],
    github: "https://github.com/rogerdemello/autonomous-executive-email-copilot",
    demo: "#",
    tint: "bg-primary text-primary-foreground",
    icon: <FaEnvelope size={28} />,
  },
  {
    title: "DealSentry - Intelligent Proposal Guard",
    description:
      "An enterprise AI platform that automates compliance checks, risk analysis, and proposal validation for business documents.",
    problem: "Enterprise teams manually review proposals against compliance policies - slow, inconsistent, and hard to audit.",
    solution: "AI-powered risk scoring backed by a compliance rule engine, automated PDF/DOCX ingestion, approval workflows with full audit trails, and CRM integrations.",
    impact: [
      "Reduced manual proposal review effort",
      "Accelerated compliance validation workflows",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Azure OpenAI"],
    github: "https://github.com/rogerdemello/DealSentry/",
    demo: "#",
    tint: "bg-accent text-accent-foreground",
    icon: <FaShieldAlt size={28} />,
  },
  {
    title: "AI Marketing Agent",
    description:
      "A marketing automation platform that uses AI agents to engage customers across multiple communication channels.",
    problem: "Marketing teams can't manually engage every customer in real time across WhatsApp, Instagram, and Messenger.",
    solution: "AI agents that automate customer interactions, generate responses and follow-ups, and drive campaign workflow automation across integrated messaging channels.",
    impact: [
      "Improved customer engagement efficiency",
      "Reduced manual marketing workload",
    ],
    technologies: ["Python", "MongoDB", "OpenAI API", "FastAPI", "Messaging APIs"],
    github: "https://github.com/rogerdemello/contentflow-ai",
    demo: "#",
    tint: "bg-secondary text-secondary-foreground",
    icon: <FaBullhorn size={28} />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-end gap-4 mb-12 md:mb-16">
            <span className="font-display font-black text-primary text-3xl sm:text-4xl leading-none">03</span>
            <div>
              <p className="eyebrow mb-2">Selected work</p>
              <h2 className="font-display font-black text-foreground text-4xl sm:text-5xl leading-[0.95]">
                Things I&apos;ve shipped
              </h2>
            </div>
          </div>

          <div className="space-y-7 md:space-y-9">
            {projects.map((project, index) => {
              const hasDemo = project.demo && project.demo !== "#";
              const hasCode = project.github && project.github !== "#";
              return (
                <article key={project.title} className="ink-card ink-card--hover overflow-hidden flex flex-col md:flex-row">
                  {/* Index / icon panel */}
                  <div className={`relative ${project.tint} md:w-60 flex-shrink-0 p-6 flex md:flex-col items-center md:items-start justify-between gap-4 border-b-2 md:border-b-0 md:border-r-2 border-foreground`}>
                    <span className="font-display font-black text-5xl md:text-7xl leading-none opacity-90">
                      0{index + 1}
                    </span>
                    <div className="grid place-items-center w-14 h-14 rounded-xl border-2 border-foreground bg-background text-foreground">
                      {project.icon}
                    </div>
                    <h3 className="hidden md:block font-display text-xl font-bold leading-tight mt-auto">
                      {project.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 flex-1">
                    <h3 className="md:hidden font-display text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed mb-5">{project.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-5">
                      <div>
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] font-bold text-decorative mb-1.5">Problem</p>
                        <p className="text-sm text-foreground/75 leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] font-bold text-accent mb-1.5">Solution</p>
                        <p className="text-sm text-foreground/75 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] font-bold text-primary mb-2">Impact</p>
                      <ul className="space-y-1.5">
                        {project.impact.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 border border-foreground" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pt-4 border-t-2 border-dashed border-foreground/20">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="ink-tag !border-foreground/30 !bg-background-tertiary cursor-default">{tech}</span>
                        ))}
                      </div>
                      <div className="flex gap-3 flex-shrink-0">
                        {hasDemo ? (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-solid !py-2 !px-4 text-sm">
                            <FaExternalLinkAlt size={12} /> Demo
                          </a>
                        ) : (
                          <span className="btn-outline !py-2 !px-4 text-sm opacity-50 cursor-not-allowed">
                            <FaExternalLinkAlt size={12} /> Soon
                          </span>
                        )}
                        {hasCode ? (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline !py-2 !px-4 text-sm">
                            <FaGithub size={13} /> Code
                          </a>
                        ) : (
                          <span className="btn-outline !py-2 !px-4 text-sm opacity-50 cursor-not-allowed">
                            <FaGithub size={13} /> Private
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* View all */}
          <div className="mt-10 text-center">
            <a href="https://github.com/rogerdemello" target="_blank" rel="noopener noreferrer" className="btn-outline group">
              More on GitHub
              <FaArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

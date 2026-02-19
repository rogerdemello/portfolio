"use client";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaHeartbeat, FaMicrophone, FaShieldAlt } from "react-icons/fa";
import { SiPython, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiFastapi, SiFlask, SiReact, SiPytorch } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "LifePulse: Health Risk Calculator",
      description:
        "Health risk prediction system using ML models and WHO guidelines. Combined TensorFlow classifiers with rule-based validation to achieve 87.1% accuracy. Analyzes lifestyle factors like BMI, blood pressure, stress levels, and sleep patterns to provide personalized health risk assessments.",
      problem: "Wanted to build something that could give people health insights without needing expensive lab tests or equipment. Also needed a portfolio project for internship applications.",
      approach: "Started with just a TensorFlow classifier in June - accuracy was terrible at 71%. Spent two weeks trying different architectures before realizing the issue. Added WHO rules as a validation layer. Hybrid approach brought it to 87.1%.",
      cloudArchitecture: "Running on Render's free tier (because I'm broke). Flask backend, takes about 2 seconds for predictions. Got ~1000 requests the first month after posting on r/learnmachinelearning, now averages maybe 100/month.",
      results: [
        "87.1% accuracy (started at 71% in June, fixed by late July)",
        "Takes about 2 seconds for predictions - wanted faster but Render's free tier is slow",
        "Built a dashboard with Chart.js (first time using it)",
        "WHO guidelines as validation layer-this is what fixed the accuracy issue"
      ],
      technologies: ["Python", "TensorFlow", "Scikit-Learn", "Pandas", "Flask", "NumPy"],
      techIcons: [SiPython, SiTensorflow, SiScikitlearn, SiPandas, SiFlask, SiNumpy],
      github: "https://github.com/rogerdemello/LifePulse",
      demo: "https://lifepulse-9vz4.onrender.com/",
      gradient: "from-primary to-secondary",
      icon: <FaHeartbeat size={40} />
    },
    {
      title: "DealSentry: Intelligent Proposal Guard",
      description:
        "AI compliance platform for sales proposals. Validates documents, scores risk, and manages approval workflows with audit trails. Integrates with CRM systems and uses Azure OpenAI to analyze contract clauses, detect policy violations, and provide intelligent risk assessments before client submission.",
      problem: "Sales teams need to validate proposals against compliance rules and company policies before sending to clients, but manual review is slow and error-prone.",
      approach: "React/TypeScript frontend with Node.js backend. Rule-based compliance engine combined with Azure OpenAI for intelligent risk analysis. PostgreSQL for data persistence, document processing pipeline for DOCX/PDF extraction.",
      cloudArchitecture: "Integrated with CRM tools (like HubSpot), Gmail for notifications, DocuSign for e-signatures. Role-based access control with approval workflows and contract lifecycle tracking.",
      results: [
        "Automated compliance validation with AI-driven risk scoring",
        "Document ingestion supporting DOCX and PDF formats",
        "CRM integrations (Salesforce, HubSpot) and DocuSign workflows",
        "Complete audit trails and role-based access control",
        "Faster approval cycles and reduced compliance risk"
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Azure OpenAI", "HubSpot API"],
      techIcons: [SiReact, SiPython, SiFastapi, SiNumpy],
      github: "https://github.com/rogerdemello/DealSentry",
      demo: "#",
      gradient: "from-accent to-primary",
      icon: <FaShieldAlt size={40} />
    },
    {
      title: "LabLingo AI: Language Learning Platform",
      description:
        "AI language learning platform with speech recognition and pronunciation scoring. Used Whisper for speech-to-text and built phoneme comparison for pronunciation feedback. Features adaptive lesson difficulty, instructor dashboards for tracking student progress, and supports multiple languages with real-time feedback on speaking accuracy.",
      problem: "Language learners need speaking practice and pronunciation feedback, but 1-on-1 tutors are expensive and scheduling sucks.",
      approach: "Real-time speech-to-text with Whisper, phoneme extraction and comparison for scoring, adaptive lessons based on performance. Built instructor dashboards for progress tracking.",
      cloudArchitecture: "Docker containers with separate workers for GPU-heavy STT/TTS. PostgreSQL for user data, S3 for audio files. Auto-scaling was a pain but I got it working.",
      results: [
        "Real-time speech recognition using OpenAI Whisper",
        "Phoneme-level pronunciation scoring (still tuning the threshold)",
        "Adaptive difficulty-if you're doing well, lessons get harder",
        "Works with multiple languages, tested Spanish and French so far",
        "Instructor dashboard shows class progress and individual stats",
        "Export to CSV for gradebooks"
      ],
      technologies: ["FastAPI", "React", "Whisper", "Ollama", "PyTorch", "Sentence-Transformers", "FAISS", "PostgreSQL"],
      techIcons: [SiFastapi, SiReact, SiPython, SiPytorch, SiTensorflow],
      github: "https://github.com/rogerdemello/LabLingo-AI",
      demo: "#",
      gradient: "from-decorative to-decorative-light",
      icon: <FaMicrophone size={40} />
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
            A selection of projects showcasing my skills in machine learning, cloud deployment, and AI development. Each project highlights a unique problem, my approach to solving it, and the results achieved. Check out the code and demos!
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

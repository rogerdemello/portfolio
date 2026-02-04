"use client";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaChartLine, FaCloud, FaCog } from "react-icons/fa";
import { SiPython, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiFastapi, SiFlask, SiReact, SiOpencv, SiPytorch } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "LifePulse: AI Health Monitoring System",
      description:
        "Smart Health Calculator analyzing user lifestyle and body data with 87.1% accuracy in detecting lifestyle risks. Combined AI models with rule-based logic to assess sleep patterns, activity levels, and dietary habits aligned with WHO guidelines.",
      problem: "Need for accessible, accurate health risk assessment without expensive medical equipment",
      approach: "Hybrid AI approach combining machine learning models with WHO-aligned rule-based logic",
      cloudArchitecture: "Deployed on Render with Flask backend, serving 1000+ requests monthly",
      results: [
        "87.1% accuracy in multi-disease prediction",
        "Real-time health risk assessment",
        "WHO guideline integration",
        "Interactive data visualization dashboard"
      ],
      technologies: ["Python", "TensorFlow", "Scikit-Learn", "Pandas", "Flask", "NumPy"],
      techIcons: [SiPython, SiTensorflow, SiScikitlearn, SiPandas, SiFlask, SiNumpy],
      github: "https://github.com/rogerdemello/LifePulse",
      demo: "https://lifepulse-9vz4.onrender.com/",
      gradient: "from-primary to-secondary",
      icon: <FaChartLine size={40} />
    },
    {
      title: "Cartoonize: Photo-to-Cartoon Art Transformer",
      description:
        "Full-stack application converting photos into high-quality cartoon artwork using advanced OpenCV pipelines and optional neural style transfer. Features FastAPI backend with LAB color quantization, multi-pass bilateral filtering, and multi-method edge detection.",
      problem: "Complex image stylization requiring balance between artistic quality and computational efficiency",
      approach: "Multi-stage OpenCV pipeline with optional PyTorch neural style transfer for enhanced results",
      cloudArchitecture: "Serverless FastAPI deployment ready for AWS Lambda or Vercel functions",
      results: [
        "Advanced denoising and color quantization",
        "Robust edge detection and stylization",
        "Production-ready React frontend",
        "Optional neural style transfer integration"
      ],
      technologies: ["FastAPI", "Python", "OpenCV", "NumPy", "React", "PyTorch"],
      techIcons: [SiFastapi, SiPython, SiOpencv, SiNumpy, SiReact, SiPytorch],
      github: "https://github.com/rogerdemello/ImageToToonArt",
      demo: "#",
      gradient: "from-accent to-primary",
      icon: <FaCog size={40} />
    },
    {
      title: "LabLingo AI: Interactive Language-Learning Platform",
      description:
        "AI-driven multimedia language lab for real-time spoken practice, pronunciation scoring, adaptive lessons, and instructor analytics. Real-time STT/TTS conversation exercises with automated pronunciation scoring and adaptive lesson pipelines.",
      problem: "Learners need realistic speaking practice, instant feedback on pronunciation, and contextual examples—without requiring live tutors",
      approach: "Real-time STT/TTS conversation exercises, automated pronunciation scoring, adaptive lesson pipelines, and instructor dashboards for monitoring progress",
      cloudArchitecture: "Containerized microservices with autoscaled model workers (GPU for STT/TTS), PostgreSQL, S3-compatible storage, and optional edge STT for mobile",
      results: [
        "Real-time speech-to-text and text-to-speech for conversational drills",
        "Phoneme-level pronunciation feedback and confidence scores",
        "Adaptive curriculum that adjusts difficulty by performance",
        "Multilingual support with locale-aware tokenization",
        "Instructor dashboards with progress tracking and cohort analytics",
        "CSV/JSON export and webhook integration for LMS"
      ],
      technologies: ["FastAPI", "React", "Whisper", "PyTorch", "Sentence-Transformers", "FAISS", "PostgreSQL"],
      techIcons: [SiFastapi, SiReact, SiPython, SiPytorch, SiTensorflow],
      github: "https://github.com/rogerdemello/LabLingo-AI",
      demo: "#",
      gradient: "from-decorative to-decorative-light",
      icon: <FaCloud size={40} />
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
            Featured <span className="gradient-text">ML Projects</span>
          </h2>
          <p className="text-foreground-muted text-base md:text-lg max-w-3xl mx-auto">
            Production-ready AI systems showcasing machine learning expertise and cloud deployment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-background-tertiary/80 to-background-secondary/80 backdrop-blur-sm rounded-2xl border border-card-border hover:border-primary/30 overflow-hidden transition-all duration-350 ease-smooth hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Top: Gradient Header */}
              <div className={`bg-gradient-to-br ${project.gradient} p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  {project.techIcons.slice(0, 3).map((Icon, idx) => (
                    <Icon 
                      key={idx} 
                      className="absolute text-white/30 text-5xl" 
                      style={{
                        top: `${(idx % 2) * 50}%`,
                        left: `${(idx % 3) * 40}%`,
                        transform: `rotate(${idx * 20}deg)`
                      }}
                    />
                  ))}
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-white mb-3 transform group-hover:scale-105 transition-transform duration-350 ease-smooth">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-foreground-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Quick Info */}
                <div className="space-y-3 mb-4">
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                    <h4 className="text-xs font-bold text-blue-400 mb-1 uppercase">Problem</h4>
                    <p className="text-xs text-foreground-muted line-clamp-2">{project.problem}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                    <h4 className="text-xs font-bold text-purple-400 mb-1 uppercase">Solution</h4>
                    <p className="text-xs text-gray-400 line-clamp-2">{project.approach}</p>
                  </div>
                </div>

                {/* Key Results */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-green-400 mb-2 uppercase">Key Results</h4>
                  <div className="space-y-1">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-foreground-muted">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-[10px]" />
                        <span className="line-clamp-1">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-background-secondary/80 text-foreground rounded text-xs font-mono border border-card-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo && project.demo !== "#" ? project.demo : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300
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
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300
                      ${project.github && project.github !== "#" ? "bg-background-tertiary text-foreground border border-card-border hover:bg-background-secondary hover:scale-105" : "bg-background-tertiary text-foreground-muted cursor-not-allowed"}`}
                    style={project.github && project.github !== "#" ? {} : { pointerEvents: "none" }}
                  >
                    <FaGithub size={12} />
                    {project.github && project.github !== "#" ? "Code" : "Private"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

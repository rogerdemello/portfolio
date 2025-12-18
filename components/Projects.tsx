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
      gradient: "from-emerald-500 to-teal-500",
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
      gradient: "from-amber-500 to-orange-500",
      icon: <FaCog size={40} />
    },
    {
      title: "AgenticWriter: AI Multi-Agent Content Pipeline",
      description:
        "Lightweight multi-agent pipeline converting product JSON into ready-to-publish content (FAQ, product pages, comparison pages). Serverless API with structured JSON outputs for static sites and headless CMS integration.",
      problem: "Time-consuming manual content creation for product documentation and marketing materials",
      approach: "Multi-agent architecture with specialized agents for question generation, answering, and page assembly",
      cloudArchitecture: "Deployed on Vercel as serverless functions with FastAPI backend",
      results: [
        "Automated FAQ and product page generation",
        "Structured JSON outputs for CMS integration",
        "CI-friendly with comprehensive test coverage",
        "Modular agent framework for extensibility"
      ],
      technologies: ["Python 3.11+", "FastAPI", "Pydantic", "Jinja2", "pytest"],
      techIcons: [SiPython, SiFastapi, SiFlask],
      github: "https://github.com/rogerdemello/AI-agentic-content-generation-system/",
      demo: "https://genaiwriter.vercel.app",
      gradient: "from-indigo-500 to-violet-500",
      icon: <FaCloud size={40} />
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-emerald-500/10 to-sage-500/10 rounded-full border border-emerald-500/30 backdrop-blur-sm">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-100 mb-4">
            Featured <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">ML Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Production-ready AI systems showcasing machine learning expertise and cloud deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10"
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
                  <div className="text-white mb-3 transform group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Quick Info */}
                <div className="space-y-3 mb-4">
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                    <h4 className="text-xs font-bold text-blue-400 mb-1 uppercase">Problem</h4>
                    <p className="text-xs text-gray-400 line-clamp-2">{project.problem}</p>
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
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
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
                        className="px-2 py-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-300 rounded text-xs font-mono border border-gray-600/30"
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
                      ${project.demo && project.demo !== "#" ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 hover:scale-105" : "bg-gray-700/50 text-gray-500 cursor-not-allowed"}`}
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
                      ${project.github && project.github !== "#" ? "bg-gray-800/70 text-white border border-gray-700/50 hover:bg-gray-800 hover:scale-105" : "bg-gray-700/50 text-gray-500 cursor-not-allowed"}`}
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

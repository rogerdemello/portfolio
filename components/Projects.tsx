"use client";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { SiPython, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiFlask } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "LifePulse – AI & Rule-Based Health Monitoring System",
      description:
        "Smart Health Calculator analyzing user lifestyle and body data with 87.1% accuracy in detecting lifestyle risks. Combined AI models with rule-based logic to assess sleep patterns, activity levels, and dietary habits aligned with WHO guidelines.",
      role: "Lead Developer & ML Engineer",
      features: [
        "Multi-disease prediction with 87.1% accuracy",
        "Real-time health risk assessment",
        "Data visualization dashboard",
        "WHO guideline integration"
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-Learn", "Flask"],
      techIcons: [SiPython, SiTensorflow, SiPandas, SiScikitlearn, SiFlask],
      github: "https://github.com/rogerdemello/LifePulse",
      demo: "https://lifepulse-9vz4.onrender.com/",
      image: "/projects/project1.jpg",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "GAN for Image Generation",
      description:
        "Improved Generative Adversarial Network (GAN) to generate realistic images from random noise. Implemented Generator and Discriminator models, trained on MNIST dataset demonstrating high-quality results.",
      role: "ML Researcher & Developer",
      features: [
        "Custom GAN architecture",
        "60k MNIST dataset training",
        "Real-time image generation",
        "Quality evaluation metrics"
      ],
      technologies: ["Python", "TensorFlow", "Keras", "Deep Learning", "Jupyter"],
      techIcons: [SiTensorflow, SiPython, SiJupyter, SiNumpy],
      github: "https://github.com/rogerdemello/ImageToToonArt",
      demo: "#",
      image: "/projects/project2.jpg",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "ML-Based Sleep Disorder Prediction Tool",
      description:
        "Enhanced ML-based tool to predict sleep disorders using lifestyle and health data. Achieved 87% accuracy in predicting sleep disorders by analyzing stress, sleep duration, and blood pressure.",
      role: "Data Scientist & ML Developer",
      features: [
        "87% prediction accuracy",
        "Feature importance analysis",
        "Interactive visualizations",
        "Cross-validation testing"
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "Data Analysis", "NumPy"],
      techIcons: [SiPython, SiScikitlearn, SiPandas, SiNumpy],
      github: "https://github.com/yourgithub/sleep-disorder-prediction",
      demo: "#",
      image: "/projects/project3.jpg",
      gradient: "from-green-500 to-teal-500"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Selected works demonstrating expertise in machine learning, deep learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden border border-gray-700 transform hover:-translate-y-2 tilt-on-hover"
            >
              {/* Project Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.techIcons.slice(0, 3).map((Icon, idx) => (
                      <Icon key={idx} className="text-white/30 text-5xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-sm">{project.role.split(' & ')[0]}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4 space-y-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Key Features:</p>
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Icons */}
                <div className="flex gap-3 mb-4 flex-wrap">
                  {project.techIcons.map((Icon, idx) => (
                    <div 
                      key={idx}
                      className="p-2 bg-gray-800 rounded-lg hover:scale-110 transition-transform border border-gray-700"
                      title={project.technologies[idx]}
                    >
                      <Icon className="text-xl text-gray-400" />
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-400 rounded-full text-xs font-medium border border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: Only for first two projects */}
                {index !== 2 && (
                  <div className="flex gap-3">
                    <a
                      href={project.demo && project.demo !== "#" ? project.demo : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium btn-ripple magnetic-hover transition-all duration-300
                        ${project.demo && project.demo !== "#" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105" : "bg-gray-700 text-gray-400 cursor-not-allowed"}`}
                      style={project.demo && project.demo !== "#" ? {} : { pointerEvents: "none" }}
                    >
                      <FaExternalLinkAlt />
                      {project.demo && project.demo !== "#" ? "Live Demo" : "Demo Coming Soon"}
                    </a>
                    <a
                      href={project.github && project.github !== "#" ? project.github : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium btn-ripple magnetic-hover transition-all duration-300
                        ${project.github && project.github !== "#" ? "bg-gray-900 text-white hover:bg-gray-800 hover:scale-105" : "bg-gray-700 text-gray-400 cursor-not-allowed"}`}
                      style={project.github && project.github !== "#" ? {} : { pointerEvents: "none" }}
                    >
                      <FaGithub />
                      {project.github && project.github !== "#" ? "GitHub" : "Code Coming Soon"}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

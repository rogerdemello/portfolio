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

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <FaBrain size={32} />,
      color: "from-accent to-primary",
      description: "LLMs, RAG, and agents — plus a solid ML foundation",
      skills: [
        { name: "LLMs & RAG", icon: <FaBrain size={24} /> },
        { name: "Agentic AI", icon: <FaRobot size={24} /> },
        { name: "LangChain", icon: <SiLangchain size={24} /> },
        { name: "LlamaIndex", icon: <FaProjectDiagram size={24} /> },
        { name: "OpenAI API", icon: <SiOpenai size={24} /> },
        { name: "Hugging Face", icon: <SiHuggingface size={24} /> },
        { name: "Prompt Engineering", icon: <FaComments size={24} /> },
        { name: "Vector Databases", icon: <FaDatabase size={24} /> },
        { name: "Semantic Search", icon: <FaSearch size={24} /> },
        { name: "TensorFlow & PyTorch", icon: <SiTensorflow size={24} /> },
        { name: "Scikit-learn", icon: <SiScikitlearn size={24} /> },
      ],
    },
    {
      title: "Backend Engineering",
      icon: <FaServer size={32} />,
      color: "from-primary to-secondary",
      description: "Async APIs and data layers built to scale",
      skills: [
        { name: "Python", icon: <SiPython size={24} /> },
        { name: "FastAPI", icon: <SiFastapi size={24} /> },
        { name: "REST APIs", icon: <FaServer size={24} /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
        { name: "MongoDB", icon: <SiMongodb size={24} /> },
        { name: "Async Programming", icon: <FaCode size={24} /> },
        { name: "Microservices", icon: <FaProjectDiagram size={24} /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <SiAmazon size={32} />,
      color: "from-primary to-accent",
      description: "Deploying and shipping reliably",
      skills: [
        { name: "AWS", icon: <SiAmazon size={24} /> },
        { name: "Docker", icon: <SiDocker size={24} /> },
        { name: "Git & GitHub", icon: <SiGithub size={24} /> },
        { name: "CI/CD", icon: <FaTools size={24} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 px-5 py-2 sm:px-6 bg-accent/10 rounded-full border border-accent/30 backdrop-blur-sm">
            <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">
              Skills & Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Technical <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-base md:text-lg">
            The stack I use to build and ship AI systems end to end — from LLM applications, RAG, and agents down to the async backends and cloud they run on, grounded in a solid machine learning foundation.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-card/60 backdrop-blur-md rounded-2xl border border-border-color hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_hsla(var(--primary),0.15)] hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-3 bg-gradient-to-r ${category.color} text-white rounded-xl shadow-lg group-hover:shadow-[0_0_20px_-5px_hsla(var(--primary),0.4)] transition-all duration-500`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-foreground-muted mt-0.5 leading-snug">{category.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group/skill p-2.5 bg-background-tertiary rounded-lg border border-border-color/50 hover:border-primary/50 hover:bg-background-tertiary/80 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-2 z-10">
                      <div className="text-foreground-muted group-hover/skill:text-primary transition-colors duration-300 text-lg">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-semibold text-foreground group-hover/skill:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Footer */}
        <div className="mt-10 md:mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-2 p-4 sm:p-5 bg-background-tertiary/50 backdrop-blur-sm rounded-xl border border-card-border max-w-4xl mx-auto">
            <span className="text-foreground-muted font-semibold text-sm mr-2">Also proficient in:</span>
            {['Pandas', 'NumPy', 'Feature Engineering', 'Statistical Analysis', 'EDA', 'C++', 'Java', 'SQL', 'DSA', 'Linux'].map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-background-secondary/80 rounded-lg text-xs font-medium text-foreground border border-card-border hover:border-primary/50 hover:text-primary transition-all duration-300 ease-smooth cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

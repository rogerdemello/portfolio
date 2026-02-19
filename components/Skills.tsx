"use client";
import { FaCode, FaDatabase, FaServer, FaBrain, FaJava, FaTools } from "react-icons/fa";
import { 
  SiCplusplus, 
  SiPython, 
  SiC,
  SiTensorflow, 
  SiScikitlearn, 
  SiPandas, 
  SiNumpy,
  SiAmazon,
  SiPytorch,
  SiKeras,
  SiOpencv,
  SiFastapi,
  SiFlask,
  SiGit,
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <FaBrain size={32} />,
      color: "from-accent to-primary",
      description: "Building models with TensorFlow and PyTorch",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow size={24} /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn size={24} /> },
        { name: "PyTorch", icon: <SiPytorch size={24} /> },
        { name: "Keras", icon: <SiKeras size={24} /> },
        { name: "Pandas", icon: <SiPandas size={24} /> },
        { name: "NumPy", icon: <SiNumpy size={24} /> },
        { name: "OpenCV", icon: <SiOpencv size={24} /> },
      ],
    },
    {
      title: "Programming Languages",
      icon: <FaCode size={32} />,
      color: "from-primary to-secondary",
      description: "Python mostly, C++ for coursework",
      skills: [
        { name: "Python", icon: <SiPython size={24} /> },
        { name: "C++", icon: <SiCplusplus size={24} /> },
        { name: "C", icon: <SiC size={24} /> },
        { name: "Java", icon: <FaJava size={24} /> },
        { name: "SQL", icon: <FaDatabase size={24} /> },
      ],
    },
    {
      title: "Cloud & Infrastructure (AWS)",
      icon: <SiAmazon size={32} />,
      color: "from-primary to-accent",
      description: "Learning AWS deployment, EC2 and S3 mainly",
      skills: [
        { name: "AWS EC2", icon: <SiAmazon size={24} /> },
        { name: "AWS S3", icon: <SiAmazon size={24} /> },
        { name: "AWS Lambda", icon: <SiAmazon size={24} /> },
        { name: "AWS RDS", icon: <SiAmazon size={24} /> },
        { name: "IAM & VPC", icon: <SiAmazon size={24} /> },
      ],
    },
    {
      title: "Frameworks & Tools",
      icon: <FaTools size={32} />,
      color: "from-secondary to-primary",
      description: "FastAPI and Flask for backends, Git for version control",
      skills: [
        { name: "FastAPI", icon: <SiFastapi size={24} /> },
        { name: "Flask", icon: <SiFlask size={24} /> },
        { name: "Git", icon: <SiGit size={24} /> },
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
            Technologies I've actually used in projects or coursework. Pretty comfortable with Python and the ML stack-TensorFlow, scikit-learn, Pandas. Exploring AWS. React is new for me, built one project with it so far.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
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
            {['OOP', 'DSA', 'DBMS', 'OS', 'REST APIs', 'CI/CD', 'Linux'].map((skill, idx) => (
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

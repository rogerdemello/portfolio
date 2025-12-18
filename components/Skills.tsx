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
  SiGit
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <FaBrain size={32} />,
      color: "from-amber-500 to-orange-500",
      description: "Building intelligent systems and predictive models",
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
      color: "from-emerald-500 to-teal-500",
      description: "Strong foundation in multiple paradigms",
      skills: [
        { name: "Python", icon: <SiPython size={24} /> },
        { name: "C++", icon: <SiCplusplus size={24} /> },
        { name: "C", icon: <SiC size={24} /> },
        { name: "Java", icon: <FaJava size={24} /> },
      ],
    },
    {
      title: "Cloud & Infrastructure (AWS)",
      icon: <SiAmazon size={32} />,
      color: "from-orange-500 to-amber-500",
      description: "Scalable cloud architecture and deployment",
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
      color: "from-green-500 to-teal-500",
      description: "Modern development and deployment tools",
      skills: [
        { name: "FastAPI", icon: <SiFastapi size={24} /> },
        { name: "Flask", icon: <SiFlask size={24} /> },
        { name: "Git", icon: <SiGit size={24} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full border border-amber-500/30 backdrop-blur-sm">
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
              Skills & Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-100 mb-4">
            Technical <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive toolkit for building and deploying production-ready AI solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-3 bg-gradient-to-r ${category.color} text-white rounded-xl transform group-hover:scale-110 transition-transform shadow-lg`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-gray-100 group-hover:text-blue-400 transition-colors leading-tight">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="group/skill p-2.5 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/30 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-gray-400 group-hover/skill:text-blue-400 transition-colors text-lg">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-semibold text-gray-300 group-hover/skill:text-blue-400 transition-colors">
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
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-2 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 max-w-4xl mx-auto">
            <span className="text-gray-400 font-semibold text-sm mr-2">Also proficient in:</span>
            {['OOP', 'DSA', 'DBMS', 'OS', 'REST APIs', 'CI/CD', 'Linux'].map((skill, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-lg text-xs font-medium text-gray-300 border border-gray-600/30 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 cursor-default"
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

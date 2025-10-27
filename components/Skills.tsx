"use client";
import { FaCode, FaDatabase, FaServer, FaBrain, FaJava } from "react-icons/fa";
import { 
  SiCplusplus, 
  SiPython, 
  SiC,
  SiTensorflow, 
  SiScikitlearn, 
  SiPandas, 
  SiNumpy,
  SiAmazon
} from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode size={32} />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "C++", icon: <SiCplusplus size={24} />, level: 90 },
        { name: "Python", icon: <SiPython size={24} />, level: 85 },
        { name: "C", icon: <SiC size={24} />, level: 80 },
        { name: "Java", icon: <FaJava size={24} />, level: 75 },
      ],
    },
    {
      title: "Machine Learning & AI",
      icon: <FaBrain size={32} />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow size={24} />, level: 80 },
        { name: "Scikit-Learn", icon: <SiScikitlearn size={24} />, level: 85 },
        { name: "Pandas", icon: <SiPandas size={24} />, level: 85 },
        { name: "NumPy", icon: <SiNumpy size={24} />, level: 80 },
      ],
    },
    {
      title: "Cloud Computing",
      icon: <FaServer size={32} />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS EC2", icon: <SiAmazon size={24} />, level: 80 },
        { name: "AWS S3", icon: <SiAmazon size={24} />, level: 80 },
        { name: "AWS Lambda", icon: <SiAmazon size={24} />, level: 75 },
        { name: "AWS RDS", icon: <SiAmazon size={24} />, level: 75 },
      ],
    },
    {
      title: "Core Concepts",
      icon: <FaDatabase size={32} />,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "OOP", icon: <FaCode size={24} />, level: 90 },
        { name: "DSA", icon: <FaCode size={24} />, level: 85 },
        { name: "DBMS", icon: <FaDatabase size={24} />, level: 80 },
        { name: "OS", icon: <FaServer size={24} />, level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-purple-900/50 rounded-lg border border-purple-700">
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
              Skills
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to deliver high-quality solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700 hover:scale-105 tilt-on-hover"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} text-white rounded-xl transform group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-100">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group/skill">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 transition-colors hover:scale-105 transform duration-200">
                      <div className="text-gray-400 group-hover/skill:text-blue-400 transition-colors transform group-hover/skill:rotate-12 group-hover/skill:scale-125 duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover/skill:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

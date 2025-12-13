"use client";
import { FaGraduationCap, FaAward } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Electronics and Communication",
      school: "Shri Ramdeobaba College of Engineering and Management",
      period: "Nov 2022 – May 2026",
      description: "CGPA: 8.73 - Focused on electronics, communication systems, and embedded technologies.",
      icon: <FaGraduationCap size={28} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Minor in Artificial Intelligence and Machine Learning",
      school: "Shri Ramdeobaba College of Engineering and Management",
      period: "May 2023 – Dec 2025",
      description: "CGPA: 9.5 - Specialized coursework in AI, ML algorithms, deep learning, and data science.",
      icon: <FaAward size={28} />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="education" className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-6 py-2 bg-blue-900/50 rounded-lg border border-blue-700">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
              Education
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Academic Background
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building a strong foundation in Electronics, Computer Engineering, and Artificial Intelligence
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700 hover:scale-105"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color} rounded-t-2xl`}></div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 bg-gradient-to-r ${edu.color} text-white rounded-xl transform group-hover:scale-110 transition-transform`}>
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-medium text-blue-400 mb-1">
                    {edu.school}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {edu.period}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

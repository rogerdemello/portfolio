"use client";
import { FaCode, FaProjectDiagram, FaCertificate, FaTrophy } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaCode />,
      value: "500+",
      label: "Problems Solved",
      description: "LeetCode, CodeChef, HackerRank",
      color: "from-[#FF6B6B] to-[#FF8E8E]",
    },
    {
      icon: <FaProjectDiagram />,
      value: "10+",
      label: "Projects Built",
      description: "AI/ML & Software Solutions",
      color: "from-[#4ECDC4] to-[#45B7AF]",
    },
    {
      icon: <FaCertificate />,
      value: "3",
      label: "Certifications",
      description: "AWS & ML Specializations",
      color: "from-[#FFE66D] to-[#FFC93C]",
    },
    {
      icon: <FaTrophy />,
      value: "87%",
      label: "ML Accuracy",
      description: "Health Monitoring System",
      color: "from-[#A8E6CF] to-[#87D3B0]",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900    relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4ECDC4]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 transform hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                <div className="text-2xl sm:text-3xl">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-300 mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 hidden sm:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

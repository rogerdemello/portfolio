"use client";
import { FaGraduationCap, FaAward, FaCertificate, FaBriefcase, FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank, SiAmazon } from "react-icons/si";

export default function Experience() {
  const education = [
    {
      degree: "B.Tech in Electronics and Communication",
      school: "Shri Ramdeobaba College of Engineering and Management",
      period: "Nov 2022 – May 2026",
      cgpa: "8.73",
      description: "Focused on electronics, communication systems, and embedded technologies.",
      icon: <FaGraduationCap size={28} />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Minor in Artificial Intelligence and Machine Learning",
      school: "Shri Ramdeobaba College of Engineering and Management",
      period: "May 2023 – Dec 2025",
      cgpa: "9.5",
      description: "Specialized coursework in AI, ML algorithms, deep learning, and data science.",
      icon: <FaAward size={28} />,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "October 2025",
      icon: <SiAmazon size={28} />,
      gradient: "from-orange-500 to-amber-500",
      description: "Validated foundational knowledge of AWS Cloud services, security, and architecture best practices.",
    },
    {
      title: "Introduction to Machine Learning on AWS",
      issuer: "Coursera/AWS",
      date: "July 2025",
      icon: <FaCertificate size={28} />,
      gradient: "from-blue-500 to-indigo-500",
      description: "Comprehensive understanding of ML concepts and implementation using AWS services like SageMaker.",
    },
    {
      title: "NCC 'A' and 'B' Certificate",
      issuer: "National Cadet Corps",
      date: "2024-2025",
      icon: <FaAward size={28} />,
      gradient: "from-green-500 to-teal-500",
      description: "Leadership, discipline, and teamwork development through active NCC training and drills.",
    },
  ];

  const workExperience = [
    {
      title: "Machine Learning Intern",
      company: "CFM, RCOEM",
      period: "May 2025 – July 2025",
      icon: <FaBriefcase size={28} />,
      gradient: "from-purple-500 to-pink-500",
      highlights: [
        "Enhanced ML-based tool to predict sleep disorders using lifestyle and health data",
        "Attained 87% accuracy in predictions analyzing stress, sleep duration, and blood pressure",
        "Utilized Python, Scikit-Learn, and Pandas for model development and data analysis"
      ],
    },
    {
      title: "AWS Cloud Computing Training",
      company: "RCOEM",
      period: "March 2025 - April 2025",
      icon: <SiAmazon size={28} />,
      gradient: "from-orange-500 to-amber-500",
      highlights: [
        "Gained hands-on experience with core AWS services: EC2, S3, RDS, IAM, VPC, and CloudWatch",
        "Designed and deployed scalable web application architecture using Auto Scaling and Load Balancer",
        "Implemented secure access management with IAM roles, policies, and multi-factor authentication (MFA)"
      ],
    },
  ];

  const competitiveCoding = [
    {
      platform: "LeetCode",
      username: "rogerdemello",
      url: "https://leetcode.com/u/rogerdemello/",
      icon: <SiLeetcode size={32} />,
      color: "text-orange-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30",
    },
    {
      platform: "CodeChef",
      username: "droger289",
      url: "https://www.codechef.com/users/droger289/",
      icon: <SiCodechef size={32} />,
      color: "text-amber-600",
      bgColor: "from-amber-500/10 to-orange-500/10",
      borderColor: "border-amber-500/30",
    },
    {
      platform: "HackerRank",
      username: "rogerdemello",
      url: "https://www.hackerrank.com/profile/rogerdemello",
      icon: <SiHackerrank size={32} />,
      color: "text-green-500",
      bgColor: "from-green-500/10 to-teal-500/10",
      borderColor: "border-green-500/30",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full border border-green-500/30 backdrop-blur-sm">
            <span className="text-sm font-semibold text-green-400 uppercase tracking-wide">
              Experience & Credentials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-100 mb-4">
            Professional <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Continuous learning and hands-on experience in AI, ML, and Cloud technologies
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Work Experience */}
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              {workExperience.map((exp, index) => (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${exp.gradient} rounded-xl transform group-hover:scale-110 transition-transform shadow-lg`}>
                      <div className="text-white">
                        {exp.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-100 mb-1 group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-base font-semibold text-blue-400 mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 font-mono">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-purple-500 mt-1 flex-shrink-0">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-display font-bold text-gray-100 mb-8 flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <FaGraduationCap className="text-white" size={24} />
              </div>
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient} rounded-t-2xl opacity-50`}></div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${edu.gradient} rounded-xl transform group-hover:scale-110 transition-transform shadow-lg`}>
                      <div className="text-white">
                        {edu.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-base font-medium text-blue-400 mb-1">
                        {edu.school}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                        <span className="font-mono">{edu.period}</span>
                        <span className="text-gray-600">•</span>
                        <span className="font-bold text-green-400">CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-display font-bold text-gray-100 mb-8 flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl">
                <FaCertificate className="text-white" size={24} />
              </div>
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/10"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${cert.gradient} rounded-xl mb-4 transform group-hover:scale-110 transition-transform shadow-lg`}>
                    <div className="text-white">
                      {cert.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-orange-400 transition-colors leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-1 font-semibold">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-500 mb-3 font-mono">
                    {cert.date}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Coding */}
          <div>
            <h3 className="text-3xl font-display font-bold text-gray-100 mb-8 flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl">
                <FaCode className="text-white" size={24} />
              </div>
              Competitive Programming
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {competitiveCoding.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-8 bg-gradient-to-br ${platform.bgColor} backdrop-blur-sm rounded-2xl border ${platform.borderColor} hover:scale-105 transition-all duration-300 text-center hover:shadow-xl hover:shadow-green-500/10`}
                >
                  <div className={`${platform.color} mb-4 flex justify-center transform group-hover:scale-110 transition-transform`}>
                    {platform.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-green-400 transition-colors">
                    {platform.platform}
                  </h4>
                  <p className="text-gray-400 font-mono text-sm">
                    @{platform.username}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

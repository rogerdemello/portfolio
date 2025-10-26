"use client";
import { FaCertificate, FaAward, FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";

export default function Training() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "October 2025",
      icon: <FaCertificate size={24} />,
      description: "Validated foundational knowledge of AWS Cloud services, security, and architecture best practices.",
    },
    {
      title: "Introduction to Machine Learning on AWS",
      issuer: "Coursera/AWS",
      date: "July 2025",
      icon: <FaCertificate size={24} />,
      description: "Comprehensive understanding of ML concepts and implementation using AWS services like SageMaker.",
    },
    {
      title: "NCC 'A' and 'B' Certificate",
      issuer: "National Cadet Corps",
      date: "2024-2025",
      icon: <FaAward size={24} />,
      description: "Leadership, discipline, and teamwork development through active NCC training and drills.",
    },
  ];

  const competitiveCoding = [
    {
      platform: "LeetCode",
      username: "rogerdemello",
      url: "https://leetcode.com/u/rogerdemello/",
      icon: <SiLeetcode size={32} />,
      color: "text-orange-500",
    },
    {
      platform: "CodeChef",
      username: "droger289",
      url: "https://www.codechef.com/users/droger289/",
      icon: <SiCodechef size={32} />,
      color: "text-brown-600",
    },
    {
      platform: "HackerRank",
      username: "rogerdemello",
      url: "https://www.hackerrank.com/profile/rogerdemello",
      icon: <SiHackerrank size={32} />,
      color: "text-green-500",
    },
  ];

  const experience = [
    {
      title: "Machine Learning Intern",
      provider: "CFM, RCOEM",
      date: "May 2025 – July 2025",
      highlights: [
        "Enhanced ML-based tool to predict sleep disorders using lifestyle and health data",
        "Attained 87% accuracy in predictions analyzing stress, sleep duration, and blood pressure",
        "Utilized Python, Scikit-Learn, and Pandas for model development and data analysis"
      ],
    },
    {
      title: "AWS Cloud Computing Training",
      provider: "RCOEM",
      date: "March 2025 - April 2025",
      highlights: [
        "Gained hands-on experience with core AWS services: EC2, S3, RDS, IAM, VPC, and CloudWatch",
        "Designed and deployed scalable web application architecture using Auto Scaling and Load Balancer",
        "Implemented secure access management with IAM roles, policies, and multi-factor authentication (MFA)"
      ],
    },
  ];

  return (
    <section id="training" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-green-900/50 rounded-lg border border-green-700">
            <span className="text-sm font-semibold text-green-400 uppercase tracking-wide">
              Certifications & Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Professional Development
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and practical experience in the field
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
              <FaAward className="text-blue-400" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-gray-700 hover:border-blue-500"
                >
                  <div className="text-blue-400 mb-3 transform group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 mb-2 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">
                    {cert.date}
                  </p>
                  <p className="text-sm text-gray-400">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Coding */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
              <FaCode className="text-blue-400" />
              Competitive Coding Profiles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {competitiveCoding.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-8 bg-gray-800 rounded-lg shadow-md hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 border-2 border-gray-700 hover:border-blue-500 text-center"
                >
                  <div className={`${platform.color} mb-4 flex justify-center transform group-hover:scale-110 transition-transform`}>
                    {platform.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
                    {platform.platform}
                  </h4>
                  <p className="text-gray-400 font-mono">
                    @{platform.username}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Experience/Training */}
          <div>
            <h3 className="text-3xl font-bold text-gray-100 mb-6">
              Experience & Training
            </h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-l-4 border-blue-500 hover:border-l-8"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h4 className="text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-sm text-gray-500 mt-2 md:mt-0 font-medium">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-lg text-blue-400 mb-4 font-semibold">
                    {item.provider}
                  </p>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

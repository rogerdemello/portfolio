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
      gradient: "from-primary to-secondary",
    },
    {
      degree: "Minor in Artificial Intelligence and Machine Learning",
      school: "Shri Ramdeobaba College of Engineering and Management",
      period: "May 2023 – Dec 2025",
      cgpa: "9.5",
      description: "Specialized coursework in AI, ML algorithms, deep learning, and data science.",
      icon: <FaAward size={28} />,
      gradient: "from-accent to-primary",
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "October 2025",
      icon: <SiAmazon size={28} />,
      gradient: "from-primary to-accent",
      description: "Validated foundational knowledge of AWS Cloud services, security, and architecture best practices.",
    },
    {
      title: "Introduction to Machine Learning on AWS",
      issuer: "Coursera/AWS",
      date: "July 2025",
      icon: <FaCertificate size={28} />,
      gradient: "from-primary to-secondary",
      description: "Comprehensive understanding of ML concepts and implementation using AWS services like SageMaker.",
    },
    {
      title: "NCC 'A' and 'B' Certificate",
      issuer: "National Cadet Corps",
      date: "2024-2025",
      icon: <FaAward size={28} />,
      gradient: "from-secondary to-primary",
      description: "Leadership, discipline, and teamwork development through active NCC training and drills.",
    },
  ];

  const workExperience = [
    {
      title: "Machine Learning Intern",
      company: "CFM, RCOEM",
      period: "May 2025 – July 2025",
      icon: <FaBriefcase size={28} />,
      gradient: "from-accent to-primary",
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
      color: "text-primary",
      bgColor: "from-primary/10 to-accent/10",
      borderColor: "border-primary/30",
    },
    {
      platform: "CodeChef",
      username: "droger289",
      url: "https://www.codechef.com/users/droger289/",
      icon: <SiCodechef size={32} />,
      color: "text-accent",
      bgColor: "from-accent/10 to-primary/10",
      borderColor: "border-accent/30",
    },
    {
      platform: "HackerRank",
      username: "rogerdemello",
      url: "https://www.hackerrank.com/profile/rogerdemello",
      icon: <SiHackerrank size={32} />,
      color: "text-secondary",
      bgColor: "from-secondary/10 to-primary/10",
      borderColor: "border-secondary/30",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 px-5 py-2 sm:px-6 bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm">
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
              Experience & Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-base md:text-lg">
            Continuous learning and hands-on experience in AI, ML, and Cloud technologies
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">
          {/* Work Experience */}
          <div>
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {workExperience.map((exp, index) => (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-background-tertiary/80 to-background-secondary/80 backdrop-blur-sm rounded-2xl border border-card-border hover:border-primary/30 transition-all duration-350 ease-smooth hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${exp.gradient} rounded-xl transform group-hover:scale-105 transition-transform duration-350 ease-smooth shadow-lg`}>
                      <div className="text-white">
                        {exp.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-base font-semibold text-blue-400 mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-foreground-muted font-mono">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground-muted">
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
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 md:mb-8 flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl">
                <FaGraduationCap className="text-white" size={24} />
              </div>
              Education
            </h3>
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-background-tertiary/80 to-background-secondary/80 backdrop-blur-sm rounded-2xl border border-card-border hover:border-primary/30 transition-all duration-350 ease-smooth hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient} rounded-t-2xl opacity-50`} aria-hidden></div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${edu.gradient} rounded-xl transform group-hover:scale-105 transition-transform duration-350 ease-smooth shadow-lg`}>
                      <div className="text-white">
                        {edu.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-base font-medium text-primary mb-1">
                        {edu.school}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-foreground-muted mb-2">
                        <span className="font-mono">{edu.period}</span>
                        <span className="text-foreground-muted">•</span>
                        <span className="font-bold text-primary">CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 md:mb-8 flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-xl">
                <FaCertificate className="text-white" size={24} />
              </div>
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group p-5 sm:p-6 bg-gradient-to-br from-background-tertiary/80 to-background-secondary/80 backdrop-blur-sm rounded-2xl border border-card-border hover:border-primary/30 transition-all duration-350 ease-smooth hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${cert.gradient} rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-350 ease-smooth shadow-lg`}>
                    <div className="text-white">
                      {cert.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-foreground-muted mb-1 font-semibold">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-foreground-muted mb-3 font-mono">
                    {cert.date}
                  </p>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Coding */}
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 md:mb-8 flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-secondary to-primary rounded-xl">
                <FaCode className="text-white" size={24} />
              </div>
              Competitive Programming
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {competitiveCoding.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-6 sm:p-8 bg-gradient-to-br ${platform.bgColor} backdrop-blur-sm rounded-2xl border ${platform.borderColor} hover:scale-[1.02] transition-all duration-350 ease-smooth text-center hover:shadow-xl hover:shadow-primary/10`}
                >
                  <div className={`${platform.color} mb-4 flex justify-center transform group-hover:scale-105 transition-transform duration-350 ease-smooth`}>
                    {platform.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {platform.platform}
                  </h4>
                  <p className="text-foreground-muted font-mono text-sm">
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

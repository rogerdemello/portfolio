"use client";
import { FaGraduationCap, FaAward, FaCertificate, FaBriefcase, FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces, SiAmazon } from "react-icons/si";

const workExperience = [
  {
    title: "AI Engineer Intern",
    company: "AI LifeBOT",
    period: "Jan 2026 – Present",
    highlights: [
      "Built and deployed 3+ production LLM applications and AI agents serving 200+ users with tool integration and memory",
      "Architected AI pipelines with LLMs, vector databases, and APIs, reducing latency through optimized caching",
      "Led rapid prototyping of scalable AI solutions with LangChain and LlamaIndex, delivering production-ready deployment documentation",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "CFM, RCOEM",
    period: "May 2025 – July 2025",
    highlights: [
      "Enhanced an ML-based tool to predict sleep disorders using lifestyle and health data",
      "Attained 87% accuracy analyzing stress, sleep duration, and blood pressure",
      "Built models with Python, Scikit-learn, and Pandas for development and data analysis",
    ],
  },
  {
    title: "AWS Cloud Computing Training",
    company: "RCOEM",
    period: "Mar 2025 – Apr 2025",
    highlights: [
      "Hands-on with core AWS services: EC2, S3, RDS, IAM, VPC, and CloudWatch",
      "Designed scalable web architecture using Auto Scaling and Load Balancer",
      "Implemented secure access with IAM roles, policies, and MFA",
    ],
  },
];

const education = [
  {
    degree: "B.Tech, Electronics & Communication",
    school: "Shri Ramdeobaba College of Engineering & Management",
    period: "Nov 2022 – May 2026",
    cgpa: "8.9",
  },
  {
    degree: "Minor, Artificial Intelligence & Machine Learning",
    school: "Shri Ramdeobaba College of Engineering & Management",
    period: "May 2023 – Dec 2025",
    cgpa: "9.6",
  },
];

const certifications = [
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "Oct 2025", icon: <SiAmazon size={20} />, tint: "bg-secondary text-secondary-foreground" },
  { title: "2nd Place - Bytesage AI National Hackathon", issuer: "Bytesage", date: "2025", icon: <FaAward size={20} />, tint: "bg-primary text-primary-foreground" },
  { title: "Introduction to ML on AWS", issuer: "Coursera / AWS", date: "Jul 2025", icon: <FaCertificate size={20} />, tint: "bg-accent text-accent-foreground" },
  { title: "NCC 'C' Certificate", issuer: "National Cadet Corps", date: "2023–2026", icon: <FaAward size={20} />, tint: "bg-decorative text-primary-foreground" },
];

const competitive = [
  { platform: "LeetCode", username: "rogerdemello", rating: "1767", url: "https://leetcode.com/u/rogerdemello/", icon: <SiLeetcode size={26} /> },
  { platform: "CodeChef", username: "droger289", rating: "1814", url: "https://www.codechef.com/users/droger289/", icon: <SiCodechef size={26} /> },
  { platform: "Codeforces", username: "rogerdemello289", rating: "1247", url: "https://codeforces.com/profile/rogerdemello289", icon: <SiCodeforces size={26} /> },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-background-secondary border-y-2 border-foreground relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-end gap-4 mb-12 md:mb-16">
            <span className="font-display font-black text-primary text-3xl sm:text-4xl leading-none">04</span>
            <div>
              <p className="eyebrow mb-2">The path</p>
              <h2 className="font-display font-black text-foreground text-4xl sm:text-5xl leading-[0.95]">
                Experience &amp; credentials
              </h2>
            </div>
          </div>

          {/* Work timeline */}
          <div className="relative mb-16 md:mb-20">
            <div className="space-y-5 md:space-y-6">
              {workExperience.map((exp) => (
                <div key={exp.title + exp.company} className="ink-card ink-card--hover p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center w-10 h-10 rounded-lg border-2 border-foreground bg-primary text-primary-foreground flex-shrink-0">
                        <FaBriefcase size={16} />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground leading-tight">{exp.title}</h3>
                        <p className="text-sm font-semibold text-primary">{exp.company}</p>
                      </div>
                    </div>
                    <span className="ink-tag !bg-background">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 sm:pl-[3.25rem]">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/75">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0 border border-foreground" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <p className="eyebrow mb-5 flex items-center gap-2"><FaGraduationCap /> Education</p>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mb-16 md:mb-20">
            {education.map((edu) => (
              <div key={edu.degree} className="ink-card ink-card--hover p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="font-display text-lg font-bold text-foreground leading-tight">{edu.degree}</h4>
                  <span className="font-display font-black text-primary text-2xl leading-none flex-shrink-0">{edu.cgpa}</span>
                </div>
                <p className="text-sm text-foreground/70 mb-2">{edu.school}</p>
                <span className="ink-tag !bg-background">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Certifications & awards */}
          <p className="eyebrow mb-5 flex items-center gap-2"><FaCertificate /> Certifications &amp; awards</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 md:mb-20">
            {certifications.map((c) => (
              <div key={c.title} className="ink-card ink-card--hover p-5">
                <span className={`inline-grid place-items-center w-10 h-10 rounded-lg border-2 border-foreground mb-3 ${c.tint}`}>
                  {c.icon}
                </span>
                <h4 className="font-display text-base font-bold text-foreground leading-tight mb-1.5">{c.title}</h4>
                <p className="text-xs text-foreground/70">{c.issuer}</p>
                <p className="font-mono text-[0.7rem] text-foreground/50 mt-1">{c.date}</p>
              </div>
            ))}
          </div>

          {/* Competitive programming */}
          <p className="eyebrow mb-5 flex items-center gap-2"><FaCode /> Competitive programming</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {competitive.map((p) => (
              <a key={p.platform} href={p.url} target="_blank" rel="noopener noreferrer" className="ink-card ink-card--hover p-6 flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-xl border-2 border-foreground bg-background text-foreground flex-shrink-0">
                  {p.icon}
                </span>
                <div>
                  <h4 className="font-display text-lg font-bold text-foreground leading-none">{p.platform}</h4>
                  <p className="font-display font-black text-primary text-xl leading-tight mt-1">{p.rating}</p>
                  <p className="font-mono text-[0.7rem] text-foreground/50">@{p.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

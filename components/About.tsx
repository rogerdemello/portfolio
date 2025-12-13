"use client";
import { FaBrain, FaCloud, FaCode, FaChartLine } from "react-icons/fa";
import { SiTensorflow, SiAmazon, SiPython } from "react-icons/si";

export default function About() {
  const highlights = [
    {
      icon: <FaBrain size={28} />,
      title: "ML Problem Solver",
      description: "Designing and implementing machine learning models to solve real-world problems with 85%+ accuracy",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaCloud size={28} />,
      title: "Cloud Deployment",
      description: "Building scalable AI systems on AWS infrastructure with EC2, S3, Lambda, and RDS",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Data-Driven",
      description: "Transforming complex datasets into actionable insights using TensorFlow, Scikit-Learn, and Pandas",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/30 backdrop-blur-sm">
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-100 mb-6">
              Machine Learning Engineer <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">& Cloud Specialist</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I specialize in developing intelligent AI systems and deploying scalable machine learning models on cloud infrastructure. 
              With expertise in Python, TensorFlow, and AWS, I transform complex data challenges into production-ready solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 flex-1 min-w-[280px] max-w-[340px]"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${item.gradient} rounded-xl mb-4 transform group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Core Competencies */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-100 mb-8 text-center">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <SiTensorflow className="text-3xl text-orange-500" />
                  <h4 className="text-xl font-bold text-gray-100">Machine Learning</h4>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Supervised & Unsupervised Learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Neural Networks & Deep Learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Model Optimization & Evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Feature Engineering & Selection</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <SiAmazon className="text-3xl text-orange-400" />
                  <h4 className="text-xl font-bold text-gray-100">Cloud Infrastructure</h4>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>AWS EC2, S3, Lambda, RDS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Scalable Architecture Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Auto Scaling & Load Balancing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>IAM & Security Best Practices</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <SiPython className="text-3xl text-blue-500" />
                  <h4 className="text-xl font-bold text-gray-100">Development</h4>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Python, C++, Data Structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>FastAPI, Flask, RESTful APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Git, CI/CD Pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Object-Oriented Programming</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

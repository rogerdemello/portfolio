"use client";
import { FaBrain, FaCloud, FaCode, FaChartLine } from "react-icons/fa";
import { SiTensorflow, SiAmazon, SiPython } from "react-icons/si";

export default function About() {
  const highlights = [
    {
      icon: <FaBrain size={28} />,
      title: "ML & Deep Learning",
      description: "Built health prediction system with 87% accuracy (started at 71%). Working with CNNs, RNNs, and transformers for computer vision and NLP projects.",
      gradient: "from-accent to-primary"
    },
    {
      icon: <FaCloud size={28} />,
      title: "AWS Cloud",
      description: "Deploying projects on EC2, S3, and Lambda. Comfortable with cloud infrastructure and inference endpoints. AWS Certified Cloud Practitioner.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: <FaCode size={28} />,
      title: "AI Chatbots",
      description: "Built Chatbots with Gemini API and LangChain for health queries, mental wellness, and scheduling. Learning RAG for better context handling.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Data Engineering",
      description: "Data cleaning and feature engineering with Pandas and NumPy. Experienced with handling imbalanced datasets and data preprocessing pipelines.",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4 px-5 py-2 sm:px-6 bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm">
              <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
                About Me
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
              ML Engineer <span className="gradient-text">& Cloud Specialist</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
              I specialize in developing intelligent AI systems and deploying scalable machine learning models on cloud infrastructure. With expertise in Python, TensorFlow, and AWS, I transform complex data challenges into production-ready solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 md:mb-16 max-w-7xl mx-auto">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-background-tertiary/80 backdrop-blur-sm rounded-2xl border border-card-border hover:border-primary/40 hover:bg-background-tertiary transition-all duration-350 ease-smooth hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${item.gradient} rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-350 ease-smooth`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Core Competencies */}
          <div className="bg-gradient-to-br from-background-tertiary/80 to-background-secondary/80 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-card-border p-6 sm:p-8 md:p-12 transition-shadow duration-350 ease-smooth hover:shadow-xl hover:shadow-primary/10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground mb-6 md:mb-8 text-center">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <SiTensorflow className="text-3xl text-primary" />
                  <h4 className="text-xl font-bold text-foreground">Machine Learning</h4>
                </div>
                <ul className="space-y-2 text-foreground-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Supervised & Unsupervised Learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Neural Networks & Deep Learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Model Optimization & Evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Feature Engineering & Selection</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <SiAmazon className="text-3xl text-accent" />
                  <h4 className="text-xl font-bold text-foreground">Cloud Infrastructure</h4>
                </div>
                <ul className="space-y-2 text-foreground-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>AWS EC2, S3, Lambda, RDS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Scalable Architecture Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Auto Scaling & Load Balancing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>IAM & Security Best Practices</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <SiPython className="text-3xl text-secondary" />
                  <h4 className="text-xl font-bold text-foreground">Development</h4>
                </div>
                <ul className="space-y-2 text-foreground-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Python, C++, Data Structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>FastAPI, Flask, RESTful APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Git, CI/CD Pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
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

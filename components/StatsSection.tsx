"use client";
import { useEffect, useState, useRef } from "react";
import { FaCode, FaProjectDiagram, FaTrophy, FaGithub } from "react-icons/fa";

interface StatItemProps {
  icon: React.ReactNode;
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function StatItem({ icon, end, label, suffix = "", duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div
      ref={ref}
      className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all transform hover:scale-105 border border-gray-700"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl mb-4 text-blue-400">
          {icon}
        </div>
        <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
          {count}{suffix}
        </div>
        <p className="text-gray-400 font-medium">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Professional Metrics
            </h2>
            <p className="text-gray-400 text-lg">
              Quantifiable achievements and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem
              icon={<FaCode />}
              end={500}
              suffix="+"
              label="LeetCode Problems"
            />
            <StatItem
              icon={<FaProjectDiagram />}
              end={10}
              suffix="+"
              label="Projects Completed"
            />
            <StatItem
              icon={<FaTrophy />}
              end={5}
              label="Certifications"
            />
            <StatItem
              icon={<FaGithub />}
              end={1000}
              suffix="+"
              label="GitHub Contributions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

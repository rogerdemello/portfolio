"use client";
import { FaGithub, FaStar, FaChartLine } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GitHubStats() {
  const githubUsername = "rogerdemello";
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    setTimestamp(`&t=${Date.now()}`);
  }, []);

  return (
    <section id="github" className="py-20 md:py-24 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 px-5 py-2 sm:px-6 bg-primary/10 rounded-full border border-primary/30 backdrop-blur-sm">
            <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
              Activity
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            GitHub <span className="gradient-text">Stats</span>
          </h2>
          <p className="text-foreground-muted text-base md:text-lg max-w-2xl mx-auto">
            Real-time statistics and contributions
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
          {/* GitHub Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Stats Card */}
            <div className="bg-background-tertiary/80 backdrop-blur-sm rounded-xl p-6 border border-card-border hover:border-primary transition-all duration-300 tilt-on-hover">
              <div className="flex items-center gap-3 mb-4">
                <FaGithub className="text-3xl text-blue-400" />
                <h3 className="text-xl font-semibold text-white">GitHub Stats</h3>
              </div>
              <div className="relative w-full">
                <Image
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&hide_border=true&background=1f2937&ring=60a5fa&fire=a78bfa&currStreakLabel=e5e7eb${timestamp}`}
                  alt="GitHub Streak"
                  width={495}
                  height={195}
                  className="w-full h-auto rounded-lg"
                  unoptimized
                  key={timestamp}
                />
              </div>
            </div>

            {/* Contribution Graph */}
            <div className="bg-background-tertiary/80 backdrop-blur-sm rounded-xl p-6 border border-card-border hover:border-accent transition-all duration-300 tilt-on-hover">
              <div className="flex items-center gap-3 mb-4">
                <FaChartLine className="text-3xl text-green-400" />
                <h3 className="text-xl font-semibold text-white">Contribution Calendar</h3>
              </div>
              <div className="relative w-full overflow-x-auto">
                <Image
                  src="/github-contributions_1.5x_postspark_2026-02-19_09-09-31.png"
                  alt="GitHub Contribution Calendar"
                  width={900}
                  height={400}
                  className="w-full h-auto rounded-lg"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* View Profile Button */}
          <div className="text-center pt-8">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 btn-ripple magnetic-hover"
            >
              <FaGithub className="text-2xl icon-rotate" />
              <span>View Full GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

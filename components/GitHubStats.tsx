"use client";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

// Palette (hex, no #) handed to the GitHub widget services so they match the paper theme.
const PAPER = "FBF6EC";
const INK = "1E1B16";
const PERSIMMON = "E2542A";
const MUTED = "8A7F6A";

export default function GitHubStats() {
  const githubUsername = "rogerdemello";
  const [bust, setBust] = useState("");

  useEffect(() => {
    setBust(`&v=${Date.now()}`);
  }, []);

  const streakSrc =
    `https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}` +
    `&hide_border=true&background=${PAPER}&ring=${PERSIMMON}&fire=${PERSIMMON}` +
    `&currStreakNum=${INK}&currStreakLabel=${PERSIMMON}&sideNums=${INK}&sideLabels=${INK}` +
    `&dates=${MUTED}&stroke=${INK}${bust}`;

  const activitySrc =
    `https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}` +
    `&bg_color=${PAPER}&color=${INK}&line=${PERSIMMON}&point=${INK}` +
    `&area=true&area_color=${PERSIMMON}&title_color=${INK}&hide_border=true`;

  return (
    <section id="github" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-end gap-4 mb-12 md:mb-16">
            <span className="font-display font-black text-primary text-3xl sm:text-4xl leading-none">05</span>
            <div>
              <p className="eyebrow mb-2">Activity</p>
              <h2 className="font-display font-black text-foreground text-4xl sm:text-5xl leading-[0.95]">
                On the keyboard
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-5 md:gap-6 items-start">
            <div className="ink-card p-5 lg:col-span-2">
              <p className="eyebrow mb-4">Streak</p>
              <div className="rounded-lg overflow-hidden border-2 border-foreground/15 bg-[#FBF6EC]">
                {bust && (
                  <Image
                    src={streakSrc}
                    alt="GitHub contribution streak"
                    width={495}
                    height={195}
                    className="w-full h-auto"
                    unoptimized
                    key={bust}
                  />
                )}
              </div>
            </div>

            <div className="ink-card p-5 lg:col-span-3">
              <p className="eyebrow mb-4">Contributions</p>
              <div className="rounded-lg overflow-hidden border-2 border-foreground/15 bg-[#FBF6EC]">
                <Image
                  src={activitySrc}
                  alt="GitHub contribution graph"
                  width={900}
                  height={340}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid group"
            >
              <FaGithub size={16} />
              View full profile
              <FaArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

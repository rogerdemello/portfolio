"use client";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import Image from "next/image";

export default function GitHubStats() {
  const githubUsername = "rogerdemello";

  return (
    <section id="github" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-shift">
            GitHub Activity
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 text-lg">
            Real-time statistics and contributions
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* GitHub Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stats Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 tilt-on-hover">
              <div className="flex items-center gap-3 mb-4">
                <FaGithub className="text-3xl text-blue-400" />
                <h3 className="text-xl font-semibold text-white">GitHub Stats</h3>
              </div>
              <div className="relative w-full">
                <Image
                  src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true&bg_color=1f2937&title_color=60a5fa&icon_color=a78bfa&text_color=e5e7eb&count_private=true`}
                  alt="GitHub Stats"
                  width={495}
                  height={195}
                  className="w-full h-auto rounded-lg"
                  unoptimized
                />
              </div>
            </div>

            {/* Streak Stats */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 tilt-on-hover">
              <div className="flex items-center gap-3 mb-4">
                <FaStar className="text-3xl text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Contribution Streak</h3>
              </div>
              <div className="relative w-full">
                <Image
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&hide_border=true&background=1f2937&ring=60a5fa&fire=a78bfa&currStreakLabel=e5e7eb`}
                  alt="GitHub Streak"
                  width={495}
                  height={195}
                  className="w-full h-auto rounded-lg"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Top Languages Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 tilt-on-hover">
            <div className="flex items-center gap-3 mb-4">
              <FaCodeBranch className="text-3xl text-green-400" />
              <h3 className="text-xl font-semibold text-white">Most Used Languages</h3>
            </div>
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical&hide_border=true&bg_color=1f2937&title_color=60a5fa&text_color=e5e7eb&langs_count=8`}
                alt="Top Languages"
                width={445}
                height={165}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
          </div>


          {/* View Profile Button */}
          <div className="text-center pt-8">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 btn-ripple magnetic-hover"
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

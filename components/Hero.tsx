"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-900/50 rounded-lg border border-blue-700">
              <span className="text-sm font-medium text-blue-400">Software Developer & ML Engineer</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Roger Richard</span>
              <br />
              <span className="text-gray-100">Demello</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-gray-800 rounded-lg shadow-sm border border-gray-700 text-gray-300">Software Developer</span>
              <span className="px-4 py-2 bg-gray-800 rounded-lg shadow-sm border border-gray-700 text-gray-300">C++ Enthusiast</span>
              <span className="px-4 py-2 bg-gray-800 rounded-lg shadow-sm border border-gray-700 text-gray-300">ML Engineer</span>
              <span className="px-4 py-2 bg-gray-800 rounded-lg shadow-sm border border-gray-700 text-gray-300">AWS Certified</span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Aspiring Software Developer specializing in C++ and Machine Learning.<br />Building intelligent solutions with modern technologies.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <a href="https://github.com/rogerdemello" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:scale-105 hover:border-blue-500">
              <FaGithub className="text-gray-300 group-hover:text-blue-400 transition-colors" size={20} />
              <span className="text-sm font-medium text-gray-300">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/rogerdemello" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:scale-105 hover:border-blue-500">
              <FaLinkedin className="text-blue-500 group-hover:scale-110 transition-transform" size={20} />
              <span className="text-sm font-medium text-gray-300">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/rogerdemello/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:scale-105 hover:border-orange-500">
              <SiLeetcode className="text-orange-500 group-hover:scale-110 transition-transform" size={20} />
              <span className="text-sm font-medium text-gray-300">LeetCode</span>
            </a>
            <a href="mailto:rogerdemello289@gmail.com" className="group flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:scale-105 hover:border-red-500">
              <FaEnvelope className="text-red-500 group-hover:scale-110 transition-transform" size={20} />
              <span className="text-sm font-medium text-gray-300">Email</span>
            </a>
          </div>

          <div className="flex justify-center gap-4 flex-wrap mb-16">
            <a href="https://drive.google.com/uc?export=download&id=1S9YMTn4OEEgAmfY4_f6mgnW-YvgfR06p" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
              Download Resume
            </a>
            <a href="#projects" className="px-8 py-4 bg-gray-800 text-gray-100 font-semibold rounded-lg border-2 border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all transform hover:scale-105">
              View Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#education" className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors group">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

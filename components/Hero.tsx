"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaDownload, FaEye } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState, useEffect } from "react";

export default function Hero() {
  const roles = [
    "Software Developer",
    "C++ Enthusiast",
    "ML Engineer",
    "AWS Certified Cloud Practitioner"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  useEffect(() => {
    const currentWord = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-900/50 rounded-lg border border-blue-700">
              <span className="text-sm font-medium text-blue-400">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Roger Richard
              </span>
              <br />
              <span className="text-gray-100">Demello</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-gray-800 rounded-lg shadow-sm border border-gray-700 text-gray-300 hover:scale-110 hover:border-blue-500 transition-all duration-300 cursor-default">Software Developer</span>
              <span className="px-4 py-2 bg-gray-800 rounded-lg shadow-sm border border-gray-700 text-gray-300 hover:scale-110 hover:border-purple-500 transition-all duration-300 cursor-default">C++ Enthusiast</span>
              <span className="px-4 py-2 bg-gray-800 rounded-lg shadow-sm border border-gray-700 text-gray-300 hover:scale-110 hover:border-pink-500 transition-all duration-300 cursor-default">ML Engineer</span>
              <span className="px-4 py-2 bg-gray-800 rounded-lg shadow-sm border border-gray-700 text-gray-300 hover:scale-110 hover:border-green-500 transition-all duration-300 cursor-default">AWS Certified Cloud Practitioner</span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Aspiring Software Developer specializing in C++ and Machine Learning.<br />Building intelligent solutions with modern technologies.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <a href="https://github.com/rogerdemello" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:scale-105 hover:border-blue-500 btn-ripple magnetic-hover">
              <FaGithub className="text-gray-300 group-hover:text-blue-400 transition-colors group-hover:rotate-12 transform duration-300" size={20} />
              <span className="text-sm font-medium text-gray-300">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/rogerdemello" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:scale-105 hover:border-blue-500 btn-ripple magnetic-hover">
              <FaLinkedin className="text-blue-500 group-hover:scale-110 transition-transform" size={20} />
              <span className="text-sm font-medium text-gray-300">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/rogerdemello/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:scale-105 hover:border-orange-500 btn-ripple magnetic-hover">
              <SiLeetcode className="text-orange-500 group-hover:scale-110 transition-transform group-hover:rotate-12" size={20} />
              <span className="text-sm font-medium text-gray-300">LeetCode</span>
            </a>
            <a href="mailto:rogerdemello289@gmail.com" className="group flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 hover:scale-105 hover:border-red-500 btn-ripple magnetic-hover">
              <FaEnvelope className="text-red-500 group-hover:scale-110 transition-transform group-hover:rotate-12" size={20} />
              <span className="text-sm font-medium text-gray-300">Email</span>
            </a>
          </div>

          <div className="flex justify-center gap-4 flex-wrap mb-16">
            {/* Resume dropdown button */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center gap-2 btn-ripple glow-pulse gradient-animate"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Resume
              </button>
              
              {showDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 overflow-hidden z-20 min-w-[200px]">
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors text-gray-300"
                    onClick={() => setShowDropdown(false)}
                  >
                    <FaEye className="text-blue-400" />
                    <span>View Resume</span>
                  </a>
                  <a
                    href="/Resume.pdf"
                    download="Roger_Demello_Resume.pdf"
                    className="flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors text-gray-300 border-t border-gray-700"
                    onClick={() => setShowDropdown(false)}
                  >
                    <FaDownload className="text-green-400" />
                    <span>Download PDF</span>
                  </a>
                </div>
              )}
            </div>
            
            <a href="#projects" className="px-8 py-4 bg-gray-800 text-gray-100 font-semibold rounded-lg border-2 border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all transform hover:scale-105 btn-ripple magnetic-hover">
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

"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="https://github.com/rogerdemello"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-105 border border-gray-700 hover:border-blue-500"
              aria-label="GitHub"
            >
              <FaGithub size={20} className="group-hover:text-blue-400 transition-colors" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/rogerdemello"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-105 border border-gray-700 hover:border-blue-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} className="group-hover:text-blue-400 transition-colors" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/rogerdemello/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-105"
              aria-label="LeetCode"
            >
              <SiLeetcode size={20} className="group-hover:text-yellow-400 transition-colors" />
              <span className="text-sm">LeetCode</span>
            </a>
            <a
              href="mailto:rogerdemello289@gmail.com"
              className="group flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-105"
              aria-label="Email"
            >
              <FaEnvelope size={20} className="group-hover:text-red-400 transition-colors" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © {currentYear} Roger Richard Demello. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

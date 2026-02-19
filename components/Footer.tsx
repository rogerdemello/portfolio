"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground py-10 md:py-12 border-t border-card-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-4 mb-6 md:mb-8">
            <a
              href="https://github.com/rogerdemello"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 bg-card/30 hover:bg-card/50 backdrop-blur-sm rounded-xl border border-card-border hover:border-primary/40 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
              aria-label="GitHub"
            >
              <FaGithub size={20} className="text-foreground-muted group-hover:text-primary transition-colors duration-300" />
              <span className="text-sm text-foreground-muted transition-colors duration-300 group-hover:text-foreground">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/rogerdemello"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 bg-card/30 hover:bg-card/50 backdrop-blur-sm rounded-xl border border-card-border hover:border-primary/40 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} className="text-foreground-muted group-hover:text-primary transition-colors duration-300" />
              <span className="text-sm text-foreground-muted transition-colors duration-300 group-hover:text-foreground">LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/rogerdemello/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 bg-card/30 hover:bg-card/50 backdrop-blur-sm rounded-xl border border-card-border hover:border-primary/40 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
              aria-label="LeetCode"
            >
              <SiLeetcode size={20} className="text-foreground-muted group-hover:text-accent transition-colors duration-300" />
              <span className="text-sm text-foreground-muted transition-colors duration-300 group-hover:text-foreground">LeetCode</span>
            </a>
            <a
              href="mailto:rogerdemello289@gmail.com"
              className="group flex items-center gap-2 px-4 py-2.5 bg-card/30 hover:bg-card/50 backdrop-blur-sm rounded-xl border border-card-border hover:border-primary/40 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Email"
            >
              <FaEnvelope size={20} className="text-foreground-muted group-hover:text-primary transition-colors duration-300" />
              <span className="text-sm text-foreground-muted transition-colors duration-300 group-hover:text-foreground">Email</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-card-border pt-6 md:pt-8">
            <p className="text-foreground-muted text-sm sm:text-base">
              © {currentYear} Roger Richard Demello. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

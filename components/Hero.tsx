"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaDownload, FaEye } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState, useEffect, useRef } from "react";

function AIBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const onPointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (e.clientX - cx) / (rect.width / 2);
      const ny = (e.clientY - cy) / (rect.height / 2);
      target.x = Math.max(-1, Math.min(1, nx));
      target.y = Math.max(-1, Math.min(1, ny));
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onLeave);

    const animate = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;

      const rotateY = current.x * 8;
      const rotateX = -current.y * 6;

      el.style.transform = `perspective(1200px) translateZ(0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="hidden md:block absolute z-0 left-1/2 -translate-x-1/2 top-12 pointer-events-none will-change-transform"
      style={{ width: "1033px", height: "1170px", maxWidth: "1033px", maxHeight: "1170px", transform: "perspective(1200px)" }}
    >
      <svg
        width="1033"
        height="1170"
        viewBox="0 0 1033 1170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block mx-auto opacity-30"
      >
        <defs>
          <linearGradient id="skin" x1="0" x2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="rim" x1="0" x2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feBlend in="SourceGraphic" in2="b" />
          </filter>
        </defs>

        <ellipse cx="516.5" cy="420" rx="220" ry="280" fill="url(#skin)" filter="url(#soft)" />

        <path d="M300 220 C420 120, 620 120, 730 220 L730 240 C620 140, 420 140, 300 240 Z" fill="none" stroke="url(#rim)" strokeWidth="6" opacity="0.9" />

        <path d="M300 200 C330 80, 700 90, 730 200 C730 420, 650 520, 516.5 520 C383 520, 300 420, 300 200 Z" fill="#0f1724" opacity="0.95" />

        <path d="M460 420 C480 430, 540 430, 556 420" stroke="#0b1220" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M480 360 C485 380, 530 380, 548 360" stroke="#0b1220" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

        <g stroke="#818cf8" strokeWidth="0.8" opacity="0.35" transform="translate(50,200)">
          <path d="M120 80 C150 60, 220 40, 300 60" fill="none" strokeOpacity="0.5" />
          <path d="M80 200 C160 180, 240 160, 320 190" fill="none" strokeOpacity="0.4" />
          <circle cx="260" cy="120" r="2.5" fill="#a78bfa" opacity="0.7" />
          <circle cx="200" cy="220" r="2" fill="#fbbf24" opacity="0.6" />
        </g>

        <g stroke="#6366f1" strokeWidth="0.6" opacity="0.15">
          <path d="M100 900 C300 800, 700 800, 900 900" fill="none" />
          <path d="M120 930 C320 830, 720 830, 920 930" fill="none" />
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  const roles = [
    "Machine Learning Engineer",
    "AI Systems Developer",
    "AWS Cloud Practitioner",
    "ML Model Architect",
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
            : currentWord.substring(0, displayText.length + 1),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
            backgroundImage: 'url(/tech-bg.jpg)',
            filter: 'saturate(0.95) contrast(0.9) brightness(0.75) grayscale(6%)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        {/* Radial vignette for depth */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(2,6,23,0.45) 0%, rgba(2,6,23,0.18) 40%, rgba(2,6,23,0.78) 100%)' }}></div>
        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      {/* AI background (portrait + neural overlay) */}
      <AIBackground />

      {/* Ambient glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-decorative/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-accent/25 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 pt-24 sm:pt-18 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            {/* Role badge with typing effect */}
            <div className="inline-block mb-5 px-5 py-2.5 sm:px-6 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="text-xs sm:text-sm font-mono font-medium text-foreground">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>

            {/* Main headline - 2pt smaller than default scale */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold mb-4 tracking-tight leading-tight">
              <span className="gradient-text">
                Roger Richard Demello
              </span>
            </h1>

            {/* Professional title */}
            <div className="mb-5">
              <h2 className="text-base sm:text-lg md:text-xl font-sans font-semibold text-foreground mb-2 tracking-wide">Machine Learning Engineer</h2>
              <div className="flex items-center justify-center gap-3 text-xs sm:text-sm md:text-base text-accent/90 font-light tracking-wider">
                <span>AI</span>
                <span className="text-foreground-muted">×</span>
                <span>Cloud</span>
                <span className="text-foreground-muted">×</span>
                <span>AWS</span>
              </div>
            </div>

            {/* Value proposition */}
            <p className="text-sm sm:text-base md:text-lg text-foreground-muted mb-6 max-w-3xl mx-auto leading-relaxed px-2">
              Building intelligent AI systems and deploying scalable ML models on cloud infrastructure.
            </p>

            {/* Expertise tags */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
              <span className="px-5 py-2 bg-primary/10 rounded border border-primary/30 text-foreground text-sm font-light tracking-wide cursor-default backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                Machine Learning
              </span>
              <span className="px-5 py-2 bg-decorative/10 rounded border border-decorative/30 text-foreground text-sm font-light tracking-wide cursor-default backdrop-blur-sm hover:border-decorative/50 hover:shadow-lg hover:shadow-decorative/10 transition-all">
                Gen AI
              </span>
              <span className="px-5 py-2 bg-accent/10 rounded border border-accent/30 text-foreground text-sm font-light tracking-wide cursor-default backdrop-blur-sm hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all">
                AWS Cloud
              </span>
              <span className="px-5 py-2 bg-secondary/10 rounded border border-secondary/30 text-foreground text-sm font-light tracking-wide cursor-default backdrop-blur-sm hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all">
                Python & C++
              </span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-8 flex-wrap">
            <a href="https://github.com/rogerdemello" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-2.5 bg-background-tertiary/80 backdrop-blur-sm rounded-xl border border-card-border hover:border-primary/50 hover:bg-background-tertiary transition-all duration-350 ease-smooth focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background">
              <FaGithub className="text-foreground-muted group-hover:text-primary transition-colors duration-300" size={16} />
              <span className="text-xs font-light text-foreground-muted group-hover:text-foreground tracking-wide transition-colors duration-300">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/rogerdemello" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-2.5 bg-background-tertiary/80 backdrop-blur-sm rounded-xl border border-secondary/40 hover:border-secondary/60 hover:bg-background-tertiary transition-all duration-350 ease-smooth focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2 focus:ring-offset-background">
              <FaLinkedin className="text-secondary group-hover:text-secondary-light transition-colors duration-300" size={16} />
              <span className="text-xs font-light text-foreground-muted group-hover:text-foreground tracking-wide transition-colors duration-300">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/rogerdemello/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-2.5 bg-background-tertiary/80 backdrop-blur-sm rounded-xl border border-primary/40 hover:border-primary/60 hover:bg-background-tertiary transition-all duration-350 ease-smooth focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background">
              <SiLeetcode className="text-primary group-hover:text-primary-light transition-colors duration-300" size={16} />
              <span className="text-xs font-light text-foreground-muted group-hover:text-foreground tracking-wide transition-colors duration-300">LeetCode</span>
            </a>
            <a href="mailto:rogerdemello289@gmail.com" className="group flex items-center gap-2 px-4 py-2.5 bg-background-tertiary/80 backdrop-blur-sm rounded-xl border border-card-border hover:border-primary/50 hover:bg-background-tertiary transition-all duration-350 ease-smooth focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background">
              <FaEnvelope className="text-foreground-muted group-hover:text-primary transition-colors duration-300" size={16} />
              <span className="text-xs font-light text-foreground-muted group-hover:text-foreground tracking-wide transition-colors duration-300">Email</span>
            </a>
          </div>

          {/* Primary CTAs */}
          <div className="flex justify-center gap-3 flex-wrap mb-10">
            <div className="relative">
              <button onClick={() => setShowDropdown(!showDropdown)} className="group px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30 transition-all duration-350 ease-smooth flex items-center gap-2 text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                <FaDownload className="group-hover:translate-y-0.5 transition-transform duration-300 ease-smooth" size={13} />
                Resume
              </button>

              {showDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-background/98 backdrop-blur-xl rounded-xl shadow-2xl border border-card-border overflow-hidden z-20 min-w-[180px]">
                  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 hover:bg-background-tertiary transition-colors duration-300 ease-smooth text-foreground-muted text-sm font-light" onClick={() => setShowDropdown(false)}>
                    <FaEye className="text-primary" size={13} />
                    <span>View</span>
                  </a>
                  <a href="/Resume.pdf" download="Roger_Demello_Resume.pdf" className="flex items-center gap-2 px-5 py-2.5 hover:bg-background-tertiary transition-colors duration-300 ease-smooth text-foreground-muted border-t border-card-border text-sm font-light" onClick={() => setShowDropdown(false)}>
                    <FaDownload className="text-primary" size={13} />
                    <span>Download</span>
                  </a>
                </div>
              )}
            </div>

            <a href="#projects" className="px-6 py-3 bg-background-tertiary backdrop-blur-sm text-foreground font-medium rounded-xl border border-card-border hover:border-accent/60 hover:bg-background-secondary hover:shadow-lg hover:shadow-accent/10 transition-all duration-350 ease-smooth text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background">Projects</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center text-foreground-muted hover:text-primary transition-colors duration-350 ease-smooth group focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg p-2">
          <span className="text-xs font-light mb-2 tracking-widest uppercase">Scroll</span>
          <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300 ease-smooth animate-bounce" size={14} />
        </a>
      </div>
    </section>
  );
}

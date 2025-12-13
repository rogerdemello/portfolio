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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/75 via-slate-900/82 to-gray-950/78"></div>
      </div>

      {/* AI background (portrait + neural overlay) */}
      <AIBackground />

      {/* Ambient glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-amber-500/25 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="container mx-auto px-6 py-16 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            {/* Role badge with typing effect */}
            <div className="inline-block mb-4 px-6 py-2.5 bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-full border border-amber-500/20 backdrop-blur-sm">
              <span className="text-sm font-mono font-medium text-slate-200">
                {displayText}
                <span className="animate-pulse text-amber-400">|</span>
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-6xl md:text-8xl lg:text-[4rem] font-display font-extrabold mb-3 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-slate-100 via-amber-100 to-slate-100 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(251,191,36,0.3)]">
                Roger Richard Demello
              </span>
            </h1>

            {/* Professional title */}
            <div className="mb-4">
              <h2 className="text-lg md:text-2xl font-sans font-semibold text-slate-100 mb-2 tracking-wide">Machine Learning Engineer</h2>
              <div className="flex items-center justify-center gap-3 text-sm md:text-base text-amber-200/80 font-light tracking-wider">
                <span>AI</span>
                <span className="text-slate-600">×</span>
                <span>Cloud</span>
                <span className="text-slate-600">×</span>
                <span>AWS</span>
              </div>
            </div>

            {/* Value proposition */}
            <p className="text-sm md:text-lg text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Building intelligent AI systems and deploying scalable ML models on cloud infrastructure.
            </p>

            {/* Expertise tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <span className="px-5 py-2 bg-gradient-to-br from-indigo-900/30 to-slate-800/20 rounded border border-indigo-400/30 text-slate-200 text-sm font-light tracking-wide cursor-default backdrop-blur-sm hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all">
                Machine Learning
              </span>
              <span className="px-5 py-2 bg-gradient-to-br from-violet-900/30 to-slate-800/20 rounded border border-violet-400/30 text-slate-200 text-sm font-light tracking-wide cursor-default backdrop-blur-sm hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all">
                Deep Learning
              </span>
              <span className="px-5 py-2 bg-gradient-to-br from-amber-900/30 to-slate-800/20 rounded border border-amber-400/30 text-slate-200 text-sm font-light tracking-wide cursor-default backdrop-blur-sm hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all">
                AWS Cloud
              </span>
              <span className="px-5 py-2 bg-gradient-to-br from-teal-900/30 to-slate-800/20 rounded border border-teal-400/30 text-slate-200 text-sm font-light tracking-wide cursor-default backdrop-blur-sm hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all">
                Python & C++
              </span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <a href="https://github.com/rogerdemello" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-sm rounded border border-slate-600/40 hover:border-slate-400/60 hover:bg-slate-700/50 transition-all duration-300">
              <FaGithub className="text-slate-400 group-hover:text-slate-200 transition-colors" size={16} />
              <span className="text-xs font-light text-slate-400 group-hover:text-slate-200 tracking-wide">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/rogerdemello" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-sm rounded border border-blue-500/40 hover:border-blue-400/60 hover:bg-slate-700/50 transition-all duration-300">
              <FaLinkedin className="text-blue-400 group-hover:text-blue-300 transition-colors" size={16} />
              <span className="text-xs font-light text-slate-400 group-hover:text-slate-200 tracking-wide">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/rogerdemello/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-sm rounded border border-orange-500/40 hover:border-orange-400/60 hover:bg-slate-700/50 transition-all duration-300">
              <SiLeetcode className="text-orange-400 group-hover:text-orange-300 transition-colors" size={16} />
              <span className="text-xs font-light text-slate-400 group-hover:text-slate-200 tracking-wide">LeetCode</span>
            </a>
            <a href="mailto:rogerdemello289@gmail.com" className="group flex items-center gap-2 px-4 py-2 bg-slate-800/40 backdrop-blur-sm rounded border border-slate-600/40 hover:border-slate-400/60 hover:bg-slate-700/50 transition-all duration-300">
              <FaEnvelope className="text-slate-400 group-hover:text-slate-200 transition-colors" size={16} />
              <span className="text-xs font-light text-slate-400 group-hover:text-slate-200 tracking-wide">Email</span>
            </a>
          </div>

          {/* Primary CTAs */}
          <div className="flex justify-center gap-3 flex-wrap mb-8">
            <div className="relative">
              <button onClick={() => setShowDropdown(!showDropdown)} className="group px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded hover:from-amber-400 hover:to-amber-500 hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center gap-2 text-sm tracking-wide">
                <FaDownload className="group-hover:translate-y-0.5 transition-transform" size={13} />
                Resume
              </button>

              {showDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-slate-900/98 backdrop-blur-md rounded shadow-2xl border border-slate-700/60 overflow-hidden z-20 min-w-[180px]">
                  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 hover:bg-slate-800/70 transition-colors text-slate-300 text-sm font-light" onClick={() => setShowDropdown(false)}>
                    <FaEye className="text-amber-400" size={13} />
                    <span>View</span>
                  </a>
                  <a href="/Resume.pdf" download="Roger_Demello_Resume.pdf" className="flex items-center gap-2 px-5 py-2.5 hover:bg-slate-800/70 transition-colors text-slate-300 border-t border-slate-800/50 text-sm font-light" onClick={() => setShowDropdown(false)}>
                    <FaDownload className="text-amber-400" size={13} />
                    <span>Download</span>
                  </a>
                </div>
              )}
            </div>

            <a href="#projects" className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm text-slate-100 font-medium rounded border border-slate-600/40 hover:border-amber-500/60 hover:bg-slate-700/60 hover:shadow-lg hover:shadow-amber-500/10 transition-all text-sm tracking-wide">Projects</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-slate-500 hover:text-amber-400 transition-colors group">
          <span className="text-xs font-light mb-2 tracking-widest uppercase">Scroll</span>
          <FaArrowDown className="group-hover:translate-y-1 transition-transform" size={14} />
        </a>
      </div>
    </section>
  );
}

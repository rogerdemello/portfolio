"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaArrowDown } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { href: "https://github.com/rogerdemello", icon: <FaGithub size={16} />, label: "GitHub" },
  { href: "https://linkedin.com/in/rogerdemello", icon: <FaLinkedin size={16} />, label: "LinkedIn" },
  { href: "https://leetcode.com/u/rogerdemello/", icon: <SiLeetcode size={16} />, label: "LeetCode" },
  { href: "mailto:rogerdemello289@gmail.com", icon: <FaEnvelope size={16} />, label: "Email" },
];

const stats = [
  { value: "3+", label: "AI systems shipped" },
  { value: "200+", label: "users served" },
  { value: "87%", label: "ML model accuracy" },
];

// Highlighter-marker effect behind a word - a hand-made, non-AI flourish.
function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden
        className="absolute inset-x-[-2px] bottom-[0.08em] h-[0.42em] -z-0 bg-primary/35 -rotate-1"
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Faint decorative ink marks */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full border-2 border-foreground/[0.05]" />
        <div className="absolute top-1/3 -left-16 w-48 h-48 rotate-12 border-2 border-foreground/[0.05]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left - headline */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="eyebrow">Portfolio · 2026</span>
              <span className="inline-flex items-center gap-1.5 ink-tag !border-accent !text-accent">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Open to roles
              </span>
            </div>

            <h1 className="font-display font-black text-foreground leading-[0.92] tracking-tight text-5xl sm:text-7xl lg:text-[5.5rem]">
              Roger Richard Demello
            </h1>

            <p className="mt-5 font-display font-bold text-foreground/85 leading-[1.1] text-xl sm:text-2xl lg:text-3xl">
              I build <Mark>intelligent</Mark> systems -
              <br className="hidden sm:block" /> LLM apps, <Mark>agents</Mark> &amp; ML.
            </p>

            <p className="mt-6 text-base sm:text-lg text-foreground/75 max-w-xl leading-relaxed">
              AI Engineer, ML Engineer, and Data Scientist. I take problems end to end - from
              RAG pipelines and autonomous agents to trained models and the async backends they
              run on.
            </p>

            {/* Role stickers */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["AI Engineer", "ML Engineer", "Data Scientist"].map((r) => (
                <span key={r} className="ink-tag text-[0.78rem]">{r}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-solid group">
                See my work
                <FaArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Résumé
              </a>

              <div className="flex items-center gap-2 sm:ml-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid place-items-center w-10 h-10 rounded-lg border-2 border-foreground bg-card text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - index card */}
          <div className="lg:col-span-5">
            <div className="ink-card ink-card--hover p-6 sm:p-7 relative max-w-md mx-auto lg:ml-auto rotate-1">
              {/* taped corner */}
              <span aria-hidden className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-secondary/70 border-2 border-foreground rounded-sm -rotate-2" />

              <p className="eyebrow mb-4">Currently</p>
              <p className="font-display text-2xl font-bold text-foreground leading-snug">
                AI Engineer Intern
              </p>
              <p className="text-foreground/70 mt-1">
                @ AI LifeBOT · since Jan 2026
              </p>

              <div className="my-6 border-t-2 border-dashed border-foreground/20" />

              <div className="grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-2xl sm:text-3xl font-black text-primary leading-none">{s.value}</div>
                    <div className="text-[0.65rem] text-foreground/60 mt-1.5 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t-2 border-dashed border-foreground/20" />

              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-foreground/60">Based in</span>
                <span className="font-semibold text-foreground">Nagpur, India 🇮🇳</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="hidden sm:flex absolute bottom-7 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors group"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]">Scroll</span>
        <FaArrowDown size={13} className="animate-bounce group-hover:text-primary" />
      </a>
    </section>
  );
}

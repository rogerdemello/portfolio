"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Subsystems double as scroll-spy nav.
const nav = [
  { name: "overview", id: "home" },
  { name: "systems", id: "projects" },
  { name: "subsystems", id: "stack" },
  { name: "flight-log", id: "experience" },
  { name: "comms", id: "writing" },
  { name: "uplink", id: "contact" },
  { name: "operator", id: "about" },
];

const socials = [
  { href: "https://github.com/rogerdemello", icon: <FaGithub size={14} />, label: "GitHub" },
  { href: "https://linkedin.com/in/rogerdemello", icon: <FaLinkedin size={14} />, label: "LinkedIn" },
  { href: "mailto:rogerdemello289@gmail.com", icon: <FaEnvelope size={14} />, label: "Email" },
];

function MissionClock() {
  const [t, setT] = useState("00:00:00");
  useEffect(() => {
    const fmt = () => new Date().toLocaleTimeString("en-GB", { hour12: false });
    setT(fmt());
    const id = setInterval(() => setT(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tnum">{t}</span>;
}

export default function MissionBar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-mono text-[0.72rem] border-b border-card-border bg-background/90 backdrop-blur-md">
      <div className="flex items-center h-11 px-2 sm:px-3 gap-2 sm:gap-3">
        {/* Mission id */}
        <button
          onClick={() => go("home")}
          className="hidden sm:flex items-center gap-2 shrink-0 focus:outline-none"
          aria-label="Overview"
        >
          <span className="led" aria-hidden />
          <span className="text-primary font-semibold tracking-wide">RD.OPS</span>
          <span className="text-foreground/35 draft-letter">mission control</span>
        </button>

        <span aria-hidden className="hidden sm:block w-px h-5 bg-card-border" />

        {/* Subsystem nav */}
        <nav className="flex items-center gap-0.5 overflow-x-auto no-scrollbar flex-1 min-w-0">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`shrink-0 draft-letter px-2 py-1 rounded-sm transition-colors focus:outline-none ${
                  isActive
                    ? "bg-primary/12 text-primary"
                    : "text-foreground/55 hover:text-foreground hover:bg-card-border/25"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 pl-1">
          <span className="hidden md:inline-flex items-center gap-1.5 text-primary draft-letter">
            <span className="led" aria-hidden />
            live
          </span>
          <span aria-hidden className="hidden md:block w-px h-5 bg-card-border" />
          <span className="hidden lg:inline text-accent draft-letter">
            <span className="text-foreground/40">T+</span> <MissionClock />
          </span>
          <span aria-hidden className="hidden lg:block w-px h-5 bg-card-border" />
          <div className="hidden sm:flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-foreground/50 hover:text-primary transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

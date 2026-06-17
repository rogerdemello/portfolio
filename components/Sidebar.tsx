"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const nav = [
  { name: "Projects", id: "projects" },
  { name: "Stack", id: "stack" },
  { name: "Experience", id: "experience" },
  { name: "Writing", id: "writing" },
  { name: "Contact", id: "contact" },
  { name: "About", id: "about" },
];

const socials = [
  { href: "https://github.com/rogerdemello", icon: <FaGithub size={16} />, label: "GitHub" },
  { href: "https://linkedin.com/in/rogerdemello", icon: <FaLinkedin size={16} />, label: "LinkedIn" },
  { href: "mailto:rogerdemello289@gmail.com", icon: <FaEnvelope size={16} />, label: "Email" },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const ids = ["home", ...nav.map((n) => n.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
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

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const Monogram = (
    <button
      onClick={() => go("home")}
      className="font-display text-4xl leading-none text-foreground hover:text-primary transition-colors focus:outline-none"
      aria-label="Home"
    >
      R
      <span className="text-primary">.</span>
    </button>
  );

  const NavLinks = (
    <ul className="space-y-1">
      {nav.map((item) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <button
              onClick={() => go(item.id)}
              className={`group flex items-center gap-2.5 w-full text-left py-1.5 font-mono text-sm transition-colors focus:outline-none ${
                isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <span
                className={`h-px bg-current transition-all duration-300 ${
                  isActive ? "w-7 opacity-100" : "w-3 opacity-40 group-hover:w-5"
                }`}
              />
              {item.name}
            </button>
          </li>
        );
      })}
    </ul>
  );

  const SocialRow = (
    <div className="flex items-center gap-3">
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
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-60 flex-col justify-between px-10 py-12 border-r border-card-border bg-background/70 backdrop-blur-sm z-40">
        <div>
          {Monogram}
          <p className="mt-3 font-mono text-xs text-foreground/50 leading-relaxed">
            AI Engineer<br />Nagpur, India
          </p>
          <nav className="mt-12">{NavLinks}</nav>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-secondary">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Open to roles
          </div>
          {SocialRow}
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-16 border-b border-card-border bg-background/90 backdrop-blur-md">
        {Monogram}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="grid place-items-center w-10 h-10 rounded-lg border border-foreground/20 text-foreground focus:outline-none"
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-40 bg-foreground/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-64 z-50 flex flex-col justify-between px-8 py-10 border-r border-card-border bg-background transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {Monogram}
          <nav className="mt-10">{NavLinks}</nav>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-secondary">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Open to roles
          </div>
          {SocialRow}
        </div>
      </aside>
    </>
  );
}

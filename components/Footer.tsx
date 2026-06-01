"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const links = [
  { href: "https://github.com/rogerdemello", icon: <FaGithub size={18} />, label: "GitHub" },
  { href: "https://linkedin.com/in/rogerdemello", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
  { href: "https://leetcode.com/u/rogerdemello/", icon: <SiLeetcode size={18} />, label: "LeetCode" },
  { href: "mailto:rogerdemello289@gmail.com", icon: <FaEnvelope size={18} />, label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-foreground bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="eyebrow mb-3">Roger Richard Demello</p>
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" }); }}
                className="font-display font-black text-foreground text-3xl sm:text-4xl leading-[0.95] hover:text-primary transition-colors"
              >
                Let&apos;s make<br />something good.
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={l.label}
                  className="ink-card ink-card--hover flex items-center gap-2 px-4 py-2.5 text-foreground"
                >
                  {l.icon}
                  <span className="font-mono text-xs uppercase tracking-[0.14em] font-semibold">{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-6 border-t-2 border-dashed border-foreground/25 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-mono text-xs text-foreground/60">
              © {currentYear} Roger Richard Demello - built with care.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-xs uppercase tracking-[0.14em] font-semibold text-foreground/60 hover:text-primary transition-colors flex items-center gap-1.5"
            >
              Back to top <FaArrowUp size={11} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

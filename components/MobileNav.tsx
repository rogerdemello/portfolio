"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Path", href: "#experience" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md border-b-2 border-foreground" : "bg-transparent border-b-2 border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-[4.5rem] flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* Logo - sticker monogram */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="Home"
            >
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-foreground text-background font-display font-black text-base border-2 border-foreground shadow-[3px_3px_0_0_hsl(var(--primary))] group-hover:shadow-[1px_1px_0_0_hsl(var(--primary))] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-150">
                RD
              </span>
              <span className="hidden sm:block font-display font-semibold text-foreground text-lg leading-none">
                Roger Demello
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className="font-mono text-xs uppercase tracking-[0.18em] font-semibold text-foreground/70 hover:text-primary transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full focus:outline-none focus:text-primary"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid !py-2 !px-4 text-xs font-mono uppercase tracking-[0.14em]"
              >
                Résumé
              </a>
            </div>

            {/* Mobile menu button - sticker */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden grid place-items-center w-10 h-10 rounded-lg bg-card border-2 border-foreground text-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_hsl(var(--foreground))] transition-all duration-150 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer overlay */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 md:hidden bg-foreground/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-background border-l-2 border-foreground z-50 transform md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 grid place-items-center w-9 h-9 rounded-lg border-2 border-foreground text-foreground bg-card shadow-[3px_3px_0_0_hsl(var(--foreground))] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-150 focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes size={16} />
          </button>

          <p className="eyebrow mt-2 mb-5">Menu</p>
          <div className="space-y-1">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="flex items-baseline gap-3 px-3 py-2.5 rounded-lg text-foreground hover:bg-background-tertiary transition-colors duration-200 group"
              >
                <span className="font-mono text-xs text-primary tabular-nums">0{i + 1}</span>
                <span className="font-display text-lg font-semibold group-hover:text-primary transition-colors">{item.name}</span>
              </a>
            ))}
          </div>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid w-full mt-6"
          >
            Download Résumé
          </a>

          <div className="mt-8 pt-6 border-t-2 border-dashed border-foreground/25">
            <p className="eyebrow mb-3">Elsewhere</p>
            <div className="flex gap-3">
              {[
                { href: "https://github.com/rogerdemello", icon: <FaGithub size={18} />, label: "GitHub" },
                { href: "https://linkedin.com/in/rogerdemello", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
                { href: "mailto:rogerdemello289@gmail.com", icon: <FaEnvelope size={18} />, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center w-10 h-10 rounded-lg border-2 border-foreground bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

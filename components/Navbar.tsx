"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SECTIONS, SECTION_IDS, useActiveSection } from "@/lib/useActiveSection";

// The logo handles "home", so it isn't repeated as a nav link.
const navItems = SECTIONS.filter((s) => s.id !== "home");

export default function Navbar() {
  const active = useActiveSection([...SECTION_IDS]);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The bar sits flush at the top of the page and lifts once you scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-content items-center gap-3 rounded-full border px-3 py-2 transition-all duration-300 ease-smooth sm:px-4 ${
          scrolled
            ? "border-edge bg-card/85 shadow-[var(--lift)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Wordmark */}
        <button
          onClick={() => go("home")}
          aria-label="Back to top"
          className="group flex shrink-0 items-center gap-2.5 rounded-full pl-1 pr-2"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-sm font-bold text-white transition-transform duration-300 ease-smooth group-hover:scale-105">
            R
          </span>
          <span className="hidden font-display text-[0.95rem] font-bold tracking-tight text-ink sm:inline">
            Roger Demello
          </span>
        </button>

        {/* Desktop links */}
        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[0.9rem] font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-accent-soft text-accent-hover"
                      : "text-ink-muted hover:bg-paper-sunk hover:text-ink"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right cluster */}
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href="https://github.com/rogerdemello"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 place-items-center rounded-full text-ink-subtle transition-colors hover:bg-paper-sunk hover:text-ink sm:grid"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://linkedin.com/in/rogerdemello"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 place-items-center rounded-full text-ink-subtle transition-colors hover:bg-paper-sunk hover:text-ink sm:grid"
          >
            <FaLinkedin size={17} />
          </a>

          <button
            onClick={() => go("contact")}
            className="btn hidden !px-4 !py-2 !text-[0.875rem] sm:inline-flex"
          >
            Get in touch
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-edge bg-card text-ink lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-smooth ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-smooth ${
                  open ? "top-1/2 -rotate-45" : "top-full"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-content overflow-hidden rounded-lg border border-edge bg-card shadow-[var(--lift-lg)] transition-all duration-300 ease-smooth lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="p-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`w-full rounded-sm px-4 py-3 text-left text-[0.95rem] font-semibold transition-colors ${
                  active === item.id
                    ? "bg-accent-soft text-accent-hover"
                    : "text-ink-muted hover:bg-paper-sunk hover:text-ink"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="border-t border-edge p-3">
          <button onClick={() => go("contact")} className="btn w-full">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
}

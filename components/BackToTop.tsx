"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-6 left-4 sm:bottom-8 sm:left-8 z-50 grid place-items-center w-12 h-12 rounded-xl bg-foreground text-background border-2 border-foreground shadow-[4px_4px_0_0_hsl(var(--primary))] hover:shadow-[6px_6px_0_0_hsl(var(--primary))] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_hsl(var(--primary))] transition-all duration-150 focus:outline-none ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <FaArrowUp size={16} />
    </button>
  );
}

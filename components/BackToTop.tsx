"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-350 ease-smooth transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background btn-ripple ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        transition: "opacity 0.35s cubic-bezier(0.33, 1, 0.68, 1), transform 0.35s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.35s ease",
      }}
    >
      <FaArrowUp className="text-xl transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}

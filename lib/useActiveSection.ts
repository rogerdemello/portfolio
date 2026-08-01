"use client";
import { useEffect, useState } from "react";

/**
 * Scroll-spy shared by the navigation rail and the status bar, so both always
 * report the same section. Returns the id of the section nearest the middle of
 * the viewport.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

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
    // `ids` is a module-level constant at every call site.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}

/** Sections in document order, driving the navbar links and scroll-spy. */
export const SECTIONS = [
  { id: "home", name: "Home" },
  { id: "projects", name: "Work" },
  { id: "stack", name: "Stack" },
  { id: "experience", name: "Experience" },
  { id: "writing", name: "Writing" },
  { id: "about", name: "About" },
  { id: "contact", name: "Contact" },
] as const;

export const SECTION_IDS = SECTIONS.map((s) => s.id);

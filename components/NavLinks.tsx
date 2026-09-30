"use client";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

/** Header links. The section you are reading gets an ink label and a pen underline. */
export default function NavLinks() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = ["top", ...nav.map((n) => n.id)];
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id === "top" ? "" : e.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="order-3 -mx-2 flex w-full gap-1 overflow-x-auto font-sans text-[0.93rem] sm:order-none sm:mx-0 sm:w-auto sm:gap-6"
    >
      {nav.map((n) => {
        const on = active === n.id;
        return (
          <a
            key={n.id}
            href={`#${n.id}`}
            aria-current={on ? "location" : undefined}
            className={`whitespace-nowrap rounded border-b-2 px-2 py-1 transition-colors sm:px-0 ${
              on ? "border-pen text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {n.name}
          </a>
        );
      })}
    </nav>
  );
}

"use client";
import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";

/**
 * "View N more projects": the first projects are always showing; the rest unfold from under this button.
 * The folded rows stay in the page (so crawlers and print see them) but are hidden from the tab order
 * until opened. Links elsewhere on the page that point into the fold (the hero screenshots) open it first.
 */
export default function MoreProjects({ count, children }: { count: number; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const fold = useRef<HTMLDivElement>(null);
  const id = useId();

  // Open the fold, then bring the target into view once the rows have unfolded.
  const reveal = useCallback((hash: string) => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (!target || !fold.current?.contains(target)) return;
    setOpen(true);
    window.setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 480);
  }, []);

  useEffect(() => {
    reveal(window.location.hash);
    const onHash = () => reveal(window.location.hash);
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>('a[href^="#"]');
      // Same-hash clicks don't fire hashchange, so catch the click itself.
      if (a && a.getAttribute("href") === window.location.hash) reveal(a.getAttribute("href")!);
    };
    window.addEventListener("hashchange", onHash);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onClick);
    };
  }, [reveal]);

  return (
    <>
      <div className="border-t border-ink/[0.12] py-6">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="btn btn-line group"
        >
          {open ? "Show fewer projects" : `View ${count} more projects`}
          <span aria-hidden className={`inline-block text-pen transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
            +
          </span>
        </button>
      </div>

      <div id={id} ref={fold} className="fold" data-open={open}>
        <div>{children}</div>
      </div>
    </>
  );
}

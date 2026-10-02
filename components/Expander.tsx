"use client";
import { useState, type ReactNode } from "react";

/**
 * "How it works +" for a project row. Native <details>, so the text is always in the page, but
 * the large figure is only mounted once the row is opened (it is the heavy part).
 */
export default function Expander({ figure, children }: { figure: ReactNode; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <details className="more mt-4" onToggle={(e) => setOpen(e.currentTarget.open)}>
      <summary className="inline-flex items-center gap-2 font-sans text-[0.93rem] font-semibold">
        How it works
        <span aria-hidden className="more-plus inline-block text-pen transition-transform">+</span>
      </summary>
      <div className="mt-4 space-y-5">
        {open && figure}
        {children}
      </div>
    </details>
  );
}

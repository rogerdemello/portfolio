"use client";

export default function Footer() {
  return (
    <footer className="border-t border-card-border mt-8">
      <div className="max-w-3xl px-5 sm:px-8 lg:pl-20 lg:pr-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-display text-xl text-foreground leading-none">Roger Demello<span className="text-primary">.</span></p>
          <p className="font-mono text-xs text-foreground/50 mt-2">AI Engineer · Nagpur, India</p>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-xs text-foreground/50 hover:text-primary transition-colors"
          >
            back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

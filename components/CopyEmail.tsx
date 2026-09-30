"use client";
import { useEffect, useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard API unavailable (insecure context / old browser): select-and-copy fallback.
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="ml-3 font-sans text-[0.88rem] text-muted underline decoration-ink/30 underline-offset-4 transition-colors hover:text-pen"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

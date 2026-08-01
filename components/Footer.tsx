"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { CODING_PROFILES } from "@/lib/profiles";

const socials = [
  { href: "https://github.com/rogerdemello", icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com/in/rogerdemello", icon: FaLinkedin, label: "LinkedIn" },
  { href: "mailto:rogerdemello289@gmail.com", icon: FaEnvelope, label: "Email" },
  ...CODING_PROFILES.map((p) => ({ href: p.href, icon: p.icon, label: p.name })),
];

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-paper">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-sm font-bold text-white">
            R
          </span>
          <div>
            <p className="font-display text-[0.95rem] font-bold text-ink">Roger Demello</p>
            <p className="text-[0.82rem] text-ink-subtle">AI Engineer · Nagpur, India</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-edge bg-card text-ink-subtle transition-colors hover:border-edge-strong hover:text-ink"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <p className="text-[0.82rem] text-ink-subtle">© 2026 Roger Demello</p>
      </div>
    </footer>
  );
}

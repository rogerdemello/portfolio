import { profile } from "@/lib/content";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper print:hidden">
      <div className="page flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
        <a href="#top" className="text-[1.3rem] font-medium tracking-tight">
          {profile.name}
        </a>

        <NavLinks />

        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          download={profile.cvFile}
          className="font-sans text-[0.93rem] font-semibold underline decoration-pen decoration-2 underline-offset-4 transition-colors hover:text-pen"
        >
          CV <span aria-hidden>↓</span>
        </a>
      </div>
    </header>
  );
}

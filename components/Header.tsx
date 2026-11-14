import { profile } from "@/lib/content";
import NavLinks from "./NavLinks";
import CvMenu from "./CvMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper print:hidden">
      <div className="page flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
        <a href="#top" className="text-[1.3rem] font-medium tracking-tight">
          {profile.name}
        </a>

        <NavLinks />

        <CvMenu variant="nav" align="right" label="CV" />
      </div>
    </header>
  );
}

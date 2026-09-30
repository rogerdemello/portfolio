import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="page flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="meta">
          © {new Date().getFullYear()} {profile.fullName}. Written and built by hand with Next.js and Tailwind, set in
          Newsreader and Hanken Grotesk.
        </p>
        <a href="#top" className="link font-sans text-[0.9rem]">
          Back to top <span aria-hidden>↑</span>
        </a>
      </div>
    </footer>
  );
}

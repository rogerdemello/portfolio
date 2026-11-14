import { profile } from "@/lib/content";

const style = {
  ink: "btn btn-ink",
  line: "btn btn-line",
  nav: "font-sans text-[0.93rem] font-semibold underline decoration-pen decoration-2 underline-offset-4 transition-colors hover:text-pen",
} as const;

/** "My CV": opens the resume PDF in a new tab. */
export default function CvLink({ variant = "ink", label = "My CV" }: { variant?: keyof typeof style; label?: string }) {
  return (
    <a
      href={profile.cv}
      target="_blank"
      rel="noopener noreferrer"
      data-tap={variant === "nav" ? "" : undefined}
      className={`${style[variant]} print:hidden`}
    >
      {label} <span aria-hidden>↗</span>
    </a>
  );
}

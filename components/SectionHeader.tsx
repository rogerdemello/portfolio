import FadeIn from "@/components/FadeIn";

/**
 * Shared section opening: a rounded eyebrow chip, a large friendly heading and
 * an optional lead paragraph. The reveal lives here so every section gets the
 * same entrance without each one repeating the wrapper.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <FadeIn>
      <header className="mb-12 md:mb-16">
        <span className="eyebrow">{eyebrow}</span>

        <h2 className="mt-5 max-w-2xl font-display text-[2.1rem] font-extrabold leading-[1.08] track-tighter text-ink sm:text-[2.75rem]">
          {title}
        </h2>

        {description && (
          <p className="mt-4 max-w-prose text-[1.05rem] leading-relaxed text-ink-muted">
            {description}
          </p>
        )}
      </header>
    </FadeIn>
  );
}

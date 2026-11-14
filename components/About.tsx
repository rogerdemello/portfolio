import { story } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="page pt-24 sm:pt-32">
      <h2 className="h2">About</h2>

      <ol className="mt-12 space-y-8">
        {story.map((s) => (
          <li key={s.year} className="grid gap-x-10 gap-y-1 md:grid-cols-[10.5rem_1fr]">
            <p className="meta md:pt-2 font-semibold text-ink">{s.year}</p>
            <div className="max-w-[40rem]">
              <p className="text-[1.3rem] font-medium leading-snug tracking-[-0.01em]">{s.line}</p>
              <p className="mt-1.5 text-[1.08rem] leading-[1.6] text-ink/80">{s.sub}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

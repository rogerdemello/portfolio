import { experience, education, credentials } from "@/lib/content";
import Figures from "./Figures";

export default function Experience() {
  return (
    <section id="experience" className="page pt-24 sm:pt-32">
      <h2 className="h2">Experience</h2>

      <ol className="mt-12 space-y-14">
        {experience.map((r) => (
          <li key={r.company} className="grid gap-x-10 gap-y-2 md:grid-cols-[10.5rem_1fr]">
            <div className="meta md:pt-2.5">
              <p className="font-semibold text-ink">{r.period}</p>
              {r.place && <p>{r.place}</p>}
              {r.current && <p className="note mt-1 -rotate-2 text-[1.3rem]">that&apos;s now</p>}
            </div>

            <div className="max-w-[40rem]">
              <h3 className="text-[1.65rem] font-medium leading-tight tracking-[-0.02em]">
                {r.company}
                <span className="font-normal text-muted"> · {r.role}</span>
              </h3>
              <p className="mt-2 text-[1.15rem] italic leading-snug text-ink/75">{r.headline}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[1.08rem] leading-[1.55] marker:text-pen">
                {r.highlights.map((h) => (
                  <li key={h}>
                    <Figures text={h} />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-20 grid gap-x-10 gap-y-10 md:grid-cols-[10.5rem_1fr]">
        <h3 className="text-[1.65rem] font-medium leading-tight tracking-[-0.02em] md:col-span-2">Education</h3>

        <p className="meta md:pt-1.5">
          <span className="font-semibold text-ink">{education.years}</span>
          <br />
          {education.short}
        </p>
        <div className="max-w-[40rem]">
          <p className="text-[1.15rem] leading-snug">{education.school}</p>
          <ul className="mt-3 space-y-1.5 text-[1.08rem]">
            {education.degrees.map((d) => (
              <li key={d.title}>
                {d.title}. <span className="text-muted">CGPA</span> <strong className="font-semibold">{d.label}</strong>
              </li>
            ))}
          </ul>
        </div>

        <p className="meta md:pt-1.5">
          <span className="font-semibold text-ink">Also</span>
        </p>
        <ul className="max-w-[40rem] list-disc space-y-1.5 pl-5 text-[1.08rem] marker:text-pen">
          {credentials.map((c) => (
            <li key={c.title}>
              {c.title}
              {c.meta.includes(" · ") && <span className="text-muted"> ({c.meta.split(" · ").pop()})</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

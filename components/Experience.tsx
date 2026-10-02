import { experience, education, credentials } from "@/lib/content";
import Tool from "./Tool";
import ExperienceList from "./ExperienceList";

export default function Experience() {
  // Tool logos are rendered here, on the server, so the client accordion doesn't ship the icon set.
  const items = experience.map((role) => ({
    role,
    tools: (
      <ul className="-ml-2.5 flex flex-wrap gap-x-1 gap-y-1.5 text-[1rem]">
        {role.tools.map((t) => (
          <Tool key={t} name={t} />
        ))}
      </ul>
    ),
  }));

  return (
    <section id="experience" className="page pt-24 sm:pt-32">
      <h2 className="h2">Experience</h2>

      <ExperienceList items={items} />

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

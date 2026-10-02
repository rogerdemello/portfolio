import { skillGroups } from "@/lib/content";
import Tool from "./Tool";

export default function Skills() {
  return (
    <section id="skills" className="page pt-24 sm:pt-32">
      <h2 className="h2">Skills</h2>

      <p className="measure mt-5 text-[1.2rem] leading-[1.6] text-ink/80">
        What I reach for, chosen because it ships, not because it’s trendy.
      </p>

      <dl className="mt-12 space-y-8">
        {skillGroups.map((g) => (
          <div key={g.label} className="grid gap-x-10 gap-y-3 md:grid-cols-[10.5rem_1fr]">
            <dt className="font-sans text-[0.95rem] font-semibold md:pt-2.5">{g.label}</dt>
            <dd>
              <ul className="-ml-2.5 flex flex-wrap gap-x-1.5 gap-y-2 text-[1.12rem]">
                {g.items.map((item) => (
                  <Tool key={item} name={item} />
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

import { skillGroups, projects } from "@/lib/content";

/** How many of the projects list this tool in their stack (exact name match). */
function usedIn(tool: string) {
  return projects.filter((p) => p.stack.includes(tool)).length;
}

export default function Skills() {
  return (
    <section id="skills" className="page pt-24 sm:pt-32">
      <h2 className="h2">Skills</h2>

      <p className="measure mt-5 text-[1.2rem] leading-[1.6] text-ink/80">
        A skills list is easy to write, so here is the receipt: the small blue number is how many of the{" "}
        {projects.length} projects above use that tool.
      </p>

      <dl className="mt-12 space-y-7">
        {skillGroups.map((g) => (
          <div key={g.label} className="grid gap-x-10 gap-y-1 md:grid-cols-[10.5rem_1fr]">
            <dt className="font-sans text-[0.95rem] font-semibold md:pt-1.5">{g.label}</dt>
            <dd className="max-w-[40rem] text-[1.15rem] leading-[1.75]">
              {g.items.map((item, i) => {
                const n = usedIn(item);
                return (
                  <span key={item}>
                    {item}
                    {n > 0 && (
                      <sup className="ml-[0.1em] font-sans text-[0.68rem] font-semibold text-pen">{n}</sup>
                    )}
                    {i < g.items.length - 1 && <span className="text-muted">, </span>}
                  </span>
                );
              })}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

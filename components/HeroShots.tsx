import { projects, slug, thumb } from "@/lib/content";
import Shot from "./Shot";

// Three real apps, tossed on the desk like printouts. Each one jumps to its write-up.
const layout = [
  { title: "Executive Email Copilot", pos: "left-[10%] top-0 z-0", tilt: "-rotate-[2.5deg]" },
  { title: "Shadow GTM", pos: "right-0 top-[27%] z-10", tilt: "rotate-[2deg]" },
  { title: "sentinelops", pos: "left-0 top-[54%] z-20", tilt: "-rotate-[1deg]" },
];

export default function HeroShots() {
  return (
    <div className="print:hidden">
      <div className="relative mx-auto mt-16 aspect-[100/108] w-[min(22rem,88%)] sm:w-[26rem] lg:absolute lg:right-0 lg:top-2 lg:mx-0 lg:mt-0 lg:w-[19rem] xl:-right-24 xl:w-[25rem]">
        {layout.map((l) => {
          const p = projects.find((x) => x.title === l.title)!;
          return (
            <a
              key={p.title}
              href={`#${slug(p.title)}`}
              aria-label={`Jump to ${p.title}`}
              className={`absolute w-[78%] transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-0 ${l.pos} ${l.tilt}`}
            >
              <Shot
                src={thumb(p.image!)}
                alt={p.imageAlt!}
                width={640}
                height={400}
                className="shadow-[0_1px_2px_rgb(0_0_0/0.08),0_16px_30px_-16px_rgb(0_0_0/0.45)]"
              />
            </a>
          );
        })}
        <p aria-hidden className="note absolute -bottom-11 left-3 -rotate-2 whitespace-nowrap">
          the real apps, not mockups
        </p>
      </div>
    </div>
  );
}

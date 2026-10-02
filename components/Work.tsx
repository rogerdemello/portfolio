import { projects, slug, thumb, type Project } from "@/lib/content";
import { numberWord, capitalise } from "@/lib/format";
import { Circled } from "./Doodles";
import { MusicRecsysSketch, DealSentrySketch } from "./Sketches";
import Figures from "./Figures";
import Shot from "./Shot";
import Expander from "./Expander";

const sketched = projects.filter((p) => p.sketch).length;

function Links({ p }: { p: Project }) {
  const live = p.links.find((l) => l.label === "Live");
  const source = p.links.find((l) => l.label === "GitHub");
  return (
    <p className="flex flex-wrap gap-x-5 gap-y-1 font-sans text-[0.98rem] font-medium">
      {live && (
        <a href={live.href} target="_blank" rel="noopener noreferrer" className="link">
          Live demo <span aria-hidden>↗</span>
        </a>
      )}
      {source && (
        <a href={source.href} target="_blank" rel="noopener noreferrer" className="link">
          Source code <span aria-hidden>↗</span>
        </a>
      )}
    </p>
  );
}

/** Projects with no presentable UI get a hand-drawn sketch in place of a screenshot. */
function Sketch({ p, bare = false }: { p: Project; bare?: boolean }) {
  return p.sketch === "music-recsys" ? <MusicRecsysSketch bare={bare} /> : <DealSentrySketch bare={bare} />;
}

/** The small picture at the left of every row. It opens the live demo, or the source when there is none. */
function Thumb({ p }: { p: Project }) {
  const target = p.links.find((l) => l.label === "Live") ?? p.links[0];
  return (
    <a
      href={target.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${p.title} (${target.label === "Live" ? "live demo" : "source code"})`}
      className="group block self-start"
    >
      <div className="transition-transform duration-300 group-hover:-translate-y-1">
        {p.sketch ? (
          <div className="figure shot flex items-center justify-center bg-paper px-1.5">
            <Sketch p={p} bare />
          </div>
        ) : (
          <Shot src={thumb(p.image!)} alt={p.imageAlt!} width={640} height={400} />
        )}
      </div>
    </a>
  );
}

/** The large picture shown when a row is opened. */
function FullFigure({ p }: { p: Project }) {
  const caption = p.sketch
    ? "My sketch of how it works. There isn’t a UI worth a screenshot."
    : p.title === "sentinelops"
      ? "The real app, running locally. I injected a database scenario and it predicted the incident."
      : "Screenshot of the running app.";
  return (
    <figure className="max-w-[52rem]">
      {p.sketch ? (
        // Diagrams keep a readable size on phones and scroll sideways inside their own frame.
        <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="min-w-[640px]">
            <Sketch p={p} />
          </div>
        </div>
      ) : (
        <Shot src={p.image!} alt={p.imageAlt!} width={1600} height={1000} />
      )}
      <figcaption className="meta mt-2">{caption}</figcaption>
    </figure>
  );
}

function Row({ p }: { p: Project }) {
  return (
    <li id={slug(p.title)} className="grid scroll-mt-24 gap-x-8 gap-y-4 py-9 sm:grid-cols-[13.5rem_1fr]">
      <Thumb p={p} />
      <div className="min-w-0">
        <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[1.6rem] font-medium leading-tight tracking-[-0.02em]">
          {p.title}
          {p.onCv && <span className="marker font-sans text-[0.7rem] font-semibold tracking-wide">On my CV</span>}
        </h3>
        <p className="mt-1.5 text-[1.08rem] leading-[1.55]">
          <Figures text={p.result} />
        </p>
        <p className="meta mt-2">{p.stack.join(" · ")}</p>
        <div className="mt-3">
          <Links p={p} />
        </div>

        <Expander figure={<FullFigure p={p} />}>
          <div className="max-w-[40rem] space-y-3 text-[1.05rem] leading-[1.55]">
            <p className="italic text-ink/75">{p.problem}</p>
            <ul className="list-disc space-y-1 pl-5 marker:text-pen">
              {p.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </Expander>
      </div>
    </li>
  );
}

export default function Work() {
  return (
    <section id="work" className="page pt-20 sm:pt-28">
      <h2 className="h2">Work</h2>
      <p className="measure mt-5 text-[1.2rem] leading-[1.6] text-ink/80">
        Here are {numberWord(projects.length)} projects I’ve built. If you’re short on time, start with the ones tagged{" "}
        <Circled>On my CV</Circled>. Every one links to its code, and the ones with a live demo say so.{" "}
        {capitalise(numberWord(sketched))} of them have no interface worth a screenshot, so I drew how they work instead.
        The sketches are mine.
      </p>

      <ul className="mt-12 divide-y divide-ink/[0.12] border-y border-ink/[0.12]">
        {projects.map((p) => (
          <Row key={p.title} p={p} />
        ))}
      </ul>
    </section>
  );
}

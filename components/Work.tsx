import { projects, slug, thumb, type Project } from "@/lib/content";
import { Circled } from "./Doodles";
import { MusicRecsysSketch, DealSentrySketch } from "./Sketches";
import Figures from "./Figures";
import Shot from "./Shot";

const WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
const word = (n: number) => WORDS[n] ?? String(n);

const featured = projects.filter((p) => p.onCv);
const more = projects.filter((p) => !p.onCv);

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

function Figure({ p }: { p: Project }) {
  if (p.sketch) {
    // Diagrams keep a readable size on phones and scroll sideways inside their own frame.
    return (
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <div className="min-w-[640px]">{p.sketch === "music-recsys" ? <MusicRecsysSketch /> : <DealSentrySketch />}</div>
      </div>
    );
  }
  return <Shot src={p.image!} alt={p.imageAlt!} width={1600} height={1000} />;
}

function caption(p: Project) {
  if (p.sketch) return "My sketch of how it works. There isn't a UI worth a screenshot.";
  if (p.title === "sentinelops") return "The real app, running locally. I injected a database scenario and it predicted the incident.";
  return "Screenshot of the running app.";
}

function Featured({ p, n }: { p: Project; n: number }) {
  return (
    <article id={slug(p.title)} className="mt-16 scroll-mt-24 sm:mt-24">
      <header className="measure">
        <p className="meta">
          {n} of {featured.length} on my CV · {p.categories.join(", ")}
        </p>
        <h3 className="mt-2 text-[clamp(2rem,4.4vw,2.7rem)] font-medium leading-[1.05] tracking-[-0.025em]">{p.title}</h3>
        <p className="mt-3 text-[1.22rem] italic leading-snug text-ink/75">{p.problem}</p>
      </header>

      <figure className="mt-7 max-w-[52rem]">
        <Figure p={p} />
        <figcaption className="meta mt-2">{caption(p)}</figcaption>
      </figure>

      <div className="mt-8 grid max-w-[52rem] gap-x-14 gap-y-8 md:grid-cols-2">
        <div>
          <h4 className="font-sans text-[0.95rem] font-semibold">What I built</h4>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[1.08rem] leading-[1.55] marker:text-pen">
            {p.approach.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-[0.95rem] font-semibold">How it turned out</h4>
          <p className="mt-2 text-[1.08rem] leading-[1.55]">
            <Figures text={p.result} />
          </p>
          <p className="meta mt-4">Built with {p.stack.join(", ")}.</p>
          <div className="mt-4">
            <Links p={p} />
          </div>
        </div>
      </div>
    </article>
  );
}

/** Thumbnail for the smaller projects; opens the live demo, or the source when there is none. */
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
      <Shot
        src={thumb(p.image!)}
        alt={p.imageAlt!}
        width={640}
        height={400}
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
    </a>
  );
}

function Small({ p }: { p: Project }) {
  return (
    <li id={slug(p.title)} className="grid scroll-mt-24 gap-x-8 gap-y-4 py-9 sm:grid-cols-[13.5rem_1fr]">
      <Thumb p={p} />
      <div>
        <h4 className="text-[1.6rem] font-medium leading-tight tracking-[-0.02em]">{p.title}</h4>
        <p className="mt-1.5 text-[1.08rem] leading-[1.55]">
          <Figures text={p.result} />
        </p>
        <p className="meta mt-2">{p.stack.join(" · ")}</p>
        <div className="mt-3">
          <Links p={p} />
        </div>

        <details className="more mt-4">
          <summary className="inline-flex items-center gap-2 font-sans text-[0.93rem] font-semibold">
            How it works
            <span aria-hidden className="more-plus inline-block text-pen transition-transform">+</span>
          </summary>
          <div className="mt-3 space-y-3 text-[1.05rem] leading-[1.55]">
            <p className="italic text-ink/75">{p.problem}</p>
            <ul className="list-disc space-y-1 pl-5 marker:text-pen">
              {p.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </li>
  );
}

export default function Work() {
  return (
    <section id="work" className="page pt-20 sm:pt-28">
      <h2 className="h2">Work</h2>
      <p className="measure mt-5 text-[1.2rem] leading-[1.6] text-ink/80">
        {word(projects.length)} projects, but start with the <Circled>{word(featured.length).toLowerCase()}</Circled> on my CV.
        Every one links to its source, and the ones with a live demo say so. The drawings are mine: two of these
        have no interface worth a screenshot, so I sketched how they work instead.
      </p>

      {featured.map((p, i) => (
        <Featured key={p.title} p={p} n={i + 1} />
      ))}

      <div className="mt-24 sm:mt-32">
        <h3 className="text-[1.9rem] font-medium tracking-[-0.02em]">Also built</h3>
        <p className="measure mt-2 text-ink/75">Newer or smaller. Open any of them for how it works.</p>
        <ul className="mt-6 divide-y divide-ink/[0.12] border-y border-ink/[0.12]">
          {more.map((p) => (
            <Small key={p.title} p={p} />
          ))}
        </ul>
      </div>
    </section>
  );
}

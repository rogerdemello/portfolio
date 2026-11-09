import { MusicRecsysSketch, DealSentrySketch } from "./Sketches";
import Shot from "./Shot";

/** The plain-data slice of a project that the large figure needs (so it can cross to the client cheaply). */
export interface FigureProps {
  title: string;
  image?: string;
  imageAlt?: string;
  sketch?: "music-recsys" | "dealsentry";
}

/**
 * The large picture shown when a project row is opened. It lives in its own module and is loaded
 * on demand by Expander, so the sketches and full-size screenshots cost nothing until someone asks.
 */
export default function FullFigure({ title, image, imageAlt, sketch }: FigureProps) {
  const caption = sketch
    ? "My sketch of how it works. There isn’t a UI worth a screenshot."
    : title === "sentinelops"
      ? "The real app, running locally. I injected a database scenario and it predicted the incident."
      : "Screenshot of the running app.";
  return (
    <figure className="max-w-[52rem]">
      {sketch ? (
        // Diagrams keep a readable size on phones and scroll sideways inside their own frame.
        <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="min-w-[640px]">{sketch === "music-recsys" ? <MusicRecsysSketch /> : <DealSentrySketch />}</div>
        </div>
      ) : (
        <Shot src={image!} alt={imageAlt!} width={1600} height={1000} />
      )}
      <figcaption className="meta mt-2">{caption}</figcaption>
    </figure>
  );
}

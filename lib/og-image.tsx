import { ImageResponse } from "next/og";

// Shared 1200x630 social card for the Open Graph + Twitter routes.
// Same voice as the site: plain paper, a serif headline, one highlighted line, a note in ballpoint.
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT =
  "Roger Demello - software engineer, AI/ML, based in India. Can start immediately, in any timezone.";

const PAPER = "#FAF9F6";
const INK = "#1C1B19";
const SOFT = "#6C6962";
const PEN = "#2545C9";
const MARK = "#FFE58A";

// Fetch a single-subset Google font (only the glyphs in `text`) as an ArrayBuffer.
async function loadFont(familyQuery: string, text: string) {
  const url =
    `https://fonts.googleapis.com/css2?family=${familyQuery.replace(/ /g, "+")}` +
    `&text=${encodeURIComponent(text)}`;
  const css = await (
    await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } })
  ).text();
  const src = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
  if (!src) throw new Error(`font src not found for ${familyQuery}`);
  return fetch(src).then((r) => r.arrayBuffer());
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
const TEXT = `${ALPHABET}.,'/:-&`;

export async function renderOgImage() {
  let fonts:
    | { name: string; data: ArrayBuffer; weight: 400 | 500 | 700; style: "normal" }[]
    | undefined;
  try {
    const [serif, note] = await Promise.all([
      loadFont("Newsreader:wght@500", TEXT),
      loadFont("Caveat:wght@500", TEXT),
    ]);
    fonts = [
      { name: "Serif", data: serif, weight: 500, style: "normal" },
      { name: "Note", data: note, weight: 500, style: "normal" },
    ];
  } catch {
    fonts = undefined; // graceful fallback to the default font
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 84px",
          background: PAPER,
          color: INK,
          fontFamily: "Serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: -0.5 }}>Roger Demello</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 150, lineHeight: 1, letterSpacing: -5, whiteSpace: "nowrap" }}>Hi, I&apos;m Roger.</div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", marginTop: 26, fontSize: 40, lineHeight: 1.3, whiteSpace: "nowrap" }}>
            <span>Software engineer, AI/ML. I&nbsp;</span>
            <span style={{ background: MARK, padding: "0 10px", borderRadius: 4 }}>can start immediately</span>
            <span>.</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, color: SOFT }}>rogerdemello.tech</div>
          <div style={{ display: "flex", fontFamily: "Note", fontSize: 44, color: PEN, transform: "rotate(-3deg)" }}>
            start date: whenever you need
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}

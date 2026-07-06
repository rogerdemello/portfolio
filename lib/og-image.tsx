import { ImageResponse } from "next/og";

// Shared 1200x630 social card for the Open Graph + Twitter routes.
// Mirrors the site's "Technical Notebook" theme: warm ivory paper, charcoal
// ink, burnt-orange accent, editorial serif headline + mono details.
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT =
  "Roger Demello - AI / ML Engineer building systems that think, reason and ship.";

const IVORY = "#F7F3EC";
const INK = "#1A1A1A";
const ORANGE = "#C75B12";
const GREEN = "#234B35";
const MUTED = "rgba(26,26,26,0.55)";
const LINE = "rgba(26,26,26,0.14)";

// Fetch a single-subset Google font (only the glyphs in `text`) as an ArrayBuffer.
async function loadFont(family: string, weight: number, text: string) {
  const url =
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}` +
    `&text=${encodeURIComponent(text)}`;
  const css = await (
    await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } })
  ).text();
  const src = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
  if (!src) throw new Error(`font src not found for ${family}`);
  return fetch(src).then((r) => r.arrayBuffer());
}

const SERIF_TEXT = "Roger Demello Building systems that think, reason and ship.";
const MONO_TEXT =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 /·.+%&:-";

export async function renderOgImage() {
  let fonts:
    | { name: string; data: ArrayBuffer; weight: 400 | 500; style: "normal" }[]
    | undefined;
  try {
    const [serif, mono] = await Promise.all([
      loadFont("Instrument Serif", 400, SERIF_TEXT),
      loadFont("JetBrains Mono", 500, MONO_TEXT),
    ]);
    fonts = [
      { name: "Serif", data: serif, weight: 400, style: "normal" },
      { name: "Mono", data: mono, weight: 500, style: "normal" },
    ];
  } catch {
    fonts = undefined; // graceful fallback to the default font
  }

  const stat = (v: string, label: string) => (
    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
      <span style={{ color: ORANGE }}>{v}</span>
      <span style={{ color: MUTED }}>{label}</span>
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 68px",
          background: IVORY,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26,26,26,0.05) 1px, transparent 0)",
          backgroundSize: "26px 26px",
          color: INK,
          fontFamily: "Mono",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", fontFamily: "Serif", fontSize: 48 }}>
            <span>R</span>
            <span style={{ color: ORANGE }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: `1px solid ${LINE}`,
              borderRadius: 999,
              padding: "9px 16px",
              fontSize: 17,
              letterSpacing: 1,
              color: GREEN,
              textTransform: "uppercase",
            }}
          >
            <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: GREEN }} />
            Available for AI Engineering roles
          </div>
        </div>

        {/* Middle */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "Serif", fontSize: 128, lineHeight: 1, letterSpacing: -1 }}>
            Roger Demello
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontFamily: "Serif",
              fontSize: 46,
              marginTop: 18,
              color: "rgba(26,26,26,0.8)",
            }}
          >
            <span>Building systems that&nbsp;</span>
            <span style={{ color: ORANGE }}>think</span>
            <span>,&nbsp;</span>
            <span style={{ color: ORANGE }}>reason</span>
            <span>&nbsp;and&nbsp;</span>
            <span style={{ color: ORANGE }}>ship</span>
            <span>.</span>
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 20, letterSpacing: 2, color: MUTED, textTransform: "uppercase" }}>
            AI / ML Engineer · Data Scientist
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", height: 1, background: LINE }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 21 }}>
            <div style={{ display: "flex", gap: 22 }}>
              {stat("3+", "LLM apps")}
              <span style={{ color: LINE }}>/</span>
              {stat("200+", "users")}
              <span style={{ color: LINE }}>/</span>
              {stat("87%", "accuracy")}
            </div>
            <div style={{ display: "flex", color: INK }}>rogerdemello.tech</div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}

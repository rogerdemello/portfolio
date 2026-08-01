import { ImageResponse } from "next/og";

// Shared 1200x630 social card for the Open Graph + Twitter routes.
// Mirrors the site's "Studio" theme: warm paper, a lifted white card, rounded
// shapes and one coral accent.
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT =
  "Roger Demello - AI Engineer building AI systems that actually ship.";

const PAPER = "#FBFAF8";
const CARD = "#FFFFFF";
const INK = "#1B1A18";
const INK_MUTED = "#6B6760";
const INK_SUBTLE = "#96918A";
const ACCENT = "#EE5D3D";
const ACCENT_SOFT = "#FDEDE9";
const GO = "#328058";
const EDGE = "#E9E6E0";

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

// Every glyph the card draws, including the non-breaking space used between
// flex children - Google only ships what is listed here.
const DISPLAY_TEXT =
  "Roger Demello AI Engineer.Ibuildsystemsthatactuallyship 0123456789+%·—";
const BODY_TEXT =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 /·.,+%&:—-";

export async function renderOgImage() {
  let fonts:
    | { name: string; data: ArrayBuffer; weight: 600 | 800; style: "normal" }[]
    | undefined;
  try {
    const [displayExtra, displaySemi, body] = await Promise.all([
      loadFont("Plus Jakarta Sans:wght@800", DISPLAY_TEXT),
      loadFont("Plus Jakarta Sans:wght@600", DISPLAY_TEXT + BODY_TEXT),
      loadFont("Inter:wght@600", BODY_TEXT),
    ]);
    fonts = [
      { name: "Display", data: displayExtra, weight: 800, style: "normal" },
      { name: "Display", data: displaySemi, weight: 600, style: "normal" },
      { name: "Body", data: body, weight: 600, style: "normal" },
    ];
  } catch {
    fonts = undefined; // graceful fallback to the default font
  }

  const stat = (v: string, label: string) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontFamily: "Display", fontWeight: 800, fontSize: 34, color: INK }}>
        {v}
      </span>
      <span style={{ fontSize: 15, color: INK_SUBTLE, letterSpacing: 0.6 }}>{label}</span>
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 40,
          background: PAPER,
          fontFamily: "Body",
        }}
      >
        {/* Lifted card, the way the site presents everything else */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "52px 56px",
            background: CARD,
            border: `1px solid ${EDGE}`,
            borderRadius: 28,
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  background: INK,
                  color: "#fff",
                  fontFamily: "Display",
                  fontWeight: 800,
                  fontSize: 24,
                }}
              >
                R
              </div>
              <span
                style={{ fontFamily: "Display", fontWeight: 800, fontSize: 26, color: INK }}
              >
                Roger Demello
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: ACCENT_SOFT,
                borderRadius: 999,
                padding: "12px 22px",
                fontSize: 17,
                fontWeight: 600,
                color: GO,
              }}
            >
              <div style={{ display: "flex", width: 9, height: 9, borderRadius: 999, background: GO }} />
              Available for AI engineering roles
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontFamily: "Display",
                fontWeight: 800,
                fontSize: 76,
                lineHeight: 1.05,
                letterSpacing: -2.5,
                color: INK,
              }}
            >
              <span>I build AI systems</span>
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Display",
                fontWeight: 800,
                fontSize: 76,
                lineHeight: 1.05,
                letterSpacing: -2.5,
                color: INK,
                marginTop: 6,
              }}
            >
              <span>that actually&nbsp;</span>
              {/* No full stop: Plus Jakarta's period carries a wide left side
                  bearing at this weight and detaches from the word. */}
              <span style={{ color: ACCENT }}>ship</span>
            </div>

            <div style={{ display: "flex", marginTop: 22, fontSize: 22, color: INK_MUTED }}>
              Agents · Retrieval · ML infrastructure
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              borderTop: `1px solid ${EDGE}`,
              paddingTop: 26,
            }}
          >
            <div style={{ display: "flex", gap: 48 }}>
              {stat("3", "Production apps")}
              {stat("200+", "Users served")}
              {stat("35%", "Lower latency")}
            </div>
            <div style={{ display: "flex", fontSize: 20, fontWeight: 600, color: INK }}>
              rogerdemello.tech
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}

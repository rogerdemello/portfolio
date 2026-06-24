import { ImageResponse } from "next/og";

// Shared 1200x630 social card used by both the Open Graph and Twitter image
// routes. Mirrors the site's neo-brutalist warm-ivory theme (see globals.css).
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT =
  "Roger Richard Demello - AI / ML Engineer & Data Scientist";

const INK = "#1A1A1A"; // foreground charcoal
const IVORY = "#F7F3EC"; // background warm ivory
const ORANGE = "#C9551C"; // primary burnt orange
const GREEN = "#26503B"; // secondary deep green

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: IVORY,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26,26,26,0.06) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          color: INK,
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top row: brand mark + handle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              background: INK,
              color: IVORY,
              borderRadius: 14,
              fontSize: 52,
              fontWeight: 800,
              boxShadow: `6px 6px 0 0 ${ORANGE}`,
            }}
          >
            R
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "monospace",
              fontSize: 24,
              letterSpacing: 1,
              color: GREEN,
            }}
          >
            rogerdemello.vercel.app
          </div>
        </div>

        {/* Name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            Roger Richard Demello
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 44,
              color: ORANGE,
              fontWeight: 700,
            }}
          >
            AI / ML Engineer & Data Scientist
          </div>
        </div>

        {/* Footer tag line */}
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 26,
            color: "rgba(26,26,26,0.75)",
            borderTop: `3px solid ${INK}`,
            paddingTop: 24,
          }}
        >
          LLM applications · AI agents · RAG pipelines · Python · FastAPI · AWS
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}

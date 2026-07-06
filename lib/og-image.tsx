import { ImageResponse } from "next/og";

// Shared 1200x630 social card used by both the Open Graph and Twitter routes.
// Mirrors the site's "IC datasheet" theme: dark silicon substrate, bond-wire
// gold, a ROGER-4880 pin-configuration diagram. Tuned to read at thumbnail size.
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT =
  "ROGER-4880 - Single-Chip AI / ML Engineer. Roger Richard Demello, now sampling.";

const BG = "#101219";
const INK = "#e5e9ef";
const GOLD = "#e6ac3d";
const TEAL = "#57c6ab";
const CORAL = "#e5746b";
const BORDER = "#333a4d";
const MUTED = "rgba(229,233,239,0.52)";
const MONO = "monospace";

const leftPins = ["PYTHON", "RAG", "AGENTS", "AWS"];
const rightPins = ["LLMs", "VECTOR DB", "FASTAPI", "DOCKER"];

function Nub() {
  return <div style={{ display: "flex", width: 15, height: 6, background: GOLD }} />;
}

function Chip() {
  const H = 300;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* left labels */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: H, alignItems: "flex-end" }}>
        {leftPins.map((p, i) => (
          <div key={p} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", fontFamily: MONO, fontSize: 20, color: INK }}>{p}</div>
            <div style={{ display: "flex", fontFamily: MONO, fontSize: 15, color: CORAL, width: 18, justifyContent: "flex-end" }}>{i + 1}</div>
            <Nub />
          </div>
        ))}
      </div>

      {/* chip body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: 168,
          height: H,
          background: "#181b25",
          border: `3px solid ${GOLD}`,
          borderRadius: 12,
        }}
      >
        {/* pin-1 dot */}
        <div style={{ display: "flex", position: "absolute", top: 16, left: 16, width: 10, height: 10, borderRadius: 10, background: GOLD }} />
        <div style={{ display: "flex", fontFamily: MONO, fontSize: 40, fontWeight: 700, color: GOLD, letterSpacing: 1 }}>ROGER</div>
        <div style={{ display: "flex", fontFamily: MONO, fontSize: 30, color: INK, marginTop: 2 }}>-4880</div>
        <div style={{ display: "flex", fontFamily: MONO, fontSize: 15, color: MUTED, letterSpacing: 4, marginTop: 10 }}>AI · ML</div>
      </div>

      {/* right labels */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: H, alignItems: "flex-start" }}>
        {rightPins.map((p, i) => (
          <div key={p} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Nub />
            <div style={{ display: "flex", fontFamily: MONO, fontSize: 15, color: CORAL, width: 18 }}>{i + 5}</div>
            <div style={{ display: "flex", fontFamily: MONO, fontSize: 20, color: INK }}>{p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
          padding: "52px 60px",
          background: BG,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(229,233,239,0.05) 1px, transparent 0)`,
          backgroundSize: "26px 26px",
          color: INK,
          fontFamily: "sans-serif",
        }}
      >
        {/* soft gold glow, top-right */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: -160,
            right: -120,
            width: 560,
            height: 420,
            background: "radial-gradient(closest-side, rgba(230,172,61,0.16), transparent)",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontFamily: MONO, fontSize: 22, color: TEAL, letterSpacing: 1 }}>
            rogerdemello.tech
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: MONO,
              fontSize: 20,
              color: TEAL,
              border: `1px solid rgba(87,198,171,0.5)`,
              borderRadius: 6,
              padding: "8px 14px",
            }}
          >
            <div style={{ display: "flex", width: 10, height: 10, borderRadius: 10, background: TEAL }} />
            NOW SAMPLING — AVAILABLE FOR HIRE
          </div>
        </div>

        {/* Body */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
            <div style={{ display: "flex", fontFamily: MONO, fontSize: 20, color: GOLD, letterSpacing: 3 }}>
              ADVANCE INFORMATION · DATASHEET
            </div>
            <div style={{ display: "flex", fontSize: 104, fontWeight: 800, lineHeight: 1, marginTop: 14, letterSpacing: -2 }}>
              <span>ROGER</span>
              <span style={{ color: GOLD }}>-4880</span>
            </div>
            <div style={{ display: "flex", fontSize: 40, color: INK, marginTop: 14, fontWeight: 600 }}>
              Single-Chip AI / ML Engineer
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 26 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "rgba(229,233,239,0.86)" }}>
                <div style={{ display: "flex", width: 12, height: 12, background: GOLD }} />
                3+ LLM apps & autonomous agents → 200+ users
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "rgba(229,233,239,0.86)" }}>
                <div style={{ display: "flex", width: 12, height: 12, background: GOLD }} />
                Agents · RAG · real-world systems
              </div>
            </div>
          </div>

          <Chip />
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 22,
            fontFamily: MONO,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 22 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ color: MUTED }}>USERS</span>
              <span style={{ color: GOLD }}>200+</span>
            </div>
            <span style={{ color: BORDER }}>·</span>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ color: MUTED }}>ACCURACY</span>
              <span style={{ color: GOLD }}>87%</span>
            </div>
            <span style={{ color: BORDER }}>·</span>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ color: MUTED }}>APPS</span>
              <span style={{ color: GOLD }}>3+</span>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 20, color: MUTED, letterSpacing: 1 }}>
            Python · FastAPI · LangChain · AWS
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}

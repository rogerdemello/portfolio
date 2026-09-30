import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Ink square with a paper "R" and a ballpoint-blue full stop, echoing the wordmark.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C1B19",
          borderRadius: "4px",
          color: "#FAF9F6",
          fontSize: 24,
          fontWeight: 800,
          fontFamily: "Georgia, serif",
          letterSpacing: -1,
        }}
      >
        R<span style={{ color: "#6F86F0" }}>.</span>
      </div>
    ),
    { ...size }
  );
}

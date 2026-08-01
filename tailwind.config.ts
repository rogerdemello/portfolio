import type { Config } from "tailwindcss";

/**
 * "Studio" theme - warm paper, white cards, one coral accent, plus a small set
 * of muted tints used for project cover art.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "hsl(var(--paper))",
          sunk: "hsl(var(--paper-sunk))",
        },
        card: "hsl(var(--card))",
        edge: {
          DEFAULT: "hsl(var(--edge))",
          strong: "hsl(var(--edge-strong))",
        },
        ink: {
          DEFAULT: "hsl(var(--ink))",
          muted: "hsl(var(--ink-muted))",
          subtle: "hsl(var(--ink-subtle))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          hover: "hsl(var(--accent-hover))",
          soft: "hsl(var(--accent-soft))",
        },
        go: {
          DEFAULT: "hsl(var(--go))",
          soft: "hsl(var(--go-soft))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "var(--r-sm)",
        DEFAULT: "var(--r)",
        lg: "var(--r-lg)",
      },
      borderColor: {
        DEFAULT: "hsl(var(--edge))",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
    },
  },
  plugins: [],
};
export default config;

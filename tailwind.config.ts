import type { Config } from "tailwindcss";

// Colours are RGB channel triples in app/globals.css so opacity utilities work (border-ink/10).
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        ink: token("ink"),
        muted: token("muted"),
        pen: token("pen"),
        mark: token("mark"),
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        note: ["var(--font-note)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;

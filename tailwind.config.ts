import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Poppins', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'gradient-ai': 'linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #f59e0b 100%)',
        'gradient-cloud': 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
        'gradient-ml': 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
      },
    },
  },
  plugins: [],
};
export default config;

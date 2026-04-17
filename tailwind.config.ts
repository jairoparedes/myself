import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-main": "#0b0b0c",
        "panel-bg": "#121214",
        "panel-border": "#2a2a2e",
        "accent-red": "#8b0000",
        "accent-red-glow": "#c91a1a",
        "accent-green": "#00ff9f",
        "text-primary": "#e5e5e5",
        "text-muted": "#888",
      },
      fontFamily: {
        display: ["Orbitron", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "panel": "inset 0 0 10px #000, 0 0 10px rgba(0,0,0,0.8)",
        "glow-red": "0 0 12px rgba(201, 26, 26, 0.55)",
        "glow-green": "0 0 10px rgba(0, 255, 159, 0.35)",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      animation: {
        scanline: "scanline 6s linear infinite",
        flicker: "flicker 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;

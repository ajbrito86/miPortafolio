import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          900: "#071014",
          800: "#0b171d",
          700: "#12232b",
        },
        accent: {
          cyan: "#38d5ff",
          emerald: "#35e7a5",
          amber: "#ffd166",
        },
      },
      boxShadow: {
        glow: "0 0 45px rgba(56, 213, 255, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#101018",
          secondary: "#171721",
          elevated: "#1E1E2C",
        },
        text: {
          primary: "#F5F5FA",
          secondary: "#A5A5B5",
          muted: "#6E6E80",
        },
        accent: {
          violet: "#7657FF",
          blue: "#21B8E8",
        },
        border: {
          subtle: "#30303B",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at center, rgba(118, 87, 255, 0.15) 0%, rgba(33, 184, 232, 0.05) 45%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;


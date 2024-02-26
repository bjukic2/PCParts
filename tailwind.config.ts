import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      roboto: ["var(--font-roboto)"],
      "roboto-condensed": ["var(--font-roboto-condensed)"],
      inter: ["var(--font-inter)"],
      playfair: ["var(--font-playfair)"],
    },
    colors: {
      "gray": {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
    },
  },
  plugins: [],
};
export default config;

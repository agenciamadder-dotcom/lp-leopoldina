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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "#0A2540",
          accent: "#FFB800",
          accentHover: "#e6a600",
          light: "#F8F9FA",
          dark: "#1A1A1A"
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1536px",
      },
      colors: {
        sage: {
          DEFAULT: "#4A5D4E",
          light: "#6F7C72",
        },
        cream: "#FDFCF8",
        deep: {
          green: "#1a2e1a",
          teal: "#243949",
        },
      },
    },
  },
  plugins: [],
};

export default config;

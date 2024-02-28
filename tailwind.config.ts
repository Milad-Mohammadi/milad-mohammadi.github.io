import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1C1C1C",
        white: "#FDFDFD",
        onBlack: "#C6C6C6",
        onWhite: "#0F141E",
        purple: "#4B0082",
        purple2: "#800080",
        royalBlue: "#4169E1",
        gold: "#FFD700",
        silver: "#C0C0C0",
        silver2: "#B0B0B0",
        gray: "#333333",
        gray2: "#555555",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

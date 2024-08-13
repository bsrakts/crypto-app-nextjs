import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        primary: "#f9fafb",
        secondary: "#ced3dd",
        textCustom: "#575682",
        success: "##43be93",
        danger: "#dc4759",
      },
    },
  },
  plugins: [],
};
export default config;

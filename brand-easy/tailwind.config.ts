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
        blue:          "#0099D4",
        "blue-dark":   "#0077A8",
        "blue-deeper": "#005A80",
        "blue-light":  "#E0F4FB",
        green:         "#2DB34A",
        "green-dark":  "#1F8A37",
        "green-deeper":"#155C25",
        "green-light": "#E4F7E9",
        "off-white":   "#F3FAFD",
        "text-dark":   "#0A2733",
        "text-mid":    "#2A5566",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        cormorant: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ["Lato", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
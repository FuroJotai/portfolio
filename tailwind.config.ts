import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px", // FullHD+
        "4xl": "2560px", // QHD
        "5xl": "3840px", // 4K
        "6xl": "5120px", // 5K
      },
      maxWidth: {
        content: "1400px",
        wide: "1600px",
        ultra: "1800px",
         mega: "2200px",
      },
    },
  },
  plugins: [],
}

export default config

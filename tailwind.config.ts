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
    // ❌ НЕ extend.screens
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px", // FullHD+
      "4xl": "2560px", // QHD
      "5xl": "3840px", // 4K
      "6xl": "5120px", // 5K
    },
    extend: {
      maxWidth: {
        content: "1400px",
        wide: "1600px",
        ultra: "1800px",
        mega: "2200px",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        sora: ["var(--font-sora)", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config

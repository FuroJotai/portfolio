export type Plan = {
  title: string
  options: {
    label: string
    price: string
  }[]
  features: string[]
}

export const plans: Plan[] = [
  {
    title: "No-code platforms",
    options: [
      { label: "Development only", price: "from $800" },
      { label: "Design + development", price: "from $1200" },
    ],
    features: [
      "Fast launch on Webflow, Tilda, WordPress",
      "Pixel-perfect responsive layout",
      "Easy to maintain and update",
      "SEO-friendly structure",
    ],
  },
  {
    title: "Clean code (React/Next.js)",
    options: [
      { label: "Development only", price: "from $1600" },
      { label: "Design + development", price: "from $2200" },
    ],
    features: [
      "Custom-tailored architecture",
      "High performance & scalability",
      "Long-term flexibility",
      "Clean, maintainable codebase",
      "Security & reliability",
      "Long-term investment",
    ],
  },
  {
    title: "Redesign",
    options: [
      { label: "No-code platforms", price: "from $700" },
      { label: "React/Next.js", price: "from $1200" },
    ],
    features: [
      "Full UI/UX refresh",
      "Optimized for speed & SEO",
      "Better user experience",
      "Modern design system",
      "Cheaper than building from scratch",
    ],
  },
]

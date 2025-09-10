export type Tab = {
  id: string
  number: string
  label: string
  title: string[]
  desc: string[]
}

export const tabs: Tab[] = [
  {
    id: "webflow",
    number: "01",
    label: "Webflow",
    title: ["Building fast & scalable", "websites with Webflow"],
    desc: [
      "I use Webflow to design and launch responsive websites quickly, enhancing them with custom code when projects require flexibility.",
      "This approach allows me to combine the speed of no-code tools with the power of real development, delivering projects that look great and perform smoothly.",
      "With Webflow CMS, I can set up dynamic content structures, so clients can easily update their sites without relying on a developer.",
      "By balancing design freedom and technical precision, I ensure each project is not only visually engaging but also scalable for long-term growth.",
    ],
  },
  {
    id: "code",
    number: "02",
    label: "Clean code",
    title: ["Clean code for complex", "projects"],
    desc: [
      "I rely on modern frameworks like Next.js and React to build scalable, maintainable applications with clear architecture.",
      "Every component I write follows clean code principles: readable, reusable, and easy to extend when new features are needed.",
      "Using TypeScript helps catch errors early, while Tailwind ensures consistent, responsive design without bloated CSS files.",
      "The result is a codebase that remains stable and performant, even as the project grows more complex over time.",
    ],
  },
  {
    id: "creativity",
    number: "03",
    label: "Creativity",
    title: ["Refreshing outdated", "websites"],
    desc: [
      "I specialize in reworking outdated websites, turning cluttered or uninspired designs into modern, user-friendly experiences.",
      "A redesign is not only about visuals — it’s about creating a clear structure and improving how users interact with the product.",
      "I combine UX best practices with subtle animations and smooth transitions, giving every page a sense of depth and energy.",
      "The goal is always the same: to make websites feel fresh, professional, and aligned with the brand’s identity.",
    ],
  },
]

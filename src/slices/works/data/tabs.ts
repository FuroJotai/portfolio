export type Project = {
  img: string
  url: string
  desc: string
}

export type Tab = {
  id: string
  number: string
  label: string
  title: string[]
  desc: string[]
  projects?: Project[]
}

export const tabs: Tab[] = [
  {
    id: "webflow",
    number: "01",
    label: "No-code",
    title: ["Launch fast websites", " with Webflow, WordPress."],
    desc: [
      "I work with Webflow, WordPress, and even Tilda to create websites that balance speed, design flexibility, and long-term scalability.",
      "These platforms allow me to launch projects quickly, while still adding custom code or integrations when needed.",
      "The real benefit for clients is control: they can easily update content, manage SEO, and adapt their site without depending on a developer (with just a small tutorial at the end).",
      "This approach combines the efficiency of no-code tools with the reliability of proven development practices — so each project is both beautiful and built to grow.",
    ],
    projects: [
      {
        img: "/works/site_1.png",
        url: "https://www.residence-du-leman.ch/residence",
        desc: "Redesign of a website for a nursing home in Switzerland. A stylish design with carefully chosen animations, showing how such effects can also be implemented in Webflow.",
      },
      {
        img: "/works/site_2.png",
        url: "https://www.profit-impact.co.uk/",
        desc: "Website for a UK-based coaching company focused on guiding businesses to align profit with purpose. The design highlights clarity and trust, reflecting their mission of sustainable growth.",
      },
    ],
  },
  {
    id: "code",
    number: "02",
    label: "Clean code",
    title: ["Hand-coded websites with", "modern tech"],
    desc: [
      "I specialize in modern frameworks like Next.js and React to deliver applications that are not only fast but also built for long-term growth.",
      "By following clean code principles — readable, reusable, and well-structured — I make sure the project remains easy to maintain and scale as your business evolves.",
      "With TypeScript preventing bugs early and Tailwind keeping design consistent across devices, the result is a stable, high-performance product.",
      "This approach saves clients both time and money in the future, since adding new features or updates doesn’t mean rewriting the whole system.",
    ],
    projects: [
      {
        img: "/works/clean_code_1.png", // закинь сюда скрин своего сайта
        url: "https://welldeeportfolio.vercel.app/", // реальный линк на твой сайт
        desc: "This very website — my portfolio. Built with Next.js, React, Tailwind and Framer Motion, where I experiment with animations, share my work. You’re already here!",
      },
    ],
  },
  {
    id: "creativity",
    number: "03",
    label: "Redisign",
    title: ["Refreshing outdated", "websites"],
    desc: [
      "I help businesses transform outdated websites into modern, user-friendly platforms that build trust and convert better.",
      "A redesign isn’t just about new visuals — it’s about improving structure, navigation, and overall user experience.",
      "By applying UX best practices, fresh design systems, and smooth interactions, I make sure every page feels professional and aligned with the brand.",
      "The result is a website that not only looks great but also keeps visitors engaged and drives measurable growth.",
    ],
  },
]

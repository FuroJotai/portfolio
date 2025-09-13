"use client"

import { motion, type Variants } from "framer-motion"
import { scrollToSection } from "../utils/scroll"
import { contactButtonClasses } from "../utils/buttonStyles"

const title = "Across Pixels"
const subtitle = "web creative studio"

const lettersTitle = title.split("")
const lettersSubtitle = subtitle.split("")

const PER_LETTER_DURATION = 0.9
const TOTAL_DURATION = 1.2

const makeVariants = (len: number): Variants => ({
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      delay: (i / len) * TOTAL_DURATION,
      duration: PER_LETTER_DURATION,
      ease: "easeOut",
    },
  }),
})

const CARDS_DELAY = TOTAL_DURATION + PER_LETTER_DURATION + 0.2

// 🔹 меню
const menuItems = [
  { label: "My Projects", target: "works", special: false },
  { label: "About Me", target: "about", special: true },
  { label: "Pricing", target: "pricing", special: false },
]

export default function HeroDesktop() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-between px-6 py-4 overflow-hidden"
    >
      {/* 🔹 Верхняя панель */}
      <header className="flex items-center justify-between relative z-10">
        <div className="text-xl font-bold cursor-pointer">LOGO</div>

        <button
          onClick={() => scrollToSection("contact", true)} // 👈 Contact = special
          className={contactButtonClasses}
        >
          Contact me
        </button>
      </header>

      {/* 🔹 Центр: текст */}
      <div className="flex flex-1 items-center relative z-10">
        <div className="flex flex-col items-start relative">
          {/* Подзаголовок */}
          <motion.h2
            initial="hidden"
            animate="visible"
            className="lg:text-[clamp(32px,1vw,140px)] text-gray-400 mb-4 flex flex-wrap"
          >
            {lettersSubtitle.map((char, i) => (
              <span key={`sub-${i}`} className="inline-block overflow-hidden">
                <motion.span
                  variants={makeVariants(lettersSubtitle.length)}
                  custom={i}
                  className="inline-block"
                  whileHover={{ color: "#ffffff", transition: { duration: 0.2 } }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          {/* Заголовок */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className="lg:text-[clamp(72px,8vw,240px)] font-bold flex flex-wrap leading-tight text-gray-300"
          >
            {lettersTitle.map((char, i) => (
              <span key={`ttl-${i}`} className="inline-block overflow-hidden">
                <motion.span
                  variants={makeVariants(lettersTitle.length)}
                  custom={i}
                  className="inline-block"
                  whileHover={{ color: "#ffffff", transition: { duration: 0.2 } }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* 🔹 Нижнее меню */}
      <nav className="flex w-full relative z-10">
        {menuItems.map((item, i) => (
          <motion.div
            key={item.label}
            onClick={() => scrollToSection(item.target, item.special)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: CARDS_DELAY + i * 0.25 }}
            whileHover="hover"
            className="relative flex-1 
                       py-[clamp(16px,2vw,48px)] 
                       px-[clamp(12px,2vw,32px)]
                       text-center bg-white/5 backdrop-blur-md 
                       border border-white/20 cursor-pointer 
                       text-white transition-colors duration-300 
                       hover:border-white/40"
          >
            <motion.span
              className="text-base font-medium text-[clamp(14px,1.2vw,24px)] block tracking-wider"
              variants={{
                hover: {
                  scale: 1.04,
                  color: "rgba(230,230,230,1)",
                  transition: { duration: 0.4, ease: "easeInOut" },
                },
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {item.label}
            </motion.span>
          </motion.div>
        ))}
      </nav>
    </section>
  )
}

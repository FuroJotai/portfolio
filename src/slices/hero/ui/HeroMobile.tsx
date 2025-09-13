"use client"

import { motion, type Variants } from "framer-motion"
import { scrollToSection } from "../utils/scroll" // 👈 тот же хелпер, что и в десктопе
import { contactButtonClasses } from "../utils/buttonStyles"

const title = "Across Pixels"
const subtitle = "creative web studio"

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

const menuItems = [
  { label: "My Projects", target: "works" },
  { label: "Pricing", target: "pricing" },
  { label: "About Me", target: "about" },
]

export default function HeroMobile() {
  return (
    <section className="relative min-h-screen flex flex-col px-4 py-4 overflow-hidden">
      {/* Top bar */}
      <header className="flex items-center justify-between relative z-10 mb-8">
        <div className="text-lg font-bold">LOGO</div>
        <button
          onClick={() => scrollToSection("contact")}
          className="rounded-lg text-white 
               text-[clamp(14px,2vw16px)] 
               font-medium 
               px-[clamp(12px,1vw,16px)] 
               py-[clamp(8px,1vw,12px)] 
               border border-white/40"
        >
          Contact
        </button>
      </header>

      {/* Center: текст + меню */}
      <div className="flex flex-col items-center justify-center flex-1 gap-10 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Подзаголовок */}
          <motion.h2
            initial="hidden"
            animate="visible"
            className="text-base text-gray-400 mb-3 flex flex-wrap justify-center"
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
            className="text-4xl font-bold flex flex-wrap leading-tight text-gray-300"
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

        {/* Меню */}
        <nav className="flex flex-col w-full gap-4">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.label}
              onClick={() => scrollToSection(item.target)} // 👈 обычный скролл
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: CARDS_DELAY + i * 0.25 }}
              whileHover="hover"
              className="py-4 text-center 
                         bg-white/5 backdrop-blur-md 
                         border border-white/20 cursor-pointer 
                         text-white rounded-lg transition-colors duration-300 
                         hover:border-white/40"
            >
              <motion.span
                className="text-base font-medium block tracking-wider"
                variants={{
                  hover: {
                    scale: 1.04,
                    color: "rgba(230,230,230,1)",
                    transition: { duration: 0.4, ease: "easeInOut" },
                  },
                }}
              >
                {item.label}
              </motion.span>
            </motion.div>
          ))}
        </nav>
      </div>
    </section>
  )
}

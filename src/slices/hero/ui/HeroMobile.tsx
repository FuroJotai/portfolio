"use client"

import { motion, type Variants } from "framer-motion"
import { scrollToSection } from "../utils/scroll"
import { textStyles } from "@/slices/hero/utils/textStyles"

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
      {/* 🔹 Верхняя панель */}
      <header className="flex items-center justify-between relative z-10 mb-8">
        <div className="text-lg font-bold">LOGO</div>
        <button
          onClick={() => scrollToSection("contact")}
          className={`${textStyles.body} px-4 py-2  bg-white/5 border border-white/20 rounded-lg`}>
            Contact me
        </button>
      </header>

      {/* 🔹 Центр: текст + меню */}
      <div className="flex flex-col items-center justify-center pt-40 flex-1 gap-10 relative z-10">
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

        {/* 🔹 Меню */}
        <nav className="flex flex-col w-full gap-4">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.label}
              onClick={() => scrollToSection(item.target)}
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

      {/* 🔹 Фото — отдельный блок ниже */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.9 }}
        className="relative mt-16 w-full flex justify-center"
      >
        <img
          src="/hero/hero_photo_dt.png"
          alt="Hero image"
          className="w-[70%] max-w-[280px] h-auto object-contain drop-shadow-2xl"
        />
        {/* Линия по нижней границе фото */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-white/40" />
      </motion.div>
    </section>
  )
}


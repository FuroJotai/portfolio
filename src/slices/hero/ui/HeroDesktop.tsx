"use client"

import { motion, type Variants } from "framer-motion"
import { scrollToSection } from "../utils/scroll"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="cursor-pointer font-bold leading-none 
                     text-[clamp(20px,1.8vw,48px)]"
        >
          LOGO
        </motion.div>

        <motion.button
          onClick={() => scrollToSection("contact", true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={`${contactButtonClasses} 
                      text-[clamp(14px,1.2vw,28px)] 
                      px-[clamp(14px,1.5vw,36px)] 
                      py-[clamp(6px,0.8vw,18px)]`}
        >
          Contact me
        </motion.button>
      </header>

      {/* 🔹 Центр: текст + фото */}
      <div className="flex flex-1 items-center justify-between relative z-10">
        {/* Левая часть — текст */}
        <div className="flex flex-col items-start relative">
          {/* Подзаголовок */}
          <motion.h2
            initial="hidden"
            animate="visible"
            className="lg:text-[clamp(28px,1.8vw,64px)] 
                       text-gray-400 
                       mb-[clamp(8px,0.8vh,16px)] 
                       flex flex-wrap"
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
            className="lg:text-[clamp(72px,8vw,240px)] 
                       font-bold flex flex-wrap 
                       leading-[0.95] text-gray-300"
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

        {/* Правая часть — фото */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: TOTAL_DURATION + PER_LETTER_DURATION + 1.4 }}
  className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-0"
>
  <img
    src="/hero/hero_photo_dt.png"
    alt="Hero image"
    className="h-auto max-h-[70vh] 2xl:max-h-[650px] 3xl:max-h-[100vh] object-contain rounded-2xl shadow-lg"
  />
</motion.div>
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
                       hover:border-white/25"
          >
            <motion.span
              className="text-base font-medium 
                         text-[clamp(14px,1.2vw,24px)] 
                         block tracking-wider"
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

"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"

const title = "Are you ready?"
const subtitle = "Well — Frontend Developer"

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

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <section
      className="relative min-h-screen h-screen flex flex-col justify-between px-6 py-4 overflow-hidden"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      {/* spotlight */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 w-full h-full"
        style={{
          background: `radial-gradient(
            circle 120px at ${pos.x}px ${pos.y}px,
            rgba(255,255,255,0.07),
            transparent 70%
          )`,
        }}
      />

      {/* Top bar */}
      <header className="flex items-center justify-between relative z-10">
        <div className="text-xl font-bold">LOGO</div>
        <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
          Contact me
        </button>
      </header>

      {/* Center: текст */}
      <div className="flex flex-1 items-center relative z-10">
        <div className="flex flex-col items-start">
          {/* Подзаголовок */}
          <motion.h2
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-gray-400 mb-4 flex flex-wrap"
          >
            {lettersSubtitle.map((char, i) => (
              <span key={`sub-${i}`} className="inline-block overflow-hidden">
                <motion.span
                  variants={makeVariants(lettersSubtitle.length)}
                  custom={i}
                  className="inline-block"
                  whileHover={{
                    color: "#ffffff",
                    transition: { duration: 0.2 },
                  }}
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
            className="text-5xl sm:text-7xl md:text-8xl font-bold flex flex-wrap leading-tight text-gray-300"
          >
            {lettersTitle.map((char, i) => (
              <span key={`ttl-${i}`} className="inline-block overflow-hidden">
                <motion.span
                  variants={makeVariants(lettersTitle.length)}
                  custom={i}
                  className="inline-block"
                  whileHover={{
                    color: "#ffffff",
                    transition: { duration: 0.2 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Bottom menu */}
      <nav className="flex w-full relative z-10">
        {["My Projects", "Pricing", "About Me"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: CARDS_DELAY + i * 0.25 }}
            whileHover="hover"
            className="relative flex-1 py-8 text-center 
                       bg-white/5 backdrop-blur-md 
                       border border-white/20 cursor-pointer 
                       text-white transition-colors duration-300 
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {item}
            </motion.span>
          </motion.div>
        ))}
      </nav>
    </section>
  )
}

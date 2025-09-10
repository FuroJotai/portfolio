"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { tabs } from "../data/tabs" // поправь путь если нужно

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const line: Variants = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.7, ease: "easeOut" } },
}

function LineReveal({ text }: { text: React.ReactNode }) {
  return (
    <div className="overflow-hidden">
      <motion.div variants={line}>{text}</motion.div>
    </div>
  )
}

export default function WorksSection() {
  const [active, setActive] = useState(0)

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.35 }}
      className="relative flex w-full h-[clamp(800px,95vh,1400px)] text-white overflow-hidden pt-20 "
    >
      {tabs.map((tab, i) => {
        const isActive = i === active
        return (
          <motion.div
            key={tab.id}
            layout
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`flex border-r border-white/10 overflow-hidden ${
              isActive ? "flex-[5]" : "w-20"
            }`}
          >
            {/* Sidebar */}
            <motion.button
              layout
              onClick={() => setActive(i)}
              className={`relative w-20 min-w-[80px] h-full border-r border-white/10 cursor-pointer transition-colors
                ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {/* Цифра сверху */}
              <span className="absolute top-19 left-1/2 -translate-x-1/2 text-[clamp(20px,2vw,40px)] font-sora font-bold leading-none">
                {tab.number}
              </span>
              {/* Название прибито вниз */}
              <span className="absolute bottom-16 left-1/2 -translate-x-1/2 
                               text-[clamp(28px,2vw,60px)] font-sora tracking-widest [writing-mode:vertical-rl] leading-none whitespace-nowrap">
                {tab.label}
              </span>
            </motion.button>

            {/* Контент */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  key={tab.id}
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex-1 p-16 flex flex-col justify-between"
                >
                  {/* Заголовок сверху (на уровне цифр) */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-4"
                  >
                    {tab.title.map((lineText, idx) => (
                      <LineReveal
                        key={idx}
                        text={
                          <span className="text-[clamp(30px,3vw,80px)] leading-none font-sora font-semibold">
                            {lineText}
                          </span>
                        }
                      />
                    ))}
                  </motion.div>

                  {/* Описание + скрин внизу */}
                  <div className="flex flex-row gap-12 items-end">
                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="flex-1 flex flex-col gap-3 text-gray-300 font-sora text-[clamp(24px,1.5vw,32px)]"
                    >
                      {tab.desc.map((lineText, idx) => (
                        <LineReveal key={idx} text={lineText} />
                      ))}
                    </motion.div>

                    <motion.div
                      variants={line}
                      className="w-[clamp(900px,36vw,1300px)] h-[clamp(600px,24vw,900px)] bg-gray-200 text-black flex items-center justify-center text-2xl font-bold"
                    >
                      СКРИН
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.section>
  )
}

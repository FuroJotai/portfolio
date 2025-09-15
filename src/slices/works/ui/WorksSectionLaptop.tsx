"use client"

import { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import WorksModal from "./WorksModal"
import { tabs } from "../data/tabs"

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

export default function WorksSectionLaptop() {
  const [active, setActive] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <motion.section
      id="works"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex w-full h-screen text-white overflow-hidden pt-20"
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
              <span className="absolute top-18 left-1/2 -translate-x-1/2 text-xl font-sora font-bold leading-none">
                {tab.number}
              </span>
              <span className="absolute bottom-16 left-1/2 -translate-x-1/2 
                               text-3xl font-sora tracking-widest [writing-mode:vertical-rl] leading-none whitespace-nowrap">
                {tab.label}
              </span>
            </motion.button>

            {/* Контент */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex-1 p-8 flex flex-col gap-6"
                >
                  {/* Заголовок */}
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
                          <span className="text-2xl md:text-3xl font-sora font-semibold">
                            {lineText}
                          </span>
                        }
                      />
                    ))}
                  </motion.div>

                  {/* Текст */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-3 text-gray-300 font-sora text-base"
                  >
                    {tab.desc.map((lineText, idx) => (
                      <LineReveal key={idx} text={lineText} />
                    ))}
                  </motion.div>

                  {/* Превью */}
                  <motion.div
                    variants={line}
                    onClick={() => setIsModalOpen(true)}
                    className="w-full h-[220px] sm:h-[260px] md:h-[300px] 
                               overflow-hidden rounded-xl shadow-lg cursor-pointer 
                               border border-white/20 transition-colors duration-500 ease-in-out
                               hover:border-white/25"
                  >
                    <motion.div
                      whileHover={{ scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-full h-full"
                    >
                      <img
                        src={tab.previewImg || "/works/placeholder.png"}
                        alt="Preview"
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}

      {/* 👉 одна модалка для всей секции */}
      <WorksModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projects={tabs[active].projects}
      />
    </motion.section>
  )
}

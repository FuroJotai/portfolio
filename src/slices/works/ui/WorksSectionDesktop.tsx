"use client"

import { useState } from "react"
import WorksModal from "./WorksModal"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { tabs } from "../data/tabs"
import { textStyles } from  "../../hero/utils/textStyles"

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
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <motion.section
      id="works"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.35 }}
      className="relative flex w-full h-[clamp(600px,95vh,800px)] text-white pt-20"
    >
      {tabs.map((tab, i) => {
        const isActive = i === active
        return (
          <motion.div
            key={tab.id}
            layout
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`flex border-r border-white/10 ${
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
              {/* Название снизу */}
              <span className="absolute bottom-16 left-1/2 -translate-x-1/2 
                               text-[clamp(28px,2vw,60px)] font-sora tracking-widest [writing-mode:vertical-rl] leading-none whitespace-nowrap">
                {tab.label}
              </span>
            </motion.button>

            {/* Контент */}
            <AnimatePresence mode="sync">
              {isActive && (
                <motion.div
                  key={tab.id}
                  initial={false} // 👈 отключаем дергание при маунте
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex-1 p-16 flex flex-row gap-12 items-start"
                >
                  {/* Заголовок + текст слева */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-6 self-start flex-1 max-w-[900px]"
                  >
                    {tab.title.map((lineText, idx) => (
                      <LineReveal
                        key={idx}
                        text={<span className={textStyles.h3}>{lineText}</span>}
                      />
                    ))}

                    <div className="flex flex-col gap-3">
                      {tab.desc.map((lineText, idx) => (
                        <LineReveal
                          key={idx}
                          text={<p className={textStyles.body}>{lineText}</p>}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Картинка справа */}
                  <motion.div
                    variants={line}
                    onClick={() => setIsModalOpen(true)}
                    className="w-[clamp(500px,36vw,1100px)] h-[clamp(300px,24vw,700px)] self-start rounded-xl shadow-lg cursor-pointer 
                               border border-white/20 transition-colors duration-500 ease-in-out
                               hover:border-white/25 overflow-hidden"
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
        tabId={tabs[active].id}
      />
    </motion.section>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import WorksModal from "./WorksModal"
import { tabs } from "../data/tabs"
import type { Tab } from "../data/tabs"

// 🔹 Контент аккордеона
function AccordionItem({
  tab,
  isActive,
  onOpenModal,
}: {
  tab: Tab
  isActive: boolean
  onOpenModal: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight)
    }
  }, [isActive])

  return (
    <motion.div
      initial={false}
      animate={{ height: isActive ? height : 0, opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div ref={ref} className="pl-2 pr-4 pb-6">
        {/* Заголовок */}
        <div className="flex flex-col gap-2 mb-3">
          {tab.title.map((line, idx) => (
            <span key={idx} className="text-xl font-sora font-semibold">
              {line}
            </span>
          ))}
        </div>

        {/* Описание */}
        <div className="flex flex-col gap-1 mb-4 text-gray-300 text-sm">
          {tab.desc.map((line, idx) => (
            <span key={idx}>{line}</span>
          ))}
        </div>

        {/* 🔹 Превью вместо СКРИН */}
        <motion.div
          onClick={onOpenModal}
          className="w-full h-[clamp(180px,30vw,260px)] 
                     overflow-hidden rounded-lg shadow-lg cursor-pointer 
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
      </div>
    </motion.div>
  )
}

export default function WorksSectionMobile() {
  const [active, setActive] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <motion.section
      id="works"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col w-full mt-20 pt-35 px-4 py-12 text-white"
    >
      {/* Заголовок секции */}
      <h2 className="text-3xl md:text-4xl font-sora font-bold mb-8">
        My Works
      </h2>

      {/* Аккордеон */}
      {tabs.map((tab, i) => {
        const isActive = i === active
        return (
          <div key={tab.id} className="border-b border-white/10">
            <button
              onClick={() => setActive(isActive ? null : i)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-lg font-sora font-semibold">
                {tab.number}. {tab.label}
              </span>
              <span>{isActive ? "–" : "+"}</span>
            </button>

            <AccordionItem
              tab={tab}
              isActive={isActive}
              onOpenModal={() => setIsModalOpen(true)}
            />
          </div>
        )
      })}

      {/* 👉 модалка одна для всей секции */}
      {active !== null && (
        <WorksModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          projects={tabs[active].projects}
        />
      )}
    </motion.section>
  )
}

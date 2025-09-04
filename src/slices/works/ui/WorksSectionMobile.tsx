"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { tabs } from "../data/tabs"

// 🔹 Контент аккордеона
function AccordionItem({ tab, isActive }: { tab: any; isActive: boolean }) {
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
        <div className="flex flex-col gap-2 mb-3">
          {tab.title.map((line: string, idx: number) => (
            <span key={idx} className="text-xl font-sora font-semibold">
              {line}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-1 mb-4 text-gray-300 text-sm">
          {tab.desc.map((line: string, idx: number) => (
            <span key={idx}>{line}</span>
          ))}
        </div>

        <div className="w-full h-[200px] bg-gray-200 text-black flex items-center justify-center font-bold">
          СКРИН
        </div>
      </div>
    </motion.div>
  )
}

export default function WorksSectionMobile() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col w-full pt-35 px-4 py-12 text-white"
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

            <AccordionItem tab={tab} isActive={isActive} />
          </div>
        )
      })}
    </motion.section>
  )
}

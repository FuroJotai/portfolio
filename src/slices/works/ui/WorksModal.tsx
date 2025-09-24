"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { textStyles } from "../../hero/utils/textStyles"

type Project = {
  img: string
  url: string
  desc: string
}

type WorksModalProps = {
  isOpen: boolean
  onClose: () => void
  projects?: Project[]
  tabId?: string // 👈 id текущей вкладки
}

export default function WorksModal({ isOpen, onClose, projects, tabId }: WorksModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              relative 
              w-[92%] sm:w-[85%] md:w-[85%] 
              max-w-3xl 2xl:max-w-[1400px] 4xl:max-w-[4000px] 5xl:max-w-[2400px]
              bg-neutral-900/95 rounded-xl border border-gray-700 shadow-xl 
              p-6 sm:p-8 2xl:p-12 4xl:p-20
              max-h-[90vh] overflow-y-auto
            "
          >
            {/* кнопка закрытия */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-white transition-colors cursor-pointer text-lg sm:text-xl 2xl:text-2xl 4xl:text-4xl"
            >
              ✕
            </button>

            {/* контент модалки */}
            {projects && projects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-10 4xl:gap-14">
                {projects.map((proj, idx) => (
  <div
    key={idx}
    className="flex flex-col justify-between gap-6"
  >
    {/* картинка как ссылка */}
    <a
      href={proj.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden"
    >
      <motion.img
        src={proj.img}
        alt={proj.desc}
        className="w-full 
                   h-32 sm:h-40 md:h-48 
                   2xl:h-[320px] 4xl:h-[420px] 5xl:h-[500px]
                   object-contain rounded-lg"
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </a>

    {/* описание */}
    <p
      className={`
        ${textStyles.small} 
        2xl:${textStyles.body} 
        4xl:text-[28px] 5xl:text-[32px] 6xl:text-[36px]
        font-inter text-gray-300 leading-relaxed
      `}
    >
      {proj.desc}
    </p>

    {/* кнопка */}
    <div className="mt-auto">
      <a
        href={proj.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-2 rounded-lg border border-gray-300 text-white 
                  hover:bg-white hover:text-neutral-900 
                  transition-colors duration-300 ease-out text-center
                  text-base sm:text-lg 2xl:text-lg
                  4xl:text-[28px] 5xl:text-[32px] 6xl:text-[36px]">
        {tabId === "creativity" ? "View redesign" : "Visit site"}
      </a>
    </div>
  </div>
))}

              </div>
            ) : (
              <p className={`${textStyles.small} text-center`}>
                No projects yet for this tab.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

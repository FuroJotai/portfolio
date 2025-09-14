"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

type Project = {
  img: string
  url: string
  desc: string
}

type WorksModalProps = {
  isOpen: boolean
  onClose: () => void
  projects?: Project[]
}

export default function WorksModal({ isOpen, onClose, projects }: WorksModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              relative 
              w-[92%] sm:w-[85%] md:w-[85%] 
              max-w-3xl 2xl:max-w-[1400px] 
              bg-white/90 rounded-xl border border-gray-300 shadow-xl 
              p-6 sm:p-8 2xl:p-12
            "
          >
            {/* кнопка закрытия */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer text-lg sm:text-xl 2xl:text-2xl"
            >
              ✕
            </button>

            {/* контент модалки */}
            {projects && projects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-8">
                {projects.map((proj, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden rounded-lg border border-gray-200 shadow hover:scale-95 transition-transform cursor-pointer"
                    >
                      <img
                        src={proj.img}
                        alt={proj.desc}
                        className="w-full 
                                   h-32 sm:h-40 md:h-42 
                                   2xl:h-[300px] 
                                   object-contain"
                      />
                    </a>
                    <p className="text-sm sm:text-base md:text-lg 2xl:text-xl lg:mt-10 text-gray-700">
                      {proj.desc}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg 2xl:text-xl">
                No projects yet for this tab.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

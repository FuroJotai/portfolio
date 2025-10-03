"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight

      setVisible(progress >= 0.40) // 👉 показываем после 20% скролла
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToHero = () => {
    const hero = document.getElementById("hero")
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          onClick={scrollToHero}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="
            fixed 
            top-4 left-1/2 -translate-x-1/2
            md:top-[48%] md:right-6 md:left-auto md:-translate-x-0
            2xl:right-10
            w-10 h-10 2xl:w-12 2xl:h-12
            rounded-full bg-white/20 
            flex items-center justify-center 
            cursor-pointer backdrop-blur-sm z-[9999]
            shadow-lg shadow-blue-500/30
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 2xl:w-6 2xl:h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

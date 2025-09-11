"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight

      // 👉 меняй число 0.25 чтобы подогнать момент появления (25% скролла)
      setVisible(progress >= 0.25)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToHero = () => {
    const hero = document.getElementById("hero")
    hero?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.button
      onClick={scrollToHero}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 0.4 : 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-1/2 right-6 -translate-x-1/2 
                 w-10 h-10 rounded-full bg-white/20 
                 flex items-center justify-center 
                 cursor-pointer backdrop-blur-sm z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </motion.button>
  )
}

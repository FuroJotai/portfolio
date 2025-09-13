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

      setVisible(progress >= 0.25) // 👉 появление после 25% скролла
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
      className="
        fixed 
        top-4 left-1/2 -translate-x-1/2
        md:top-[48%] md:right-6 md:left-auto md:-translate-x-0
        2xl:right-10
        w-10 h-10 2xl:w-12 2xl:h-12   /* 👉 только на 4K чуть больше */
        rounded-full bg-white/20 
        flex items-center justify-center 
        cursor-pointer backdrop-blur-sm z-50
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 2xl:w-6 2xl:h-6 text-white"  /* 👉 иконка тоже слегка увеличена */
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </motion.button>
  )
}

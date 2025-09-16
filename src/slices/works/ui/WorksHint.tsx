"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function WorksHint() {
  const [show, setShow] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const shownRef = useRef(false) // 👉 флаг, показывали ли подсказку

  useEffect(() => {
    const works = document.getElementById("works")
    if (!works || shownRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shownRef.current) {
          shownRef.current = true // 👉 больше не показываем
          setShow(true)
          setTimeout(() => setShow(false), 6000)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(works)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            top: pos.y + 24,
            left: pos.x + 24,
          }}
          className="
            fixed z-50 px-3 py-1
            text-sm 2xl:text-lg 3xl:text-2xl 
            text-white bg-black/70 rounded-md
            backdrop-blur-md pointer-events-none
          "
        >
          Click the side tabs
        </motion.div>
      )}
    </AnimatePresence>
  )
}

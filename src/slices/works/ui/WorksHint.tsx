"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function WorksHint() {
  const [show, setShow] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const works = document.getElementById("works")
    if (!works) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // когда входим в секцию — показать и запустить таймер
          setShow(true)
          if (timeoutRef.current) clearTimeout(timeoutRef.current)
          timeoutRef.current = setTimeout(() => setShow(false), 4000)
        } else {
          // когда выходим из секции — сразу скрыть и сбросить таймер
          setShow(false)
          if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(works)
    return () => {
      observer.disconnect()
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
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
            text-sm 2xl:text-base 3xl:text-2xl 
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

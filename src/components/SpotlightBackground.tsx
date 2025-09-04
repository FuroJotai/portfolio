"use client"

import { useEffect, useState } from "react"

export default function SpotlightBackground() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className="fixed inset-0 -z-10 bg-black transition-colors duration-300"
      style={{
        background: `radial-gradient(
          200px circle at ${pos.x}px ${pos.y}px,
          rgba(29, 78, 216, 0.15),
          transparent 50%
        )`,
      }}
    />
  )
}

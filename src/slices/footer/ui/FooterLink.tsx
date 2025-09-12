"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function FooterLink({ href, label }: { href: string; label: string }) {
  const [hover, setHover] = useState(false)

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative inline-block text-white no-underline"
    >
      {/* текст сверху */}
      <span className="relative z-[1]">{label}</span>

      {/* неон за словом */}
      <motion.i
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2
                   h-[65%] rounded-full bg-[rgba(16,185,129,0.28)] blur-[14px] z-0"
        initial={false}
        animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.92 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* underline: 1 → 0 и исчезает */}
      <motion.span
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-1
                   h-[1px] w-full bg-[rgba(16,185,129,0.5)] rounded-full z-[2]"
        style={{ originX: 0.5 }}               // ось по центру
        initial={{ scaleX: 1, opacity: 1 }}
        animate={hover ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
      />
    </a>
  )
}

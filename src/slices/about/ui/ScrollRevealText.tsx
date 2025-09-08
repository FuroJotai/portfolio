"use client"

import { motion, useTransform, type MotionValue } from "framer-motion"

type Props = {
  text: string
  className?: string
  scrollYProgress: MotionValue<number>
}

function AnimatedLetter({
  ch,
  index,
  total,
  scrollYProgress,
}: {
  ch: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const start = index / total
  const end = start + 1 / total

  const opacity = useTransform(scrollYProgress, [0, start, end, 1], [0, 0, 1, 1])

  return (
    <motion.span
      style={{ opacity }}
      transition={{ duration: 0.01 }}
      className="inline-block"
    >
      {ch === " " ? "\u00A0" : ch}
    </motion.span>
  )
}

export default function ScrollRevealText({
  text,
  className,
  scrollYProgress,
}: Props) {
  const letters = text.split("")
  const total = letters.length

  return (
    <p className={`${className} whitespace-pre-line`}>
      {letters.map((ch, i) => (
        <AnimatedLetter
          key={i}
          ch={ch}
          index={i}
          total={total}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  )
}

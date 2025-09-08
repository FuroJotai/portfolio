"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  scrollYProgress: MotionValue<number>; // 🔹 типизировано
};

export default function ScrollRevealText({ text, className, scrollYProgress }: Props) {
  const letters = text.split("");
  const total = letters.length;

  // 🔹 Считаем все useTransform заранее, чтобы не вызывать хук внутри map
  const opacityValues = letters.map((_, i) => {
    const start = i / total;
    const end = start + 1 / total;

    return useTransform(scrollYProgress, [0, start, end, 1], [0, 0, 1, 1]);
  });

  return (
    <p className={`${className} whitespace-pre-line`}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          style={{ opacity: opacityValues[i] }}
          transition={{ duration: 0.01 }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </p>
  );
}

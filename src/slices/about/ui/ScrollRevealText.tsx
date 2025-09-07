"use client";

import { motion, useTransform } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  scrollYProgress: any; // MotionValue из useScroll
};

export default function ScrollRevealText({ text, className, scrollYProgress }: Props) {
  const letters = text.split("");
  const total = letters.length;

  return (
    <p className={`${className} whitespace-pre-line`}>
      {letters.map((ch, i) => {
        const start = i / total;          // равномерное распределение
        const end = start + 1 / total;    // маленький интервал

        const opacity = useTransform(
          scrollYProgress,
          [0, start, end, 1],
          [0, 0, 1, 1]
        );

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            transition={{ duration: 0.01 }}
            className="inline-block"
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        );
      })}
    </p>
  );
}

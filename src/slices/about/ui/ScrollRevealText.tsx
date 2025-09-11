"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  scrollYProgress: MotionValue<number>;
};

function AnimatedLetter({
  ch,
  index,
  total,
  scrollYProgress,
}: {
  ch: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  // линейный reveal по всему тексту (без скачков)
  const start = index / total;
  const end = start + 1 / total;

  const opacity = useTransform(scrollYProgress, [0, start, end, 1], [0, 0, 1, 1]);

  return (
    <motion.span style={{ opacity }} transition={{ duration: 0.01 }} className="inline">
      {ch}
    </motion.span>
  );
}

export default function ScrollRevealText({ text, className, scrollYProgress }: Props) {
  // 1) делим на абзацы по пустой строке
  const paragraphs = text.trim().split(/\n{2,}/).map(p => p.replace(/\n+/g, " ")); // одиночные переносы внутри абзаца → пробел

  // 2) считаем общее число БУКВ (без пробелов) для корректной анимации
  const totalLetters = paragraphs.join(" ").replace(/\s/g, "").length;

  let letterIndex = 0; // глобальный индекс буквы по всему тексту

  return (
    <div className={className}>
      {paragraphs.map((p, pi) => (
        <p key={pi} className="mb-4 last:mb-0"> {/* контролируем межабзацный отступ */}
          {p.split("").map((ch, ci) => {
            if (ch === " ") return " "; // пробелы НЕ оборачиваем в span → нормальные переносы слов
            const idx = letterIndex++;
            return (
              <AnimatedLetter
                key={`${pi}-${ci}`}
                ch={ch}
                index={idx}
                total={totalLetters}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </p>
      ))}
    </div>
  );
}

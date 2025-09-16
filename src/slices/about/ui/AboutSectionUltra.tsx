"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollRevealText from "./ScrollRevealText";
import { about } from "@/slices/about/data/about";
import { textStyles } from "@/slices/hero/utils/textStyles";

export default function AboutSectionUltra() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // анимации
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0.18, 0.22], [0, 1]);
  const photoOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const photoY = useTransform(scrollYProgress, [0.1, 0.2], [24, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-[clamp(2rem,4vw,6rem)] min-h-[350vh]"
    >
      {/* Линия */}
      <motion.div
        aria-hidden
        className="fixed top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/40 to-transparent z-40"
        style={{ scaleX: lineScaleX, originX: 0.5, opacity: lineOpacity }}
      />

      {/* Sticky блок */}
      <div className="sticky top-[clamp(6rem,10vh,10rem)]">
        <div className="grid grid-cols-12 gap-[clamp(2rem,3vw,5rem)] items-start max-w-[clamp(1400px,85vw,2000px)] mx-auto">
          {/* Фото */}
          <motion.div
            style={{ opacity: photoOpacity, y: photoY }}
            className="relative col-span-6 overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl 
                       w-[clamp(800px,40vw,1000px)] h-[clamp(1000px,50vh,1000px)] z-20"
          >
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Заголовок + текст */}
          <div className="col-span-6">
            <motion.h2
              className={`${textStyles.h2} mb-16`}
              style={{ opacity: headingOpacity }}
            >
              {about.heading}
            </motion.h2>

            <ScrollRevealText
              text={about.text}
              scrollYProgress={scrollYProgress}
              className={`${textStyles.bodyLarge} text-muted-foreground leading-relaxed max-w-prose whitespace-normal break-words`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

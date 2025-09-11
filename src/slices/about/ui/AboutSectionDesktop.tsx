"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollRevealText from "./ScrollRevealText";
import { about } from "@/slices/about/data/about";

export default function AboutSectionDesktop() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // линия
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

  // заголовок
  const headingOpacity = useTransform(scrollYProgress, [0.18, 0.22], [0, 1]);

  // фото
  const photoOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const photoY = useTransform(scrollYProgress, [0.1, 0.2], [24, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-6 lg:px-8 min-h-[350vh]"
    >
      {/* Линия фиксирована сверху */}
      <motion.div
        aria-hidden
        className="fixed top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/40 to-transparent z-40"
        style={{
          scaleX: lineScaleX,
          originX: 0.5,
          opacity: lineOpacity,
        }}
      />

      {/* Общий sticky-контейнер */}
      <div className="sticky top-32">
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Фото слева */}
          <motion.div
            style={{ opacity: photoOpacity, y: photoY }}
            className="col-span-5 overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-lg"
          >
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              width={about.photo.width}
              height={about.photo.height}
              priority
              className="object-cover w-full max-h-[80vh]"
            />
          </motion.div>

          {/* Заголовок + текст справа */}
          <div className="col-span-7">
            <motion.h2
              className="text-3xl xl:text-3xl font-semibold tracking-tight mb-12"
              style={{ opacity: headingOpacity }}
            >
              {about.heading}
            </motion.h2>

            <ScrollRevealText
              text={about.text}
              scrollYProgress={scrollYProgress}
              className="text-base xl:text-lg text-muted-foreground leading-relaxed max-w-prose"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

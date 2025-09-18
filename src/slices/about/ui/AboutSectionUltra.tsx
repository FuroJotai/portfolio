"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { about } from "@/slices/about/data/about";
import { textStyles } from "@/slices/hero/utils/textStyles";

export default function AboutSectionUltra() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-25% 0px", amount: 0.25, once: true });

  const paragraphs = useMemo(
    () => {
      const rawParagraphs = about.text
        .split("\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

      if (rawParagraphs.length <= 2) {
        return rawParagraphs;
      }

      return [
        rawParagraphs.slice(0, 2).join(" "),
        rawParagraphs.slice(2).join(" "),
      ];
    },
    []
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-[clamp(2rem,4vw,6rem)] py-[clamp(6rem,10vw,12rem)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-12 gap-[clamp(2rem,3vw,5rem)] items-start max-w-[clamp(1400px,85vw,2000px)] mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative col-span-6 overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl w-[clamp(800px,40vw,1000px)] h-[clamp(1000px,50vh,1000px)] z-20"
        >
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        <div className="col-span-6 space-y-10">
          <motion.h2
            className={`${textStyles.h2} mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {about.heading}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className={`${textStyles.bodyLarge} text-muted-foreground leading-relaxed max-w-prose whitespace-normal break-words space-y-6`}
          >
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}



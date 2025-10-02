"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { about } from "@/slices/about/data/about";
import { textStyles } from "@/slices/hero/utils/textStyles";

export default function AboutSectionDesktop() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-20% 0px", amount: 0.2, once: true });

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
      className="relative mx-auto max-w-7xl px-6 lg:px-8 py-10 lg:py-0 lg:mb-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-12 gap-12 items-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
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

        <div className="col-span-7 space-y-8">
          <motion.h4
            className={`${textStyles.h4}`}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          >
            {about.heading}
          </motion.h4>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            className={`${textStyles.body} text-muted-foreground leading-relaxed max-w-prose space-y-6`}
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



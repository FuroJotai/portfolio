"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "@/slices/about/data/about";
import { textStyles } from "@/slices/hero/utils/textStyles";

export default function AboutSectionMobile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px" }); // 👈 повторяется при каждом входе/выходе

  const lines = about.text.split("\n");

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto max-w-3xl mt-40 px-6 lg:px-8 py-24 border-t border-white"
    >
      {/* Заголовок */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`${textStyles.h2} mb-8 text-center`}
      >
        {about.heading}
      </motion.h2>

      {/* Фото */}
      <div className="w-full sm:max-w-lg mx-auto">
        <Image
          src={about.photo.src}
          alt={about.photo.alt}
          width={about.photo.width}
          height={about.photo.height}
          priority
          sizes="(max-width: 640px) 100vw, 512px" // 👈 100% ширины на мобилке, фикс 512px на планшете
          className="w-full h-auto rounded-xl ring-1 ring-white/10 shadow-md"
        />
      </div>

      {/* Текст — строка за строкой */}
      <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
        {lines.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              delay: idx * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="overflow-hidden"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}

"use client"

import FooterLink from "./FooterLink"
import { footerLinks } from "../data/footerLinks"
import { motion } from "framer-motion"

export default function FooterSectionDesktop() {
  return (
    <motion.section
      id="footer"
      className="hidden md:flex flex-col h-[500px]
           px-[clamp(12px,1vw,24px)] 
           pt-[clamp(32px,0.8vw,40px)] pb-0
           text-gray-200 border-t border-[rgba(16,185,129,0.5)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Внутренний контейнер с ограничением ширины и колонками */}
      <div className="w-full max-w-[2900px] mx-auto flex flex-col h-full">
        {/* === Верхний контейнер === */}
        <div className="flex justify-between w-full mb-[clamp(32px,1vw,48px)]">
          {/* Навигация слева */}
          <div className="
            flex flex-col gap-2
            text-[clamp(16px,1.2vw,22px)]
            4xl:text-[34px] 5xl:text-[40px]
          ">
            {footerLinks.nav.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </div>

          {/* Контакты справа (без underline) */}
          <div className="
            flex flex-col text-right gap-1
            text-[clamp(16px,1.2vw,22px)]
            4xl:text-[34px] 5xl:text-[40px]
          ">
            <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-gray-100 transition-colors">
              {footerLinks.contact.email.toUpperCase()}
            </a>
            <a href={`tel:${footerLinks.contact.phone}`} className="hover:text-gray-100 transition-colors">
              {footerLinks.contact.phone}
            </a>
          </div>
        </div>

        {/* === Средний контейнер (соцсети) === */}
        <div className="
          flex justify-between w-full
          mt-[clamp(8px,1vw,24px)]
          text-[clamp(16px,1.2vw,22px)]
          4xl:text-[34px] 5xl:text-[40px]
        ">
          <FooterLink {...footerLinks.socials[0]} /> {/* Instagram */}
          {/* LinkedIn — смещаем процентами, без translate */}
          <div className="pr-[2%] 4xl:pr-[2.5%] 5xl:pr-[3%]">
            <FooterLink {...footerLinks.socials[1]} />
          </div>
          <FooterLink {...footerLinks.socials[2]} /> {/* GitHub */}
        </div>

        {/* === Spacer между 2 и 3 контейнерами (чтобы точно БОЛЬШЕ расстояние) === */}
        <div className="
          h-[clamp(20px,2.5vh,60px)]
          4xl:h-[clamp(40px,4vh,120px)]
          5xl:h-[clamp(64px,6vh,160px)]
          flex-shrink-0
        " />

        {/* === Нижний контейнер (автор) — прибит к низу секции === */}
        <div className="
          mt-auto flex flex-col items-center text-center
          pb-[clamp(4px,0.6vw,12px)]
          pl-[2%] 4xl:pl-[2.5%] 5xl:pl-[3%]
        ">
          <span className="
            text-[clamp(14px,1vw,32px)]
            4xl:text-[40px] 5xl:text-[48px]
            font-semibold text-gray-400
          ">
            {footerLinks.author.role}
          </span>
          <span className="
            text-[clamp(32px,5vw,84px)]
            4xl:text-[160px] 5xl:text-[200px]
            font-bold leading-tight
          ">
            {footerLinks.author.name}
          </span>
        </div>
      </div>
    </motion.section>
  )
}

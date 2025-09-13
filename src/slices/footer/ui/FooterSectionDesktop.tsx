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
           pt-[clamp(32px,1vw,48px)] pb-[clamp(12px,1vw,32px)]
           text-gray-200 border-t border-[rgba(16,185,129,0.5)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Внутренний контейнер: три зоны, равные отступы */}
      <div className="w-full max-w-[2900px] mx-auto flex flex-col h-full justify-between">
        
        {/* === Верхний контейнер (навигация + контакты) === */}
        <div className="flex justify-between w-full">
          {/* Навигация слева */}
          <div className="flex flex-col gap-2 text-[clamp(16px,1.2vw,40px)]">
            {footerLinks.nav.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </div>

          {/* Контакты справа */}
          <div className="flex flex-col text-right gap-1 text-[clamp(16px,1.2vw,40px)]">
            <a
              href={`mailto:${footerLinks.contact.email}`}
              className="hover:text-gray-100 transition-colors"
            >
              {footerLinks.contact.email.toUpperCase()}
            </a>
            <a
              href={`tel:${footerLinks.contact.phone}`}
              className="hover:text-gray-100 transition-colors"
            >
              {footerLinks.contact.phone}
            </a>
          </div>
        </div>

        {/* === Средний контейнер (соцсети) === */}
        <div className="flex justify-between w-full text-[clamp(16px,1.2vw,40px)]">
          <FooterLink {...footerLinks.socials[0]} /> {/* Instagram */}
          <div className="pr-[2%]">
            <FooterLink {...footerLinks.socials[1]} /> {/* LinkedIn */}
          </div>
          <FooterLink {...footerLinks.socials[2]} /> {/* GitHub */}
        </div>

        {/* === Нижний контейнер (автор) === */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[clamp(14px,1vw,48px)] font-semibold text-gray-400">
            {footerLinks.author.role}
          </span>
          <span className="text-[clamp(32px,5vw,100px)] font-bold leading-tight">
            {footerLinks.author.name}
          </span>
        </div>
      </div>
    </motion.section>
  )
}

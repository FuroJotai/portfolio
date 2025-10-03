"use client"

import { footerLinks } from "../data/footerLinks"
import { motion } from "framer-motion"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export default function FooterSectionDesktop() {
  return (
    <motion.footer
      id="footer"
      className="w-full 
           px-[clamp(12px,1vw,24px)] 
           py-[clamp(20px,2vw,40px)]
           text-gray-200 border-t border-[rgba(16,185,129,0.5)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-3 items-start">
        {/* Left: navigation links (column) */}
        <div className="flex flex-col gap-2 text-[clamp(14px,1vw,20px)]">
          {footerLinks.nav.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-gray-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center: social icons (row) + name below */}
        <div className="flex flex-col items-center gap-3 text-[clamp(14px,1vw,20px)]">
          <div className="flex gap-6">
            <a href={footerLinks.socials[0].href} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 hover:text-gray-100 transition-colors" />
            </a>
            <a href={footerLinks.socials[1].href} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 hover:text-gray-100 transition-colors" />
            </a>
            <a href={footerLinks.socials[2].href} target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 hover:text-gray-100 transition-colors" />
            </a>
          </div>
          <span className="font-semibold text-gray-400">
            {footerLinks.author.name}
          </span>
        </div>

        {/* Right: contact info (column) */}
        <div className="flex flex-col text-right gap-1 text-[clamp(14px,1vw,20px)] leading-tight">
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
    </motion.footer>
  )
}

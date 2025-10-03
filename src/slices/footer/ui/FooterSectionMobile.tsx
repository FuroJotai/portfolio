"use client"

import { footerLinks } from "../data/footerLinks"
import { motion } from "framer-motion"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export default function FooterSectionMobile() {
  return (
    <motion.footer
      className="flex md:hidden flex-col mt-20 gap-8 px-6 pt-6 text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Nav */}
      <div className="flex flex-col gap-3 text-base">
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

      {/* Socials */}
      <div className="flex gap-6 text-xl">
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

      {/* Contact */}
      <div className="flex flex-col gap-2 text-base">
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

      {/* Author */}
      <div className="flex flex-col gap-1 text-base">
        <span className="font-semibold text-gray-400">
          {footerLinks.author.name}
        </span>
      </div>
    </motion.footer>
  )
}

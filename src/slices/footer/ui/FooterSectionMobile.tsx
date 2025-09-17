"use client"

import FooterLink from "./FooterLink"
import { footerLinks } from "../data/footerLinks"
import { motion } from "framer-motion"

export default function FooterSectionMobile() {
  return (
    <motion.footer
      className="flex md:hidden flex-col mt-80 gap-10 px-6 py-12 text-gray-200"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Nav */}
      <div className="flex flex-col gap-4">
        {footerLinks.nav.map((link) => (
          <div
            key={link.label}
            className="[&>a]:inline-block [&>a]:w-max [&>a>span]:max-w-[100%]"
          >
            <FooterLink {...link} />
          </div>
        ))}
      </div>

      {/* Socials */}
      <div className="flex flex-col gap-4">
        {footerLinks.socials.map((link) => (
          <div
            key={link.label}
            className="[&>a]:inline-block [&>a]:w-max [&>a>span]:max-w-[100%]"
          >
            <FooterLink {...link} />
          </div>
        ))}
      </div>

      {/* Contact (без underline) */}
      <div className="flex flex-col gap-3">
        <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-teal-300">
          {footerLinks.contact.email.toUpperCase()}
        </a>
        <a href={`tel:${footerLinks.contact.phone}`} className="hover:text-teal-300">
          {footerLinks.contact.phone}
        </a>
      </div>

      {/* Author (без underline) */}
      <div className="flex flex-col gap-2">
        <span className="block text-sm font-semibold text-gray-400">
          {footerLinks.author.role}
        </span>
        <span className="block text-xl font-bold">
          {footerLinks.author.name}
        </span>
      </div>
    </motion.footer>
  )
}

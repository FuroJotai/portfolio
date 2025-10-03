"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import emailjs from "@emailjs/browser"
import { textStyles } from "@/slices/hero/utils/textStyles"

export default function ContactSectionDesktop() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  })

  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("EmailJS error:", err)
    }
  }

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [submitted])

  return (
    <section id="contact" ref={ref} className="relative flex justify-center items-center lg:mb-28">
      <motion.div
        style={{ opacity }}
        className="relative w-full max-w-lg p-10 rounded-2xl shadow-xl backdrop-blur-md"
      >
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className={`${textStyles.h3} text-center mb-6`}>Get in touch</h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border border-gray-600 px-4 py-3 rounded-md bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-300"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="border border-gray-600 px-4 py-3 rounded-md bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-300"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="border border-gray-600 px-4 py-3 rounded-md bg-transparent text-white h-32 resize-none placeholder:text-gray-400 focus:outline-none focus:border-gray-300"
            />

            <button
                type="submit"
                className="mt-2 cursor-pointer bg-black text-white py-3 rounded-md 
                          border border-gray-600 transition-colors duration-300
                          hover:border-gray-400">
                  Send
                </button>

          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className={`${textStyles.h4} mb-2`}>Thank you! 🙌</p>
            <p className="text-gray-300">I’ll get back to you soon.</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

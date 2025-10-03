"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import emailjs from "@emailjs/browser"
import { textStyles } from "@/slices/hero/utils/textStyles"

export default function ContactSectionMobile() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  })

  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <section
      id="contact"
      ref={ref}
      className="flex justify-center items-center py-16 px-4"
    >
      <motion.div
        style={{ opacity }}
        className="w-full max-w-sm p-6 rounded-xl shadow-md backdrop-blur-md"
      >
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <h2 className={`${textStyles.h4} text-center mb-4`}>
              Get in touch
            </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border border-gray-600 px-3 py-2 rounded-md bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-colors duration-300 ease-in-out"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="border border-gray-600 px-3 py-2 rounded-md bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-colors duration-300 ease-in-out"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="border border-gray-600 px-3 py-2 rounded-md bg-transparent text-white h-28 resize-none placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition-colors duration-300 ease-in-out"
            />

            <button
              type="submit"
              className="mt-2 cursor-pointer bg-black text-white py-3 rounded-md 
                         border border-gray-600 transition-colors duration-300 ease-in-out
                         hover:bg-neutral-900 hover:border-gray-400"
            >
              Send
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
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

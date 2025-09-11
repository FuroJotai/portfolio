"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function ContactSectionMobile() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], // fade-in при заходе
  })

  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const sectionOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { user_email: email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setSubmitted(true)
      setEmail("")
    } catch (err) {
      console.error("EmailJS error:", err)
    }
  }

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 8000)
      return () => clearTimeout(timer)
    }
  }, [submitted])

  return (
    <section id="contact" ref={ref} className="py-20 mt-30 flex items-center justify-center">
      <motion.div
        style={{ opacity: sectionOpacity }}
        className="flex flex-col items-center gap-6 w-full px-4"
      >
        {!submitted ? (
          <>
            <p className="text-xl font-bold text-center">
              Book your free consultation
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-4 w-full max-w-[300px]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="border border-gray-500 px-4 py-3 rounded-md w-full 
                           text-gray-200 text-center
                           placeholder:text-gray-500 focus:placeholder:text-gray-400
                           outline-none focus:border-gray-500 transition-colors"
              />

              <span className="text-lg">let’s create a dream</span>

              {/@.+/.test(email) && (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 px-6 py-2 border border-gray-500/30 text-gray-400 
                             rounded-md bg-transparent transition-colors
                             hover:border-gray-500 hover:text-white"
                >
                  Submit
                </motion.button>
              )}
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Thank you for booking!
            </h2>
            <p className="text-lg text-gray-300">
              We’ll get in touch with you shortly.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { textStyles } from "@/slices/hero/utils/textStyles"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  // === Анимации ===
  const letsOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1])
  const createOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1])
  const letsX = useTransform(scrollYProgress, [0.3, 0.45], [0, -200])
  const createX = useTransform(scrollYProgress, [0.3, 0.45], [0, 200])

  const inputOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1])
  const dreamOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1])
  const phraseOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1])

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

  // Возврат формы через 8 секунд
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [submitted])

  return (
    <section id="contact" ref={ref} className="relative h-[2500px] mt-20">
      <div className="sticky top-5 h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-[clamp(24px,3vw,72px)] w-full max-w-screen-3xl px-[clamp(16px,4vw,64px)]">
          {!submitted ? (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: submitted ? 0 : 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-[clamp(24px,3vw,72px)] w-full"
            >
              {/* Фраза сверху */}
              <motion.p
                style={{ opacity: phraseOpacity }}
                className={`${textStyles.h5} 4xl:${textStyles.h4} text-center`}
              >
                Book your free consultation
              </motion.p>

              {/* Форма */}
              <form
                onSubmit={handleSubmit}
                className="relative w-full max-w-[clamp(400px,30vw,500px)] flex flex-col items-center"
              >
                {/* Let's / Create */}
                <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                  <motion.p
                    style={{ opacity: letsOpacity, x: letsX }}
                    className={`${textStyles.h5} 4xl:${textStyles.h4}`}
                  >
                    let’s
                  </motion.p>
                  <motion.p
                    style={{ opacity: createOpacity, x: createX }}
                    className={`${textStyles.h5} 4xl:${textStyles.h4}`}
                  >
                    create
                  </motion.p>
                </div>

                {/* Input */}
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{ opacity: inputOpacity }}
                  required
                  className={`
                    border border-gray-500 
                    px-[clamp(16px,1.5vw,32px)] py-[clamp(10px,1vw,24px)] 
                    rounded-md w-full text-gray-200 text-center
                    ${textStyles.bodyLarge}
                    placeholder:text-gray-500 focus:placeholder:text-gray-400
                    outline-none focus:border-gray-500 transition-colors
                  `}
                />
              </form>

              {/* "a dream" */}
              <motion.span
                style={{ opacity: dreamOpacity }}
                className={`${textStyles.h5} 4xl:${textStyles.h4}`}
              >
                a dream
              </motion.span>

              {/* Submit-кнопка */}
              {/@.+/.test(email) && (
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    mt-6 px-[clamp(20px,2vw,40px)] py-[clamp(10px,1vw,24px)]
                    border border-gray-500/30 text-gray-400 rounded-md bg-transparent
                    transition-colors hover:border-gray-500 hover:text-white
                    ${textStyles.bodyLarge}
                  `}
                >
                  Submit
                </motion.button>
              )}
            </motion.div>
          ) : (
            // Экран "спасибо"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <p className={`${textStyles.h5} 4xl:${textStyles.h4} mb-4`}>
                Thank you for booking!
              </p>
              <p className={textStyles.bodyLarge}>
                We’ll get in touch with you shortly.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

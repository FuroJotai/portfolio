"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { plans, type Plan } from "../data/plans"

export default function PricingSectionUltra() {
  return (
    <section
      id="pricing"
      className="py-[clamp(100px,12vh,240px)] mt-[clamp(60px,10vh,200px)] 
                 flex flex-col items-center justify-center gap-[clamp(40px,6vh,120px)]"
    >
      <motion.h2
        className="text-[clamp(48px,5vw,128px)] font-bold text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Pricing
      </motion.h2>

      <div
        className="grid 
          gap-[clamp(48px,5vw,160px)] 
          w-full 
          max-w-[clamp(2600px,95vw,4200px)] 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          px-[clamp(60px,6vw,160px)]"
      >
        {plans.map((plan, i) => (
          <PlanCardUltra
            key={plan.title}
            plan={plan}
            index={i}
            isLast={i === plans.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

function PlanCardUltra({
  plan,
  index,
  isLast,
}: {
  plan: Plan
  index: number
  isLast: boolean
}) {
  const [selected, setSelected] = useState(0)

  return (
    <motion.div
      className={`
        relative overflow-hidden
        rounded-3xl p-[clamp(80px,8vw,200px)]
        min-h-[clamp(800px,70vh,1400px)]
        border border-gray-800 
        shadow-2xl
        transition-transform duration-700 ease-out
        hover:scale-[1.03]
        hover:shadow-[0_0_80px_rgba(16,185,129,0.6)]
        ${isLast ? "sm:col-span-2 sm:mx-auto lg:col-span-1" : ""}
      `}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.25,
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* Заголовок */}
      <h3 className="text-[clamp(32px,3vw,72px)] font-semibold text-white mb-[clamp(24px,2vh,48px)]">
        {plan.title}
      </h3>

      {/* Переключатель */}
      <div className="flex gap-[clamp(16px,2vw,32px)] 
                      mb-[clamp(32px,3vh,64px)]
                      bg-gray-900 rounded-xl p-[clamp(12px,1vw,24px)]">
        {plan.options.map((opt, i) => (
          <button
            key={opt.label}
            onClick={() => setSelected(i)}
            className={`
              flex-1 
              px-[clamp(16px,1.5vw,36px)] 
              py-[clamp(10px,1vh,24px)] 
              text-[clamp(18px,1.6vw,36px)] 
              rounded-lg transition cursor-pointer
              ${
                selected === i
                  ? "bg-teal-500 text-black font-bold"
                  : "text-gray-400 hover:text-white"
              }
            `}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Цена */}
      <p className="mb-[clamp(40px,4vh,80px)] 
                   text-[clamp(32px,3vw,80px)] 
                   font-bold text-teal-300">
        {plan.options[selected].price}
      </p>

      {/* Фичи */}
      <ul className="flex flex-col gap-[clamp(16px,1.5vh,28px)] 
                     text-gray-400 
                     text-[clamp(20px,1.8vw,36px)]">
        {plan.features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
    </motion.div>
  )
}

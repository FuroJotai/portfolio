"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { plans, type Plan } from "../data/plans"

export default function PricingSectionUltra() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-28 lg:py-32 xl:py-28 2xl:py-36
                 mt-16 md:mt-20 lg:mt-24 xl:mt-20 2xl:mt-28
                 flex flex-col items-center justify-center gap-16 md:gap-20 xl:gap-20 2xl:gap-24"
    >
      <motion.h2
        className="
          text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-5xl 2xl:text-6xl
          font-bold text-white
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Pricing
      </motion.h2>

      <div
        className="grid 
          gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-14 2xl:gap-14
          w-full 
          max-w-screen-lg lg:max-w-[1500px] xl:max-w-[1900px] 2xl:max-w-[1850px]
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          px-4 sm:px-8 lg:px-12 xl:px-12 2xl:px-16"
      >
        {plans.map((plan, i) => (
          <PlanCardUltra key={plan.title} plan={plan} index={i} />
        ))}
      </div>
    </section>
  )
}

function PlanCardUltra({
  plan,
  index,
}: {
  plan: Plan
  index: number
}) {
  const [selected, setSelected] = useState(0)

  return (
    <motion.div
      className={`
        relative overflow-hidden
        rounded-3xl
        p-6 sm:p-8 md:p-10 lg:p-12 xl:p-10 2xl:p-14
        border border-gray-800 
        shadow-2xl
        transition-transform duration-700 ease-out
        hover:scale-[1.03]
        hover:shadow-[0_0_80px_rgba(16,185,129,0.6)]
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
      <h3
        className="
          text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl
          font-semibold text-white mb-6 md:mb-8
        "
      >
        {plan.title}
      </h3>

      {/* Переключатель */}
      <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-4 mb-6 md:mb-8 bg-gray-900 rounded-xl p-2 sm:p-3 lg:p-3 xl:p-2.5">
        {plan.options.map((opt, i) => (
          <button
            key={opt.label}
            onClick={() => setSelected(i)}
            className={`
              flex-1 
              px-3 sm:px-4 md:px-5 lg:px-5 xl:px-4 2xl:px-5
              py-1.5 sm:py-2 md:py-2.5 lg:py-2.5 xl:py-2 2xl:py-2.5
              text-sm sm:text-base md:text-lg lg:text-lg xl:text-base 2xl:text-lg
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
      <p
        className="
          mb-8 md:mb-10
          text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl
          font-bold text-teal-300
        "
      >
        {plan.options[selected].price}
      </p>

      {/* Фичи */}
      <ul
        className="
          flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-3 2xl:gap-4
          text-gray-400 
          text-sm sm:text-base md:text-lg lg:text-lg xl:text-base 2xl:text-lg
        "
      >
        {plan.features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
    </motion.div>
  )
}

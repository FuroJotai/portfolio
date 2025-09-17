"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { plans, type Plan } from "../data/plans"
import { textStyles } from "@/slices/hero/utils/textStyles"

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="
        relative mx-auto 
        max-w-7xl 
        px-6 mt-10 lg:mt-20 lg:px-8 lg:min-h-screen
        3xl:max-w-[1600px] 4xl:max-w-[1800px] 5xl:max-w-[2000px]
      "
    >
      <div className="pt-32">
        {/* Мобильный заголовок (h2) */}
        <motion.h2
          className={`${textStyles.h2} text-white mb-8 text-center lg:hidden`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Pricing
        </motion.h2>

        {/* Десктопный заголовок (h3) */}
        <motion.h3
          className={`${textStyles.h3} text-white mb-8 text-center hidden lg:block`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Pricing
        </motion.h3>

        {/* сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 4xl:gap-16">
          {plans.map((plan, i) => (
            <PlanCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const [selected, setSelected] = useState(0)

  return (
    <motion.div
      className="
        relative overflow-hidden
        rounded-2xl p-6 
        border border-gray-800 
        shadow-lg
        transition-transform transition-shadow
        duration-700 ease-out
        hover:scale-[1.01]
        hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]
        3xl:p-8 4xl:p-10
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {/* Заголовок карточки */}
      <h6 className={`${textStyles.h6} 4xl:text-[44px]`}>
        {plan.title}
      </h6>

      {/* Переключатель опций */}
      <div className="mt-4 bg-gray-900 rounded-lg p-1 flex w-full min-h-16 3xl:min-h-20">
        {plan.options.map((opt, i) => (
          <button
            key={opt.label}
            onClick={() => setSelected(i)}
            className={`
              flex-1 px-3 py-2 text-xs md:text-sm lg:text-md rounded-md transition cursor-pointer
              3xl:px-4 3xl:py-3 3xl:text-lg
              ${
                selected === i
                  ? "bg-teal-500 text-black font-medium"
                  : "text-gray-400 hover:text-white"
              }
            `}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Цена */}
      <p className="mt-8 text-xl md:text-3xl lg:text-4xl font-semibold text-teal-300 3xl:text-5xl 4xl:text-6xl">
        {plan.options[selected].price}
      </p>

      {/* Фичи */}
      <ul className="mt-4 space-y-2 text-gray-400 text-sm md:text-base 3xl:text-lg 4xl:text-xl">
        {plan.features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
    </motion.div>
  )
}

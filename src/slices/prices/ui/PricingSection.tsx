"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { plans, type Plan } from "../data/plans"
import { textStyles } from "@/slices/hero/utils/textStyles"

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-7xl px-6 lg:px-8 mt-40 min-h-screen"
    >
      <div className="pt-32">
        <motion.h3
          className={`${textStyles.h3} text-white mb-16 text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Pricing
        </motion.h3>

        {/* сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
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
      <h6 className={textStyles.h6}>
        {plan.title}
      </h6>

      {/* Переключатель опций */}
      <div className="mt-4 bg-gray-900 rounded-lg p-1 flex w-full min-h-16">
  {plan.options.map((opt, i) => (
    <button
      key={opt.label}
      onClick={() => setSelected(i)}
      className={`
        flex-1 px-3 py-2 text-xs md:text-sm lg:text-md rounded-md transition cursor-pointer
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
      <p className="mt-8 text-xl md:text-3xl lg:text-4xl font-semibold text-teal-300">
        {plan.options[selected].price}
      </p>

      {/* Фичи */}
      <ul className="mt-4 space-y-2 text-gray-400 text-sm md:text-base">
        {plan.features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
    </motion.div>
  )
}

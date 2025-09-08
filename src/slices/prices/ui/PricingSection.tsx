"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { plans, type Plan } from "../data/plans"

export default function PricingSection() {
  return (
    <section className="py-20 mt-10 lg:mt-30 flex flex-col items-center justify-center gap-8">
      <motion.h2
        className="text-3xl font-bold text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Pricing
      </motion.h2>

      <div className="grid gap-8 md:gap-7 lg:gap-6 w-full max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-12 sm:px-6 lg:px-0">
        {plans.map((plan, i) => (
          <PlanCard
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

function PlanCard({
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
        rounded-2xl p-6 
        border border-gray-800 
        shadow-lg
        transition-transform transition-shadow
        duration-700 ease-out
        hover:scale-[1.01]
        hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]
        ${isLast ? "sm:col-span-2 sm:mx-auto lg:col-span-1" : ""}
      `}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {/* Заголовок */}
      <h3 className="text-lg md:text-lg lg:text-xl font-semibold text-white">
        {plan.title}
      </h3>

      {/* Переключатель */}
      <div className="flex gap-2 mt-3 lg:mt-4 bg-gray-900 rounded-lg p-1">
        {plan.options.map((opt, i) => (
          <button
            key={opt.label}
            onClick={() => setSelected(i)}
            className={`
              flex-1 px-3 py-1 text-xs md:text-sm lg:text-md rounded-md transition cursor-pointer
              ${selected === i ? "bg-teal-500 text-black font-medium" : "text-gray-400 hover:text-white"}
            `}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Цена */}
      <p className="mt-6 lg:mt-10 text-lg md:text-3xl lg:text-2xl font-semi-bold text-teal-300">
        {plan.options[selected].price}
      </p>

      {/* Фичи */}
      <ul className="mt-4 space-y-2 text-gray-400 text-sm md:text-sm">
        {plan.features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
    </motion.div>
  )
}

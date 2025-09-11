"use client"

import HeroDesktop from "./HeroDesktop"
import HeroMobile from "./HeroMobile"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen h-screen">
      {/* 👇 Показываем только на мобилке */}
      <div className="block md:hidden">
        <HeroMobile />
      </div>

      {/* 👇 Показываем от tablet+ */}
      <div className="hidden md:block">
        <HeroDesktop />
      </div>
    </section>
  )
}

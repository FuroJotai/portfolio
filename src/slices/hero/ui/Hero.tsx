"use client"

import HeroDesktop from "./HeroDesktop"
import HeroMobile from "./HeroMobile"

export default function Hero() {
  return (
    <>
      {/* 👇 Показываем только на мобилке */}
      <div className="block md:hidden">
        <HeroMobile />
      </div>

      {/* 👇 Показываем от tablet+ */}
      <div className="hidden md:block">
        <HeroDesktop />
      </div>
    </>
  )
}

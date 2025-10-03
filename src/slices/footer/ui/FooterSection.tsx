"use client"

import FooterSectionDesktop from "./FooterSectionDesktop"
import FooterSectionMobile from "./FooterSectionMobile"

export default function FooterSection() {
  return (
    <footer id="footer" className="w-full">
      {/* Desktop */}
      <div className="hidden md:block">
        <FooterSectionDesktop />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <FooterSectionMobile />
      </div>
    </footer>
  )
}

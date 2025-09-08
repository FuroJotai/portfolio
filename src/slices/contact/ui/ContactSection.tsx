"use client"

import { useEffect, useState } from "react"
import ContactSectionDesktop from "./ContactSectionDesktop"
import ContactSectionMobile from "./ContactSectionMobile"

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [matches, query])

  return matches
}

export default function ContactSection() {
  const isMobile = useMediaQuery("(max-width: 767px)")
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <section className="w-full">
      {isMobile && <ContactSectionMobile />}
      {isDesktop && <ContactSectionDesktop />}
    </section>
  )
}

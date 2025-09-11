"use client"

import { useEffect, useState } from "react"
import PricingSection from "./PricingSection"
import PricingSectionUltra from "./PricingSectionUltra"

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

export default function Pricing() {
  const isUltra = useMediaQuery("(min-width: 1920px)")

  return (
    <section className="w-full">
      {isUltra ? <PricingSectionUltra /> : <PricingSection />}
    </section>
  )
}

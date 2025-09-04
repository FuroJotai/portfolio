"use client"

import { useEffect, useState } from "react"
import WorksSectionMobile from "./WorksSectionMobile"
import WorksSectionLaptop from "./WorksSectionLaptop"
import WorksSectionDesktop from "./WorksSectionDesktop"

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

export default function WorksSection() {
  const isMobile = useMediaQuery("(max-width: 899px)")
  const isLaptop = useMediaQuery("(min-width: 900px) and (max-width: 1029px)")
  const isDesktop = useMediaQuery("(min-width: 1030px)")

  return (
    <section className="w-full">
      {isMobile && <WorksSectionMobile />}
      {isLaptop && <WorksSectionLaptop />}
      {isDesktop && <WorksSectionDesktop />}
    </section>
  )
}

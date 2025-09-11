"use client"

import { useEffect, useState } from "react"
import AboutSectionMobile from "./AboutSectionMobile"
import AboutSectionDesktop from "./AboutSectionDesktop"
import AboutSectionUltra from "./AboutSectionUltra"

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

function useLargeHeight(threshold: number = 1400) {
  const [isLargeHeight, setIsLargeHeight] = useState(false)

  useEffect(() => {
    const check = () => setIsLargeHeight(window.innerHeight > threshold)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [threshold])

  return isLargeHeight
}

export default function AboutSection() {
  const isMobile = useMediaQuery("(max-width: 1279px)")
  const isDesktop = useMediaQuery("(min-width: 1280px)")
  const isLargeHeight = useLargeHeight(1400)

  return (
    <>
      {isMobile && <AboutSectionMobile />}
      {isDesktop &&
        (isLargeHeight ? <AboutSectionUltra /> : <AboutSectionDesktop />)}
    </>
  )
}

export const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (!section) return

  const isMobile = window.innerWidth < 768
  const navOffset = isMobile ? 120 : 100 // navbar height offset

  let target = section.getBoundingClientRect().top + window.scrollY

  // Apply offset for all sections except "works" on desktop
  if (id !== "works" || isMobile) {
    target -= navOffset
  }

  window.scrollTo({
    top: target,
    behavior: "smooth",
  })
}

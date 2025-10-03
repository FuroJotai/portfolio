export const scrollToSection = (id: string, special = false) => {
  const section = document.getElementById(id)
  if (!section) return

  const isMobile = window.innerWidth < 768
  let target = section.getBoundingClientRect().top + window.scrollY

  // Example: adjust offsets
  if (id === "contact") {
    target -= isMobile ? 120 : 80
  }
  if (special) {
    target -= 80
  }

  window.scrollTo({ top: target, behavior: "smooth" })
}

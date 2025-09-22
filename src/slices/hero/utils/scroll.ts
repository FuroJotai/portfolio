// src/slices/hero/utils/scroll.ts
export const scrollToSection = (id: string, special = false) => {
  const section = document.getElementById(id)
  if (!section) return

  const isMobile = window.innerWidth < 768
  let target = section.getBoundingClientRect().top + window.scrollY

  // 🔹 Contact
  if (id === "contact") {
    if (isMobile) {
      // На мобиле скроллим чуть выше (фиксированный navbar)
      target -= 120
    } else {
      // На десктопе центрируем
      target += section.offsetHeight * 0.55
    }
  }

  // 🔹 Works
  if (id === "works" && isMobile) {
    // На мобиле тоже нужен оффсет вверх
    target -= 120
  }

  window.scrollTo({
    top: target,
    behavior: "smooth",
  })
}

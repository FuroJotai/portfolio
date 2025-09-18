// src/slices/hero/utils/scroll.ts

// 🔹 универсальный скролл
export const scrollToSection = (id: string, _special = false) => {
  const section = document.getElementById(id)
  if (!section) return

  let target = section.getBoundingClientRect().top + window.scrollY

  if (id === "contact") {
    // Nudge contact section so the form centers better on screen
    target += section.offsetHeight * 0.55
  }

  window.scrollTo({
    top: target,
    behavior: "smooth",
  })
}

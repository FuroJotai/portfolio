// src/slices/hero/utils/scroll.ts
export const scrollToSection = (id: string, special = false) => {
  const section = document.getElementById(id)
  if (!section) return

  const isMobile = window.innerWidth < 768

  let target = section.getBoundingClientRect().top + window.scrollY

  // 👇 На мобиле без добавки, на десктопе оставляем 0.55
  if (id === "contact" && !isMobile) {
    target += section.offsetHeight * 0.55
  }

  window.scrollTo({
    top: target,
    behavior: "smooth",
  })
}

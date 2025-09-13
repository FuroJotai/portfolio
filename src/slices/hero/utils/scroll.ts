// src/slices/hero/utils/scroll.ts

// 🔹 универсальный скролл
export const scrollToSection = (id: string, special = false) => {
  const section = document.getElementById(id)
  if (!section) return

  let target = section.getBoundingClientRect().top + window.scrollY

  if (special) {
    // прокрутка почти до конца секции (65%)
    target += section.offsetHeight * 0.65
  }

  window.scrollTo({
    top: target,
    behavior: "smooth",
  })
}

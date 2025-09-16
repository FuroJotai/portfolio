// src/slices/hero/utils/textStyles.ts
export const textStyles = {
  // === Заголовки (Sora) ===
  h1: "font-sora text-[clamp(32px,5vw,96px)] leading-tight 3xl:text-[104px] 4xl:text-[112px] 5xl:text-[128px] 6xl:text-[144px]",
  h2: "font-sora font-semibold text-[clamp(28px,4vw,80px)] leading-snug 3xl:text-[88px] 4xl:text-[96px] 5xl:text-[104px] 6xl:text-[120px]",
  h3: "font-sora font-medium text-[clamp(22px,3vw,56px)] leading-tight 3xl:text-[64px] 4xl:text-[72px] 5xl:text-[80px] 6xl:text-[96px]",
  h4: "font-sora font-medium text-[clamp(18px,2.5vw,40px)] leading-normal 3xl:text-[48px] 4xl:text-[56px] 5xl:text-[64px] 6xl:text-[72px]",
  h5: "font-sora font-medium text-[clamp(16px,2vw,28px)] leading-normal 3xl:text-[32px] 4xl:text-[36px] 5xl:text-[40px] 6xl:text-[48px]",
  h6: "font-sora font-medium text-[clamp(14px,1.8vw,22px)] leading-normal 3xl:text-[26px] 4xl:text-[28px] 5xl:text-[30px] 6xl:text-[32px]",

  // === Текстовые стили (Inter) ===
  body: "font-inter text-[clamp(14px,1vw,20px)] text-gray-300 leading-relaxed 3xl:text-[22px] 4xl:text-[24px] 5xl:text-[26px] 6xl:text-[28px]",
  bodyLarge: "font-inter text-[clamp(16px,1.4vw,28px)] text-gray-300 leading-relaxed 3xl:text-[26px] 4xl:text-[28px] 5xl:text-[32px] 6xl:text-[36px]",
  bodyStrong: "font-inter text-[clamp(14px,1.3vw,20px)] font-medium text-gray-200 leading-relaxed 3xl:text-[22px] 4xl:text-[24px] 5xl:text-[26px] 6xl:text-[28px]",
  subtitle: "font-inter text-[clamp(12px,1.1vw,18px)] text-gray-400 uppercase tracking-wide 3xl:text-[20px] 4xl:text-[22px] 5xl:text-[24px] 6xl:text-[26px]",
  small: "font-inter text-[clamp(11px,0.9vw,16px)] text-gray-400 3xl:text-[18px] 4xl:text-[20px] 5xl:text-[22px] 6xl:text-[24px]",

  // === Акценты (Inter, но можно сделать Sora если надо) ===
  accent: "font-inter text-[clamp(14px,1.2vw,20px)] font-semibold text-blue-400 3xl:text-[22px] 4xl:text-[24px] 5xl:text-[26px] 6xl:text-[28px]",
}

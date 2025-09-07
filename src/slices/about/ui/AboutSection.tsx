"use client";

import AboutSectionDesktop from "./AboutSectionDesktop";
import AboutSectionMobile from "./AboutSectionMobile";  

export default function AboutSection() {
  return (
    <>
      {/* Десктоп */}
      <div className="hidden xl:block mt-40">
        <AboutSectionDesktop />
      </div>

      {/* Временно рендерим только десктоп, но чтобы не ломало верстку на других брейкпоинтах */}
      <div className="block xl:hidden">
        <div className="block xl:hidden">
        <AboutSectionMobile />
      </div>
      </div>
    </>
  );
}

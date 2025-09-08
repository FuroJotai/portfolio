"use client";

import AboutSectionDesktop from "./AboutSectionDesktop";
import AboutSectionMobile from "./AboutSectionMobile";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1280);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {isDesktop ? <AboutSectionDesktop /> : <AboutSectionMobile />}
    </>
  );
}

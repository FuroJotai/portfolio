import AboutSection from "@/slices/about/ui/AboutSection"
import Hero from "@/slices/hero/ui/Hero"
import WorksSection from "@/slices/works/ui/WorksSection"
import ContactSection from "@/slices/contact/ui/ContactSection"
import BackToTopButton from "@/components/BackToTopButton"
import Pricing from "@/slices/prices/ui/Pricing"
import FooterSection from "@/slices/footer/ui/FooterSection"

export default function Home() {
  return (
    <main>
      <Hero />
      <WorksSection />
      <AboutSection />
      <Pricing />
      <ContactSection />
      <BackToTopButton />
      <FooterSection />
    </main>
  )
}

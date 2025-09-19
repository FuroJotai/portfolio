import AboutSection from "@/slices/about/ui/AboutSection"
import Hero from "@/slices/hero/ui/Hero"
import WorksSection from "@/slices/works/ui/WorksSection"
import ContactSection from "@/slices/contact/ui/ContactSection"
import BackToTopButton from "@/components/BackToTopButton"
import FooterSection from "@/slices/footer/ui/FooterSection"
import PricingSection from "@/slices/prices/ui/PricingSection"

export default function Home() {
  return (
    <main>
      {/* transp block for not adjusting each 
      container margins and paddings*/}

      <div className="h-[160px] md:hidden" />

      <Hero />
      <WorksSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <BackToTopButton />
      <FooterSection />
    </main>
  )
}

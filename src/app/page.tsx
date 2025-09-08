import AboutSection from "@/slices/about/ui/AboutSection"
import Hero from "@/slices/hero/ui/Hero"
import WorksSection from "@/slices/works/ui/WorksSection"
import PricingSection from "@/slices/prices/ui/PricingSection"
import ContactSection from "@/slices/contact/ui/ContactSection"

export default function Home() {
  return (
    <main>
      <Hero />
      <WorksSection />
      <AboutSection />
      <PricingSection />  
      <ContactSection />
      <div className="h-[700px]"></div>
    </main>
  )
}

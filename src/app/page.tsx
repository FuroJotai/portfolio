import AboutSection from "@/slices/about/ui/AboutSection"
import Hero from "@/slices/hero/ui/Hero"
import WorksSection from "@/slices/works/ui/WorksSection"

export default function Home() {
  return (
    <main>
      <Hero />
      <WorksSection />
      <AboutSection />
      <div className="h-[1400px]"></div>
    </main>
  )
}

import { HeroSection } from "@/components/hero-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ShowcaseSection />
      <FAQSection />
    </main>
  )
}
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { IssueSection } from "@/components/issue-section"
import { SignsSection } from "@/components/signs-section"
import { ResourcesSection } from "@/components/resources-section"
import { SectionNavigator } from "@/components/section-navigator"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <IssueSection />
        <SignsSection />
        <ResourcesSection />
      </main>
      <SectionNavigator />
      <Footer />
    </div>
  )
}

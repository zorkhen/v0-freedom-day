import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { IssueSection } from "@/components/issue-section"
import { ActionSection } from "@/components/action-section"
import { DonationSection } from "@/components/donation-section"
import { ResourcesSection } from "@/components/resources-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <IssueSection />
        <ActionSection />
        <DonationSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  )
}

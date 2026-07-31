import { CtaBand } from "./components/CtaBand"
import { HeroSection } from "./components/HeroSection"
import { KeyOfferings } from "./components/KeyOfferings"
import { LatestInsights } from "./components/LatestInsights"
import { ScaleStats } from "./components/ScaleStats"
import { SiteFooter } from "./components/SiteFooter"
import { SiteHeader } from "./components/SiteHeader"
import { TechnologySuite } from "./components/TechnologySuite"
import { WhyTeqo } from "./components/WhyTeqo"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <KeyOfferings />
        <TechnologySuite />
        <ScaleStats />
        <WhyTeqo />
        <LatestInsights />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  )
}

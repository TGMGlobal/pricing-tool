import { CtaBand } from "./components/CtaBand"
import { GlobalFootprint } from "./components/GlobalFootprint"
import { HeroSection } from "./components/HeroSection"
import { ImpactBand } from "./components/ImpactBand"
import { KeyOfferings } from "./components/KeyOfferings"
import { LatestInsights } from "./components/LatestInsights"
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
        <ImpactBand />
        <GlobalFootprint />
        <TechnologySuite />
        <WhyTeqo />
        <LatestInsights />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  )
}

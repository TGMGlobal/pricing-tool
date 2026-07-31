import { ClosingBand } from "./components/ClosingBand"
import { FaqAccordion } from "./components/FaqAccordion"
import { HeroSection } from "./components/HeroSection"
import { ImpactEstimator } from "./components/ImpactEstimator"
import { InsightsGrid } from "./components/InsightsGrid"
import { OfferingsGrid } from "./components/OfferingsGrid"
import { SiteFooter } from "./components/SiteFooter"
import { SiteHeader } from "./components/SiteHeader"
import { TechnologyGrid } from "./components/TechnologyGrid"
import { WatchBand } from "./components/WatchBand"
import { WhyBand } from "./components/WhyBand"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <OfferingsGrid />
        <TechnologyGrid />
        <ImpactEstimator />
        <WhyBand />
        <WatchBand />
        <InsightsGrid />
        <FaqAccordion />
        <ClosingBand />
      </main>
      <SiteFooter />
    </div>
  )
}

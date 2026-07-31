import { CapabilitiesSplit } from "./components/CapabilitiesSplit"
import { ClosingBand } from "./components/ClosingBand"
import { HeroSection } from "./components/HeroSection"
import { InsightsGrid } from "./components/InsightsGrid"
import { KeyOfferings } from "./components/KeyOfferings"
import { ScaleStrip } from "./components/ScaleStrip"
import { SiteFooter } from "./components/SiteFooter"
import { SiteHeader } from "./components/SiteHeader"
import { StatementBand } from "./components/StatementBand"
import { WhyBand } from "./components/WhyBand"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <StatementBand />
        <KeyOfferings />
        <CapabilitiesSplit />
        <ScaleStrip />
        <WhyBand />
        <InsightsGrid />
        <ClosingBand />
      </main>
      <SiteFooter />
    </div>
  )
}

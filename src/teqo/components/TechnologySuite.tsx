import { BarChart3, Radar, Settings2, Sun, Wind } from "lucide-react"

import { Mockup, MockupFrame } from "@/components/ui/mockup"

import { DashboardMockup } from "./DashboardMockup"

const PRODUCTS = [
  { icon: Sun, name: "SolarPulse™", description: "Solar PV monitoring and analytics.", tone: "brand" as const },
  { icon: Wind, name: "WindPulse™", description: "Wind farm analytics and asset management.", tone: "green" as const },
  { icon: Radar, name: "TeqoNoc™", description: "24×7 central monitoring and control.", tone: "brand" as const },
  { icon: Settings2, name: "TeqoOS™", description: "Renewable asset maintenance and operations management.", tone: "green" as const },
  { icon: BarChart3, name: "Teqolytics™", description: "Predictive analytics for identifying underperforming assets.", tone: "brand" as const },
]

export function TechnologySuite() {
  return (
    <section id="software" className="scroll-mt-20 bg-secondary/40 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green">Our Technology Suite</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Five products, one intelligent operating layer
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="flex flex-col gap-2">
            {PRODUCTS.map(({ icon: Icon, name, description, tone }) => (
              <div
                key={name}
                className="flex items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-background"
              >
                <div
                  className={
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl " +
                    (tone === "green" ? "bg-green/10 text-green" : "bg-brand/10 text-brand")
                  }
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24">
            <MockupFrame size="small">
              <Mockup type="responsive">
                <DashboardMockup />
              </Mockup>
            </MockupFrame>
            <p className="mt-3 text-center text-xs font-medium text-muted-foreground">
              TeqoNoc™ — live portfolio monitoring, in the field
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { BarChart3, Radar, Settings2, Sun, Wind } from "lucide-react"

const PRODUCTS = [
  { icon: Sun, index: "01", name: "SolarPulse™", description: "Solar PV monitoring and analytics." },
  { icon: Wind, index: "02", name: "WindPulse™", description: "Wind farm analytics and asset management." },
  { icon: Radar, index: "03", name: "TeqoNoc™", description: "24×7 central monitoring and control." },
  { icon: Settings2, index: "04", name: "TeqoOS™", description: "Renewable asset maintenance and operations management." },
  { icon: BarChart3, index: "05", name: "Teqolytics™", description: "Predictive analytics for identifying underperforming assets." },
]

export function TechnologySuite() {
  return (
    <section id="software" className="scroll-mt-20 bg-secondary/40 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our Technology Suite</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Five products, one intelligent operating layer
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PRODUCTS.map(({ icon: Icon, index, name, description }) => (
            <div
              key={name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold tabular-nums text-muted-foreground">{index}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

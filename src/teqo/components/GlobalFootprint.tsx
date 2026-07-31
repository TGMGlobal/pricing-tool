import { Activity, Globe2, Users } from "lucide-react"

import { WorldMap } from "./Illustrations"

const STATS = [
  { value: "6+ GWp", label: "Portfolio managed" },
  { value: "10+", label: "Countries served" },
]

const CAPABILITIES = [
  { icon: Globe2, label: "Global operations desk" },
  { icon: Activity, label: "24×7 remote monitoring" },
  { icon: Users, label: "500+ years, combined team experience" },
]

export function GlobalFootprint() {
  return (
    <section className="bg-background px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our Footprint</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            One operating layer, watching renewable assets worldwide
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            From India to the Middle East, Southeast Asia and beyond, Teqo's asset managers and
            engineers keep solar and wind portfolios performing at their peak, wherever they sit.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  <span className="bg-gradient-to-r from-brand to-green bg-clip-text text-transparent">
                    {s.value}
                  </span>
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:gap-8">
            {CAPABILITIES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-secondary/40 p-4 sm:p-6">
            <WorldMap className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

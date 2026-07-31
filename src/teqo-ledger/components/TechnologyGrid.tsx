import { BarChart3, Radar, Settings2, Sun, Wind } from "lucide-react"

import { PRODUCTS } from "@/teqo/content"

const ICONS = [Sun, Wind, Radar, Settings2, BarChart3]

export function TechnologyGrid() {
  return (
    <section id="software" className="scroll-mt-20 bg-secondary/50 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our Technology Suite</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Five products, purpose-built for renewable asset performance.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PRODUCTS.map(({ name, description }, i) => {
            const Icon = ICONS[i]
            const tone = i % 2 === 0 ? "brand" : "green"
            return (
              <div key={name} className="flex flex-col rounded-lg border border-border bg-background p-5">
                <div
                  className={
                    "flex h-11 w-11 items-center justify-center rounded-lg " +
                    (tone === "green" ? "bg-green/10 text-green" : "bg-brand/10 text-brand")
                  }
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-sm font-bold">{name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

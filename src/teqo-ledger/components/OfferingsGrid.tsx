import { ClipboardCheck, FileSearch, LineChart, Smartphone, Wrench } from "lucide-react"

import { OFFERINGS } from "@/teqo/content"

const ICONS = [Wrench, ClipboardCheck, LineChart, Smartphone, FileSearch]

export function OfferingsGrid() {
  return (
    <section id="offerings" className="scroll-mt-20 bg-background px-6 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Explore Our Key Offerings</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Full lifecycle support, from a partner accountable to your portfolio's performance.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map(({ title, description }, i) => {
            const Icon = ICONS[i]
            return (
              <div key={title} className="flex flex-col rounded-lg border border-border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <div className="mt-5 flex gap-4 border-t border-border pt-4 text-sm font-semibold">
                  <a href="#offerings" className="text-brand hover:underline">
                    Learn More
                  </a>
                  <a href="#contact" className="text-muted-foreground hover:text-brand hover:underline">
                    Talk to Us
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

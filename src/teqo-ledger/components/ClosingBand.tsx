import { ArrowRightIcon } from "lucide-react"

import { DottedWorldMap } from "./Illustrations"

export function ClosingBand() {
  return (
    <section id="contact" className="scroll-mt-20 relative overflow-hidden bg-[hsl(var(--deep))] px-6 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
            One partner.
            <br />
            Every renewable decision.
          </h2>
        </div>
        <div className="relative w-full max-w-md text-brand-foreground/70">
          <DottedWorldMap className="h-auto w-full" />
        </div>
        <a
          href="mailto:hello@teqo.com"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green/90"
        >
          Talk to Our Experts
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

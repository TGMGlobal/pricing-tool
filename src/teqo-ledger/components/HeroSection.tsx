import { ArrowRightIcon, ClipboardCheck, FileSearch, LineChart, Smartphone, Wrench } from "lucide-react"

import { HERO_COPY, OFFERINGS } from "@/teqo/content"

const ICONS = [Wrench, ClipboardCheck, LineChart, Smartphone, FileSearch]

export function HeroSection() {
  return (
    <section className="relative bg-[linear-gradient(120deg,hsl(var(--brand))_0%,hsl(var(--green))_100%)] pb-28 pt-24 text-white sm:pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="animate-appear text-xs font-semibold uppercase tracking-wider text-white/80">
            {HERO_COPY.eyebrow}
          </p>
          <h1 className="animate-appear mt-4 text-3xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            {HERO_COPY.headline}
          </h1>
          <p className="animate-appear mt-4 max-w-lg text-base text-white/85 opacity-0 [animation-delay:120ms] sm:text-lg">
            {HERO_COPY.subhead}
          </p>
          <div className="animate-appear mt-7 flex flex-col gap-3 opacity-0 [animation-delay:240ms] sm:flex-row">
            <a
              href="#offerings"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[hsl(var(--deep))] transition-colors hover:bg-white/90"
            >
              {HERO_COPY.cta}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mb-16 mt-10 w-full max-w-6xl px-6">
        <div className="animate-appear grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border opacity-0 shadow-xl [animation-delay:380ms] sm:grid-cols-5">
          {OFFERINGS.map(({ title }, i) => {
            const Icon = ICONS[i]
            return (
              <a
                key={title}
                href="#offerings"
                className="flex flex-col items-center gap-2 bg-background p-4 text-center transition-colors hover:bg-secondary"
              >
                <Icon className="h-6 w-6 text-brand" />
                <span className="text-[11px] font-semibold leading-tight text-foreground">{title}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

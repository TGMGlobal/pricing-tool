import { ArrowRightIcon } from "lucide-react"

import { HERO_COPY } from "@/teqo/content"

import { TopographicPattern } from "./Illustrations"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--deep))] pb-24 pt-32 text-white sm:pt-40">
      <TopographicPattern className="absolute inset-0 h-full w-full text-lime" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(var(--deep))] via-transparent to-[hsl(var(--deep))]/60" />

      <div className="relative mx-auto max-w-7xl px-6">
        <p className="animate-appear text-xs font-bold uppercase tracking-[0.3em] text-lime">
          {HERO_COPY.eyebrow}
        </p>
        <h1 className="animate-appear mt-6 max-w-3xl text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-balance sm:text-6xl">
          {HERO_COPY.headline}
        </h1>
        <p className="animate-appear mt-6 max-w-xl text-lg text-white/70 opacity-0 [animation-delay:120ms] sm:text-xl">
          {HERO_COPY.subhead}
        </p>
        <div className="animate-appear mt-9 flex flex-col gap-3 opacity-0 [animation-delay:240ms] sm:flex-row">
          <a
            href="#offerings"
            className="inline-flex items-center justify-center gap-2 bg-lime px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-[hsl(var(--deep))] transition-transform hover:-translate-y-0.5"
          >
            {HERO_COPY.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  )
}

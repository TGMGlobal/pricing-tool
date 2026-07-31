import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { HorizonSilhouette } from "./Illustrations"

const CREDENTIALS = [
  { value: "XX+ GW", label: "Assets managed" },
  { value: "24×7", label: "Central monitoring" },
  { value: "XX+", label: "Countries" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(175deg,hsl(var(--deep))_0%,hsl(var(--brand))_58%,hsl(158_55%_32%)_100%)] pb-28 pt-28 text-white sm:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 15%, hsl(var(--green-foreground) / 0.35), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-7 px-4 text-center sm:gap-8">
        <Badge
          variant="outline"
          className="animate-appear gap-2 border-white/25 bg-white/10 text-white backdrop-blur-sm"
        >
          <span>Part of the Mahindra Group</span>
          <a href="#company" className="flex items-center gap-1 font-semibold text-white">
            Learn more
            <ArrowRightIcon className="h-3 w-3" />
          </a>
        </Badge>

        <h1 className="relative z-10 max-w-4xl animate-appear text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl md:text-[4.25rem]">
          New age. Tech enabled.{" "}
          <span className="bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent">
            Renewable energy asset management.
          </span>
        </h1>

        <p className="relative z-10 max-w-2xl animate-appear text-lg font-medium text-white/85 opacity-0 [animation-delay:120ms] sm:text-xl">
          Technology. Intelligence. Performance. Maximizing returns from your renewable assets.
        </p>

        <div className="relative z-10 flex animate-appear flex-col gap-3 opacity-0 [animation-delay:280ms] sm:flex-row">
          <Button
            size="lg"
            className="bg-white text-[hsl(var(--deep))] hover:bg-white/90"
            asChild
          >
            <a href="#offerings" className="flex items-center gap-2">
              Explore Our Solutions
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white" asChild>
            <a href="#contact" className="flex items-center gap-2">
              Talk to Us
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <HorizonSilhouette className="absolute inset-x-0 bottom-0 h-28 w-full text-[hsl(var(--deep))]/90 sm:h-40" />

      <div className="relative z-10 mx-auto -mb-16 mt-2 w-full max-w-4xl px-4 sm:-mb-20">
        <div className="animate-appear grid grid-cols-1 gap-4 rounded-2xl border border-border bg-background/95 p-6 opacity-0 shadow-xl backdrop-blur [animation-delay:460ms] sm:grid-cols-3 sm:p-8">
          {CREDENTIALS.map((c) => (
            <div key={c.label} className="text-center sm:text-left">
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{c.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

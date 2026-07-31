import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Glow } from "@/components/ui/glow"
import { Mockup, MockupFrame } from "@/components/ui/mockup"
import { cn } from "@/lib/utils"

import { DashboardMockup } from "./DashboardMockup"

export function HeroSection() {
  return (
    <section className={cn("relative overflow-hidden bg-background px-4 pb-0 pt-28 text-foreground sm:pt-36")}>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:gap-16">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
          <Badge variant="outline" className="animate-appear gap-2 border-border text-muted-foreground">
            <span>Part of the Mahindra Group</span>
            <a href="#company" className="flex items-center gap-1 font-semibold text-foreground">
              Learn more
              <ArrowRightIcon className="h-3 w-3" />
            </a>
          </Badge>

          <h1 className="relative z-10 max-w-4xl animate-appear text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl md:text-[4.25rem]">
            New age. Tech enabled.{" "}
            <span className="bg-gradient-to-r from-foreground via-foreground to-brand bg-clip-text text-transparent">
              Renewable energy asset management.
            </span>
          </h1>

          <p className="relative z-10 max-w-2xl animate-appear text-lg font-medium text-muted-foreground opacity-0 [animation-delay:120ms] sm:text-xl">
            Technology. Intelligence. Performance. Teqo is the Mahindra Group's new-age asset
            management offering, built to maximize returns from every solar and wind portfolio it runs.
          </p>

          <div className="relative z-10 flex animate-appear flex-col gap-3 opacity-0 [animation-delay:280ms] sm:flex-row">
            <Button size="lg" asChild>
              <a href="#offerings" className="flex items-center gap-2">
                Explore Our Solutions
              </a>
            </Button>
            <Button size="lg" variant="glow" asChild>
              <a href="#contact" className="flex items-center gap-2">
                Talk to Us
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="relative w-full max-w-5xl pt-8 sm:pt-12">
            <MockupFrame className="animate-appear opacity-0 [animation-delay:520ms]" size="small">
              <Mockup type="responsive">
                <DashboardMockup />
              </Mockup>
            </MockupFrame>
            <Glow variant="top" className="animate-appear-zoom opacity-0 [animation-delay:760ms]" />
          </div>
        </div>
      </div>
    </section>
  )
}

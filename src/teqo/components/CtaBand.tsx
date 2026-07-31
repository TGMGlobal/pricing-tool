import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Glow } from "@/components/ui/glow"

export function CtaBand() {
  return (
    <section id="contact" className="scroll-mt-20 bg-background px-4 py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-secondary/40 px-6 py-14 text-center sm:px-12 sm:py-20">
        <Glow variant="center" className="opacity-70" />
        <h2 className="relative z-10 mx-auto max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          One partner. Every renewable decision.
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-md text-muted-foreground">
          Tell us about your portfolio and we'll show you where Teqo can move the needle.
        </p>
        <div className="relative z-10 mt-8 flex justify-center">
          <Button size="lg" asChild>
            <a href="mailto:hello@teqo.com" className="flex items-center gap-2">
              Talk to Our Experts
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

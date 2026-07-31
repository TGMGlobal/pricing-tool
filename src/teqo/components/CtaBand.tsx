import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

import { HorizonSilhouette } from "./Illustrations"

export function CtaBand() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden bg-[linear-gradient(160deg,hsl(158_50%_18%)_0%,hsl(var(--deep))_65%)] px-4 py-20 text-center text-white sm:py-28"
    >
      <HorizonSilhouette className="absolute inset-x-0 bottom-0 h-24 w-full text-black/20 sm:h-32" />
      <div className="relative mx-auto max-w-xl">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          One partner. Every renewable decision.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/75">
          Tell us about your portfolio and we'll show you where Teqo can move the needle.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" className="bg-white text-[hsl(var(--deep))] hover:bg-white/90" asChild>
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

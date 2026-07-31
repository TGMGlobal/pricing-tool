import { ArrowRightIcon } from "lucide-react"

export function ClosingBand() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[hsl(var(--deep))] px-6 py-20 text-white sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <h2 className="max-w-xl text-3xl font-extrabold uppercase leading-tight tracking-tight text-balance sm:text-5xl">
          One partner. <span className="text-lime">Every renewable decision.</span>
        </h2>
        <a
          href="mailto:hello@teqo.com"
          className="inline-flex shrink-0 items-center gap-2 bg-lime px-7 py-4 text-sm font-bold uppercase tracking-widest text-[hsl(var(--deep))] transition-transform hover:-translate-y-0.5"
        >
          Talk to Our Experts
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

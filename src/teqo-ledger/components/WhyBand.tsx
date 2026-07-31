import { Building2, Target, Zap } from "lucide-react"

import { SCALE_STATS } from "@/teqo/content"

const REASONS = [
  { icon: Building2, title: "Mahindra Group Legacy", blurb: "Backed by a group with decades of engineering trust." },
  { icon: Zap, title: "Technology Driven", blurb: "TeqoNoc, Teqolytics and more, built for renewable assets." },
  { icon: Target, title: "Performance Focused", blurb: "Every decision measured against portfolio returns." },
]

export function WhyBand() {
  return (
    <section id="company" className="scroll-mt-20 bg-[hsl(var(--deep))] px-6 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">Why Mahindra Teqo</h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, blurb }) => (
            <div key={title} className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
              <Icon className="h-6 w-6 text-green" />
              <h3 className="mt-3 text-sm font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-white/60">{blurb}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-3 lg:grid-cols-6">
          {SCALE_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold tabular-nums tracking-tight sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/50">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[hsl(var(--deep))] transition-colors hover:bg-white/90"
          >
            Discover Mahindra Teqo
          </a>
        </div>
      </div>
    </section>
  )
}

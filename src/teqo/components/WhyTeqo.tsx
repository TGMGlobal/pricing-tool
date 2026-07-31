import { Building2, RefreshCw, ShieldCheck, Target, Zap } from "lucide-react"

const PILLARS = [
  { icon: Building2, title: "Mahindra Group Legacy" },
  { icon: Zap, title: "Technology Driven" },
  { icon: Target, title: "Performance Focused" },
  { icon: RefreshCw, title: "End-to-End Asset Management" },
  { icon: ShieldCheck, title: "Trusted Partner Globally" },
]

export function WhyTeqo() {
  return (
    <section
      id="company"
      className="scroll-mt-20 bg-[linear-gradient(135deg,hsl(var(--deep))_0%,hsl(208_58%_16%)_100%)] px-4 py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Why Mahindra Teqo</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            An asset manager built like an engineer thinks
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map(({ icon: Icon, title }, i) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div
                className={
                  "flex h-11 w-11 items-center justify-center rounded-xl " +
                  (i % 2 === 0 ? "bg-cyan-400/15 text-cyan-300" : "bg-emerald-400/15 text-emerald-300")
                }
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

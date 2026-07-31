import { SolarArrayPattern } from "./Illustrations"

export function ImpactBand() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--deep))] py-20 text-white sm:py-28">
      <SolarArrayPattern className="absolute inset-x-0 bottom-0 h-40 w-full text-brand opacity-70 sm:h-56" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--deep)) 0%, hsl(var(--deep) / 0.4) 55%, hsl(var(--deep)) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Real-time, at scale</p>
        <p className="mt-5 bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
          XX,XXX+ MWh
        </p>
        <p className="mt-3 text-lg font-medium text-white/80 sm:text-xl">
          of clean generation monitored and optimized across the Teqo portfolio, every single day
        </p>
      </div>
    </section>
  )
}

const STATS = [
  { value: "XX+", label: "GW Assets Managed" },
  { value: "XX+", label: "MW Assets Monitored" },
  { value: "XX+", label: "Locations" },
  { value: "XX+", label: "Countries" },
  { value: "XX+", label: "Professionals" },
  { value: "XX+", label: "Years of Experience" },
]

export function ScaleStats() {
  return (
    <section className="bg-background px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our Scale</p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold tabular-nums tracking-tight sm:text-4xl">{stat.value}</p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-primary-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

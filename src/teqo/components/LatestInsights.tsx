const INSIGHTS = [
  { label: "Latest Blogs", from: "from-amber-400/70", to: "to-orange-600/70" },
  { label: "Case Studies", from: "from-teal-400/70", to: "to-emerald-600/70" },
  { label: "News & Press Releases", from: "from-sky-400/70", to: "to-indigo-600/70" },
  { label: "Whitepapers & Reports", from: "from-rose-400/70", to: "to-amber-600/70" },
]

export function LatestInsights() {
  return (
    <section id="insights" className="scroll-mt-20 bg-background px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Latest Insights</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            From the field and the grid
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.map((item) => (
            <a
              key={item.label}
              href="#"
              className="group overflow-hidden rounded-2xl border border-border bg-secondary/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`h-32 bg-gradient-to-br ${item.from} ${item.to}`} />
              <div className="p-5">
                <h3 className="text-sm font-semibold">{item.label}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

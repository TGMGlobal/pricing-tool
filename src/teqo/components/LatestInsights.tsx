const FEATURED = {
  category: "News & Media",
  title: "Mahindra Teqo Crosses 6 GWp of Renewable Assets Under Management",
  blurb: "Reinforcing leadership in solar and wind O&M and asset management across global markets.",
}

const INSIGHTS = [
  { label: "Latest Blogs", category: "Blogs", tone: "brand" as const },
  { label: "Case Studies", category: "Case Studies", tone: "green" as const },
  { label: "Whitepapers & Reports", category: "Resources", tone: "brand" as const },
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

        <a
          href="#"
          className="group mt-12 flex flex-col overflow-hidden rounded-2xl border border-border bg-secondary/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg lg:flex-row"
        >
          <div className="relative h-48 shrink-0 overflow-hidden bg-[linear-gradient(135deg,hsl(var(--brand))_0%,hsl(var(--green))_100%)] lg:h-auto lg:w-2/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white,transparent_45%)] opacity-20" />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">{FEATURED.category}</span>
            <h3 className="mt-2 text-xl font-semibold leading-snug">{FEATURED.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{FEATURED.blurb}</p>
          </div>
        </a>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {INSIGHTS.map((item) => (
            <a
              key={item.label}
              href="#"
              className="group overflow-hidden rounded-2xl border border-border bg-secondary/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={
                  "h-32 " +
                  (item.tone === "green"
                    ? "bg-[linear-gradient(135deg,hsl(var(--green))_0%,hsl(var(--deep))_100%)]"
                    : "bg-[linear-gradient(135deg,hsl(var(--brand))_0%,hsl(var(--deep))_100%)]")
                }
              />
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.category}
                </span>
                <h3 className="mt-1 text-sm font-semibold">{item.label}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

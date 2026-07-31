import { INSIGHTS } from "@/teqo/content"

export function InsightsGrid() {
  return (
    <section id="insights" className="scroll-mt-20 bg-secondary/50 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Explore Insights Through Our Resources
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.map((item) => (
            <a
              key={item.label}
              href="#"
              className="group overflow-hidden rounded-lg border border-border bg-background transition-shadow hover:shadow-md"
            >
              <div className="h-28 bg-[linear-gradient(135deg,hsl(var(--brand))_0%,hsl(var(--green))_100%)]" />
              <div className="p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.category}
                </span>
                <h3 className="mt-1 text-sm font-bold">{item.label}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="rounded-md border border-border px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  )
}

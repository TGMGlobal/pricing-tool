import { INSIGHTS } from "@/teqo/content"

export function InsightsGrid() {
  const [featured, ...rest] = INSIGHTS

  return (
    <section id="insights" className="scroll-mt-20 bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Latest Insights</h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Read what we're thinking. Perspectives from the field and the grid.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="#"
            className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden bg-[linear-gradient(140deg,hsl(var(--brand))_0%,hsl(var(--deep))_100%)] p-6 sm:col-span-2 sm:row-span-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-lime">{featured.category}</span>
            <h3 className="mt-2 max-w-md text-2xl font-bold text-white transition-transform duration-200 group-hover:-translate-y-1">
              {featured.label}
            </h3>
          </a>
          {rest.map((item, i) => (
            <a
              key={item.label}
              href="#"
              className={
                "group relative flex min-h-[10.5rem] flex-col justify-end overflow-hidden p-5 transition-transform duration-200 hover:-translate-y-1 " +
                (i % 2 === 0
                  ? "bg-[linear-gradient(140deg,hsl(var(--lime))_0%,hsl(var(--deep))_100%)]"
                  : "bg-secondary")
              }
            >
              <span
                className={
                  "text-[11px] font-bold uppercase tracking-widest " +
                  (i % 2 === 0 ? "text-white/80" : "text-brand")
                }
              >
                {item.category}
              </span>
              <h3 className={"mt-1 text-base font-bold " + (i % 2 === 0 ? "text-white" : "text-foreground")}>
                {item.label}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

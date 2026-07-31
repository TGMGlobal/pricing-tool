import { SCALE_STATS } from "@/teqo/content"

export function ScaleStrip() {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Our Scale</h2>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-10 sm:grid-cols-3 lg:grid-cols-6">
          {SCALE_STATS.map((stat, i) => (
            <div key={stat.label}>
              <p
                className={
                  "text-4xl font-extrabold tracking-tight sm:text-5xl " +
                  (i % 2 === 0 ? "text-brand" : "text-lime")
                }
              >
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

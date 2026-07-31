export function StatementBand() {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-8 border-b border-border pb-14 lg:grid-cols-[1.4fr_1fr]">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">
          Scale at Speed<sup className="text-base font-bold text-brand">™</sup>{" "}
          <span className="text-brand">with Mahindra Teqo</span>
        </h2>
        <div>
          <p className="text-muted-foreground">
            Teqo is a new-age, technology-enabled Renewable Energy Asset Management offering from the
            Mahindra Group — a legacy of engineering trust, applied to solar and wind.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#company"
              className="inline-flex items-center gap-2 border-2 border-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
            >
              Know More
            </a>
            <a
              href="#offerings"
              className="inline-flex items-center gap-2 border-2 border-transparent bg-secondary px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-accent"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

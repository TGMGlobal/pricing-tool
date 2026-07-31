import { Play } from "lucide-react"

export function WatchBand() {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">See Teqo in Action</h2>
        <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
          A quick look inside TeqoNoc — 24×7 central monitoring and control for renewable portfolios.
        </p>

        <a
          href="#"
          className="group relative mt-8 flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,hsl(var(--brand))_0%,hsl(var(--deep))_100%)]"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand transition-transform group-hover:scale-105">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </span>
          <span className="absolute bottom-4 left-4 text-sm font-semibold text-white/90">
            Inside TeqoNoc — Central Monitoring
          </span>
        </a>
      </div>
    </section>
  )
}

import { PILLARS } from "@/teqo/content"

export function WhyBand() {
  return (
    <section
      id="company"
      className="scroll-mt-20 relative overflow-hidden bg-[linear-gradient(115deg,hsl(var(--deep))_0%,hsl(var(--deep))_55%,hsl(217_70%_16%)_100%)] px-6 py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-lime">Why Mahindra Teqo</p>
        <h2 className="mt-5 max-w-2xl text-3xl font-extrabold uppercase leading-tight tracking-tight text-balance sm:text-5xl">
          Performance. <span className="text-lime">Not promises.</span>
        </h2>
        <p className="mt-5 max-w-lg text-white/70">
          Future-forward asset management, backed by Mahindra Group engineering discipline and a
          relentless focus on measurable returns.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {PILLARS.map((p) => (
            <span
              key={p.title}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/85"
            >
              {p.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

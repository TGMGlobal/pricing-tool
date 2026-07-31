import { PRODUCTS } from "@/teqo/content"

import { AbstractWave } from "./Illustrations"

export function CapabilitiesSplit() {
  return (
    <section id="software" className="scroll-mt-20 bg-[hsl(var(--deep))] px-6 py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Our Technology Suite
          </h2>
          <p className="mt-3 max-w-md text-white/60">
            Five products that actually move the needle — better monitoring, better decisions, better
            returns, at the pace your portfolio demands.
          </p>

          <ul className="mt-10 flex flex-col gap-1">
            {PRODUCTS.map((p, i) => (
              <li
                key={p.name}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 py-4"
              >
                <span className="flex items-baseline gap-4">
                  <span className="text-xs font-bold text-lime">0{i + 1}</span>
                  <span className="text-lg font-bold">{p.name}</span>
                </span>
                <span className="hidden max-w-[16rem] text-right text-sm text-white/50 sm:block">
                  {p.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6">
          <AbstractWave className="h-auto w-full max-w-sm" />
        </div>
      </div>
    </section>
  )
}

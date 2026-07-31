import { useMemo, useState } from "react"

import { RadialGauge } from "./Illustrations"

const CAPACITY_FACTOR_MWH_PER_MWP = 1600
const CO2_TONNES_PER_MWH = 0.7

export function ImpactEstimator() {
  const [capacity, setCapacity] = useState(50)

  const { generation, co2 } = useMemo(() => {
    const generation = capacity * CAPACITY_FACTOR_MWH_PER_MWP
    const co2 = generation * CO2_TONNES_PER_MWH
    return { generation, co2 }
  }, [capacity])

  const gaugePercent = Math.min((capacity / 500) * 100, 100)

  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Portfolio Impact Estimator</h2>
          <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
            Get a quick, illustrative sense of what a Teqo-managed portfolio could deliver.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 rounded-2xl border border-border p-6 sm:p-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div>
            <label htmlFor="capacity" className="text-sm font-semibold text-foreground">
              Plant Capacity (MWp)
            </label>
            <input
              id="capacity"
              type="range"
              min={1}
              max={500}
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="mt-4 w-full accent-brand"
            />
            <div className="mt-2 flex items-baseline justify-between text-xs text-muted-foreground">
              <span>1 MWp</span>
              <span className="text-lg font-bold text-foreground">{capacity} MWp</span>
              <span>500 MWp</span>
            </div>
          </div>

          <div className="relative mx-auto h-32 w-32 shrink-0">
            <RadialGauge percent={gaugePercent} className="h-full w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold">{capacity}</span>
              <span className="text-[10px] font-semibold uppercase text-muted-foreground">MWp</span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Est. Annual Generation
              </p>
              <p className="mt-1 text-2xl font-bold tabular-nums tracking-tight text-brand">
                {generation.toLocaleString()} <span className="text-sm font-medium text-muted-foreground">MWh</span>
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Est. CO₂ Offset
              </p>
              <p className="mt-1 text-2xl font-bold tabular-nums tracking-tight text-green">
                {Math.round(co2).toLocaleString()}{" "}
                <span className="text-sm font-medium text-muted-foreground">tonnes / yr</span>
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Illustrative estimate for demonstration purposes only, based on generalized assumptions — not a
          quote or performance guarantee.
        </p>
      </div>
    </section>
  )
}

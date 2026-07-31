import { ArrowUpRight, Circle } from "lucide-react"

const assets = [
  { name: "Bhadla Solar Park, Rajasthan", output: 92 },
  { name: "Kutch Wind Cluster, Gujarat", output: 87 },
  { name: "Pavagada Solar Park, Karnataka", output: 95 },
]

export function DashboardMockup() {
  return (
    <div className="w-full bg-background p-4 text-foreground sm:p-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            TeqoNoc™ — Live Portfolio Overview
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Updated 2 minutes ago</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <Circle className="h-2 w-2 fill-current" />
          All systems operational
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
        <div className="rounded-xl border border-border bg-secondary/50 p-4">
          <p className="text-xs font-medium text-muted-foreground">Generation Today</p>
          <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">4,812<span className="text-base font-medium text-muted-foreground"> MWh</span></p>
        </div>
        <div className="rounded-xl border border-border bg-secondary/50 p-4">
          <p className="text-xs font-medium text-muted-foreground">Plant Availability</p>
          <p className="mt-2 flex items-center gap-1 text-2xl font-bold tracking-tight sm:text-3xl">
            98.6<span className="text-base font-medium text-muted-foreground">%</span>
            <ArrowUpRight className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
          </p>
        </div>
        <div className="rounded-xl border border-border bg-secondary/50 p-4">
          <p className="text-xs font-medium text-muted-foreground">Active Alerts</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-brand sm:text-3xl">3</p>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-secondary/50 p-4">
        <div className="mb-2 flex items-baseline justify-between">
          <p className="text-xs font-medium text-muted-foreground">7-day generation trend</p>
          <p className="text-xs font-medium text-muted-foreground">GW</p>
        </div>
        <svg viewBox="0 0 320 72" className="h-16 w-full overflow-visible" preserveAspectRatio="none">
          <polyline
            points="0,52 40,44 80,48 120,30 160,34 200,18 240,24 280,10 320,14"
            fill="none"
            stroke="hsl(var(--brand))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="0,52 40,44 80,48 120,30 160,34 200,18 240,24 280,10 320,14 320,72 0,72"
            fill="hsl(var(--brand)/0.12)"
            stroke="none"
          />
        </svg>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-secondary/50 p-4">
        <p className="mb-3 text-xs font-medium text-muted-foreground">Top performing assets</p>
        <div className="flex flex-col gap-3">
          {assets.map((asset) => (
            <div key={asset.name} className="flex items-center gap-3">
              <span className="w-40 truncate text-xs font-medium sm:w-56 sm:text-sm">{asset.name}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${asset.output}%` }}
                />
              </div>
              <span className="w-9 text-right text-xs font-semibold tabular-nums text-muted-foreground">
                {asset.output}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

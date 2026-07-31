// Line-art illustrations built as inline SVG so the page has no external
// image dependencies. Standing in for the photography the reference sites
// use, styled to the brand's blue/green palette.

export function HorizonSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 220V168C90 150 180 176 270 164C340 155 380 132 420 138C450 142 470 165 510 168C560 172 600 150 650 154C700 158 730 178 780 176C830 174 860 150 910 152C960 154 990 178 1050 176C1110 174 1140 150 1200 156C1250 161 1280 178 1340 172C1380 168 1410 160 1440 164V220H0Z"
        fill="currentColor"
        opacity="0.92"
      />
      {/* wind turbines */}
      {[
        { x: 220, h: 128, base: 168 },
        { x: 470, h: 168, base: 148 },
        { x: 700, h: 110, base: 160 },
        { x: 960, h: 150, base: 154 },
        { x: 1250, h: 122, base: 162 },
      ].map((t, i) => (
        <g key={i} transform={`translate(${t.x} ${t.base - t.h})`}>
          <line x1="0" y1="0" x2="0" y2={t.h} stroke="currentColor" strokeWidth="3" />
          <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <line x1="0" y1="2" x2="30" y2="-20" />
            <line x1="0" y1="2" x2="-27" y2="-13" />
            <line x1="0" y1="2" x2="4" y2="31" />
          </g>
        </g>
      ))}
    </svg>
  )
}

export function SolarArrayPattern({ className }: { className?: string }) {
  const rows = 3
  const cols = 8
  return (
    <svg viewBox="0 0 400 90" className={className} aria-hidden="true">
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((__, c) => (
          <rect
            key={`${r}-${c}`}
            x={c * 50 + 4}
            y={r * 30 + 4}
            width="42"
            height="22"
            rx="2"
            fill="currentColor"
            opacity={0.14 + r * 0.05}
          />
        )),
      )}
    </svg>
  )
}

type Marker = { x: number; y: number; label: string }

const MARKERS: Marker[] = [
  { x: 268, y: 132, label: "India" },
  { x: 210, y: 118, label: "Middle East" },
  { x: 470, y: 150, label: "SE Asia" },
  { x: 300, y: 96, label: "Europe" },
  { x: 130, y: 150, label: "Americas" },
  { x: 330, y: 190, label: "Africa" },
]

export function WorldMap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 260" className={className} role="img" aria-label="Map of Teqo's global footprint">
      <g fill="hsl(var(--green))" opacity="0.5">
        <path d="M60 90c14-10 34-8 46-2 10 5 8 16 22 18 18 2 20-14 36-12 12 2 10 14 24 16 20 2 26-16 44-12 14 3 10 16 26 18 24 3 30-18 50-14 12 2 10 14 22 15v20c-16 4-18 16-34 16-14 0-16-10-30-10-12 0-14 9-26 10-16 1-18-12-34-12-12 0-14 9-26 10-14 1-18-10-32-10-10 0-12 8-22 8-16 0-22-14-38-14-10 0-12 8-20 8-14 0-16-12-28-14z" />
        <path d="M330 60c20-6 44-4 60 6 12 8 6 18 20 24 22 10 40-6 58 4 10 6 4 16 16 22 14 7 26-4 38 4 8 5 4 14 12 18v18c-14 2-18 14-32 12-10-2-8-12-20-14-16-3-22 10-38 6-10-2-8-12-18-14-14-3-20 10-34 6-10-3-8-13-18-15-14-3-20 9-33 5-9-3-8-12-16-15z" />
        <path d="M120 190c16-6 34-4 46 4 8 6 4 14 14 18 14 6 26-6 38 2 8 5 4 13 12 17v22c-12 3-16 13-28 12-9-1-8-10-17-12-13-2-18 8-30 5-8-2-7-11-15-13-12-3-17 8-28 4-8-3-7-11-14-13z" />
      </g>
      <g stroke="hsl(var(--border))" strokeWidth="0.6" opacity="0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 30} x2="560" y2={i * 30} />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="260" />
        ))}
      </g>
      {MARKERS.map((m) => (
        <g key={m.label} transform={`translate(${m.x} ${m.y})`}>
          <circle r="10" fill="hsl(var(--brand))" opacity="0.18">
            <animate attributeName="r" values="6;14;6" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="hsl(var(--brand))" />
        </g>
      ))}
    </svg>
  )
}

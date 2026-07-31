export function RadialGauge({ percent, className }: { percent: number; className?: string }) {
  const r = 70
  const c = 2 * Math.PI * r
  const offset = c - (Math.min(Math.max(percent, 0), 100) / 100) * c
  return (
    <svg viewBox="0 0 180 180" className={className} aria-hidden="true">
      <circle cx="90" cy="90" r={r} fill="none" stroke="hsl(var(--border))" strokeWidth="14" />
      <circle
        cx="90"
        cy="90"
        r={r}
        fill="none"
        stroke="url(#gaugeGrad)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform="rotate(-90 90 90)"
      />
      <defs>
        <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--brand))" />
          <stop offset="100%" stopColor="hsl(var(--green))" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const DOT_MARKERS = [
  [80, 60],
  [95, 68],
  [140, 90],
  [210, 55],
  [260, 100],
  [70, 120],
  [180, 130],
]

export function DottedWorldMap({ className }: { className?: string }) {
  const cols = 60
  const rows = 24
  const land = (x: number, y: number) => {
    const bands = [
      [4, 14, 3, 8],
      [16, 24, 5, 11],
      [26, 40, 2, 16],
      [42, 52, 4, 10],
      [30, 38, 14, 20],
    ]
    return bands.some(([x0, x1, y0, y1]) => x >= x0 && x <= x1 && y >= y0 && y <= y1 && (x + y) % 2 === 0)
  }
  const dots: { x: number; y: number }[] = []
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (land(x, y)) dots.push({ x, y })
    }
  }
  return (
    <svg viewBox="0 0 300 120" className={className} aria-hidden="true">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x * 5} cy={d.y * 5} r="1.4" fill="currentColor" opacity="0.35" />
      ))}
      {DOT_MARKERS.map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r="7" fill="hsl(var(--green))" opacity="0.2">
            <animate attributeName="r" values="4;9;4" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="hsl(var(--green))" />
        </g>
      ))}
    </svg>
  )
}

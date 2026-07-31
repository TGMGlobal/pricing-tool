export function TopographicPattern({ className }: { className?: string }) {
  const lines = 10
  return (
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => {
        const y = 20 + i * 38
        const amp = 14 + (i % 3) * 6
        const d = `M0 ${y} C 100 ${y - amp} 200 ${y + amp} 300 ${y} S 500 ${y - amp} 600 ${y} S 750 ${y + amp} 800 ${y}`
        return <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth="1.5" opacity={0.16 + (i % 4) * 0.05} />
      })}
    </svg>
  )
}

export function AbstractWave({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="waveA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--brand))" />
          <stop offset="100%" stopColor="hsl(var(--lime))" />
        </linearGradient>
        <linearGradient id="waveB" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--lime))" />
          <stop offset="100%" stopColor="hsl(var(--brand))" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="400" rx="24" fill="hsl(var(--deep))" />
      <path
        d="M20 260C80 200 120 320 180 260C240 200 260 120 340 140"
        fill="none"
        stroke="url(#waveA)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M40 300C110 260 150 340 220 300C290 260 300 180 370 190"
        fill="none"
        stroke="url(#waveB)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M10 180C90 140 140 220 210 170C280 120 300 80 380 90"
        fill="none"
        stroke="url(#waveA)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
      {[
        [70, 250],
        [180, 260],
        [280, 150],
        [340, 300],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 0 ? 5 : 3} fill={i % 2 === 0 ? "hsl(var(--lime))" : "hsl(var(--brand-foreground))"} />
      ))}
    </svg>
  )
}

const COLUMNS = [
  {
    heading: "Company",
    links: ["About"],
  },
  {
    heading: "Services",
    links: [
      "Solar PV O&M",
      "Asset Management",
      "Monitoring & Analytics",
      "Mobile Diagnosis",
      "Technical Due Diligence",
    ],
  },
  {
    heading: "Software",
    links: ["SolarPulse™", "WindPulse™", "TeqoNoc™", "TeqoOS™", "Teqolytics™"],
  },
  {
    heading: "Resources",
    links: ["Blogs", "Case Studies", "Whitepapers", "News & Press"],
  },
  {
    heading: "Careers",
    links: ["Open Positions", "Life at Teqo"],
  },
]

export function SiteFooter() {
  return (
    <footer id="careers" className="scroll-mt-20 border-t border-border bg-secondary/30 px-4 pb-8 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-tight">TEQO</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                by Mahindra
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              New-age, technology-enabled Renewable Energy Asset Management from the Mahindra Group.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.heading}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-foreground/80 transition-colors hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Mahindra Teqo. All rights reserved.</span>
          <a href="#contact" className="font-medium text-foreground/80 hover:text-brand">
            Get in touch →
          </a>
        </div>
      </div>
    </footer>
  )
}

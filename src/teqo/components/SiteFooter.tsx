import { HorizonSilhouette } from "./Illustrations"

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
    <>
      <div className="bg-[linear-gradient(90deg,hsl(var(--brand))_0%,hsl(var(--green))_100%)] px-4 py-4 text-center text-sm font-semibold text-white">
        Powering a Smarter Renewable Future, Worldwide
      </div>

      <footer id="careers" className="scroll-mt-20 relative overflow-hidden bg-[hsl(var(--deep))] px-4 pb-8 pt-16 text-white">
        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            <div className="col-span-2">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold tracking-tight text-white">TEQO</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-mahindra-red">
                  by Mahindra
                </span>
              </div>
              <p className="mt-3 max-w-xs text-sm text-white/60">
                New-age, technology-enabled Renewable Energy Asset Management from the Mahindra Group.
              </p>
            </div>
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {col.heading}
                </h4>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/80 transition-colors hover:text-emerald-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Mahindra Teqo. All rights reserved.</span>
            <a href="#contact" className="font-medium text-white/80 hover:text-emerald-300">
              Get in touch →
            </a>
          </div>
        </div>

        <HorizonSilhouette className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-white opacity-[0.04]" />
      </footer>
    </>
  )
}

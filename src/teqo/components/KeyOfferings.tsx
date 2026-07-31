import { ClipboardCheck, FileSearch, LineChart, Smartphone, Wrench } from "lucide-react"

const OFFERINGS = [
  {
    icon: Wrench,
    title: "Solar PV Operations & Maintenance",
    description: "Preventive and corrective maintenance, plant operations, and performance optimisation.",
    tone: "brand" as const,
  },
  {
    icon: ClipboardCheck,
    title: "Solar PV Asset Management",
    description: "Administrative, financial, compliance and contract management, in one view.",
    tone: "green" as const,
  },
  {
    icon: LineChart,
    title: "Real-Time Monitoring & Analytics",
    description: "Remote monitoring, performance analytics and intelligent, plant-level insights.",
    tone: "brand" as const,
  },
  {
    icon: Smartphone,
    title: "Mobile PV Plant Health Diagnosis",
    description: "Field testing, technical assessment and on-site asset health diagnosis.",
    tone: "green" as const,
  },
  {
    icon: FileSearch,
    title: "Technical Due Diligence",
    description: "Risk identification, asset evaluation and support through acquisition.",
    tone: "brand" as const,
  },
]

export function KeyOfferings() {
  return (
    <section id="offerings" className="scroll-mt-20 bg-background px-4 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our Key Offerings</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Full lifecycle support, for every renewable asset
          </h2>
          <p className="mt-4 text-muted-foreground">
            Teqo is a new-age, technology-enabled Renewable Energy Asset Management offering from the
            Mahindra Group — built to keep every solar and wind asset performing at its peak.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {OFFERINGS.map(({ icon: Icon, title, description, tone }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-secondary/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className={
                  "absolute inset-x-0 top-0 h-1 scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100 " +
                  (tone === "green" ? "bg-green" : "bg-brand")
                }
              />
              <div
                className={
                  "flex h-11 w-11 items-center justify-center rounded-xl " +
                  (tone === "green" ? "bg-green/10 text-green" : "bg-brand/10 text-brand")
                }
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

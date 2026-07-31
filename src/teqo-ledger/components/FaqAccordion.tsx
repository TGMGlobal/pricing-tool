import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "What services does Mahindra Teqo provide?",
    a: "Solar PV operations & maintenance, asset management, real-time monitoring & analytics, mobile plant health diagnosis, and technical due diligence.",
  },
  {
    q: "Does Teqo manage wind assets as well as solar?",
    a: "Yes — WindPulse™ covers wind farm analytics and asset management alongside our solar-focused products.",
  },
  {
    q: "How does 24×7 monitoring work?",
    a: "TeqoNoc™ provides central monitoring and control, with our operations team watching portfolio performance around the clock.",
  },
  {
    q: "Is Teqo part of the Mahindra Group?",
    a: "Yes — Teqo is the Mahindra Group's new-age, technology-enabled Renewable Energy Asset Management offering.",
  },
]

export function FaqAccordion() {
  return (
    <section className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 flex flex-col divide-y divide-border border-y border-border">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground">
                {item.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

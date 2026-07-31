import { OFFERINGS } from "@/teqo/content"

export function KeyOfferings() {
  return (
    <section id="offerings" className="scroll-mt-20 bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Our Key Offerings</h2>
          <p className="max-w-sm text-sm text-muted-foreground">
            Full lifecycle support, for every renewable asset — from commissioning to decommissioning.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-0 border-t border-border sm:grid-cols-2">
          {OFFERINGS.map(({ title, description }, i) => (
            <div key={title} className="flex items-start gap-4 border-b border-border py-6">
              <span
                className={
                  "mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full " + (i % 2 === 0 ? "bg-brand" : "bg-lime")
                }
              />
              <div>
                <h3 className="text-base font-bold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

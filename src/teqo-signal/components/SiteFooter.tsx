import { FOOTER_COLUMNS } from "@/teqo/content"

export function SiteFooter() {
  return (
    <footer id="careers" className="scroll-mt-20 bg-[hsl(var(--deep))] px-6 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold tracking-tight">TEQO</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-mahindra-red">Mahindra</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/50">
              New-age, technology-enabled Renewable Energy Asset Management from the Mahindra Group.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">{col.heading}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/80 transition-colors hover:text-lime">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Mahindra Teqo. All rights reserved.</span>
          <a href="#contact" className="font-bold text-white/70 hover:text-lime">
            Get in touch →
          </a>
        </div>
      </div>
    </footer>
  )
}

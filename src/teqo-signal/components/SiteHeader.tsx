import { useState } from "react"
import { Menu, X } from "lucide-react"

import { NAV } from "@/teqo/content"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-baseline gap-2">
          <span className="text-2xl font-extrabold tracking-tight">TEQO</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-mahindra-red">Mahindra</span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground lg:flex">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-none border-2 border-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background lg:block"
        >
          Talk to Us
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-foreground hover:bg-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block border-2 border-foreground px-5 py-2.5 text-center text-xs font-bold uppercase tracking-widest"
          >
            Talk to Us
          </a>
        </nav>
      )}
    </header>
  )
}

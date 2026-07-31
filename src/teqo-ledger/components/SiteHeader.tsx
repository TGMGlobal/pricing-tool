import { useState } from "react"
import { Menu, X } from "lucide-react"

import { NAV } from "@/teqo/content"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background shadow-sm">
      <div className="hidden border-b border-border bg-secondary/60 px-6 py-1.5 text-xs text-muted-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6">
          <a href="#" className="hover:text-brand">
            Client Portal Login
          </a>
          <a href="#" className="hover:text-brand">
            Investor Relations
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-brand">TEQO</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-mahindra-red">
            by Mahindra
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/80 lg:flex">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-brand">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand/90 lg:block"
        >
          Talk to Us
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
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
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-md bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Talk to Us
          </a>
        </nav>
      )}
    </header>
  )
}

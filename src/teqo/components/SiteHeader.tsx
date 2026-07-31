import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const NAV = [
  { label: "Home", href: "#" },
  { label: "Company", href: "#company" },
  { label: "Services", href: "#offerings" },
  { label: "Software", href: "#software" },
  { label: "Resources", href: "#insights" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-brand">TEQO</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground lg:flex">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="text-sm font-semibold italic tracking-tight text-mahindra-red">mahindra</span>
          <Button size="sm" asChild>
            <a href="#contact">Talk to Us</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button size="sm" className="mt-3 w-full" asChild>
            <a href="#contact">Talk to Us</a>
          </Button>
        </nav>
      )}
    </header>
  )
}

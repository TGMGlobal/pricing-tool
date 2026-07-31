import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const glowVariants = cva("pointer-events-none absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-32",
      bottom: "bottom-0",
      below: "-bottom-32",
      center: "top-1/2",
    },
  },
  defaultVariants: {
    variant: "top",
  },
})

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(glowVariants({ variant }), className)}
    {...props}
  >
    <div
      className={cn(
        "absolute left-1/2 h-64 w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--brand-foreground)/0.55)_10%,_hsl(var(--brand-foreground)/0)_60%)] sm:h-[32rem]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
    <div
      className={cn(
        "absolute left-1/2 h-32 w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--brand)/0.35)_10%,_hsl(var(--brand)/0)_60%)] sm:h-64",
        variant === "center" && "-translate-y-1/2",
      )}
    />
  </div>
))
Glow.displayName = "Glow"

export { Glow }

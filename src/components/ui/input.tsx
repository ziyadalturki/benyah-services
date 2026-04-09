import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "control-shell h-12 w-full min-w-0 px-4 text-[0.96rem] text-foreground outline-none transition-[border-color,box-shadow,background-color] file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-page-muted/80 focus-visible:border-accent focus-visible:shadow-[var(--shadow-focus)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-page-surface disabled:opacity-60 aria-invalid:border-destructive md:text-[0.96rem]",
        className
      )}
      {...props}
    />
  )
}

export { Input }

import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "control-shell flex field-sizing-content min-h-32 w-full px-4 py-3.5 text-[0.96rem] text-foreground outline-none transition-[border-color,box-shadow,background-color] placeholder:text-page-muted/72 focus-visible:border-accent focus-visible:shadow-[var(--shadow-focus)] disabled:cursor-not-allowed disabled:bg-page-surface disabled:opacity-60 aria-invalid:border-destructive md:text-[0.96rem]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

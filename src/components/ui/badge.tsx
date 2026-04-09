import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-[var(--radius-pill)] border px-3 py-1 transition-[background-color,border-color,color,box-shadow] duration-200 focus-visible:shadow-[var(--shadow-focus)] has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2 [&>svg]:pointer-events-none [&>svg]:size-3! ui-label",
  {
    variants: {
      variant: {
        default: "border-page-line bg-page-surface-strong text-foreground",
        secondary:
          "border-page-line/80 bg-page-surface text-page-muted",
        accent:
          "border-accent/15 bg-page-accent-surface text-foreground",
        destructive:
          "border-destructive/15 bg-destructive/10 text-destructive",
        outline:
          "border-page-line bg-transparent text-foreground",
        ghost:
          "border-transparent bg-transparent text-page-muted",
        link: "border-transparent bg-transparent text-foreground underline-offset-4 hover:text-accent hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }

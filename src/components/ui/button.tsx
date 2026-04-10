import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2.5 rounded-[calc(var(--radius-control)-0.02rem)] border bg-clip-padding text-[0.92rem] font-medium tracking-[-0.01em] whitespace-nowrap shadow-control transition-[background-color,border-color,color,box-shadow,transform] duration-200 outline-none select-none focus-visible:shadow-[var(--shadow-focus)] active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground hover:border-primary hover:bg-[#1b2830] hover:shadow-card",
        outline:
          "border-page-line bg-page-surface-strong text-foreground hover:border-foreground/12 hover:bg-white hover:shadow-card",
        secondary:
          "border-page-line/85 bg-page-surface text-foreground hover:border-page-line hover:bg-page-surface-strong",
        accent:
          "border-accent bg-accent text-accent-foreground hover:border-[#0ea594] hover:bg-[#0ea594] hover:shadow-card",
        ghost:
          "border-transparent bg-transparent text-page-muted shadow-none hover:bg-page-surface/80 hover:text-foreground",
        destructive:
          "border-destructive/10 bg-destructive/10 text-destructive shadow-none hover:bg-destructive/15",
        link: "border-transparent bg-transparent px-0 text-foreground/92 shadow-none underline-offset-4 hover:text-accent hover:underline",
      },
      size: {
        default: "h-11 px-5.5",
        xs: "h-8 rounded-[calc(var(--radius-control)-0.15rem)] px-3 text-xs",
        sm: "h-10 rounded-[calc(var(--radius-control)-0.1rem)] px-4 text-sm",
        lg: "h-12 px-6.5 text-[0.95rem]",
        icon: "size-11",
        "icon-xs":
          "size-8 rounded-[calc(var(--radius-control)-0.15rem)] [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-10 rounded-[calc(var(--radius-control)-0.1rem)]",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

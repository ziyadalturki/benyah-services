import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "group/card flex flex-col overflow-hidden border text-card-foreground transition-[border-color,box-shadow,transform] duration-200",
  {
    variants: {
      tone: {
        default: "surface-card",
        subtle: "border-page-line/80 bg-page-surface shadow-control",
        strong: "surface-panel",
      },
      size: {
        default: "gap-6 py-6",
        sm: "gap-5 py-5",
      },
      interactive: {
        true: "hover:-translate-y-0.5 hover:border-foreground/8 hover:shadow-panel",
        false: "",
      },
    },
    defaultVariants: {
      tone: "default",
      size: "default",
      interactive: false,
    },
  }
)

function Card({
  className,
  size = "default",
  tone = "default",
  interactive = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      data-size={size}
      data-tone={tone}
      className={cn(
        cardVariants({ tone, size, interactive }),
        "has-data-[slot=card-footer]:pb-0",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-2.5 px-6 group-data-[size=sm]/card:px-5 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-5 group-data-[size=sm]/card:[.border-b]:pb-4",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "font-heading text-[1.28rem] leading-[1.14] font-semibold tracking-[-0.035em] group-data-[size=sm]/card:text-[1.12rem]",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("ui-body text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 group-data-[size=sm]/card:px-5", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center border-t border-page-line/65 bg-page-surface/42 px-6 py-5 group-data-[size=sm]/card:px-5 group-data-[size=sm]/card:py-4",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

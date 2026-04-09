import type { ComponentPropsWithoutRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-6 sm:px-8 lg:px-12", {
  variants: {
    size: {
      default: "max-w-[82rem]",
      reading: "max-w-5xl",
      narrow: "max-w-4xl",
      wide: "max-w-[90rem]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export type ContainerProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof containerVariants>;

export function Container({ className, size, ...props }: ContainerProps) {
  return (
    <div
      className={cn(containerVariants({ size }), className)}
      {...props}
    />
  );
}

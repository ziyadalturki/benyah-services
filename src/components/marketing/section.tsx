import type { ComponentPropsWithoutRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { Container, type ContainerProps } from "@/components/marketing/container";
import { cn } from "@/lib/utils";

const sectionVariants = cva("relative", {
  variants: {
    tone: {
      default: "",
      subtle: "bg-page-surface/60",
      surface: "bg-page-surface",
      strong: "bg-page-surface-strong",
    },
    size: {
      compact: "section-space-compact",
      default: "section-space",
      hero: "section-space-hero",
    },
    divider: {
      none: "",
      top: "border-t border-page-line/70",
      bottom: "border-b border-page-line/70",
      both: "border-y border-page-line/70",
    },
  },
  defaultVariants: {
    tone: "default",
    size: "default",
    divider: "none",
  },
});

type PageSectionProps = ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof sectionVariants> & {
    containerClassName?: string;
    containerSize?: ContainerProps["size"];
  };

export function PageSection({
  className,
  containerClassName,
  containerSize = "default",
  tone,
  size,
  divider,
  children,
  ...props
}: PageSectionProps) {
  return (
    <section
      className={cn(sectionVariants({ tone, size, divider }), className)}
      {...props}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}

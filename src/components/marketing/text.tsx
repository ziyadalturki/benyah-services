import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("ui-label", className)} {...props} />;
}

export function DisplayTitle({
  className,
  ...props
}: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className={cn("ui-display text-4xl sm:text-5xl lg:text-6xl", className)}
      {...props}
    />
  );
}

export function SectionTitle({
  className,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={cn("ui-title text-3xl sm:text-4xl", className)}
      {...props}
    />
  );
}

export function LeadText({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("ui-lead", className)} {...props} />;
}

export function BodyText({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("ui-body", className)} {...props} />;
}

export function CaptionText({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("ui-caption", className)} {...props} />;
}

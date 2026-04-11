import Image from "next/image";
import Link from "next/link";

import { BodyText, CaptionText, Eyebrow, SectionTitle } from "@/components/marketing/text";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FounderSpotlightProps = {
  eyebrow?: string;
  title: string;
  description: string;
  secondaryDescription?: string;
  points: string[];
  imageAlt: string;
  name?: string;
  role?: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
  variant?: "home" | "about";
};

const founderSpotlightVariants = {
  home: {
    gridClassName: "gap-6 lg:grid-cols-[minmax(14.5rem,17.5rem)_minmax(0,1fr)] lg:items-start",
    frameClassName: "mx-auto w-full max-w-[15rem] sm:max-w-[16.5rem] lg:max-w-[17.5rem]",
    panelClassName: "p-2.5 sm:p-3",
    imageSizes: "(max-width: 640px) 15rem, (max-width: 1024px) 16.5rem, 17.5rem",
  },
  about: {
    gridClassName: "gap-7 lg:grid-cols-[minmax(15rem,19.5rem)_minmax(0,1fr)] lg:items-start",
    frameClassName: "mx-auto w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-[19.5rem]",
    panelClassName: "p-3 sm:p-3.5",
    imageSizes: "(max-width: 640px) 16rem, (max-width: 1024px) 18rem, 19.5rem",
  },
} as const;

export function FounderSpotlight({
  eyebrow,
  title,
  description,
  secondaryDescription,
  points,
  imageAlt,
  name,
  role,
  ctaHref,
  ctaLabel,
  imageSrc = "/brand/founder-ziyad.png",
  variant = "home",
}: FounderSpotlightProps) {
  const variantStyles = founderSpotlightVariants[variant];

  return (
    <div className={cn("grid", variantStyles.gridClassName)}>
      <div
        className={cn(
          "surface-panel overflow-hidden",
          variantStyles.frameClassName,
          variantStyles.panelClassName,
        )}
      >
        <div className="overflow-hidden rounded-[calc(var(--radius-panel)-0.45rem)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1353}
            height={983}
            sizes={variantStyles.imageSizes}
            className="aspect-[5/4] h-full w-full object-cover object-[center_14%]"
          />
        </div>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        {(name || role) ? (
          <div className="space-y-1.5">
            {name ? (
              <p className="text-[1.08rem] font-semibold leading-tight text-foreground">
                {name}
              </p>
            ) : null}
            {role ? <CaptionText>{role}</CaptionText> : null}
          </div>
        ) : null}
        <SectionTitle className="max-w-3xl">{title}</SectionTitle>
        <div className="max-w-3xl space-y-4">
          <BodyText>{description}</BodyText>
          {secondaryDescription ? <BodyText>{secondaryDescription}</BodyText> : null}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {points.map((point) => (
            <div
              key={point}
              className="surface-muted px-4 py-3.5 text-sm leading-7 text-page-muted"
            >
              {point}
            </div>
          ))}
        </div>

        {ctaHref && ctaLabel ? (
          <Link
            href={ctaHref}
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full sm:w-auto")}
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

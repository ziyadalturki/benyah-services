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
};

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
}: FounderSpotlightProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center">
      <div className="surface-panel p-3 sm:p-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1353}
          height={983}
          sizes="(max-width: 1024px) 100vw, 38vw"
          className="h-auto w-full rounded-[calc(var(--radius-panel)-0.45rem)]"
        />
      </div>

      <div className="space-y-6">
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

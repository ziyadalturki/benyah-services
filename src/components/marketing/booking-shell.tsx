import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { sitePaths } from "@/config/site";
import { FadeIn } from "@/components/motion/fade-in";
import { BodyText, CaptionText } from "@/components/marketing/text";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Locale } from "@/i18n/config";
import type { BookingConfig } from "@/lib/booking-config";
import { localizedPathname } from "@/lib/routes";
import { cn } from "@/lib/utils";

export type BookingShellContent = {
  configuredBadge: string;
  configuredTitle: string;
  configuredDescription: string;
  configuredAction: string;
  configuredNote: string;
  fallbackBadge: string;
  fallbackTitle: string;
  fallbackDescription: string;
  fallbackPrimaryAction: string;
  fallbackSecondaryAction?: string;
  fallbackNote: string;
};

type BookingShellProps = {
  locale: Locale;
  config: BookingConfig;
  content: BookingShellContent;
};

export function BookingShell({
  locale,
  config,
  content,
}: BookingShellProps) {
  const contactHref = `${localizedPathname(
    locale,
    `${sitePaths.contact}?preferredNextStep=discovery-call`,
  )}#lead-form`;
  const servicesHref = localizedPathname(locale, sitePaths.services);

  if (!config.enabled) {
    return (
      <FadeIn>
        <Card tone="strong" className="overflow-hidden">
          <CardHeader className="space-y-4">
            <Badge variant="accent" className="w-fit">
              {content.fallbackBadge}
            </Badge>
            <CardTitle className="text-[1.6rem]">{content.fallbackTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <BodyText>{content.fallbackDescription}</BodyText>
            <div className="surface-muted px-4 py-3.5 text-sm leading-7 text-page-muted">
              {content.fallbackNote}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={contactHref}
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              {content.fallbackPrimaryAction}
            </Link>
            {content.fallbackSecondaryAction ? (
              <Link
                href={servicesHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full bg-page-surface-strong/90 sm:w-auto",
                )}
              >
                {content.fallbackSecondaryAction}
              </Link>
            ) : null}
          </CardFooter>
        </Card>
      </FadeIn>
    );
  }

  if (config.mode === "link") {
    return (
      <FadeIn>
        <Card tone="strong" className="overflow-hidden">
          <CardHeader className="space-y-4">
            <Badge variant="accent" className="w-fit">
              {content.configuredBadge}
            </Badge>
            <div className="space-y-3">
              <CardTitle className="text-[1.6rem]">
                {content.configuredTitle}
              </CardTitle>
              {config.provider ? (
                <CaptionText>{config.provider}</CaptionText>
              ) : null}
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <BodyText>{content.configuredDescription}</BodyText>
            <div className="surface-muted px-4 py-3.5 text-sm leading-7 text-page-muted">
              {content.configuredNote}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={config.url}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              <span>{content.configuredAction}</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
          </CardFooter>
        </Card>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <Card tone="strong" className="overflow-hidden">
        <CardHeader className="space-y-4">
          <Badge variant="accent" className="w-fit">
            {content.configuredBadge}
          </Badge>
          <div className="space-y-3">
            <CardTitle className="text-[1.6rem]">{content.configuredTitle}</CardTitle>
            {config.provider ? <CaptionText>{config.provider}</CaptionText> : null}
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <BodyText>{content.configuredDescription}</BodyText>
          <div className="overflow-hidden rounded-[var(--radius-card)] border border-page-line/80 bg-page-surface shadow-control">
            <iframe
              src={config.url}
              title={content.configuredTitle}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-[760px] w-full border-0 bg-page-surface"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <CaptionText className="max-w-2xl">{content.configuredNote}</CaptionText>
          <a
            href={config.url}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full bg-page-surface-strong/90 sm:w-auto",
            )}
          >
            <span>{content.configuredAction}</span>
            <ArrowUpRightIcon className="size-4" />
          </a>
        </CardFooter>
      </Card>
    </FadeIn>
  );
}

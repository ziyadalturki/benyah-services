import { TrackedLink } from "@/components/analytics/tracked-link";
import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/marketing/container";
import {
  CaptionText,
  DisplayTitle,
  Eyebrow,
  LeadText,
} from "@/components/marketing/text";
import { buttonVariants } from "@/components/ui/button";
import type { AnalyticsEventDefinition } from "@/lib/analytics-events";
import { cn } from "@/lib/utils";

type Action = {
  href: string;
  label: string;
  trackingEvent?: AnalyticsEventDefinition;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction?: Action;
  secondaryAction?: Action;
  supportingLine?: string;
  supportingLabel?: string;
  supportingPoints?: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  supportingLine,
  supportingLabel = "Foundation Notes",
  supportingPoints,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-page-line/70">
      <Container className="section-space-hero">
        <FadeIn className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-end xl:gap-16">
          <div className="space-y-7">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <div className="space-y-5">
              <DisplayTitle className="max-w-5xl">{title}</DisplayTitle>
              <LeadText className="max-w-2xl sm:text-[1.12rem]">{description}</LeadText>
            </div>
            {(primaryAction || secondaryAction) && (
              <div className="space-y-4 pt-1">
                <div
                  role="group"
                  aria-label={title}
                  className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
                >
                  {primaryAction ? (
                    <TrackedLink
                      href={primaryAction.href}
                      trackingEvent={primaryAction.trackingEvent}
                      className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
                    >
                      {primaryAction.label}
                    </TrackedLink>
                  ) : null}
                  {secondaryAction ? (
                    <TrackedLink
                      href={secondaryAction.href}
                      trackingEvent={secondaryAction.trackingEvent}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "w-full sm:w-auto bg-background/80",
                      )}
                    >
                      {secondaryAction.label}
                    </TrackedLink>
                  ) : null}
                </div>
                {supportingLine ? (
                  <CaptionText className="max-w-xl">{supportingLine}</CaptionText>
                ) : null}
              </div>
            )}
          </div>
          {supportingPoints?.length ? (
            <div className="surface-panel px-6 py-7 sm:px-7">
              <p className="ui-label">{supportingLabel}</p>
              <ul className="mt-5 space-y-4">
                {supportingPoints.map((point) => (
                  <li
                    key={point}
                    className="ui-body border-t border-page-line/60 pt-4 first:border-t-0 first:pt-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </FadeIn>
      </Container>
    </section>
  );
}

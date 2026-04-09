import type { LucideIcon } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { AnalyticsEventDefinition } from "@/lib/analytics-events";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  summary: string;
  href: string;
  icon: LucideIcon;
  bullets: string[];
  badgeLabel?: string;
  actionLabel?: string;
  bulletsLabel?: string;
  trackingEvent?: AnalyticsEventDefinition;
};

export function ServiceCard({
  title,
  summary,
  href,
  icon: Icon,
  bullets,
  badgeLabel = "Service",
  actionLabel = "Learn More",
  bulletsLabel,
  trackingEvent,
}: ServiceCardProps) {
  return (
    <FadeIn>
      <Card interactive className="h-full">
        <CardHeader className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex size-[3.25rem] items-center justify-center rounded-[calc(var(--radius-control)+0.15rem)] border border-page-line/80 bg-page-accent-surface">
              <Icon className="size-5 text-ink" />
            </div>
            <Badge variant="accent">{badgeLabel}</Badge>
          </div>
          <div className="space-y-3">
            <CardTitle className="text-[1.65rem]">{title}</CardTitle>
            <p className="ui-body">{summary}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {bulletsLabel ? (
            <p className="ui-label text-page-muted">{bulletsLabel}</p>
          ) : null}
          {bullets.map((item) => (
            <div
              key={item}
              className="surface-muted px-4 py-3.5 text-sm text-page-muted"
            >
              {item}
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <TrackedLink
            href={href}
            trackingEvent={trackingEvent}
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "px-0 text-foreground")}
          >
            {actionLabel}
            <ArrowRightIcon className="size-4" />
          </TrackedLink>
        </CardFooter>
      </Card>
    </FadeIn>
  );
}

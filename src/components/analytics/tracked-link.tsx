"use client";

import Link, { type LinkProps } from "next/link";
import {
  startTransition,
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
} from "react";

import type { AnalyticsEventDefinition } from "@/lib/analytics-events";
import { trackAnalyticsEvent } from "@/lib/analytics-client";

type TrackedLinkProps = LinkProps &
  Omit<ComponentPropsWithoutRef<"a">, "href"> & {
    trackingEvent?: AnalyticsEventDefinition;
  };

function shouldTrackClick(event: Parameters<MouseEventHandler<HTMLAnchorElement>>[0]) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}

export function TrackedLink({
  onClick,
  trackingEvent,
  ...props
}: TrackedLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onClick?.(event);

    if (!trackingEvent || !shouldTrackClick(event)) {
      return;
    }

    startTransition(() => {
      trackAnalyticsEvent(trackingEvent);
    });
  };

  return <Link {...props} onClick={handleClick} />;
}

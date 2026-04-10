"use client";

import { track } from "@vercel/analytics/react";

import type {
  AnalyticsEventDefinition,
  AnalyticsEventProperties,
} from "@/lib/analytics-events";
import { getAnalyticsEnv } from "@/lib/env";

export const analyticsConfig = getAnalyticsEnv();

function normalizeProperties(properties: AnalyticsEventProperties) {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined),
  ) as Record<string, string | number | boolean | null>;
}

export function isAnalyticsEnabled() {
  return analyticsConfig.enabled && analyticsConfig.provider === "vercel";
}

export function trackAnalyticsEvent(event: AnalyticsEventDefinition) {
  if (!isAnalyticsEnabled()) {
    return;
  }

  track(event.name, normalizeProperties(event.properties));
}

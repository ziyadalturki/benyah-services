"use client";

import { track } from "@vercel/analytics/react";

import type {
  AnalyticsEventDefinition,
  AnalyticsEventProperties,
} from "@/lib/analytics-events";

type AnalyticsProvider = "none" | "vercel";

function readBoolean(value: string | undefined, fallback = false) {
  if (!value) {
    return fallback;
  }

  return value.toLowerCase() === "true";
}

function readProvider(value: string | undefined): AnalyticsProvider {
  if (!value) {
    return "vercel";
  }

  return value.toLowerCase() === "vercel" ? "vercel" : "none";
}

export const analyticsConfig = {
  enabled: readBoolean(
    process.env.NEXT_PUBLIC_ANALYTICS_ENABLED,
    process.env.NODE_ENV === "production",
  ),
  provider: readProvider(process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER),
};

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

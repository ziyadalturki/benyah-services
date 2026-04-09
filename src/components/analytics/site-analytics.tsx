"use client";

import { Analytics } from "@vercel/analytics/next";

import { isAnalyticsEnabled } from "@/lib/analytics-client";

export function SiteAnalytics() {
  if (!isAnalyticsEnabled()) {
    return null;
  }

  return <Analytics />;
}

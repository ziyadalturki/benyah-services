import type { LucideIcon } from "lucide-react";
import {
  BlocksIcon,
  Building2Icon,
  CalendarRangeIcon,
  Globe2Icon,
  WaypointsIcon,
  WorkflowIcon,
} from "lucide-react";

import { defaultLocale, locales, type Locale } from "@/i18n/config";

export const serviceSlugs = [
  "automation",
  "websites",
  "booking-workflows",
  "facility-maintenance-management",
  "workflow-systems-automation",
  "business-systems",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export const legacyServiceSlugRedirects = {
  "cafm-cmms": "facility-maintenance-management",
  "n8n-automations": "workflow-systems-automation",
  "saas-tools": "business-systems",
} as const satisfies Record<string, ServiceSlug>;

export type LegacyServiceSlug = keyof typeof legacyServiceSlugRedirects;

export const sitePaths = {
  home: "/",
  book: "/book",
  services: "/services",
  about: "/about",
  caseStudies: "/case-studies",
  contact: "/contact",
} as const;

export const siteConfig = {
  name: "Benyah",
  description:
    "Premium websites, automation, booking and AI call workflows, facility and maintenance management solutions, workflow automation, and internal systems for small businesses.",
  defaultLocale,
  locales,
} as const;

export const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  automation: WorkflowIcon,
  websites: Globe2Icon,
  "booking-workflows": CalendarRangeIcon,
  "facility-maintenance-management": Building2Icon,
  "workflow-systems-automation": WaypointsIcon,
  "business-systems": BlocksIcon,
};

export const staticMarketingPaths = [
  sitePaths.home,
  sitePaths.book,
  sitePaths.services,
  sitePaths.about,
  sitePaths.caseStudies,
  sitePaths.contact,
];

export function getMarketingPaths() {
  return [
    ...staticMarketingPaths,
    ...serviceSlugs.map((slug) => `${sitePaths.services}/${slug}`),
  ];
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return serviceSlugs.includes(value as ServiceSlug);
}

export function isLegacyServiceSlug(value: string): value is LegacyServiceSlug {
  return value in legacyServiceSlugRedirects;
}

export function getCanonicalServiceSlug(value: string) {
  if (isServiceSlug(value)) {
    return value;
  }

  if (isLegacyServiceSlug(value)) {
    return legacyServiceSlugRedirects[value];
  }

  return null;
}

export function getSiteUrl() {
  const envValue =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (!envValue) {
    return "https://www.benyah.co";
  }

  return envValue.startsWith("http") ? envValue : `https://${envValue}`;
}

export function getDefaultSocialImageUrl() {
  const envValue = process.env.BENYAH_OG_IMAGE_URL?.trim();

  if (!envValue) {
    return null;
  }

  if (envValue.startsWith("http")) {
    return envValue;
  }

  return new URL(envValue.startsWith("/") ? envValue : `/${envValue}`, getSiteUrl()).toString();
}

export function getOpenGraphLocale(locale: Locale) {
  return locale === "ar" ? "ar_SA" : "en_US";
}

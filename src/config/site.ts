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
  "cafm-cmms",
  "n8n-automations",
  "saas-tools",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export const sitePaths = {
  home: "/",
  services: "/services",
  about: "/about",
  caseStudies: "/case-studies",
  contact: "/contact",
} as const;

export const siteConfig = {
  name: "Benyah",
  description:
    "Premium websites, automation, booking workflows, CAFM/CMMS solutions, n8n automations, and internal tools for small businesses.",
  defaultLocale,
  locales,
} as const;

export const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  automation: WorkflowIcon,
  websites: Globe2Icon,
  "booking-workflows": CalendarRangeIcon,
  "cafm-cmms": Building2Icon,
  "n8n-automations": WaypointsIcon,
  "saas-tools": BlocksIcon,
};

export const staticMarketingPaths = [
  sitePaths.home,
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

export function getSiteUrl() {
  const envValue =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (!envValue) {
    return "https://www.benyah.co";
  }

  return envValue.startsWith("http") ? envValue : `https://${envValue}`;
}

export function getOpenGraphLocale(locale: Locale) {
  return locale === "ar" ? "ar_SA" : "en_US";
}

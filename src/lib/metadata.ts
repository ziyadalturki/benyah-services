import type { Metadata } from "next";

import {
  getDefaultSocialImageUrl,
  getOpenGraphLocale,
  getSiteUrl,
  siteConfig,
} from "@/config/site";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { localizedPathname } from "@/lib/routes";

type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  pathname?: string;
  openGraphType?: "website" | "article";
};

function normalizeMetadataText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function getLocalizedAbsoluteUrl(locale: Locale, pathname: string = "/") {
  return new URL(localizedPathname(locale, pathname), getSiteUrl());
}

export function createPageMetadata({
  locale,
  title,
  description,
  pathname = "/",
  openGraphType = "website",
}: PageMetadataInput): Metadata {
  const normalizedTitle = normalizeMetadataText(title);
  const normalizedDescription = normalizeMetadataText(description);
  const canonicalUrl = getLocalizedAbsoluteUrl(locale, pathname);
  const languages = Object.fromEntries(
    locales.map((value) => [
      value,
      getLocalizedAbsoluteUrl(value, pathname).toString(),
    ]),
  );
  const socialImage = getDefaultSocialImageUrl();
  const alternateLocales = locales
    .filter((value) => value !== locale)
    .map((value) => getOpenGraphLocale(value));

  return {
    title: normalizedTitle,
    description: normalizedDescription,
    category: "business",
    alternates: {
      canonical: canonicalUrl.toString(),
      languages: {
        ...languages,
        "x-default": getLocalizedAbsoluteUrl(defaultLocale, pathname).toString(),
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: openGraphType,
      url: canonicalUrl,
      title: normalizedTitle,
      description: normalizedDescription,
      siteName: siteConfig.name,
      locale: getOpenGraphLocale(locale),
      alternateLocale: alternateLocales,
      images: socialImage
        ? [
            {
              url: socialImage,
              alt: `${siteConfig.name} social preview`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: socialImage ? "summary_large_image" : "summary",
      title: normalizedTitle,
      description: normalizedDescription,
      images: socialImage ? [socialImage] : undefined,
    },
  };
}

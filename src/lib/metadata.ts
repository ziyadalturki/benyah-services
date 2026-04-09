import type { Metadata } from "next";

import { getOpenGraphLocale, getSiteUrl, siteConfig } from "@/config/site";
import { locales, type Locale } from "@/i18n/config";
import { localizedPathname } from "@/lib/routes";

type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  pathname?: string;
};

export function createPageMetadata({
  locale,
  title,
  description,
  pathname = "/",
}: PageMetadataInput): Metadata {
  const languages = Object.fromEntries(
    locales.map((value) => [value, localizedPathname(value, pathname)]),
  );

  return {
    title,
    description,
    alternates: {
      canonical: localizedPathname(locale, pathname),
      languages,
    },
    openGraph: {
      type: "website",
      url: new URL(localizedPathname(locale, pathname), getSiteUrl()),
      title,
      description,
      siteName: siteConfig.name,
      locale: getOpenGraphLocale(locale),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

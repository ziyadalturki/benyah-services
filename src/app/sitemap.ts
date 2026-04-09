import type { MetadataRoute } from "next";

import { getMarketingPaths, getSiteUrl } from "@/config/site";
import { locales } from "@/i18n/config";
import { localizedPathname } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const siteUrl = getSiteUrl();

  return getMarketingPaths().flatMap((pathname) =>
    locales.map((locale) => ({
      url: new URL(localizedPathname(locale, pathname), siteUrl).toString(),
      lastModified: now,
      alternates: {
        languages: Object.fromEntries(
          locales.map((value) => [
            value,
            new URL(localizedPathname(value, pathname), siteUrl).toString(),
          ]),
        ),
      },
    })),
  );
}

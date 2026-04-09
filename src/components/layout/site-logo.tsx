import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { localizedPathname } from "@/lib/routes";

type SiteLogoProps = {
  locale: Locale;
};

const subtitles: Record<Locale, string> = {
  en: "Structured digital systems",
  ar: "أنظمة رقمية منظمة",
};

export function SiteLogo({ locale }: SiteLogoProps) {
  return (
    <Link
      href={localizedPathname(locale)}
      className="inline-flex items-center gap-3.5 transition-opacity hover:opacity-85"
    >
      <span className="flex size-11 items-center justify-center rounded-[1.1rem] border border-foreground/6 bg-foreground text-sm font-semibold uppercase tracking-[0.28em] text-background shadow-card">
        B
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
          Benyah
        </span>
        <span className="ui-caption">{subtitles[locale]}</span>
      </span>
    </Link>
  );
}

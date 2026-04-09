/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { localizedPathname } from "@/lib/routes";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  locale: Locale;
  variant?: "header" | "footer";
};

const altTexts: Record<Locale, string> = {
  en: "Benyah logo",
  ar: "شعار Benyah",
};

const homeLabels: Record<Locale, string> = {
  en: "Benyah home",
  ar: "الصفحة الرئيسية لـ Benyah",
};

const logoSizes = {
  header: {
    frameClassName: "h-[3.75rem] w-[3.75rem] sm:h-[4.25rem] sm:w-[4.25rem]",
  },
  footer: {
    frameClassName: "h-[5.5rem] w-[5.5rem] sm:h-[6.5rem] sm:w-[6.5rem]",
  },
} as const;

export function SiteLogo({
  locale,
  variant = "header",
}: SiteLogoProps) {
  const size = logoSizes[variant];

  return (
    <Link
      href={localizedPathname(locale)}
      aria-label={homeLabels[locale]}
      className="inline-flex shrink-0 rounded-[calc(var(--radius-control)-0.1rem)] transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]"
    >
      <span
        className={cn(
          "block",
          size.frameClassName,
        )}
      >
        <img
          src="/brand/benyah-logo-cropped.svg"
          alt={altTexts[locale]}
          width={646}
          height={646}
          loading="eager"
          decoding="async"
          draggable={false}
          className="block h-full w-full select-none object-contain object-center"
        />
      </span>
    </Link>
  );
}

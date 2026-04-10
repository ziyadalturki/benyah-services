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

const logoViewBox = "430 400 650 720";
const logoSizes = {
  header: {
    frameClassName: "h-[4rem] w-[3.625rem] sm:h-[4.5rem] sm:w-[4.125rem]",
  },
  footer: {
    frameClassName: "h-[5.75rem] w-[5.1875rem] sm:h-[6.5rem] sm:w-[5.875rem]",
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
        <svg
          viewBox={logoViewBox}
          role="img"
          aria-label={altTexts[locale]}
          focusable="false"
          className="block h-full w-full select-none"
        >
          <title>{altTexts[locale]}</title>
          <image
            href="/brand/benyah-logo.svg"
            x="0"
            y="0"
            width="1500"
            height="1500"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </span>
    </Link>
  );
}

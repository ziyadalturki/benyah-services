"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeLabels, locales, type Locale } from "@/i18n/config";
import { replaceLocaleInPathname } from "@/lib/routes";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? `/${locale}`;

  return (
    <div className="inline-flex items-center rounded-[var(--radius-pill)] border border-page-line/80 bg-page-surface-strong p-1 shadow-control">
      {locales.map((value) => {
        const isActive = value === locale;

        return (
          <Link
            key={value}
            href={replaceLocaleInPathname(pathname, value)}
            aria-label={`${label}: ${localeLabels[value]}`}
            className={`rounded-[var(--radius-pill)] px-3 py-1.5 text-[0.72rem] font-semibold transition-colors ${
              isActive
                ? "bg-foreground text-background shadow-control"
                : "text-page-muted hover:text-foreground"
            }`}
          >
            {value}
          </Link>
        );
      })}
    </div>
  );
}

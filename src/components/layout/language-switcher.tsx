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
    <div className="inline-flex items-center rounded-[var(--radius-pill)] border border-page-line/75 bg-page-surface-strong p-1 shadow-control">
      {locales.map((value) => {
        const isActive = value === locale;

        return (
          <Link
            key={value}
            href={replaceLocaleInPathname(pathname, value)}
            aria-label={`${label}: ${localeLabels[value]}`}
            aria-current={isActive ? "page" : undefined}
            dir={value === "ar" ? "rtl" : "ltr"}
            lang={value}
            title={localeLabels[value]}
            className={`rounded-[var(--radius-pill)] px-3 py-1.5 text-[0.72rem] font-semibold tracking-[0.01em] transition-[background-color,color,box-shadow] ${
              isActive
                ? "bg-foreground text-background shadow-control"
                : "text-page-muted hover:bg-page-surface hover:text-foreground"
            }`}
          >
            {value.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}

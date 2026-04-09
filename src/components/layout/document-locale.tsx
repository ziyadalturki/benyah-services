"use client";

import { useEffect } from "react";

import { localeDirection, type Locale } from "@/i18n/config";

type DocumentLocaleProps = {
  locale: Locale;
};

export function DocumentLocale({ locale }: DocumentLocaleProps) {
  useEffect(() => {
    const root = document.documentElement;

    root.lang = locale;
    root.dir = localeDirection[locale];
    root.classList.toggle("locale-ar", locale === "ar");
  }, [locale]);

  return null;
}

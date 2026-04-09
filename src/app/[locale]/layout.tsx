import { notFound } from "next/navigation";

import { isLocale, localeDirection, locales } from "@/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div
      lang={locale}
      dir={localeDirection[locale]}
      className={locale === "ar" ? "locale-ar" : undefined}
    >
      {children}
    </div>
  );
}

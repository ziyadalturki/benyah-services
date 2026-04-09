import { notFound } from "next/navigation";

import { DocumentLocale } from "@/components/layout/document-locale";
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
    <>
      <DocumentLocale locale={locale} />
      <div
        lang={locale}
        dir={localeDirection[locale]}
        className={locale === "ar" ? "locale-ar" : undefined}
      >
        {children}
      </div>
    </>
  );
}

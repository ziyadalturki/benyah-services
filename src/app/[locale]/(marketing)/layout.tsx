import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getMarketingContent } from "@/content/marketing";
import { isLocale } from "@/i18n/config";

export default async function MarketingLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return children;
  }

  const content = getMarketingContent(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader
        locale={locale}
        languageLabel={content.meta.languageSwitcherLabel}
        ctaLabel={content.ctas.primary}
        navigation={content.navigation}
      />
      <main className="flex-1">{children}</main>
      <SiteFooter
        locale={locale}
        languageLabel={content.meta.languageSwitcherLabel}
        navigation={content.navigation}
        strapline={content.footer.strapline}
        note={content.footer.note}
      />
    </div>
  );
}

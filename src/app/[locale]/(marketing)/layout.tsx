import { SiteAnalytics } from "@/components/analytics/site-analytics";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { getMarketingContent } from "@/content/marketing";
import { isLocale } from "@/i18n/config";
import {
  createOrganizationJsonLd,
  createWebsiteJsonLd,
} from "@/lib/structured-data";

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
      <JsonLd
        data={[
          createOrganizationJsonLd(content.meta.description),
          createWebsiteJsonLd(locale, content.meta.description),
        ]}
      />
      <SiteAnalytics />
      <SiteHeader
        locale={locale}
        languageLabel={content.meta.languageSwitcherLabel}
        navigationLabel={content.meta.primaryNavigationLabel}
        openNavigationLabel={content.meta.openNavigationLabel}
        closeNavigationLabel={content.meta.closeNavigationLabel}
        mobileNavigationTitle={content.meta.mobileNavigationTitle}
        mobileNavigationDescription={content.meta.mobileNavigationDescription}
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
        navigationLabel={content.footer.navigationLabel}
      />
    </div>
  );
}

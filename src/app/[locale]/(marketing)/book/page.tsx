import { notFound } from "next/navigation";

import { sitePaths } from "@/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { getMarketingContent } from "@/content/marketing";
import { BookingShell } from "@/components/marketing/booking-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { PageSection } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { BodyText } from "@/components/marketing/text";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { isLocale } from "@/i18n/config";
import { getBookingConfig } from "@/lib/booking-config";
import { createPageMetadata } from "@/lib/metadata";
import { localizedPathname } from "@/lib/routes";
import {
  createBreadcrumbJsonLd,
  createWebPageJsonLd,
} from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getMarketingContent(locale);

  return createPageMetadata({
    locale,
    title: content.book.title,
    description: content.book.description,
    pathname: sitePaths.book,
  });
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getMarketingContent(locale);
  const bookingConfig = getBookingConfig();
  const isBookingEnabled = bookingConfig.enabled;
  const fallbackContactHref = `${localizedPathname(
    locale,
    `${sitePaths.contact}?preferredNextStep=discovery-call`,
  )}#lead-form`;

  return (
    <>
      <JsonLd
        data={[
          createWebPageJsonLd({
            locale,
            pathname: sitePaths.book,
            title: content.book.title,
            description: content.book.description,
          }),
          createBreadcrumbJsonLd(locale, [
            { name: content.navigation[0].label, pathname: sitePaths.home },
            { name: content.ctas.primary, pathname: sitePaths.book },
          ]),
        ]}
      />
      <PageHero
        eyebrow={content.book.eyebrow}
        title={content.book.title}
        description={content.book.description}
        primaryAction={{
          href: isBookingEnabled ? "#booking-area" : fallbackContactHref,
          label: isBookingEnabled
            ? content.book.heroPrimaryAction
            : content.book.booking.shell.fallbackPrimaryAction,
        }}
        secondaryAction={{
          href: isBookingEnabled
            ? fallbackContactHref
            : localizedPathname(locale, sitePaths.services),
          label: isBookingEnabled
            ? content.book.heroSecondaryAction
            : content.ctas.secondary,
        }}
        supportingLine={content.book.supportingLine}
        supportingLabel={content.book.highlightsLabel}
        supportingPoints={content.book.highlights}
      />

      <PageSection containerClassName="space-y-10">
        <SectionHeading
          eyebrow={content.book.covers.eyebrow}
          title={content.book.covers.title}
          description={content.book.covers.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.book.covers.items.map((item, index) => (
            <FadeIn key={item.title}>
              <Card tone={index === 1 ? "strong" : "subtle"} className="h-full">
                <CardHeader>
                  <CardTitle className="text-[1.35rem]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <BodyText>{item.description}</BodyText>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection tone="subtle" divider="both" containerClassName="space-y-10">
        <SectionHeading
          eyebrow={content.book.audience.eyebrow}
          title={content.book.audience.title}
          description={content.book.audience.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.book.audience.items.map((item, index) => (
            <FadeIn key={item.title}>
              <Card tone={index === 1 ? "strong" : "default"} className="h-full">
                <CardHeader>
                  <CardTitle className="text-[1.4rem]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <BodyText>{item.description}</BodyText>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="booking-area"
        className="scroll-mt-24"
        containerClassName="space-y-10"
      >
        <SectionHeading
          eyebrow={content.book.booking.eyebrow}
          title={content.book.booking.title}
          description={content.book.booking.description}
          className="max-w-4xl"
        />

        <BookingShell
          locale={locale}
          config={bookingConfig}
          content={content.book.booking.shell}
        />
      </PageSection>

      <PageSection
        tone={isBookingEnabled ? "subtle" : "default"}
        divider={isBookingEnabled ? "top" : "none"}
        containerClassName="grid gap-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-start"
      >
        <SectionHeading
          eyebrow={content.book.reassurance.eyebrow}
          title={content.book.reassurance.title}
          description={content.book.reassurance.description}
          className="max-w-4xl"
        />

        <aside className="surface-panel h-full px-6 py-7 sm:px-7">
          <div className="space-y-3">
            {content.book.reassurance.points.map((point) => (
              <div
                key={point}
                className="surface-muted px-4 py-3.5 text-sm leading-7 text-page-muted"
              >
                {point}
              </div>
            ))}
          </div>
        </aside>
      </PageSection>
    </>
  );
}

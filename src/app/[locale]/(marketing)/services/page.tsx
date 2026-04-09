import Link from "next/link";
import { notFound } from "next/navigation";

import {
  serviceIcons,
  serviceSlugs,
  sitePaths,
  type ServiceSlug,
} from "@/config/site";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { JsonLd } from "@/components/seo/json-ld";
import { getMarketingContent } from "@/content/marketing";
import { PageHero } from "@/components/marketing/page-hero";
import { PageSection } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ServiceCard } from "@/components/marketing/service-card";
import {
  BodyText,
  CaptionText,
  Eyebrow,
  SectionTitle,
} from "@/components/marketing/text";
import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { isLocale } from "@/i18n/config";
import {
  createCtaClickedEvent,
  createServiceDetailSelectedEvent,
} from "@/lib/analytics-events";
import { createPageMetadata } from "@/lib/metadata";
import { localizedPathname } from "@/lib/routes";
import {
  createBreadcrumbJsonLd,
  createWebPageJsonLd,
} from "@/lib/structured-data";
import { cn } from "@/lib/utils";

function getServiceDetailHref(locale: "en" | "ar", slug: ServiceSlug) {
  return localizedPathname(locale, `/services/${slug}`);
}

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
    title: content.services.title,
    description: content.services.description,
    pathname: "/services",
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getMarketingContent(locale);

  return (
    <>
      <JsonLd
        data={[
          createWebPageJsonLd({
            locale,
            pathname: sitePaths.services,
            title: content.services.title,
            description: content.services.description,
            type: "CollectionPage",
          }),
          createBreadcrumbJsonLd(locale, [
            { name: content.navigation[0].label, pathname: sitePaths.home },
            { name: content.navigation[1].label, pathname: sitePaths.services },
          ]),
        ]}
      />
      <PageHero
        eyebrow={content.services.eyebrow}
        title={content.services.title}
        description={content.services.description}
        primaryAction={{
          href: localizedPathname(locale, sitePaths.book),
          label: content.ctas.primary,
          trackingEvent: createCtaClickedEvent({
            locale,
            page: "services",
            placement: "hero_primary",
            label: content.ctas.primary,
            destination: "book",
            ctaType: "primary",
          }),
        }}
        secondaryAction={{
          href: "#services-grid",
          label: content.services.heroSecondaryAction,
        }}
        supportingLine={content.services.supportingLine}
        supportingLabel={content.services.highlightsLabel}
        supportingPoints={content.services.highlights}
      />

      <PageSection containerClassName="grid gap-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-start">
        <SectionHeading
          eyebrow={content.services.intro.eyebrow}
          title={content.services.intro.title}
          description={content.services.intro.description}
          className="max-w-4xl"
        />

        <aside className="surface-panel h-full px-6 py-7 sm:px-7">
          <p className="ui-label">{content.services.intro.pointsLabel}</p>
          <div className="mt-5 space-y-3">
            {content.services.intro.points.map((point) => (
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

      <PageSection
        id="services-grid"
        className="scroll-mt-24"
        tone="subtle"
        divider="both"
        containerClassName="space-y-12"
      >
        <SectionHeading
          eyebrow={content.services.catalog.eyebrow}
          title={content.services.catalog.title}
          description={content.services.catalog.description}
          className="max-w-4xl"
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {serviceSlugs.map((slug) => {
            const service = content.services.items[slug];

            return (
              <ServiceCard
                key={slug}
                title={service.title}
                summary={service.summary}
                bullets={service.capabilities}
                href={getServiceDetailHref(locale, slug)}
                icon={serviceIcons[slug]}
                badgeLabel={content.services.labels.serviceBadge}
                actionLabel={content.services.labels.serviceAction}
                bulletsLabel={content.services.labels.serviceSupportLabel}
                trackingEvent={createServiceDetailSelectedEvent({
                  locale,
                  source: "services_overview",
                  serviceSlug: slug,
                  serviceTitle: service.title,
                })}
              />
            );
          })}
        </div>
      </PageSection>

      <PageSection containerClassName="space-y-10">
        <SectionHeading
          eyebrow={content.services.grouping.eyebrow}
          title={content.services.grouping.title}
          description={content.services.grouping.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {content.services.grouping.items.map((item, index) => (
            <FadeIn key={item.title}>
              <Card tone={index === 2 ? "strong" : "default"} className="h-full">
                <CardHeader>
                  <CardTitle className="text-[1.45rem]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <BodyText>{item.description}</BodyText>

                  <div className="space-y-3">
                    <p className="ui-label text-page-muted">
                      {content.services.labels.groupServicesLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.services.map((slug) => (
                        <Link
                          key={`${item.title}-${slug}`}
                          href={getServiceDetailHref(locale, slug)}
                          className={cn(
                            buttonVariants({ variant: "secondary", size: "sm" }),
                            "h-9 rounded-[var(--radius-pill)] px-3",
                          )}
                        >
                          {content.services.items[slug].title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection divider="top" containerClassName="space-y-6">
        <div className="surface-panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-4">
            <Eyebrow>{content.services.finalCta.eyebrow}</Eyebrow>
            <SectionTitle className="max-w-3xl">
              {content.services.finalCta.title}
            </SectionTitle>
            <BodyText className="max-w-2xl sm:text-[1.02rem]">
              {content.services.finalCta.description}
            </BodyText>
            <CaptionText>{content.services.finalCta.supportingLine}</CaptionText>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <TrackedLink
              href={localizedPathname(locale, sitePaths.book)}
              trackingEvent={createCtaClickedEvent({
                locale,
                page: "services",
                placement: "final_primary",
                label: content.ctas.primary,
                destination: "book",
                ctaType: "primary",
              })}
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              {content.ctas.primary}
            </TrackedLink>
            <Link
              href={localizedPathname(locale, "/case-studies")}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full bg-background/80 sm:w-auto",
              )}
            >
              {content.services.finalCta.secondaryAction}
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}

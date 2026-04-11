import Link from "next/link";
import { notFound } from "next/navigation";

import { sitePaths } from "@/config/site";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { JsonLd } from "@/components/seo/json-ld";
import { getMarketingContent } from "@/content/marketing";
import { CaseStudyCard } from "@/components/marketing/case-study-card";
import { PageHero } from "@/components/marketing/page-hero";
import { PageSection } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CaptionText } from "@/components/marketing/text";
import { buttonVariants } from "@/components/ui/button";
import { isLocale } from "@/i18n/config";
import { createCtaClickedEvent } from "@/lib/analytics-events";
import { createPageMetadata } from "@/lib/metadata";
import { localizedPathname } from "@/lib/routes";
import {
  createBreadcrumbJsonLd,
  createWebPageJsonLd,
} from "@/lib/structured-data";
import { cn } from "@/lib/utils";

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
    title: content.caseStudies.title,
    description: content.caseStudies.description,
    pathname: "/case-studies",
  });
}

export default async function CaseStudiesPage({
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
            pathname: sitePaths.caseStudies,
            title: content.caseStudies.title,
            description: content.caseStudies.description,
            type: "CollectionPage",
          }),
          createBreadcrumbJsonLd(locale, [
            { name: content.navigation[0].label, pathname: sitePaths.home },
            {
              name: content.navigation[3].label,
              pathname: sitePaths.caseStudies,
            },
          ]),
        ]}
      />
      <PageHero
        eyebrow={content.caseStudies.eyebrow}
        title={content.caseStudies.title}
        description={content.caseStudies.description}
        primaryAction={{
          href: localizedPathname(locale, sitePaths.book),
          label: content.ctas.primary,
          trackingEvent: createCtaClickedEvent({
            locale,
            page: "case_studies",
            placement: "hero_primary",
            label: content.ctas.primary,
            destination: "book",
            ctaType: "primary",
          }),
        }}
        secondaryAction={{
          href: localizedPathname(locale, sitePaths.contact),
          label: content.ctas.contact,
        }}
        supportingLine={content.caseStudies.supportingLine}
        supportingLabel={content.caseStudies.highlightsLabel}
        supportingPoints={content.caseStudies.highlights}
      />

      <PageSection containerClassName="space-y-6">
        <div className="surface-panel px-6 py-7 sm:px-8 sm:py-8">
          <SectionHeading
            eyebrow={content.caseStudies.intro.eyebrow}
            title={content.caseStudies.intro.title}
            description={content.caseStudies.intro.description}
            className="max-w-4xl"
          />
        </div>
      </PageSection>

      <PageSection tone="subtle" divider="both" containerClassName="space-y-10">
        <SectionHeading
          eyebrow={content.caseStudies.catalog.eyebrow}
          title={content.caseStudies.catalog.title}
          description={content.caseStudies.catalog.description}
          className="max-w-4xl"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {content.caseStudies.items.map((item) => (
            <CaseStudyCard
              key={item.title}
              title={item.title}
              sector={item.sector}
              summary={item.summary}
              summaryLabel={content.caseStudies.labels.summaryLabel}
              addressed={item.addressed}
              outcome={item.outcome}
              scope={item.scope}
              addressedLabel={content.caseStudies.labels.addressedLabel}
              outcomeLabel={content.caseStudies.labels.outcomeLabel}
              scopeLabel={content.caseStudies.labels.scopeLabel}
            />
          ))}
        </div>
      </PageSection>

      <PageSection containerClassName="space-y-6">
        <div className="surface-panel px-6 py-7 sm:px-8 sm:py-8">
          <SectionHeading
            eyebrow={content.caseStudies.engagements.eyebrow}
            title={content.caseStudies.engagements.title}
            description={content.caseStudies.engagements.description}
            className="max-w-4xl"
          />
        </div>
      </PageSection>

      <PageSection containerClassName="space-y-10">
        <SectionHeading
          eyebrow={content.caseStudies.startingPoints.eyebrow}
          title={content.caseStudies.startingPoints.title}
          description={content.caseStudies.startingPoints.description}
          className="max-w-4xl"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {content.caseStudies.startingPoints.items.map((item) => (
            <div
              key={item.title}
              className="surface-muted h-full px-4 py-4"
            >
              <p className="text-sm font-semibold leading-6 text-foreground">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-page-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection divider="top" containerClassName="space-y-6">
        <div className="surface-panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-4">
            <SectionHeading
              eyebrow={content.caseStudies.finalCta.eyebrow}
              title={content.caseStudies.finalCta.title}
              description={content.caseStudies.finalCta.description}
              className="max-w-3xl"
            />
            <CaptionText>{content.caseStudies.finalCta.supportingLine}</CaptionText>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <TrackedLink
              href={localizedPathname(locale, sitePaths.book)}
              trackingEvent={createCtaClickedEvent({
                locale,
                page: "case_studies",
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
              href={localizedPathname(locale, sitePaths.contact)}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full bg-page-surface-strong/90 sm:w-auto",
              )}
            >
              {content.ctas.contact}
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}

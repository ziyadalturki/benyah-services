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
import {
  BodyText,
  CaptionText,
  Eyebrow,
  SectionTitle,
} from "@/components/marketing/text";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          href: localizedPathname(locale, "/services"),
          label: content.ctas.secondary,
        }}
        supportingLine={content.caseStudies.supportingLine}
        supportingLabel={content.caseStudies.highlightsLabel}
        supportingPoints={content.caseStudies.highlights}
      />

      <PageSection containerClassName="grid gap-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-start">
        <SectionHeading
          eyebrow={content.caseStudies.intro.eyebrow}
          title={content.caseStudies.intro.title}
          description={content.caseStudies.intro.description}
          className="max-w-4xl"
        />

        <FadeIn>
          <Card tone="strong" className="h-full">
            <CardHeader className="space-y-4">
              <Badge variant="accent" className="w-fit">
                {content.caseStudies.intro.asideEyebrow}
              </Badge>
              <CardTitle className="text-[1.65rem]">
                {content.caseStudies.intro.asideTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <BodyText>{content.caseStudies.intro.asideDescription}</BodyText>
              <div className="space-y-3">
                {content.caseStudies.intro.asidePoints.map((point) => (
                  <div
                    key={point}
                    className="surface-muted px-4 py-3.5 text-sm leading-7 text-page-muted"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </PageSection>

      <PageSection tone="subtle" divider="both" containerClassName="space-y-10">
        <SectionHeading
          eyebrow={content.caseStudies.catalog.eyebrow}
          title={content.caseStudies.catalog.title}
          description={content.caseStudies.catalog.description}
          className="max-w-4xl"
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {content.caseStudies.items.map((item) => (
            <CaseStudyCard
              key={item.title}
              title={item.title}
              sector={item.sector}
              summary={item.summary}
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

      <PageSection containerClassName="space-y-10">
        <SectionHeading
          eyebrow={content.caseStudies.engagements.eyebrow}
          title={content.caseStudies.engagements.title}
          description={content.caseStudies.engagements.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {content.caseStudies.engagements.items.map((item, index) => (
            <FadeIn key={item.title}>
              <Card
                tone={index === 1 ? "strong" : "default"}
                className="h-full"
              >
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

      <PageSection divider="top" containerClassName="space-y-6">
        <div className="surface-panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-4">
            <Eyebrow>{content.caseStudies.finalCta.eyebrow}</Eyebrow>
            <SectionTitle className="max-w-3xl">
              {content.caseStudies.finalCta.title}
            </SectionTitle>
            <BodyText className="max-w-2xl sm:text-[1.02rem]">
              {content.caseStudies.finalCta.description}
            </BodyText>
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
                "w-full bg-background/80 sm:w-auto",
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

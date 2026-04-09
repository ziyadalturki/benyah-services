import { notFound } from "next/navigation";

import {
  isServiceSlug,
  serviceIcons,
  serviceSlugs,
  sitePaths,
} from "@/config/site";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { JsonLd } from "@/components/seo/json-ld";
import { getMarketingContent } from "@/content/marketing";
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
  createFaqJsonLd,
  createServiceJsonLd,
  createWebPageJsonLd,
} from "@/lib/structured-data";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isServiceSlug(slug)) {
    return {};
  }

  const service = getMarketingContent(locale).services.items[slug];

  return createPageMetadata({
    locale,
    title: service.title,
    description: service.summary,
    pathname: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || !isServiceSlug(slug)) {
    notFound();
  }

  const content = getMarketingContent(locale);
  const service = content.services.items[slug];
  const detail = content.services.detail;
  const Icon = serviceIcons[slug];

  return (
    <>
      <JsonLd
        data={[
          createWebPageJsonLd({
            locale,
            pathname: `${sitePaths.services}/${slug}`,
            title: service.title,
            description: service.summary,
          }),
          createBreadcrumbJsonLd(locale, [
            { name: content.navigation[0].label, pathname: sitePaths.home },
            { name: content.navigation[1].label, pathname: sitePaths.services },
            { name: service.title, pathname: `${sitePaths.services}/${slug}` },
          ]),
          createServiceJsonLd({
            locale,
            pathname: `${sitePaths.services}/${slug}`,
            name: service.title,
            description: service.summary,
          }),
          createFaqJsonLd(service.faqs),
        ]}
      />
      <PageHero
        eyebrow={content.services.eyebrow}
        title={service.title}
        description={service.summary}
        primaryAction={{
          href: localizedPathname(locale, sitePaths.book),
          label: content.ctas.primary,
          trackingEvent: createCtaClickedEvent({
            locale,
            page: "service_detail",
            placement: "hero_primary",
            label: content.ctas.primary,
            destination: "book",
            ctaType: "primary",
            serviceSlug: slug,
          }),
        }}
        secondaryAction={{
          href: localizedPathname(locale, "/services"),
          label: detail.heroSecondaryAction,
        }}
        supportingLine={service.heroSupportingLine}
        supportingLabel={detail.heroPanelLabel}
        supportingPoints={service.outcomes}
      />

      <PageSection containerClassName="grid gap-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={detail.overview.eyebrow}
            title={detail.overview.title}
            description={detail.overview.description}
            className="max-w-4xl"
          />
          <BodyText className="max-w-3xl text-[1rem] sm:text-[1.04rem]">
            {service.intro}
          </BodyText>
        </div>

        <FadeIn>
          <Card tone="strong" className="h-full">
            <CardHeader className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex size-14 items-center justify-center rounded-[calc(var(--radius-control)+0.2rem)] border border-page-line/80 bg-page-accent-surface">
                  <Icon className="size-6 text-ink" />
                </div>
                <Badge variant="accent">{content.services.labels.serviceBadge}</Badge>
              </div>
              <div className="space-y-3">
                <CardTitle className="text-[1.6rem]">{service.title}</CardTitle>
                <BodyText>{service.summary}</BodyText>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="ui-label text-page-muted">
                {detail.overview.capabilitiesLabel}
              </p>
              {service.capabilities.map((item) => (
                <div
                  key={item}
                  className="surface-muted px-4 py-3.5 text-sm leading-7 text-page-muted"
                >
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </FadeIn>
      </PageSection>

      <PageSection tone="subtle" divider="both" containerClassName="space-y-10">
        <SectionHeading
          eyebrow={detail.problems.eyebrow}
          title={detail.problems.title}
          description={detail.problems.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {service.problems.map((item) => (
            <FadeIn key={item.title}>
              <Card tone="subtle" className="h-full">
                <CardHeader>
                  <CardTitle className="text-[1.45rem]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <BodyText>{item.description}</BodyText>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection containerClassName="space-y-10">
        <SectionHeading
          eyebrow={detail.deliverables.eyebrow}
          title={detail.deliverables.title}
          description={detail.deliverables.description}
          className="max-w-4xl"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <Card className="h-full">
              <CardHeader className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {detail.deliverables.capabilitiesLabel}
                </Badge>
                <CardTitle className="text-[1.5rem]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {service.capabilities.map((item) => (
                  <div
                    key={item}
                    className="surface-muted px-4 py-3.5 text-sm leading-7 text-page-muted"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn>
            <Card tone="strong" className="h-full">
              <CardHeader className="space-y-4">
                <Badge variant="accent" className="w-fit">
                  {detail.deliverables.outcomesLabel}
                </Badge>
                <CardTitle className="text-[1.5rem]">
                  {detail.heroPanelLabel}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {service.outcomes.map((item) => (
                  <div
                    key={item}
                    className="surface-muted px-4 py-3.5 text-sm leading-7 text-page-muted"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </PageSection>

      <PageSection tone="subtle" containerClassName="space-y-10">
        <SectionHeading
          eyebrow={detail.audience.eyebrow}
          title={detail.audience.title}
          description={detail.audience.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {service.audience.map((item, index) => (
            <FadeIn key={item.title}>
              <Card
                tone={index === 1 ? "strong" : "default"}
                className="h-full"
              >
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

      <PageSection containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <SectionHeading
          eyebrow={detail.process.eyebrow}
          title={service.processTitle ?? detail.process.title}
          description={service.processDescription ?? detail.process.description}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {(service.processSteps ?? detail.process.steps).map((step, index) => (
            <FadeIn key={step.step}>
              <Card
                tone={index === 1 ? "strong" : "default"}
                className="h-full"
              >
                <CardHeader className="space-y-4">
                  <Badge
                    variant={index === 1 ? "accent" : "secondary"}
                    className="w-fit"
                  >
                    {step.step}
                  </Badge>
                  <CardTitle className="text-[1.4rem]">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <BodyText>{step.description}</BodyText>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection tone="subtle" divider="top" containerClassName="space-y-10">
        <SectionHeading
          eyebrow={detail.faq.eyebrow}
          title={detail.faq.title}
          description={detail.faq.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {service.faqs.map((item) => (
            <FadeIn key={item.question}>
              <Card tone="subtle" className="h-full">
                <CardHeader>
                  <CardTitle className="text-[1.3rem] leading-[1.2]">
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BodyText>{item.answer}</BodyText>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection divider="top" containerClassName="space-y-6">
        <div className="surface-panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-4">
            <Eyebrow>{detail.finalCta.eyebrow}</Eyebrow>
            <SectionTitle className="max-w-3xl">
              {detail.finalCta.title}
            </SectionTitle>
            <BodyText className="max-w-2xl sm:text-[1.02rem]">
              {detail.finalCta.description}
            </BodyText>
            <CaptionText>{detail.finalCta.supportingLine}</CaptionText>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <TrackedLink
              href={localizedPathname(locale, sitePaths.book)}
              trackingEvent={createCtaClickedEvent({
                locale,
                page: "service_detail",
                placement: "final_primary",
                label: content.ctas.primary,
                destination: "book",
                ctaType: "primary",
                serviceSlug: slug,
              })}
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              {content.ctas.primary}
            </TrackedLink>
            <TrackedLink
              href={localizedPathname(locale, sitePaths.contact)}
              trackingEvent={createCtaClickedEvent({
                locale,
                page: "service_detail",
                placement: "final_secondary",
                label: content.ctas.contact,
                destination: "contact",
                ctaType: "secondary",
                serviceSlug: slug,
              })}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full bg-background/80 sm:w-auto",
              )}
            >
              {content.ctas.contact}
            </TrackedLink>
          </div>
        </div>
      </PageSection>
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";

import { sitePaths } from "@/config/site";
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
    title: content.about.title,
    description: content.about.description,
    pathname: "/about",
  });
}

export default async function AboutPage({
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
            pathname: sitePaths.about,
            title: content.about.title,
            description: content.about.description,
            type: "AboutPage",
          }),
          createBreadcrumbJsonLd(locale, [
            { name: content.navigation[0].label, pathname: sitePaths.home },
            { name: content.navigation[2].label, pathname: sitePaths.about },
          ]),
        ]}
      />
      <PageHero
        eyebrow={content.about.eyebrow}
        title={content.about.title}
        description={content.about.description}
        primaryAction={{
          href: localizedPathname(locale, sitePaths.book),
          label: content.ctas.primary,
          trackingEvent: createCtaClickedEvent({
            locale,
            page: "about",
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
        supportingLine={content.about.supportingLine}
        supportingLabel={content.about.highlightsLabel}
        supportingPoints={content.about.highlights}
      />

      <PageSection containerClassName="grid gap-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={content.about.overview.eyebrow}
            title={content.about.overview.title}
            description={content.about.overview.description}
            className="max-w-4xl"
          />
          <BodyText className="max-w-3xl sm:text-[1.02rem]">
            {content.about.overview.body}
          </BodyText>
        </div>

        <FadeIn>
          <Card tone="strong" className="h-full">
            <CardHeader className="space-y-4">
              <Badge variant="accent" className="w-fit">
                {content.about.overview.asideEyebrow}
              </Badge>
              <CardTitle className="text-[1.55rem]">
                {content.about.overview.asideTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <BodyText>{content.about.overview.asideDescription}</BodyText>
              <div className="space-y-3">
                {content.about.overview.asidePoints.map((point) => (
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
          eyebrow={content.about.beliefs.eyebrow}
          title={content.about.beliefs.title}
          description={content.about.beliefs.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.about.beliefs.items.map((item, index) => (
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
          eyebrow={content.about.process.eyebrow}
          title={content.about.process.title}
          description={content.about.process.description}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {content.about.process.steps.map((step, index) => (
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

      <PageSection tone="subtle" containerClassName="space-y-10">
        <SectionHeading
          eyebrow={content.about.differentiators.eyebrow}
          title={content.about.differentiators.title}
          description={content.about.differentiators.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {content.about.differentiators.items.map((item, index) => (
            <FadeIn key={item.title}>
              <Card
                tone={index === 1 ? "strong" : "default"}
                className="h-full"
              >
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
          eyebrow={content.about.audience.eyebrow}
          title={content.about.audience.title}
          description={content.about.audience.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {content.about.audience.items.map((item) => (
            <FadeIn key={item.title}>
              <Card tone="subtle" className="h-full">
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

      <PageSection divider="top" containerClassName="space-y-6">
        <div className="surface-panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-4">
            <Eyebrow>{content.about.finalCta.eyebrow}</Eyebrow>
            <SectionTitle className="max-w-3xl">
              {content.about.finalCta.title}
            </SectionTitle>
            <BodyText className="max-w-2xl sm:text-[1.02rem]">
              {content.about.finalCta.description}
            </BodyText>
            <CaptionText>{content.about.finalCta.supportingLine}</CaptionText>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <TrackedLink
              href={localizedPathname(locale, sitePaths.book)}
              trackingEvent={createCtaClickedEvent({
                locale,
                page: "about",
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

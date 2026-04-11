import Link from "next/link";
import { notFound } from "next/navigation";

import { publicServiceSlugs, serviceIcons, sitePaths } from "@/config/site";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { JsonLd } from "@/components/seo/json-ld";
import { getMarketingContent } from "@/content/marketing";
import { CaseStudyCard } from "@/components/marketing/case-study-card";
import { FounderSpotlight } from "@/components/marketing/founder-spotlight";
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
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { isLocale } from "@/i18n/config";
import { createCtaClickedEvent } from "@/lib/analytics-events";
import { createPageMetadata } from "@/lib/metadata";
import { localizedPathname } from "@/lib/routes";
import { createWebPageJsonLd } from "@/lib/structured-data";
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
    title: content.home.title,
    description: content.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getMarketingContent(locale);
  const founderContent = content.home.founder!;
  const featuredCaseStudies = content.caseStudies.items.slice(0, 3);
  const coreServicesSection = content.home.coreServices ?? {
    eyebrow: content.services.catalog.eyebrow,
    title: content.services.catalog.title,
    description: content.services.catalog.description,
  };

  return (
    <>
      <JsonLd
        data={createWebPageJsonLd({
          locale,
          pathname: sitePaths.home,
          title: content.home.title,
          description: content.home.description,
        })}
      />
      <PageHero
        eyebrow={content.home.eyebrow}
        title={content.home.title}
        description={content.home.description}
        primaryAction={{
          href: localizedPathname(locale, sitePaths.book),
          label: content.ctas.primary,
          trackingEvent: createCtaClickedEvent({
            locale,
            page: "home",
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
        supportingLine={content.home.supportingLine}
        supportingLabel={content.home.highlightsLabel}
        supportingPoints={content.home.highlights}
      />

      <PageSection containerClassName="space-y-10 lg:space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <SectionHeading
            eyebrow={content.home.problem.eyebrow}
            title={content.home.problem.title}
            description={content.home.problem.description}
            className="max-w-4xl"
          />

          <Card tone="strong" className="h-full">
            <CardHeader className="space-y-4">
              <Badge variant="accent" className="w-fit">
                {content.home.problem.asideEyebrow}
              </Badge>
              <CardTitle className="text-[1.6rem]">
                {content.home.problem.asideTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <BodyText>{content.home.problem.asideDescription}</BodyText>
              <div className="space-y-3">
                {content.home.problem.asidePoints.map((point) => (
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
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.home.problem.items.map((item) => (
            <FadeIn key={item.title}>
              <Card tone="subtle" className="h-full">
                <CardHeader>
                  <CardTitle className="text-[1.45rem]">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BodyText>{item.description}</BodyText>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection tone="subtle" divider="both" containerClassName="space-y-12">
        <SectionHeading
          eyebrow={coreServicesSection.eyebrow}
          title={coreServicesSection.title}
          description={coreServicesSection.description}
          className="max-w-4xl"
        />

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {publicServiceSlugs.map((slug) => {
            const service = content.services.items[slug];

            return (
              <ServiceCard
                key={slug}
                title={service.title}
                summary={service.summary}
                bestWhen={service.bestWhen}
                bullets={service.capabilities}
                href={localizedPathname(locale, `/services/${slug}`)}
                icon={serviceIcons[slug]}
                badgeLabel={content.home.labels.serviceBadge}
                actionLabel={content.home.labels.serviceAction}
                bulletsLabel={content.services.labels.serviceSupportLabel}
                bestWhenLabel={content.services.labels.bestWhenLabel}
              />
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="subtle" containerClassName="space-y-10">
        <SectionHeading
          eyebrow={content.home.why.eyebrow}
          title={content.home.why.title}
          description={content.home.why.description}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {content.home.why.items.map((item, index) => (
            <FadeIn key={item.title}>
              <Card
                tone={index === 1 ? "strong" : "default"}
                className="h-full"
              >
                <CardHeader>
                  <CardTitle className="text-[1.45rem]">
                    {item.title}
                  </CardTitle>
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
        <FounderSpotlight
          eyebrow={founderContent.eyebrow}
          title={founderContent.title}
          description={founderContent.description}
          points={founderContent.points}
          imageAlt={founderContent.imageAlt}
          ctaHref={localizedPathname(locale, sitePaths.about)}
          ctaLabel={founderContent.ctaLabel}
        />

        <div className="space-y-8 border-t border-page-line/65 pt-8 sm:pt-10">
          <SectionHeading
            eyebrow={content.home.trust.eyebrow}
            title={content.home.trust.title}
            description={content.home.trust.description}
            className="max-w-4xl"
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.home.trust.items.map((item, index) => (
              <FadeIn key={item.title}>
                <Card
                  tone={index === 1 ? "strong" : "default"}
                  className="h-full"
                >
                  <CardHeader>
                    <CardTitle className="text-[1.35rem]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BodyText>{item.description}</BodyText>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
        <SectionHeading
          eyebrow={content.home.process.eyebrow}
          title={content.home.process.title}
          description={content.home.process.description}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {content.home.process.steps.map((step, index) => (
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
                  <CardTitle className="text-[1.45rem]">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BodyText>{step.description}</BodyText>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </PageSection>

      <PageSection containerClassName="space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)] lg:items-end">
          <SectionHeading
            eyebrow={content.home.selectedWork.eyebrow}
            title={content.home.selectedWork.title}
            description={content.home.selectedWork.description}
          />

          <Card tone="subtle">
            <CardHeader className="space-y-4">
              <Eyebrow>{content.home.selectedWork.noteEyebrow}</Eyebrow>
              <CardTitle className="text-[1.55rem]">
                {content.home.selectedWork.noteTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <BodyText>{content.home.selectedWork.noteDescription}</BodyText>
              <Link
                href={localizedPathname(locale, sitePaths.caseStudies)}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "w-full sm:w-auto",
                )}
              >
                {content.navigation[3].label}
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCaseStudies.map((item) => (
            <CaseStudyCard
              key={item.title}
              title={item.title}
              sector={item.sector}
              summary={item.summary}
              summaryLabel={content.caseStudies.labels.summaryLabel}
              addressed={item.addressed}
              addressedLabel={content.caseStudies.labels.addressedLabel}
              outcome={item.outcome}
              outcomeLabel={content.caseStudies.labels.outcomeLabel}
            />
          ))}
        </div>
      </PageSection>

      <PageSection divider="top" containerClassName="space-y-6">
        <div className="surface-panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-4">
            <Eyebrow>{content.home.finalCta.eyebrow}</Eyebrow>
            <SectionTitle className="max-w-3xl">
              {content.home.finalCta.title}
            </SectionTitle>
            <BodyText className="max-w-2xl sm:text-[1.02rem]">
              {content.home.finalCta.description}
            </BodyText>
            <CaptionText>{content.home.finalCta.supportingLine}</CaptionText>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <TrackedLink
              href={localizedPathname(locale, sitePaths.book)}
              trackingEvent={createCtaClickedEvent({
                locale,
                page: "home",
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

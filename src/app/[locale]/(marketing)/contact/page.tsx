import Link from "next/link";
import { notFound } from "next/navigation";

import { publicServiceSlugs, sitePaths } from "@/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { getMarketingContent } from "@/content/marketing";
import { LeadForm } from "@/components/marketing/lead-form";
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
import {
  isPreferredNextStepValue,
  isServiceNeededValue,
} from "@/lib/contact-submission";
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
    title: content.contact.title,
    description: content.contact.description,
    pathname: "/contact",
  });
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getMarketingContent(locale);
  const serviceQuery = Array.isArray(resolvedSearchParams?.service)
    ? resolvedSearchParams?.service[0]
    : resolvedSearchParams?.service;
  const nextStepQuery = Array.isArray(resolvedSearchParams?.preferredNextStep)
    ? resolvedSearchParams?.preferredNextStep[0]
    : resolvedSearchParams?.preferredNextStep;
  const initialValues = {
    serviceNeeded:
      serviceQuery && isServiceNeededValue(serviceQuery) ? serviceQuery : undefined,
    preferredNextStep:
      nextStepQuery && isPreferredNextStepValue(nextStepQuery)
        ? nextStepQuery
        : undefined,
  };
  const isDiscoveryCallIntent =
    initialValues.preferredNextStep === "discovery-call";
  const heroTitle = isDiscoveryCallIntent
    ? content.contact.callIntent.title
    : content.contact.title;
  const heroDescription = isDiscoveryCallIntent
    ? content.contact.callIntent.description
    : content.contact.description;
  const heroSupportingLine = isDiscoveryCallIntent
    ? content.contact.callIntent.supportingLine
    : content.contact.supportingLine;
  const heroPrimaryAction = isDiscoveryCallIntent
    ? content.contact.callIntent.primaryAction
    : content.contact.heroPrimaryAction;

  const serviceOptions = [
    ...publicServiceSlugs.map((slug) => ({
      value: slug,
      label: content.services.items[slug].title,
    })),
    {
      value: "not-sure-yet",
      label: content.contact.form.serviceNotSureLabel,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          createWebPageJsonLd({
            locale,
            pathname: sitePaths.contact,
            title: content.contact.title,
            description: content.contact.description,
            type: "ContactPage",
          }),
          createBreadcrumbJsonLd(locale, [
            { name: content.navigation[0].label, pathname: sitePaths.home },
            { name: content.navigation[4].label, pathname: sitePaths.contact },
          ]),
        ]}
      />
      <PageHero
        eyebrow={content.contact.eyebrow}
        title={heroTitle}
        description={heroDescription}
        primaryAction={{
          href: "#lead-form",
          label: heroPrimaryAction,
        }}
        secondaryAction={{
          href: localizedPathname(locale, "/services"),
          label: content.ctas.secondary,
        }}
        supportingLine={heroSupportingLine}
        supportingLabel={content.contact.highlightsLabel}
        supportingPoints={content.contact.highlights}
      />

      <PageSection containerClassName="space-y-10">
        <SectionHeading
          eyebrow={content.contact.intro.eyebrow}
          title={content.contact.intro.title}
          description={content.contact.intro.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.contact.intro.items.map((item, index) => (
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

      <PageSection
        id="lead-form"
        className="scroll-mt-24"
        tone="subtle"
        divider="both"
        containerClassName="space-y-8"
      >
        <SectionHeading
          eyebrow={content.contact.form.eyebrow}
          title={content.contact.form.title}
          description={content.contact.form.description}
          className="max-w-4xl"
        />

        {isDiscoveryCallIntent ? (
          <FadeIn>
            <div className="surface-panel max-w-4xl space-y-4 px-6 py-6 sm:px-7">
              <Badge variant="accent" className="w-fit">
                {content.contact.callIntent.badge}
              </Badge>
              <div className="space-y-3">
                <p className="text-[1.12rem] font-semibold leading-tight text-foreground">
                  {content.contact.callIntent.noteTitle}
                </p>
                <BodyText>{content.contact.callIntent.noteDescription}</BodyText>
                <CaptionText>{content.contact.callIntent.supportingLine}</CaptionText>
              </div>
            </div>
          </FadeIn>
        ) : null}

        <div className="max-w-5xl">
          <LeadForm
            content={content.contact.form}
            serviceOptions={serviceOptions}
            locale={locale}
            showHeader={false}
            submitLabelOverride={
              isDiscoveryCallIntent
                ? content.contact.callIntent.primaryAction
                : undefined
            }
            defaultValues={initialValues}
          />
        </div>
      </PageSection>

      <PageSection containerClassName="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-start">
        <SectionHeading
          eyebrow={content.contact.trust.eyebrow}
          title={content.contact.trust.title}
          description={content.contact.trust.description}
          className="max-w-4xl"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="surface-panel px-6 py-7 sm:px-7">
            <p className="text-[1.08rem] font-semibold leading-tight text-foreground">
              {content.contact.trust.bestFitTitle}
            </p>
            <BodyText className="mt-4">{content.contact.trust.bestFitDescription}</BodyText>
            <div className="mt-5 space-y-3">
              {content.contact.trust.bestFitPoints.map((point) => (
                <div
                  key={point}
                  className="surface-muted px-4 py-3.5 text-sm leading-7 text-page-muted"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel px-6 py-7 sm:px-7">
            <p className="text-[1.08rem] font-semibold leading-tight text-foreground">
              {content.contact.trust.nextStepsTitle}
            </p>
            <BodyText className="mt-4">
              {content.contact.trust.nextStepsDescription}
            </BodyText>
            <div className="mt-4 space-y-3">
              {content.contact.trust.points.map((point) => (
                <div
                  key={point}
                  className="surface-muted px-4 py-3.5 text-sm leading-7 text-page-muted"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection divider="top" containerClassName="space-y-6">
        <div className="surface-panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="space-y-4">
            <Eyebrow>{content.contact.finalCta.eyebrow}</Eyebrow>
            <SectionTitle className="max-w-3xl">
              {content.contact.finalCta.title}
            </SectionTitle>
            <BodyText className="max-w-2xl sm:text-[1.02rem]">
              {content.contact.finalCta.description}
            </BodyText>
            <CaptionText>{content.contact.finalCta.supportingLine}</CaptionText>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="#lead-form"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
            >
              {isDiscoveryCallIntent
                ? content.contact.callIntent.primaryAction
                : content.contact.finalCta.primaryAction}
            </Link>
            <Link
              href={
                isDiscoveryCallIntent
                  ? localizedPathname(locale, "/services")
                  : localizedPathname(
                      locale,
                      `${sitePaths.book}`,
                    )
              }
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full bg-page-surface-strong/90 sm:w-auto",
              )}
            >
              {isDiscoveryCallIntent
                ? content.ctas.secondary
                : content.ctas.primary}
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}

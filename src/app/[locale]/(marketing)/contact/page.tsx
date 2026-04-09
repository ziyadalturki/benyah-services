import Link from "next/link";
import { notFound } from "next/navigation";

import { serviceSlugs } from "@/config/site";
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
import { createPageMetadata } from "@/lib/metadata";
import { localizedPathname } from "@/lib/routes";
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
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getMarketingContent(locale);

  const serviceOptions = [
    ...serviceSlugs.map((slug) => ({
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
      <PageHero
        eyebrow={content.contact.eyebrow}
        title={content.contact.title}
        description={content.contact.description}
        primaryAction={{
          href: "#lead-form",
          label: content.contact.heroPrimaryAction,
        }}
        secondaryAction={{
          href: localizedPathname(locale, "/services"),
          label: content.ctas.secondary,
        }}
        supportingLine={content.contact.supportingLine}
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
        containerClassName="space-y-10"
      >
        <SectionHeading
          eyebrow={content.contact.form.eyebrow}
          title={content.contact.form.title}
          description={content.contact.form.description}
          className="max-w-4xl"
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
          <LeadForm
            content={content.contact.form}
            serviceOptions={serviceOptions}
            locale={locale}
          />

          <FadeIn>
            <Card tone="subtle" className="h-full">
              <CardHeader className="space-y-4">
                <Badge variant="accent" className="w-fit">
                  {content.contact.form.eyebrow}
                </Badge>
                <CardTitle className="text-[1.6rem]">
                  {content.contact.form.cardTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <BodyText>{content.contact.form.cardDescription}</BodyText>
                <div className="space-y-3">
                  {content.contact.form.helperPoints.map((point) => (
                    <div
                      key={point}
                      className="surface-muted px-4 py-3.5 text-sm leading-7 text-page-muted"
                    >
                      {point}
                    </div>
                  ))}
                </div>
                <CaptionText>{content.contact.form.note}</CaptionText>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </PageSection>

      <PageSection containerClassName="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-start">
        <SectionHeading
          eyebrow={content.contact.trust.eyebrow}
          title={content.contact.trust.title}
          description={content.contact.trust.description}
          className="max-w-4xl"
        />

        <div className="surface-panel px-6 py-7 sm:px-7">
          <div className="space-y-3">
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
              {content.contact.finalCta.primaryAction}
            </Link>
            <Link
              href={localizedPathname(locale, "/services")}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full bg-background/80 sm:w-auto",
              )}
            >
              {content.contact.finalCta.secondaryAction}
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}

import { getSiteUrl, siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { localizedPathname } from "@/lib/routes";

type BreadcrumbItem = {
  name: string;
  pathname: string;
};

type WebPageSchemaType =
  | "WebPage"
  | "CollectionPage"
  | "AboutPage"
  | "ContactPage";

type ServiceSchemaInput = {
  locale: Locale;
  pathname: string;
  name: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

function getLocalizedBrandName(locale: Locale) {
  return locale === "ar" ? "بِنيّة" : siteConfig.name;
}

function getAbsoluteUrl(locale: Locale, pathname: string = "/") {
  return new URL(localizedPathname(locale, pathname), getSiteUrl()).toString();
}

function getOrganizationId() {
  const url = new URL(getSiteUrl());
  url.hash = "organization";
  return url.toString();
}

export function createOrganizationJsonLd(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": getOrganizationId(),
    name: getLocalizedBrandName(locale),
    url: getSiteUrl(),
    description,
  };
}

export function createWebsiteJsonLd(
  locale: Locale,
  description: string,
) {
  const websiteUrl = getAbsoluteUrl(locale);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${websiteUrl}#website`,
    name: getLocalizedBrandName(locale),
    url: websiteUrl,
    description,
    inLanguage: locale,
    publisher: {
      "@id": getOrganizationId(),
    },
  };
}

export function createWebPageJsonLd({
  locale,
  pathname,
  title,
  description,
  type = "WebPage",
}: {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
  type?: WebPageSchemaType;
}) {
  const pageUrl = getAbsoluteUrl(locale, pathname);

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${pageUrl}#webpage`,
    name: title,
    url: pageUrl,
    description,
    inLanguage: locale,
    isPartOf: {
      "@id": `${getAbsoluteUrl(locale)}#website`,
    },
    about: {
      "@id": getOrganizationId(),
    },
  };
}

export function createBreadcrumbJsonLd(
  locale: Locale,
  items: BreadcrumbItem[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(locale, item.pathname),
    })),
  };
}

export function createServiceJsonLd({
  locale,
  pathname,
  name,
  description,
}: ServiceSchemaInput) {
  const serviceUrl = getAbsoluteUrl(locale, pathname);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name,
    serviceType: name,
    url: serviceUrl,
    description,
    provider: {
      "@id": getOrganizationId(),
    },
    brand: {
      "@type": "Brand",
      name: getLocalizedBrandName(locale),
    },
  };
}

export function createFaqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

import type { ServiceSlug } from "@/config/site";
import type { Locale } from "@/i18n/config";

type AnalyticsPropertyValue = string | number | boolean | null | undefined;

export const analyticsEventNames = {
  ctaClicked: "cta_clicked",
  serviceDetailSelected: "service_detail_selected",
  contactFormSubmitted: "contact_form_submitted",
} as const;

export type AnalyticsEventName =
  (typeof analyticsEventNames)[keyof typeof analyticsEventNames];

export type AnalyticsEventProperties = Record<
  string,
  AnalyticsPropertyValue
>;

export type AnalyticsEventDefinition = {
  name: AnalyticsEventName;
  properties: AnalyticsEventProperties;
};

type CtaDestination =
  | "book"
  | "contact"
  | "services"
  | "case_studies"
  | "service_detail";

type CtaClickEventInput = {
  locale: Locale;
  placement: string;
  label: string;
  destination: CtaDestination;
  page?: string;
  ctaType?: "primary" | "secondary";
  serviceSlug?: ServiceSlug;
};

type ServiceDetailSelectedEventInput = {
  locale: Locale;
  source: "services_overview";
  serviceSlug: ServiceSlug;
  serviceTitle: string;
};

type ContactFormSubmittedEventInput = {
  locale: Locale;
  serviceNeeded: string;
  preferredNextStep: string | null;
};

export function createCtaClickedEvent({
  locale,
  placement,
  label,
  destination,
  page,
  ctaType,
  serviceSlug,
}: CtaClickEventInput): AnalyticsEventDefinition {
  return {
    name: analyticsEventNames.ctaClicked,
    properties: {
      locale,
      page,
      placement,
      label,
      destination,
      cta_type: ctaType,
      service_slug: serviceSlug,
    },
  };
}

export function createServiceDetailSelectedEvent({
  locale,
  source,
  serviceSlug,
  serviceTitle,
}: ServiceDetailSelectedEventInput): AnalyticsEventDefinition {
  return {
    name: analyticsEventNames.serviceDetailSelected,
    properties: {
      locale,
      source,
      service_slug: serviceSlug,
      service_title: serviceTitle,
    },
  };
}

export function createContactFormSubmittedEvent({
  locale,
  serviceNeeded,
  preferredNextStep,
}: ContactFormSubmittedEventInput): AnalyticsEventDefinition {
  return {
    name: analyticsEventNames.contactFormSubmitted,
    properties: {
      locale,
      page: "contact",
      service_needed: serviceNeeded,
      preferred_next_step: preferredNextStep,
    },
  };
}

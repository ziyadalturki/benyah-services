import { serviceSlugs } from "@/config/site";
import { isLocale, type Locale } from "@/i18n/config";

const serviceNeededValues = [...serviceSlugs, "not-sure-yet"] as const;
const preferredNextStepValues = ["contact", "discovery-call"] as const;

export type ServiceNeededValue = (typeof serviceNeededValues)[number];
export type PreferredNextStepValue = (typeof preferredNextStepValues)[number];

export type ContactSubmissionField =
  | "name"
  | "companyName"
  | "email"
  | "phoneOrWhatsApp"
  | "serviceNeeded"
  | "projectBrief"
  | "preferredNextStep";

export type ContactSubmissionInput = {
  name: string;
  companyName: string;
  email: string;
  phoneOrWhatsApp: string;
  serviceNeeded: string;
  projectBrief: string;
  preferredNextStep: string;
  locale?: string;
};

export type ContactSubmissionFieldErrors = Partial<
  Record<ContactSubmissionField, string>
>;

export type ContactSubmissionPayload = {
  meta: {
    source: "website-contact-form";
    submittedAt: string;
    locale: Locale | null;
  };
  lead: {
    name: string;
    companyName: string;
    email: string;
    phoneOrWhatsApp: string | null;
    serviceNeeded: ServiceNeededValue;
    projectBrief: string;
    preferredNextStep: PreferredNextStepValue | null;
  };
};

export type ContactSubmissionSuccessResponse = {
  ok: true;
  data: {
    submittedAt: string;
    source: ContactSubmissionPayload["meta"]["source"];
  };
};

export type ContactSubmissionErrorResponse = {
  ok: false;
  error: "invalid_request" | "validation_error" | "server_error";
  message: string;
  fieldErrors?: ContactSubmissionFieldErrors;
};

export type ContactSubmissionResponse =
  | ContactSubmissionSuccessResponse
  | ContactSubmissionErrorResponse;

const validationMessages: Record<
  Locale,
  {
    invalidRequest: string;
    validation: string;
    server: string;
    nameRequired: string;
    nameInvalid: string;
    companyRequired: string;
    companyInvalid: string;
    emailRequired: string;
    emailInvalid: string;
    phoneInvalid: string;
    serviceRequired: string;
    serviceInvalid: string;
    briefRequired: string;
    briefInvalid: string;
    nextStepInvalid: string;
  }
> = {
  en: {
    invalidRequest: "The submission could not be read.",
    validation: "Please review the highlighted fields and try again.",
    server: "Something went wrong while processing the enquiry.",
    nameRequired: "Please enter your name.",
    nameInvalid: "Please enter a valid name.",
    companyRequired: "Please enter your company name.",
    companyInvalid: "Please enter a valid company name.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    phoneInvalid: "Please enter a valid phone or WhatsApp number.",
    serviceRequired: "Please choose the closest service area.",
    serviceInvalid: "Please choose a valid service area.",
    briefRequired: "Please add a short project brief.",
    briefInvalid: "Please provide a practical brief of at least 20 characters.",
    nextStepInvalid: "Please choose a valid next step.",
  },
  ar: {
    invalidRequest: "تعذر قراءة البيانات المرسلة.",
    validation: "يرجى مراجعة الحقول المظللة ثم المحاولة مرة أخرى.",
    server: "حدث خطأ أثناء معالجة الاستفسار.",
    nameRequired: "يرجى إدخال الاسم.",
    nameInvalid: "يرجى إدخال اسم صحيح.",
    companyRequired: "يرجى إدخال اسم الشركة.",
    companyInvalid: "يرجى إدخال اسم شركة صحيح.",
    emailRequired: "يرجى إدخال البريد الإلكتروني.",
    emailInvalid: "يرجى إدخال بريد إلكتروني صحيح.",
    phoneInvalid: "يرجى إدخال رقم هاتف أو واتساب صحيح.",
    serviceRequired: "يرجى اختيار الخدمة الأقرب لاحتياجك.",
    serviceInvalid: "يرجى اختيار خدمة صحيحة.",
    briefRequired: "يرجى إضافة وصف مختصر للمشروع.",
    briefInvalid: "يرجى تقديم وصف عملي لا يقل عن 20 حرفاً.",
    nextStepInvalid: "يرجى اختيار خطوة تالية صحيحة.",
  },
};

function readStringValue(value: FormDataEntryValue | unknown) {
  return typeof value === "string" ? value : "";
}

function normalizeSingleLine(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeMultiline(value: string) {
  return value.replace(/\r\n/g, "\n").trim();
}

function getLocale(value?: string) {
  return value && isLocale(value) ? value : "en";
}

export function getContactSubmissionInput(
  source: FormData | Record<string, unknown>,
): ContactSubmissionInput {
  const getValue = (key: string) =>
    source instanceof FormData ? source.get(key) : source[key];

  return {
    name: readStringValue(getValue("name")),
    companyName: readStringValue(getValue("companyName")),
    email: readStringValue(getValue("email")),
    phoneOrWhatsApp: readStringValue(getValue("phoneOrWhatsApp")),
    serviceNeeded: readStringValue(getValue("serviceNeeded")),
    projectBrief: readStringValue(getValue("projectBrief")),
    preferredNextStep: readStringValue(getValue("preferredNextStep")),
    locale: readStringValue(getValue("locale")) || undefined,
  };
}

export function isServiceNeededValue(value: string): value is ServiceNeededValue {
  return serviceNeededValues.includes(value as ServiceNeededValue);
}

export function isPreferredNextStepValue(
  value: string,
): value is PreferredNextStepValue {
  return preferredNextStepValues.includes(value as PreferredNextStepValue);
}

export function validateContactSubmission(
  input: ContactSubmissionInput,
):
  | {
      success: true;
      payload: ContactSubmissionPayload;
    }
  | {
      success: false;
      response: ContactSubmissionErrorResponse;
    } {
  const locale = getLocale(input.locale);
  const messages = validationMessages[locale];
  const fieldErrors: ContactSubmissionFieldErrors = {};

  const name = normalizeSingleLine(input.name);
  const companyName = normalizeSingleLine(input.companyName);
  const email = normalizeSingleLine(input.email).toLowerCase();
  const phoneOrWhatsApp = normalizeSingleLine(input.phoneOrWhatsApp);
  const serviceNeeded = normalizeSingleLine(input.serviceNeeded);
  const projectBrief = normalizeMultiline(input.projectBrief);
  const preferredNextStep = normalizeSingleLine(input.preferredNextStep);

  if (!name) {
    fieldErrors.name = messages.nameRequired;
  } else if (name.length < 2 || name.length > 80) {
    fieldErrors.name = messages.nameInvalid;
  }

  if (!companyName) {
    fieldErrors.companyName = messages.companyRequired;
  } else if (companyName.length < 2 || companyName.length > 120) {
    fieldErrors.companyName = messages.companyInvalid;
  }

  if (!email) {
    fieldErrors.email = messages.emailRequired;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = messages.emailInvalid;
  }

  if (phoneOrWhatsApp) {
    const digitsOnlyLength = phoneOrWhatsApp.replace(/\D/g, "").length;
    const hasValidCharacters = /^[+\d()\-\s]+$/.test(phoneOrWhatsApp);

    if (!hasValidCharacters || digitsOnlyLength < 7 || phoneOrWhatsApp.length > 30) {
      fieldErrors.phoneOrWhatsApp = messages.phoneInvalid;
    }
  }

  if (!serviceNeeded) {
    fieldErrors.serviceNeeded = messages.serviceRequired;
  } else if (!isServiceNeededValue(serviceNeeded)) {
    fieldErrors.serviceNeeded = messages.serviceInvalid;
  }

  if (!projectBrief) {
    fieldErrors.projectBrief = messages.briefRequired;
  } else if (projectBrief.length < 20 || projectBrief.length > 2500) {
    fieldErrors.projectBrief = messages.briefInvalid;
  }

  if (preferredNextStep && !isPreferredNextStepValue(preferredNextStep)) {
    fieldErrors.preferredNextStep = messages.nextStepInvalid;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      response: {
        ok: false,
        error: "validation_error",
        message: messages.validation,
        fieldErrors,
      },
    };
  }

  return {
    success: true,
    payload: {
      meta: {
        source: "website-contact-form",
        submittedAt: new Date().toISOString(),
        locale: input.locale && isLocale(input.locale) ? input.locale : null,
      },
      lead: {
        name,
        companyName,
        email,
        phoneOrWhatsApp: phoneOrWhatsApp || null,
        serviceNeeded: serviceNeeded as ServiceNeededValue,
        projectBrief,
        preferredNextStep: preferredNextStep
          ? (preferredNextStep as PreferredNextStepValue)
          : null,
      },
    },
  };
}

export function createInvalidRequestResponse(
  locale: Locale = "en",
): ContactSubmissionErrorResponse {
  return {
    ok: false,
    error: "invalid_request",
    message: validationMessages[locale].invalidRequest,
  };
}

export function createServerErrorResponse(
  locale: Locale = "en",
): ContactSubmissionErrorResponse {
  return {
    ok: false,
    error: "server_error",
    message: validationMessages[locale].server,
  };
}

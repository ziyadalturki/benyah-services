const DEFAULT_SITE_URL = "https://www.benyah.co";
const LOCAL_SITE_URL = "http://localhost:3000";
const DEFAULT_CONTACT_WEBHOOK_TIMEOUT_MS = 8000;
const MIN_CONTACT_WEBHOOK_TIMEOUT_MS = 1000;

export type AnalyticsProvider = "none" | "vercel";
export type BookingMode = "embed" | "link";

type AnalyticsEnv = {
  enabled: boolean;
  provider: AnalyticsProvider;
};

type BookingEnv = {
  url: string | null;
  mode: BookingMode;
  provider: string | null;
};

type ContactWebhookEnv = {
  url: string | null;
  bearerToken: string | null;
  timeoutMs: number;
  usingLegacyTokenAlias: boolean;
};

function readTrimmedString(value: string | undefined) {
  const trimmedValue = value?.trim();
  return trimmedValue ? trimmedValue : null;
}

function readBoolean(value: string | undefined, fallback = false) {
  if (!value) {
    return fallback;
  }

  return value.trim().toLowerCase() === "true";
}

function readAnalyticsProvider(value: string | undefined): AnalyticsProvider {
  if (!value) {
    return "vercel";
  }

  return value.trim().toLowerCase() === "vercel" ? "vercel" : "none";
}

function readBookingMode(value: string | undefined): BookingMode {
  const normalizedValue = value?.trim().toLowerCase();

  return normalizedValue === "link" ? "link" : "embed";
}

function readNormalizedUrl(value: string | undefined) {
  const trimmedValue = readTrimmedString(value);

  if (!trimmedValue) {
    return null;
  }

  return trimmedValue.startsWith("http")
    ? trimmedValue
    : `https://${trimmedValue}`;
}

function readContactWebhookTimeout(value: string | undefined) {
  const parsedValue = value ? Number.parseInt(value, 10) : Number.NaN;

  if (
    !Number.isFinite(parsedValue) ||
    parsedValue < MIN_CONTACT_WEBHOOK_TIMEOUT_MS
  ) {
    return DEFAULT_CONTACT_WEBHOOK_TIMEOUT_MS;
  }

  return parsedValue;
}

export function getResolvedSiteUrl() {
  return (
    readNormalizedUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    readNormalizedUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    (process.env.NODE_ENV === "production"
      ? DEFAULT_SITE_URL
      : LOCAL_SITE_URL)
  );
}

export function getDefaultSocialImageEnv() {
  return readTrimmedString(process.env.BENYAH_OG_IMAGE_URL);
}

export function getAnalyticsEnv(): AnalyticsEnv {
  return {
    enabled: readBoolean(
      process.env.NEXT_PUBLIC_ANALYTICS_ENABLED,
      process.env.NODE_ENV === "production",
    ),
    provider: readAnalyticsProvider(process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER),
  };
}

export function getBookingEnv(): BookingEnv {
  return {
    url: readTrimmedString(process.env.BENYAH_BOOKING_URL),
    mode: readBookingMode(process.env.BENYAH_BOOKING_MODE),
    provider: readTrimmedString(process.env.BENYAH_BOOKING_PROVIDER),
  };
}

export function getContactWebhookEnv(): ContactWebhookEnv {
  const bearerToken = readTrimmedString(
    process.env.BENYAH_CONTACT_WEBHOOK_BEARER_TOKEN,
  );
  const legacyToken = readTrimmedString(process.env.BENYAH_CONTACT_WEBHOOK_TOKEN);

  return {
    url: readTrimmedString(process.env.BENYAH_CONTACT_WEBHOOK_URL),
    bearerToken: bearerToken ?? legacyToken,
    timeoutMs: readContactWebhookTimeout(
      process.env.BENYAH_CONTACT_WEBHOOK_TIMEOUT_MS,
    ),
    usingLegacyTokenAlias: !bearerToken && Boolean(legacyToken),
  };
}

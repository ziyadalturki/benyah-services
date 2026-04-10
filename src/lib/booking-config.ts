import { getBookingEnv, type BookingMode } from "@/lib/env";

export type BookingConfig =
  | { enabled: false }
  | {
      enabled: true;
      mode: BookingMode;
      url: string;
      provider: string | null;
    };

function isValidBookingUrl(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

export function getBookingConfig(): BookingConfig {
  const env = getBookingEnv();
  const url = env.url;

  if (!url || !isValidBookingUrl(url)) {
    return { enabled: false };
  }

  return {
    enabled: true,
    mode: env.mode,
    url,
    provider: env.provider,
  };
}

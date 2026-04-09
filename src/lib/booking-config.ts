const bookingModes = ["embed", "link"] as const;

export type BookingMode = (typeof bookingModes)[number];

export type BookingConfig =
  | { enabled: false }
  | {
      enabled: true;
      mode: BookingMode;
      url: string;
      provider: string | null;
    };

function isBookingMode(value: string): value is BookingMode {
  return bookingModes.includes(value as BookingMode);
}

function isValidBookingUrl(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

export function getBookingConfig(): BookingConfig {
  const url = process.env.BENYAH_BOOKING_URL?.trim();

  if (!url || !isValidBookingUrl(url)) {
    return { enabled: false };
  }

  const rawMode = process.env.BENYAH_BOOKING_MODE?.trim().toLowerCase();
  const mode = rawMode && isBookingMode(rawMode) ? rawMode : "embed";

  return {
    enabled: true,
    mode,
    url,
    provider: process.env.BENYAH_BOOKING_PROVIDER?.trim() || null,
  };
}

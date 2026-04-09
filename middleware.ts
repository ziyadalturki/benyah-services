import { NextResponse, type NextRequest } from "next/server";

import { legacyServiceSlugRedirects } from "@/config/site";
import { defaultLocale, isLocale } from "@/i18n/config";

const PUBLIC_FILE = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (
    isLocale(maybeLocale) &&
    segments[1] === "services" &&
    segments[2] &&
    segments[2] in legacyServiceSlugRedirects
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/${maybeLocale}/services/${
      legacyServiceSlugRedirects[
        segments[2] as keyof typeof legacyServiceSlugRedirects
      ]
    }`;
    return NextResponse.redirect(url, 308);
  }

  if (isLocale(maybeLocale)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};

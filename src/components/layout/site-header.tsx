import Link from "next/link";

import { sitePaths } from "@/config/site";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteLogo } from "@/components/layout/site-logo";
import { Container } from "@/components/marketing/container";
import { buttonVariants } from "@/components/ui/button";
import type { Locale } from "@/i18n/config";
import { createCtaClickedEvent } from "@/lib/analytics-events";
import { localizedPathname } from "@/lib/routes";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  locale: Locale;
  languageLabel: string;
  navigationLabel: string;
  openNavigationLabel: string;
  closeNavigationLabel: string;
  mobileNavigationTitle: string;
  mobileNavigationDescription: string;
  ctaLabel: string;
  navigation: Array<{
    href: string;
    label: string;
  }>;
};

export function SiteHeader({
  locale,
  languageLabel,
  navigationLabel,
  openNavigationLabel,
  closeNavigationLabel,
  mobileNavigationTitle,
  mobileNavigationDescription,
  ctaLabel,
  navigation,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-page-line/75 bg-[rgba(247,246,242,0.9)] backdrop-blur-xl">
      <Container className="flex h-[5.35rem] items-center justify-between gap-6">
        <SiteLogo locale={locale} />
        <nav
          aria-label={navigationLabel}
          className="hidden items-center gap-5 lg:gap-7 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={localizedPathname(locale, item.href)}
              className="relative text-[0.92rem] font-medium tracking-[-0.01em] text-page-muted transition-colors after:absolute after:-bottom-1 after:start-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-foreground hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher locale={locale} label={languageLabel} />
          <TrackedLink
            href={localizedPathname(locale, sitePaths.book)}
            trackingEvent={createCtaClickedEvent({
              locale,
              placement: "site_header",
              label: ctaLabel,
              destination: "book",
              ctaType: "primary",
            })}
            className={cn(
              buttonVariants({ size: "lg" }),
              "min-w-[10rem] lg:min-w-[11.5rem]",
            )}
          >
            {ctaLabel}
          </TrackedLink>
        </div>
        <MobileNav
          locale={locale}
          languageLabel={languageLabel}
          navigationLabel={navigationLabel}
          openNavigationLabel={openNavigationLabel}
          closeNavigationLabel={closeNavigationLabel}
          title={mobileNavigationTitle}
          description={mobileNavigationDescription}
          ctaLabel={ctaLabel}
          navigation={navigation}
        />
      </Container>
    </header>
  );
}

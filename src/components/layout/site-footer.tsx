import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { SiteLogo } from "@/components/layout/site-logo";
import { Container } from "@/components/marketing/container";
import type { Locale } from "@/i18n/config";
import { localizedPathname } from "@/lib/routes";

type SiteFooterProps = {
  locale: Locale;
  languageLabel: string;
  navigationLabel: string;
  navigation: Array<{
    href: string;
    label: string;
  }>;
  strapline: string;
  note: string;
};

export function SiteFooter({
  locale,
  languageLabel,
  navigationLabel,
  navigation,
  strapline,
  note,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-page-line/80 bg-[rgba(248,250,252,0.72)]">
      <Container className="grid gap-10 py-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          <SiteLogo locale={locale} variant="footer" />
          <p className="ui-body max-w-md">{strapline}</p>
        </div>
        <div>
          <p className="ui-label">{navigationLabel}</p>
          <nav aria-label={navigationLabel} className="mt-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={localizedPathname(locale, item.href)}
                className="text-[0.96rem] font-medium text-foreground transition-colors hover:text-page-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-5">
          <LanguageSwitcher locale={locale} label={languageLabel} />
          <p className="ui-body">{note}</p>
        </div>
      </Container>
    </footer>
  );
}

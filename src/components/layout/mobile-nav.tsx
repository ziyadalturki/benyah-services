import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { SiteLogo } from "@/components/layout/site-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Locale } from "@/i18n/config";
import { localizedPathname } from "@/lib/routes";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  locale: Locale;
  languageLabel: string;
  ctaLabel: string;
  navigation: Array<{
    href: string;
    label: string;
  }>;
};

export function MobileNav({
  locale,
  languageLabel,
  ctaLabel,
  navigation,
}: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon-sm"
            className="bg-page-surface-strong md:hidden"
            aria-label="Open navigation"
          />
        }
      >
        <MenuIcon className="size-4" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[86%] border-page-line/80 bg-[rgba(248,250,252,0.98)] shadow-panel sm:max-w-sm"
      >
        <SheetHeader className="space-y-4 border-b border-page-line/70 px-6 py-5">
          <SiteLogo locale={locale} />
          <div className="space-y-1">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Lean marketing-site navigation with a single primary CTA.
            </SheetDescription>
          </div>
        </SheetHeader>
        <div className="flex flex-1 flex-col px-6 py-6">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={localizedPathname(locale, item.href)}
                className="rounded-[var(--radius-control)] px-4 py-3 text-[0.96rem] font-medium text-foreground transition-colors hover:bg-page-surface"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <SheetFooter className="gap-4 border-t border-page-line/70 px-6 py-5">
          <LanguageSwitcher locale={locale} label={languageLabel} />
          <Link
            href={localizedPathname(locale, "/contact")}
            className={cn(buttonVariants({ size: "lg" }), "w-full")}
          >
            {ctaLabel}
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

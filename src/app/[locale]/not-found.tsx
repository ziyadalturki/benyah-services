"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { marketingContent } from "@/content/marketing";
import { isLocale } from "@/i18n/config";
import { localizedPathname } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function LocaleNotFound() {
  const params = useParams<{ locale?: string }>();
  const locale =
    typeof params?.locale === "string" && isLocale(params.locale)
      ? params.locale
      : "en";
  const content = marketingContent[locale].notFound;

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="surface-panel max-w-xl space-y-6 px-8 py-10 text-center sm:px-10 sm:py-12">
        <p className="ui-label">{locale === "ar" ? "بِنيّة" : "Benyah"}</p>
        <h1 className="ui-title text-3xl sm:text-4xl">{content.title}</h1>
        <p className="ui-body text-base sm:text-[1.02rem]">
          {content.description}
        </p>
        <Link
          href={localizedPathname(locale)}
          className={cn(buttonVariants({ size: "lg" }), "inline-flex")}
        >
          {content.actionLabel}
        </Link>
      </div>
    </main>
  );
}

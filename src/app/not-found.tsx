import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { marketingContent } from "@/content/marketing";
import { localizedPathname } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function NotFound() {
  const content = marketingContent.en.notFound;

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="surface-panel max-w-xl space-y-6 px-8 py-10 text-center sm:px-10 sm:py-12">
        <p className="ui-label">404</p>
        <h1 className="ui-title text-3xl sm:text-4xl">{content.title}</h1>
        <p className="ui-body text-base sm:text-[1.02rem]">
          {content.description}
        </p>
        <Link
          href={localizedPathname("en")}
          className={cn(buttonVariants({ size: "lg" }), "inline-flex")}
        >
          {content.actionLabel}
        </Link>
      </div>
    </main>
  );
}

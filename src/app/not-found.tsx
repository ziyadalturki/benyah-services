import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { localizedPathname } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="max-w-xl space-y-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-page-muted">
          Benyah
        </p>
        <h1 className="font-heading text-4xl tracking-tight sm:text-5xl">
          The page you requested could not be found.
        </h1>
        <p className="text-lg leading-8 text-page-muted">
          The route may have moved, or the localized version has not been set up yet.
        </p>
        <Link
          href={localizedPathname("en")}
          className={cn(buttonVariants({ size: "lg" }), "inline-flex")}
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}

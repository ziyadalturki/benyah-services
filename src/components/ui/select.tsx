import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Select({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative">
        <select
          data-slot="select"
          className={cn(
            "control-shell h-12 w-full min-w-0 appearance-none px-4 pe-11 text-[0.96rem] text-foreground outline-none transition-[border-color,box-shadow,background-color] focus-visible:border-accent focus-visible:shadow-[var(--shadow-focus)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-page-surface disabled:opacity-60 aria-invalid:border-destructive",
            className,
          )}
          {...props}
        >
          {children}
        </select>
      <ChevronDownIcon className="pointer-events-none absolute end-4 top-1/2 size-4 -translate-y-1/2 text-page-muted" />
    </div>
  );
}

export { Select };

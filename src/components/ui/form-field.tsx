import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function FieldLabel({
  className,
  ...props
}: ComponentPropsWithoutRef<"label">) {
  return <label className={cn("ui-label block", className)} {...props} />;
}

export function FieldHint({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("ui-caption", className)} {...props} />;
}

type FormFieldProps = ComponentPropsWithoutRef<"div"> & {
  label: string;
  htmlFor?: string;
  hint?: ReactNode;
  error?: ReactNode;
  messageId?: string;
};

export function FormField({
  className,
  label,
  htmlFor,
  hint,
  error,
  messageId,
  children,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2.5", className)} {...props}>
      <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
      {children}
      {error ? (
        <FieldHint id={messageId} className="text-destructive">
          {error}
        </FieldHint>
      ) : null}
      {!error && hint ? <FieldHint id={messageId}>{hint}</FieldHint> : null}
    </div>
  );
}

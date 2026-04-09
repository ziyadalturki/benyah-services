"use client";

import { useRef, useState, type FormEventHandler } from "react";

import type { Locale } from "@/i18n/config";
import {
  createContactFormSubmittedEvent,
} from "@/lib/analytics-events";
import { trackAnalyticsEvent } from "@/lib/analytics-client";
import {
  getContactSubmissionInput,
  type ContactSubmissionErrorResponse,
  type ContactSubmissionField,
  type ContactSubmissionFieldErrors,
  type ContactSubmissionResponse,
} from "@/lib/contact-submission";
import { BodyText, CaptionText } from "@/components/marketing/text";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type LeadFormOption = {
  value: string;
  label: string;
};

type LeadFormContent = {
  title: string;
  description: string;
  note: string;
  submitLabel: string;
  fields: {
    name: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    brief: string;
    nextStep: string;
  };
  placeholders: {
    name: string;
    company: string;
    email: string;
    phone: string;
    servicePrompt: string;
    brief: string;
    nextStepPrompt: string;
  };
  nextStepOptions: LeadFormOption[];
  statuses: {
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;
  };
};

type LeadFormProps = {
  content: LeadFormContent;
  serviceOptions: LeadFormOption[];
  locale?: Locale;
  formId?: string;
  endpoint?: string;
  showHeader?: boolean;
  defaultValues?: Partial<{
    name: string;
    companyName: string;
    email: string;
    phoneOrWhatsApp: string;
    serviceNeeded: string;
    projectBrief: string;
    preferredNextStep: string;
  }>;
};

export function LeadForm({
  content,
  serviceOptions,
  locale,
  formId = "lead-form",
  endpoint = "/api/contact",
  showHeader = true,
  defaultValues,
}: LeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>();
  const [fieldErrors, setFieldErrors] = useState<ContactSubmissionFieldErrors>(
    {},
  );

  const statusCopy =
    status === "success"
      ? {
          title: content.statuses.successTitle,
          description: statusMessage ?? content.statuses.successDescription,
        }
      : status === "error"
        ? {
            title: content.statuses.errorTitle,
            description: statusMessage ?? content.statuses.errorDescription,
          }
        : null;

  const getFieldMessageId = (field: ContactSubmissionField) =>
    `${formId}-${field}-message`;

  const getFieldError = (field: ContactSubmissionField) => fieldErrors[field];

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (pending) {
      return;
    }

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    if (locale) {
      formData.set("locale", locale);
    }

    const submissionInput = getContactSubmissionInput(formData);

    setPending(true);
    setStatus("idle");
    setStatusMessage(undefined);
    setFieldErrors({});

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionInput),
      });

      const result = (await response.json()) as ContactSubmissionResponse;

      if (!response.ok || !result.ok) {
        const errorResult = result as ContactSubmissionErrorResponse;

        setStatus("error");
        setStatusMessage(
          errorResult.message || content.statuses.errorDescription,
        );
        setFieldErrors(errorResult.fieldErrors ?? {});
        return;
      }

      setStatus("success");
      setStatusMessage(content.statuses.successDescription);
      setFieldErrors({});
      if (locale) {
        trackAnalyticsEvent(
          createContactFormSubmittedEvent({
            locale,
            serviceNeeded: submissionInput.serviceNeeded,
            preferredNextStep: submissionInput.preferredNextStep || null,
          }),
        );
      }
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setStatusMessage(content.statuses.errorDescription);
      setFieldErrors({});
    } finally {
      setPending(false);
    }
  };

  return (
    <Card tone="strong" className="h-full">
      {showHeader ? (
        <CardHeader className="space-y-3">
          <CardTitle className="text-[1.7rem]">{content.title}</CardTitle>
          <BodyText>{content.description}</BodyText>
        </CardHeader>
      ) : null}
      <CardContent className="space-y-6">
        {statusCopy ? (
          <div
            role={status === "error" ? "alert" : "status"}
            aria-live={status === "error" ? "assertive" : "polite"}
            className={cn(
              "rounded-[var(--radius-control)] border px-4 py-4",
              status === "success"
                ? "border-accent/20 bg-page-accent-surface"
                : "border-destructive/15 bg-destructive/10",
            )}
          >
            <p className="ui-label">{statusCopy.title}</p>
            <p className="mt-3 text-sm leading-7 text-foreground">
              {statusCopy.description}
            </p>
          </div>
        ) : null}

        <form
          ref={formRef}
          id={formId}
          className="space-y-5"
          onSubmit={handleSubmit}
        >
          {locale ? <input type="hidden" name="locale" value={locale} /> : null}

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              label={content.fields.name}
              htmlFor={`${formId}-name`}
              error={getFieldError("name")}
              messageId={getFieldMessageId("name")}
            >
              <Input
                id={`${formId}-name`}
                name="name"
                aria-label={content.fields.name}
                aria-invalid={Boolean(getFieldError("name"))}
                aria-describedby={
                  getFieldError("name") ? getFieldMessageId("name") : undefined
                }
                autoComplete="name"
                dir="auto"
                defaultValue={defaultValues?.name ?? ""}
                placeholder={content.placeholders.name}
                required
              />
            </FormField>

            <FormField
              label={content.fields.company}
              htmlFor={`${formId}-companyName`}
              error={getFieldError("companyName")}
              messageId={getFieldMessageId("companyName")}
            >
              <Input
                id={`${formId}-companyName`}
                name="companyName"
                aria-label={content.fields.company}
                aria-invalid={Boolean(getFieldError("companyName"))}
                aria-describedby={
                  getFieldError("companyName")
                    ? getFieldMessageId("companyName")
                    : undefined
                }
                autoComplete="organization"
                dir="auto"
                defaultValue={defaultValues?.companyName ?? ""}
                placeholder={content.placeholders.company}
                required
              />
            </FormField>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              label={content.fields.email}
              htmlFor={`${formId}-email`}
              error={getFieldError("email")}
              messageId={getFieldMessageId("email")}
            >
              <Input
                id={`${formId}-email`}
                name="email"
                aria-label={content.fields.email}
                aria-invalid={Boolean(getFieldError("email"))}
                aria-describedby={
                  getFieldError("email")
                    ? getFieldMessageId("email")
                    : undefined
                }
                autoComplete="email"
                dir="ltr"
                defaultValue={defaultValues?.email ?? ""}
                placeholder={content.placeholders.email}
                type="email"
                inputMode="email"
                required
              />
            </FormField>

            <FormField
              label={content.fields.phone}
              htmlFor={`${formId}-phoneOrWhatsApp`}
              error={getFieldError("phoneOrWhatsApp")}
              messageId={getFieldMessageId("phoneOrWhatsApp")}
            >
              <Input
                id={`${formId}-phoneOrWhatsApp`}
                name="phoneOrWhatsApp"
                aria-label={content.fields.phone}
                aria-invalid={Boolean(getFieldError("phoneOrWhatsApp"))}
                aria-describedby={
                  getFieldError("phoneOrWhatsApp")
                    ? getFieldMessageId("phoneOrWhatsApp")
                    : undefined
                }
                autoComplete="tel"
                dir="ltr"
                defaultValue={defaultValues?.phoneOrWhatsApp ?? ""}
                placeholder={content.placeholders.phone}
                type="tel"
                inputMode="tel"
              />
            </FormField>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              label={content.fields.service}
              htmlFor={`${formId}-serviceNeeded`}
              error={getFieldError("serviceNeeded")}
              messageId={getFieldMessageId("serviceNeeded")}
            >
              <Select
                id={`${formId}-serviceNeeded`}
                name="serviceNeeded"
                aria-label={content.fields.service}
                aria-invalid={Boolean(getFieldError("serviceNeeded"))}
                aria-describedby={
                  getFieldError("serviceNeeded")
                    ? getFieldMessageId("serviceNeeded")
                    : undefined
                }
                defaultValue={defaultValues?.serviceNeeded ?? ""}
                required
              >
                <option value="" disabled>
                  {content.placeholders.servicePrompt}
                </option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormField>

            <FormField
              label={content.fields.nextStep}
              htmlFor={`${formId}-preferredNextStep`}
              error={getFieldError("preferredNextStep")}
              messageId={getFieldMessageId("preferredNextStep")}
            >
              <Select
                id={`${formId}-preferredNextStep`}
                name="preferredNextStep"
                aria-label={content.fields.nextStep}
                aria-invalid={Boolean(getFieldError("preferredNextStep"))}
                aria-describedby={
                  getFieldError("preferredNextStep")
                    ? getFieldMessageId("preferredNextStep")
                    : undefined
                }
                defaultValue={defaultValues?.preferredNextStep ?? ""}
              >
                <option value="" disabled>
                  {content.placeholders.nextStepPrompt}
                </option>
                {content.nextStepOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>

          <FormField
            label={content.fields.brief}
            htmlFor={`${formId}-projectBrief`}
            error={getFieldError("projectBrief")}
            messageId={getFieldMessageId("projectBrief")}
          >
            <Textarea
              id={`${formId}-projectBrief`}
              name="projectBrief"
              aria-label={content.fields.brief}
              aria-invalid={Boolean(getFieldError("projectBrief"))}
              aria-describedby={
                getFieldError("projectBrief")
                  ? getFieldMessageId("projectBrief")
                  : undefined
              }
              placeholder={content.placeholders.brief}
              defaultValue={defaultValues?.projectBrief ?? ""}
              className="min-h-44"
              dir="auto"
              minLength={20}
              required
            />
          </FormField>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CaptionText className="max-w-md">{content.note}</CaptionText>
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              disabled={pending}
              aria-disabled={pending}
            >
              {pending ? `${content.submitLabel}...` : content.submitLabel}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

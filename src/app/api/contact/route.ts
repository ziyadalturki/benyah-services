import { NextResponse } from "next/server";

import {
  createInvalidRequestResponse,
  createServerErrorResponse,
  getContactSubmissionInput,
  validateContactSubmission,
} from "@/lib/contact-submission";
import { deliverContactSubmissionToWebhook } from "@/lib/contact-webhook";
import { isLocale } from "@/i18n/config";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(createInvalidRequestResponse(), { status: 400 });
  }

  const submissionInput = getContactSubmissionInput(
    body && typeof body === "object" ? (body as Record<string, unknown>) : {},
  );

  const locale =
    submissionInput.locale && isLocale(submissionInput.locale)
      ? submissionInput.locale
      : "en";

  try {
    const result = validateContactSubmission(submissionInput);

    if (!result.success) {
      return NextResponse.json(result.response, { status: 400 });
    }

    const delivery = await deliverContactSubmissionToWebhook(result.payload);

    if (delivery.status === "failed") {
      return NextResponse.json(createServerErrorResponse(locale), {
        status: 502,
      });
    }

    if (delivery.status === "skipped") {
      console.info("[contact] Submission accepted without webhook handoff.", {
        source: result.payload.meta.source,
        submittedAt: result.payload.meta.submittedAt,
      });
    }

    return NextResponse.json(
      {
        ok: true,
        data: {
          submittedAt: result.payload.meta.submittedAt,
          source: result.payload.meta.source,
        },
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(createServerErrorResponse(locale), { status: 500 });
  }
}

import type { ContactSubmissionPayload } from "@/lib/contact-submission";
import { getContactWebhookEnv } from "@/lib/env";

type ContactWebhookConfig = {
  url: string | null;
  bearerToken: string | null;
  timeoutMs: number;
  usingLegacyTokenAlias: boolean;
};

export type ContactWebhookResult =
  | { status: "skipped" }
  | { status: "delivered"; statusCode: number }
  | {
      status: "failed";
      statusCode?: number;
      reason: "invalid_url" | "network_error" | "non_ok_response" | "timeout";
    };

let hasWarnedAboutLegacyWebhookToken = false;

function getContactWebhookConfig(): ContactWebhookConfig {
  return getContactWebhookEnv();
}

function getWebhookLabel(url: string) {
  try {
    const parsed = new URL(url);
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return "configured-webhook";
  }
}

function isValidWebhookUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function mapContactSubmissionToWebhookPayload(
  payload: ContactSubmissionPayload,
): ContactSubmissionPayload {
  return {
    meta: {
      source: payload.meta.source,
      submittedAt: payload.meta.submittedAt,
      locale: payload.meta.locale,
    },
    lead: {
      name: payload.lead.name,
      companyName: payload.lead.companyName,
      email: payload.lead.email,
      phoneOrWhatsApp: payload.lead.phoneOrWhatsApp,
      serviceNeeded: payload.lead.serviceNeeded,
      projectBrief: payload.lead.projectBrief,
      preferredNextStep: payload.lead.preferredNextStep,
    },
  };
}

function createTimeoutSignal(timeoutMs: number) {
  if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
    return {
      signal: AbortSignal.timeout(timeoutMs),
      cleanup: undefined,
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  return {
    signal: controller.signal,
    cleanup: () => clearTimeout(timeoutId),
  };
}

export async function deliverContactSubmissionToWebhook(
  payload: ContactSubmissionPayload,
): Promise<ContactWebhookResult> {
  const config = getContactWebhookConfig();

  if (config.usingLegacyTokenAlias && !hasWarnedAboutLegacyWebhookToken) {
    hasWarnedAboutLegacyWebhookToken = true;
    console.warn(
      "[contact] Using legacy BENYAH_CONTACT_WEBHOOK_TOKEN. Prefer BENYAH_CONTACT_WEBHOOK_BEARER_TOKEN.",
    );
  }

  if (!config.url) {
    return { status: "skipped" };
  }

  if (!isValidWebhookUrl(config.url)) {
    console.error("[contact] Webhook delivery skipped because the configured URL is invalid.", {
      target: "configured-webhook",
      source: payload.meta.source,
      submittedAt: payload.meta.submittedAt,
    });

    return {
      status: "failed",
      reason: "invalid_url",
    };
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "User-Agent": "benyah-website-contact/1.0",
    "X-Benyah-Event": "contact_submission.received",
  };

  if (config.bearerToken) {
    headers.Authorization = `Bearer ${config.bearerToken}`;
  }

  const { signal, cleanup } = createTimeoutSignal(config.timeoutMs);

  try {
    const webhookPayload = mapContactSubmissionToWebhookPayload(payload);
    const response = await fetch(config.url, {
      method: "POST",
      headers,
      body: JSON.stringify(webhookPayload),
      signal,
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("[contact] Webhook delivery failed.", {
        target: getWebhookLabel(config.url),
        statusCode: response.status,
        source: payload.meta.source,
        submittedAt: payload.meta.submittedAt,
      });

      return {
        status: "failed",
        statusCode: response.status,
        reason: "non_ok_response",
      };
    }

    console.info("[contact] Webhook delivered.", {
      target: getWebhookLabel(config.url),
      statusCode: response.status,
      source: payload.meta.source,
      submittedAt: payload.meta.submittedAt,
    });

    return {
      status: "delivered",
      statusCode: response.status,
    };
  } catch (error) {
    const reason =
      error instanceof Error &&
      (error.name === "TimeoutError" || error.name === "AbortError")
        ? "timeout"
        : "network_error";

    console.error("[contact] Webhook delivery failed.", {
      target: getWebhookLabel(config.url),
      reason,
      source: payload.meta.source,
      submittedAt: payload.meta.submittedAt,
    });

    return {
      status: "failed",
      reason,
    };
  } finally {
    cleanup?.();
  }
}

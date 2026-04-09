type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function normalizeJsonLdEntries(data: JsonLdProps["data"]) {
  return Array.isArray(data) ? data : [data];
}

export function JsonLd({ data }: JsonLdProps) {
  return normalizeJsonLdEntries(data).map((entry, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(entry) }}
    />
  ));
}

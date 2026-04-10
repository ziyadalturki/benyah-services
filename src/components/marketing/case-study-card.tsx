import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CaseStudyCardProps = {
  title: string;
  sector: string;
  summary: string;
  addressed?: string;
  outcome: string;
  scope?: string;
  summaryLabel?: string;
  addressedLabel?: string;
  outcomeLabel?: string;
  scopeLabel?: string;
};

export function CaseStudyCard({
  title,
  sector,
  summary,
  addressed,
  outcome,
  scope,
  summaryLabel,
  addressedLabel = "What Was Addressed",
  outcomeLabel = "Planned Outcome",
  scopeLabel = "Typical Engagement",
}: CaseStudyCardProps) {
  return (
    <FadeIn>
      <Card className="h-full">
        <CardHeader className="space-y-5">
          <Badge variant="secondary" className="w-fit">
            {sector}
          </Badge>
          <CardTitle className="text-[1.55rem]">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {summaryLabel ? (
            <div className="surface-muted px-4 py-4">
              <p className="ui-label">{summaryLabel}</p>
              <p className="mt-3 text-sm leading-7 text-foreground">{summary}</p>
            </div>
          ) : (
            <p className="ui-body">{summary}</p>
          )}
          {addressed ? (
            <div className="surface-muted px-4 py-4">
              <p className="ui-label">{addressedLabel}</p>
              <p className="mt-3 text-sm leading-7 text-foreground">{addressed}</p>
            </div>
          ) : null}
          <div className="surface-muted px-4 py-4">
            <p className="ui-label">{outcomeLabel}</p>
            <p className="mt-3 text-sm leading-7 text-foreground">{outcome}</p>
          </div>
          {scope ? (
            <div className="border-t border-page-line/65 pt-2">
              <p className="ui-label text-page-muted">{scopeLabel}</p>
              <p className="mt-3 text-sm leading-7 text-page-muted">{scope}</p>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </FadeIn>
  );
}

import { useQuery } from "@tanstack/react-query";
import { BarChart3 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { QUESTIONS } from "@/lib/survey";

export const surveyKey = ["survey-summary"];

export function SurveyResults() {
  const { data, isLoading, error } = useQuery({
    queryKey: surveyKey,
    queryFn: async () => {
      const { data, error } = await supabase.rpc("get_survey_summary");
      if (error) throw error;
      return data ?? [];
    },
  });
  if (isLoading) return <p className="text-muted-foreground">Loading results…</p>;
  if (error) return <p className="text-destructive">Couldn't load results right now.</p>;
  const rows = data ?? [];
  const total = rows.filter((r) => r.question === "device_access").reduce((a, r) => a + Number(r.total), 0);
  if (total === 0)
    return (
      <div className="rounded-3xl border border-dashed border-input bg-secondary/50 p-10 text-center">
        <BarChart3 className="mx-auto size-8 text-muted-foreground" />
        <p className="mt-4 font-display text-2xl text-primary">No responses yet</p>
        <p className="mt-2 text-muted-foreground">Results will appear here once real responses are collected.</p>
      </div>
    );
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground"><span className="font-semibold text-primary">{total}</span> real responses collected</p>
      <div className="grid gap-5 md:grid-cols-2">
        {QUESTIONS.map((q) => (
          <div key={q.key} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <p className="font-semibold text-primary">{q.label}</p>
            <div className="mt-5 space-y-3">
              {q.options.map((o) => {
                const n = Number(rows.find((r) => r.question === q.key && r.answer === o.value)?.total ?? 0);
                const pct = Math.round((n / total) * 100);
                return (
                  <div key={o.value}>
                    <div className="flex justify-between text-sm"><span>{o.label}</span><span className="text-muted-foreground">{pct}% · {n}</span></div>
                    <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-accent transition-all duration-700" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

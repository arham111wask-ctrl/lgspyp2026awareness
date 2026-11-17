import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/site/PageHero";
import { SurveyResults, surveyKey } from "@/components/site/SurveyResults";
import { supabase } from "@/integrations/supabase/client";
import { QUESTIONS, type QuestionKey } from "@/lib/survey";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/survey")({
  head: () => seo("Student Survey", "Share how you use technology to learn in Kashmir and see real, anonymous results."),
  component: Survey,
});

function Survey() {
  const qc = useQueryClient();
  const [answers, setAnswers] = useState<Partial<Record<QuestionKey, string>>>({});
  const [missing, setMissing] = useState<QuestionKey[]>([]);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const miss = QUESTIONS.filter((q) => !answers[q.key]).map((q) => q.key);
    setMissing(miss);
    if (miss.length) { toast.error("Please answer every question."); return; }
    setBusy(true);
    const { error } = await supabase.from("survey_responses").insert(answers as Record<QuestionKey, string>);
    setBusy(false);
    if (error) { toast.error("Something went wrong. Please try again."); return; }
    setDone(true);
    qc.invalidateQueries({ queryKey: surveyKey });
  }

  return (
    <>
      <PageHero eyebrow="Interactive Student Survey" title="Your experience is our evidence.">
        Five quick questions. Anonymous. Every answer helps us understand learning in Kashmir.
      </PageHero>
      <Section className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          {done ? (
            <div role="status" className="rounded-3xl bg-navy p-10 text-navy-foreground">
              <CheckCircle2 className="size-10 text-accent" />
              <h2 className="mt-5 text-3xl font-semibold">Thank you!</h2>
              <p className="mt-3 text-navy-foreground/75">Your response has been recorded. See how it compares with others.</p>
              <Button variant="hero" className="mt-6" onClick={() => { setDone(false); setAnswers({}); }}>Submit another response</Button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-6">
              {QUESTIONS.map((q, i) => (
                <fieldset key={q.key} aria-invalid={missing.includes(q.key)}
                  className={`rounded-3xl border bg-card p-6 shadow-soft ${missing.includes(q.key) ? "border-destructive" : "border-border"}`}>
                  <legend className="sr-only">{q.label}</legend>
                  <p className="font-semibold text-primary"><span className="mr-2 text-accent">{i + 1}.</span>{q.label}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {q.options.map((o) => {
                      const on = answers[q.key] === o.value;
                      return (
                        <label key={o.value} className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-ring ${on ? "border-primary bg-primary text-primary-foreground" : "border-input hover:border-primary"}`}>
                          <input type="radio" name={q.key} value={o.value} checked={on} className="sr-only"
                            onChange={() => { setAnswers({ ...answers, [q.key]: o.value }); setMissing(missing.filter((m) => m !== q.key)); }} />
                          {o.label}
                        </label>
                      );
                    })}
                  </div>
                  {missing.includes(q.key) && <p className="mt-3 text-sm text-destructive">Please choose an answer.</p>}
                </fieldset>
              ))}
              <Button type="submit" variant="pill" size="xl" disabled={busy}>{busy && <Loader2 className="animate-spin" />}Submit response</Button>
            </form>
          )}
        </div>
        <div>
          <p className="eyebrow">Live results</p>
          <h2 className="mb-6 mt-3 text-3xl font-semibold text-primary">What students are saying</h2>
          <SurveyResults />
        </div>
      </Section>
    </>
  );
}

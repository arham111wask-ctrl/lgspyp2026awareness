import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Library, PenLine, Users, Lock, FileText, Globe, MonitorPlay, Video, Unlock } from "lucide-react";
import { PageHero, Section } from "@/components/site/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/then-vs-now")({
  head: () => seo("Education: Then vs Now", "Compare traditional classroom learning in Kashmir with modern digital education."),
  component: ThenVsNow,
});

const ROWS = [
  { topic: "Reading", then: ["Textbooks and notebooks", BookOpen], now: ["E-books and PDFs", FileText] },
  { topic: "Research", then: ["Physical libraries", Library], now: ["Online educational resources", Globe] },
  { topic: "Teaching", then: ["Blackboard teaching", PenLine], now: ["Smart boards and projectors", MonitorPlay] },
  { topic: "Classes", then: ["Face-to-face learning", Users], now: ["Online classes", Video] },
  { topic: "Reach", then: ["Limited access to external resources", Lock], now: ["Global access to knowledge", Unlock] },
] as const;

function ThenVsNow() {
  const [active, setActive] = useState(0);
  return (
    <>
      <PageHero eyebrow="Education: Then vs Now" title="From chalk dust to cloud storage.">
        How students in Kashmir learn has shifted dramatically in a single generation. Select a topic to compare.
      </PageHero>
      <Section>
        <div role="tablist" aria-label="Compare topics" className="mb-10 flex flex-wrap gap-2">
          {ROWS.map((r, i) => (
            <button key={r.topic} role="tab" aria-selected={active === i} onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${active === i ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-primary"}`}>
              {r.topic}
            </button>
          ))}
        </div>
        <div className="grid overflow-hidden rounded-3xl border border-border shadow-soft md:grid-cols-2">
          <Side label="Traditional Education" tone="then" active={active} />
          <Side label="Modern Digital Education" tone="now" active={active} />
        </div>
      </Section>
    </>
  );
}

function Side({ label, tone, active }: { label: string; tone: "then" | "now"; active: number }) {
  const dark = tone === "now";
  return (
    <div className={dark ? "bg-navy p-8 text-navy-foreground md:p-12" : "bg-card p-8 md:p-12"}>
      <p className="eyebrow">{tone === "then" ? "Then" : "Now"}</p>
      <h2 className={`mt-3 text-3xl font-semibold ${dark ? "" : "text-primary"}`}>{label}</h2>
      <ul className="mt-8 space-y-3">
        {ROWS.map((r, i) => {
          const [text, Icon] = r[tone];
          const on = i === active;
          return (
            <li key={r.topic} className={`flex items-center gap-4 rounded-2xl p-4 transition-all ${on ? (dark ? "bg-navy-soft scale-[1.02]" : "bg-secondary scale-[1.02]") : "opacity-60"}`}>
              <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${on ? "bg-accent text-accent-foreground" : dark ? "bg-navy-soft" : "bg-secondary"}`}><Icon className="size-5" /></span>
              <span className="font-medium">{text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

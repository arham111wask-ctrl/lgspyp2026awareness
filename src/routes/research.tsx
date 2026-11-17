import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Placeholder } from "@/components/site/PageHero";
import { SurveyResults } from "@/components/site/SurveyResults";
import { RESEARCH } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/research")({
  head: () => seo("Our Research", "Research questions, interview findings, survey results and sources from our PYP Exhibition group."),
  component: Research,
});

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 border-t border-border py-12 md:grid-cols-[220px_1fr]">
      <div><p className="eyebrow">{n}</p><h2 className="mt-2 text-2xl font-semibold text-primary">{title}</h2></div>
      <div>{children}</div>
    </div>
  );
}

function Research() {
  return (
    <>
      <PageHero eyebrow="Our Research" title="What we asked. What we found.">
        Our PYP Exhibition group's findings, updated as our inquiry progresses.
      </PageHero>
      <Section>
        <Block n="01" title="Research questions">
          <ol className="space-y-3">{RESEARCH.questions.map((q, i) => (
            <li key={q} className="flex gap-4 text-lg"><span className="font-display text-accent">{i + 1}</span>{q}</li>))}</ol>
        </Block>
        <Block n="02" title="Interview findings">
          {RESEARCH.interviewFindings.length ? <div className="grid gap-4 sm:grid-cols-2">{RESEARCH.interviewFindings.map((f) => (
            <div key={f.title} className="rounded-2xl bg-card p-6 shadow-soft"><p className="font-semibold text-primary">{f.title}</p><p className="mt-2 text-muted-foreground">{f.detail}</p></div>))}</div>
            : <Placeholder>Findings will be added once our interviews are complete.</Placeholder>}
        </Block>
        <Block n="03" title="Survey results & charts"><SurveyResults /></Block>
        <Block n="04" title="Photographs">
          {RESEARCH.photos.length ? <div className="grid gap-4 sm:grid-cols-3">{RESEARCH.photos.map((p) => (
            <figure key={p.src}><img src={p.src} alt={p.caption} loading="lazy" className="aspect-square rounded-2xl object-cover" /><figcaption className="mt-2 text-sm text-muted-foreground">{p.caption}</figcaption></figure>))}</div>
            : <Placeholder>Photographs from our fieldwork will appear here.</Placeholder>}
        </Block>
        <Block n="05" title="References & sources">
          {RESEARCH.references.length ? <ul className="space-y-2">{RESEARCH.references.map((r) => (
            <li key={r.title}>{r.url ? <a href={r.url} target="_blank" rel="noreferrer" className="text-primary underline">{r.title}</a> : r.title}</li>))}</ul>
            : <Placeholder>Our sources will be listed here.</Placeholder>}
        </Block>
      </Section>
    </>
  );
}

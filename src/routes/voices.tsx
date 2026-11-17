import { createFileRoute } from "@tanstack/react-router";
import { Mic, Video, ImageIcon, Quote } from "lucide-react";
import { PageHero, Section } from "@/components/site/PageHero";
import { VOICES } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/voices")({
  head: () => seo("Voices of Kashmir", "Interviews with students, teachers, parents and grandparents on how learning has changed."),
  component: Voices,
});

function Voices() {
  return (
    <>
      <PageHero eyebrow="Voices of Kashmir" title="Different Generations. Different Experiences. One Future.">
        Our interviews with four generations. Recordings and quotes appear here as they are completed.
      </PageHero>
      <Section className="grid gap-6 md:grid-cols-2">
        {VOICES.map((v) => (
          <article key={v.group} className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <div className="grid aspect-video place-items-center bg-secondary">
              {v.video ? <video src={v.video} controls className="h-full w-full object-cover" />
                : v.photo ? <img src={v.photo} alt={v.name ?? v.group} className="h-full w-full object-cover" loading="lazy" />
                : <div className="flex gap-4 text-muted-foreground"><Video /><ImageIcon /><Mic /></div>}
            </div>
            <div className="p-8">
              <p className="eyebrow">{v.group}</p>
              <p className="mt-3 text-sm text-muted-foreground">We asked: “{v.prompt}”</p>
              <div className="mt-5 flex gap-3">
                <Quote className="size-6 shrink-0 text-accent" />
                {v.quote ? <p className="font-display text-xl text-primary">{v.quote}</p>
                  : <p className="italic text-muted-foreground">Interview coming soon.</p>}
              </div>
              {v.name && <p className="mt-4 text-sm font-semibold text-primary">— {v.name}</p>}
              {v.audio && <audio src={v.audio} controls className="mt-5 w-full" />}
            </div>
          </article>
        ))}
      </Section>
    </>
  );
}

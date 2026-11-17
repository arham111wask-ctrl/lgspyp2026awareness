import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Compass, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/PageHero";
import { Photo } from "@/components/site/Photo";
import { IMAGES } from "@/content/images";
import { STATS, SITE } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Education is changing", "A student-led awareness initiative on how technology is transforming education across Kashmir — its opportunities, challenges and future.", IMAGES.valley.src),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-navy">
        <Photo img={IMAGES.valley} eager className="absolute inset-0 -z-10" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 lg:px-8">
          <p className="eyebrow reveal">{SITE.tagline}</p>
          <h1 className="reveal mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-navy-foreground md:text-7xl lg:text-8xl">
            Education is changing. <span className="italic text-accent">Is everyone keeping up?</span>
          </h1>
          <p className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-navy-foreground/80">
            Technology is transforming how students learn across Kashmir. But while some students explore unlimited digital opportunities, others still struggle with connectivity and access.
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl"><Link to="/then-vs-now">EXPLORE THE CHANGE <ArrowRight /></Link></Button>
            <Button asChild variant="heroOutline" size="xl"><Link to="/challenges">DISCOVER THE CHALLENGES</Link></Button>
          </div>
        </div>
      </section>

      <Section className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Why we exist</p>
          <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">How has technology changed the way we educate ourselves in Kashmir?</h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>LEARN KASHMIR is a student-led awareness initiative. We set out to understand how phones, laptops, smart boards and the internet are reshaping learning in our valley — and who is being left behind.</p>
          <p>We spoke with students, teachers, parents and grandparents, ran our own survey, and gathered ideas for a fairer future. Everything here is based on what we have actually found, not guesses.</p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {STATS.map((s, i) => (
            <div key={s.label} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="flex items-center justify-between">
                {[<BarChart3 key="a" />, <Compass key="b" />, <Users key="c" />][i]}
                {!s.value && <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">Awaiting verified data</span>}
              </div>
              <p className="mt-8 font-display text-5xl font-semibold text-primary">{s.value ?? "—"}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              {s.source && <p className="mt-4 text-xs text-muted-foreground">Source: {s.source}</p>}
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-secondary/60">
        <Section className="grid items-center gap-10 lg:grid-cols-2">
          <Photo img={IMAGES.village} className="aspect-[4/3] rounded-3xl shadow-lift" />
          <div>
            <p className="eyebrow">Explore</p>
            <div className="mt-6 divide-y divide-border">
              {[
                ["/then-vs-now", "Then vs Now", "From blackboards to smart boards."],
                ["/challenges", "The Digital Divide", "Why access is still unequal."],
                ["/voices", "Voices of Kashmir", "Four generations, one future."],
                ["/survey", "Take the Survey", "Add your experience to our research."],
                ["/solutions", "Solutions for Tomorrow", "Practical steps forward."],
              ].map(([to, t, d]) => (
                <Link key={to} to={to as "/"} className="group flex items-center justify-between py-5">
                  <div>
                    <p className="font-display text-2xl font-semibold text-primary">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                  <ArrowRight className="size-5 text-accent transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-5xl px-5 py-24 text-center lg:px-8">
          <p className="font-display text-3xl font-semibold leading-snug md:text-5xl">
            “A student in Srinagar and a student in a remote village both deserve the same opportunity to learn.”
          </p>
          <div className="mx-auto my-12 h-px w-24 bg-accent" />
          <p className="text-xl text-navy-foreground/80 md:text-2xl">
            Technology should not decide who gets to learn. <span className="text-accent">It should give everyone the opportunity to learn.</span>
          </p>
        </div>
      </section>
    </>
  );
}

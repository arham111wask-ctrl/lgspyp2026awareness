import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { TEAM } from "@/content/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us", "LEARN KASHMIR is a student-led educational awareness initiative created for the PYP Exhibition 2026."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Nine students. One question.">
        LEARN KASHMIR is a student-led educational awareness initiative created for the PYP Exhibition 2026.
      </PageHero>
      <Section>
        <div className="rounded-3xl bg-navy p-10 text-navy-foreground md:p-16">
          <p className="eyebrow">Our research question</p>
          <p className="mt-5 font-display text-3xl font-semibold leading-snug md:text-5xl">“How is technology changing the way students in Kashmir learn?”</p>
        </div>
        <h2 className="mt-20 text-3xl font-semibold text-primary">Our research team</h2>
        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {TEAM.map((m, i) => (
            <div key={i} className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
              <div className="mx-auto grid size-20 place-items-center rounded-full bg-secondary font-display text-2xl text-primary">{m.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}</div>
              <p className="mt-4 font-semibold text-primary">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

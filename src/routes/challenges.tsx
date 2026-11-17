import { createFileRoute } from "@tanstack/react-router";
import { WifiOff, ShieldAlert, Smartphone, MapPinned, GraduationCap, BellRing } from "lucide-react";
import { PageHero, Section } from "@/components/site/PageHero";
import { Photo } from "@/components/site/Photo";
import { IMAGES } from "@/content/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/challenges")({
  head: () => seo("The Digital Divide", "The challenges students in Kashmir face with technology in education, explained simply.", IMAGES.gurez.src),
  component: Challenges,
});

const CARDS = [
  { icon: WifiOff, t: "Internet connectivity", d: "Slow or patchy signal makes it hard to join a live class, load a video, or download notes. Lessons that work in one place may not work in another." },
  { icon: ShieldAlert, t: "Shutdowns and restrictions", d: "When internet services are suspended or slowed, online learning stops too. Students can lose access to classes, homework and exam updates." },
  { icon: Smartphone, t: "Lack of devices", d: "Not every family has a smartphone or computer, and many share one device between several children and parents." },
  { icon: MapPinned, t: "Rural and urban gaps", d: "Access to good internet, devices and digital classrooms can differ between cities and remote areas, so where you live can shape how you learn." },
  { icon: GraduationCap, t: "Digital literacy", d: "Having a device is only the start. Students, teachers and parents also need to know how to use it safely and well for learning." },
  { icon: BellRing, t: "Online distractions", d: "Games, social media and endless videos are one tap away from study material, which makes focusing harder." },
];

function Challenges() {
  return (
    <>
      <PageHero eyebrow="The Digital Divide" title="Same valley. Very different access.">
        Technology opens doors — but only if you can reach them. These are the main barriers students describe.
      </PageHero>
      <Section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(({ icon: Icon, t, d }) => (
          <article key={t} className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-lift">
            <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground"><Icon className="size-6" /></span>
            <h2 className="mt-6 text-2xl font-semibold text-primary">{t}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
          </article>
        ))}
      </Section>
      <section className="relative isolate overflow-hidden bg-navy">
        <Photo img={IMAGES.gurez} className="absolute inset-0 -z-10" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto max-w-4xl px-5 py-28 text-center">
          <p className="font-display text-3xl font-semibold text-navy-foreground md:text-4xl">The divide isn't about ability. It's about access.</p>
        </div>
      </section>
    </>
  );
}

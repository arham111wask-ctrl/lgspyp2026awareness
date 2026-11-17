import { createFileRoute } from "@tanstack/react-router";
import { Laptop, Wifi, HardDriveDownload, BookOpenCheck, Presentation, Scale, HeartHandshake } from "lucide-react";
import { PageHero, Section } from "@/components/site/PageHero";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () => seo("Solutions for Tomorrow", "Practical ways to make technology-based education fairer across Kashmir."),
  component: Solutions,
});

const S = [
  { icon: Laptop, t: "Affordable devices", d: "Device-lending libraries, refurbished laptops and shared school tablets so no student is left without a screen." },
  { icon: Wifi, t: "Better connectivity", d: "Reliable internet for schools and community centres, so learning keeps going wherever students live." },
  { icon: HardDriveDownload, t: "Offline resources", d: "Downloadable lessons, e-books and videos that work without a connection." },
  { icon: BookOpenCheck, t: "Digital literacy programmes", d: "Teaching students and families how to find, judge and use information safely." },
  { icon: Presentation, t: "Teacher training", d: "Helping teachers feel confident using smart boards, online tools and blended lessons." },
  { icon: Scale, t: "Equal opportunities", d: "Making sure rural and urban students get the same chances to learn." },
  { icon: HeartHandshake, t: "Responsible use", d: "Healthy screen habits and focus strategies that put learning first." },
];

function Solutions() {
  return (
    <>
      <PageHero eyebrow="Solutions for Tomorrow" title="Small steps. Shared future.">
        Ideas from our research for closing the gap — some for governments, some for schools, and some anyone can start today.
      </PageHero>
      <Section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {S.map(({ icon: Icon, t, d }, i) => (
          <article key={t} className={`rounded-3xl p-8 shadow-soft ${i === 0 ? "bg-navy text-navy-foreground sm:col-span-2" : "border border-border bg-card"}`}>
            <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground"><Icon className="size-6" /></span>
            <p className="mt-6 text-xs font-bold tracking-widest text-accent">0{i + 1}</p>
            <h2 className={`mt-1 text-2xl font-semibold ${i === 0 ? "" : "text-primary"}`}>{t}</h2>
            <p className={`mt-3 leading-relaxed ${i === 0 ? "text-navy-foreground/75" : "text-muted-foreground"}`}>{d}</p>
          </article>
        ))}
      </Section>
    </>
  );
}

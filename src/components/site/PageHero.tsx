import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="reveal mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] text-primary md:text-6xl">{title}</h1>
        {children && <div className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8 ${className}`}>{children}</section>;
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-input bg-secondary/50 p-6 text-sm text-muted-foreground">{children}</div>
  );
}

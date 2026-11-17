import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:px-8">
        <div>
          <p className="font-display text-2xl font-semibold">LEARN<span className="text-accent">·</span>KASHMIR</p>
          <p className="mt-3 max-w-sm text-sm text-navy-foreground/70">{SITE.tagline}</p>
          <p className="mt-6 text-xs text-navy-foreground/50">A student-led awareness initiative · PYP Exhibition 2026</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-navy-foreground/75 hover:text-accent">{n.label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

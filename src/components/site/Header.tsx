import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-baseline gap-1 font-display text-xl font-semibold text-primary" onClick={() => setOpen(false)}>
          LEARN<span className="text-accent">·</span>KASHMIR
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="rounded-full p-2 text-primary lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background px-5 py-3 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground data-[status=active]:bg-secondary data-[status=active]:text-accent">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

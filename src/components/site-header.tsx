import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/creations", label: "Creations" },
  { to: "/about", label: "Our story" },
  { to: "/contact", label: "Enquire" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="thaddeus creates home" onClick={() => setOpen(false)}>
          <span className="grid size-9 -rotate-3 place-items-center rounded-md bg-primary font-display text-lg font-medium text-primary-foreground transition-transform group-hover:rotate-0">t</span>
          <span className="font-display text-[15px] font-medium leading-none sm:text-base">thaddeus creates</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.to} to={link.to} activeOptions={{ exact: link.to === "/" }} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }}>{link.label}</Link>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="absolute inset-x-0 top-full border-b border-border bg-background px-5 py-4 shadow-sm md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {links.map((link) => (
              <Link key={link.to} to={link.to} activeOptions={{ exact: link.to === "/" }} className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground" activeProps={{ className: "bg-muted text-foreground" }} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { creations } from "@/lib/creations";

const links = [
  { to: "/", label: "Home" },
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
          <Link to="/" activeOptions={{ exact: true }} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }}>Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring data-[state=open]:text-foreground">
              Creations <ChevronDown className="size-4" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuItem asChild><Link to="/creations" className="font-medium">All creations</Link></DropdownMenuItem>
              {creations.map((creation) => (
                <DropdownMenuItem key={creation.slug} asChild>
                  <Link to="/creations/$slug" params={{ slug: creation.slug }}>{creation.shortName}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {links.slice(1).map((link) => (
            <Link key={link.to} to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-semibold" }}>{link.label}</Link>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="absolute inset-x-0 top-full max-h-[80vh] overflow-y-auto border-b border-border bg-background px-5 py-4 shadow-sm md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            <Link to="/" activeOptions={{ exact: true }} className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground" activeProps={{ className: "bg-muted text-foreground" }} onClick={() => setOpen(false)}>Home</Link>
            <Link to="/creations" className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground" activeProps={{ className: "bg-muted text-foreground" }} onClick={() => setOpen(false)}>All creations</Link>
            <div className="grid gap-1 border-l border-border pl-3">
              {creations.map((creation) => (
                <Link key={creation.slug} to="/creations/$slug" params={{ slug: creation.slug }} className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground" activeProps={{ className: "bg-muted text-foreground" }} onClick={() => setOpen(false)}>{creation.shortName}</Link>
              ))}
            </div>
            {links.slice(1).map((link) => (
              <Link key={link.to} to={link.to} className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground" activeProps={{ className: "bg-muted text-foreground" }} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

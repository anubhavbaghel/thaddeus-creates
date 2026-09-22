import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Heart, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { creations } from "@/lib/creations";

function BotanicalSprig({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 70 30" fill="none" aria-hidden="true">
      <path d="M3 26C18 24 29 17 42 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M18 21C14 15 15 11 18 8C22 13 22 17 18 21Z" fill="currentColor" opacity=".72" />
      <path d="M28 16C27 10 30 6 34 4C36 10 33 14 28 16Z" fill="currentColor" opacity=".5" />
      <path d="M34 12C40 12 44 14 46 18C40 19 36 17 34 12Z" fill="currentColor" opacity=".7" />
      <circle cx="47" cy="4" r="2" fill="currentColor" />
      <circle cx="54" cy="8" r="1.5" fill="currentColor" opacity=".65" />
    </svg>
  );
}

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      className="group relative flex min-w-0 flex-col items-center px-2 py-1 text-center"
      aria-label="thaddeus creates home"
      onClick={onClick}
    >
      <span className="font-display text-[1.58rem] font-medium leading-none text-foreground sm:text-[1.72rem]">thaddeus</span>
      <span className="mt-0.5 font-display text-[0.92rem] font-light leading-none text-muted-foreground">creates</span>
      <span className="mt-2 hidden h-px w-20 bg-border lg:block" aria-hidden="true" />
      <Heart className="absolute -right-2 top-0 size-3 rotate-12 text-primary opacity-80 transition-transform group-hover:rotate-0" strokeWidth={1.8} aria-hidden="true" />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="relative mx-auto grid h-[4.75rem] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 md:h-[5.75rem] md:grid-cols-[1fr_auto_1fr] lg:px-12">
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <Link to="/" activeOptions={{ exact: true }} className="atelier-nav-link" activeProps={{ className: "atelier-nav-link-active" }}>Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="atelier-nav-link group flex items-center gap-1.5 data-[state=open]:text-foreground">
              Creations <ChevronDown className="size-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" sideOffset={20} className="w-[22rem] overflow-hidden rounded-lg border-border bg-popover p-0 shadow-xl">
              <div className="flex items-center justify-between border-b border-border bg-muted/55 px-5 py-4">
                <div>
                  <p className="section-kicker">The collection</p>
                  <p className="mt-1 font-display text-lg font-medium text-foreground">Made for your moments</p>
                </div>
                <BotanicalSprig className="w-16 text-secondary-foreground/60" />
              </div>
              <div className="p-2">
                <DropdownMenuItem asChild className="rounded-md px-3 py-2.5 font-medium">
                  <Link to="/creations" className="flex items-center justify-between">All creations <ArrowUpRight className="size-4 text-primary" /></Link>
                </DropdownMenuItem>
                <div className="my-1 h-px bg-border" />
                {creations.map((creation, index) => (
                  <DropdownMenuItem key={creation.slug} asChild className="rounded-md px-3 py-2.5">
                    <Link to="/creations/$slug" params={{ slug: creation.slug }} className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-center">
                      <span className="font-display text-xs text-muted-foreground">0{index + 1}</span>
                      <span className="truncate">{creation.shortName}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="justify-self-start md:justify-self-center"><Wordmark onClick={() => setOpen(false)} /></div>

        <nav className="hidden items-center justify-end gap-8 md:flex" aria-label="Secondary navigation">
          <Link to="/about" className="atelier-nav-link" activeProps={{ className: "atelier-nav-link-active" }}>Our story</Link>
          <Link to="/contact" className="atelier-nav-link" activeProps={{ className: "atelier-nav-link-active" }}>Enquire</Link>
          <a href="https://www.instagram.com/thaddeus_creates/" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" aria-label="Follow thaddeus creates on Instagram">
            <Instagram className="size-[1.1rem]" strokeWidth={1.6} />
          </a>
        </nav>

        <Button variant="ghost" size="icon" className="relative z-10 justify-self-end rounded-full border border-border bg-background md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex min-h-full max-w-lg flex-col px-6 pb-8 pt-7" aria-label="Mobile navigation">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="section-kicker">Menu</span>
              <BotanicalSprig className="w-16 text-secondary-foreground/60" />
            </div>
            <Link to="/" activeOptions={{ exact: true }} className="mobile-main-link" activeProps={{ className: "text-secondary-foreground" }} onClick={() => setOpen(false)}>
              <span>Home</span><span className="text-primary">01</span>
            </Link>
            <div className="border-y border-border py-5">
              <div className="mb-4 flex items-end justify-between">
                <Link to="/creations" className="font-display text-2xl font-light text-foreground" onClick={() => setOpen(false)}>Creations</Link>
                <span className="text-xs text-muted-foreground">02</span>
              </div>
              <div className="grid gap-1 border-l border-primary/70 pl-4">
                {creations.map((creation) => (
                  <Link key={creation.slug} to="/creations/$slug" params={{ slug: creation.slug }} className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-foreground font-medium" }} onClick={() => setOpen(false)}>{creation.shortName}</Link>
                ))}
              </div>
            </div>
            <Link to="/about" className="mobile-main-link" activeProps={{ className: "text-secondary-foreground" }} onClick={() => setOpen(false)}><span>Our story</span><span className="text-primary">03</span></Link>
            <Link to="/contact" className="mobile-main-link border-b border-border" activeProps={{ className: "text-secondary-foreground" }} onClick={() => setOpen(false)}><span>Enquire</span><span className="text-primary">04</span></Link>
            <div className="mt-auto flex items-end justify-between gap-6 pt-10">
              <p className="max-w-48 text-[0.65rem] font-medium uppercase leading-relaxed text-muted-foreground">Made by hand, made with heart</p>
              <a href="https://www.instagram.com/thaddeus_creates/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground" aria-label="Follow thaddeus creates on Instagram">
                <Instagram className="size-4 text-primary" /> Instagram
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

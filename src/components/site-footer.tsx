import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-foreground px-5 py-10 text-background sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div><Link to="/" className="font-display text-xl font-medium">thaddeus creates</Link><p className="mt-2 max-w-sm text-sm leading-6 text-background/65">Personal pieces, thoughtfully made for the moments worth keeping.</p></div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-background/70" aria-label="Footer navigation"><Link to="/creations" className="hover:text-background">Creations</Link><Link to="/about" className="hover:text-background">Our story</Link><Link to="/contact" className="hover:text-background">Enquire</Link><a href="https://www.instagram.com/thaddeus_creates/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-background"><Instagram className="size-4" /> Instagram</a></nav>
      </div>
    </footer>
  );
}
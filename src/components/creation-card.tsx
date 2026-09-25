import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Creation } from "@/lib/creations";

export function CreationCard({ creation, priority = false }: { creation: Creation; priority?: boolean }) {
  return (
    <article className="group">
      <Link to="/creations/$slug" params={{ slug: creation.slug }} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
        <div className="relative overflow-hidden rounded-lg bg-muted">
          <img src={creation.image} alt={creation.imageAlt} width={1200} height={900} loading={priority ? "eager" : "lazy"} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
          <div className="absolute bottom-3 left-3 rounded-md bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-sm border border-border/50">
            {creation.startingPrice}
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 pt-4">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-semibold uppercase text-muted-foreground">{creation.category}</p>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{creation.craftingTime}</span>
            </div>
            <h2 className="mt-1 font-display text-2xl font-medium leading-tight">{creation.shortName}</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{creation.summary}</p>
          </div>
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </div>
      </Link>
    </article>
  );
}
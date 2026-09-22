import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Creation } from "@/lib/creations";

export function CreationCard({ creation, priority = false }: { creation: Creation; priority?: boolean }) {
  return (
    <article className="group">
      <Link to="/creations/$slug" params={{ slug: creation.slug }} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
        <div className="overflow-hidden rounded-lg bg-muted"><img src={creation.image} alt={creation.imageAlt} width={1200} height={900} loading={priority ? "eager" : "lazy"} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" /></div>
        <div className="flex items-start justify-between gap-4 pt-4"><div><p className="text-xs font-semibold uppercase text-muted-foreground">{creation.category}</p><h2 className="mt-1 font-display text-2xl font-medium leading-tight">{creation.shortName}</h2><p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{creation.summary}</p></div><ArrowUpRight className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" /></div>
      </Link>
    </article>
  );
}
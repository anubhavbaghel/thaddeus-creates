import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Creation } from "@/lib/creations";
import { getProductWhatsAppLink } from "@/lib/whatsapp";

export function CreationCard({ creation, priority = false }: { creation: Creation; priority?: boolean }) {
  const whatsappUrl = getProductWhatsAppLink(creation.name, creation.startingPrice);

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-card p-4 transition-all duration-300 hover:shadow-md">
      <div>
        <Link to="/creations/$slug" params={{ slug: creation.slug }} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
          <div className="relative overflow-hidden rounded-lg bg-muted">
            <img src={creation.image} alt={creation.imageAlt} width={1200} height={900} loading={priority ? "eager" : "lazy"} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
            <div className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm border border-border/50">
              {creation.category}
            </div>
            <div className="absolute bottom-3 left-3 rounded-md bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-sm border border-border/50">
              {creation.startingPrice}
            </div>
          </div>
          <div className="flex items-start justify-between gap-4 pt-4">
            <div>
              <span className="text-xs text-muted-foreground">{creation.craftingTime}</span>
              <h2 className="mt-1 font-display text-2xl font-medium leading-tight group-hover:text-primary transition-colors">{creation.shortName}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{creation.summary}</p>
            </div>
            <ArrowUpRight className="mt-1 size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </div>
        </Link>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5">
        <Link
          to="/creations/$slug"
          params={{ slug: creation.slug }}
          className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          View Details ➔
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label={`Enquire about ${creation.name} on WhatsApp`}
        >
          <img src="/whatsapp-svgrepo-com.svg" alt="" className="size-3.5 shrink-0" />
          WhatsApp Order
        </a>
      </div>
    </article>
  );
}
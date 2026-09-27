import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { realWork, type RealWorkItem } from "@/lib/real-work";

const galleryCategories = ["All", "Resin", "Bouquets", "Paper"] as const;

export function StudioWorkGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [displayCount, setDisplayCount] = useState<number>(12);

  const filteredItems = selectedCategory === "All"
    ? realWork
    : realWork.filter((item) => item.category === selectedCategory);

  const visibleItems = filteredItems.slice(0, displayCount);
  const hasMore = displayCount < filteredItems.length;

  return (
    <section className="border-t border-border bg-background px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker flex items-center gap-2">
              <Sparkles className="size-3.5 text-primary" /> Studio Gallery ({realWork.length} Creations)
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-light leading-tight sm:text-6xl text-foreground">
              Real orders, crafted by hand for our clients.
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2" aria-label="Filter studio work">
            {galleryCategories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(cat);
                  setDisplayCount(12);
                }}
                className="rounded-full text-xs font-semibold"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleItems.map((item, idx) => (
            <figure
              key={`${item.src}-${idx}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/80 bg-card transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={768}
                  height={1024}
                  loading={idx < 4 ? "eager" : "lazy"}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm border border-border/60">
                  {item.category}
                </div>
              </div>

              <figcaption className="flex items-center justify-between gap-2 p-4 bg-card border-t border-border/70">
                <div>
                  <h3 className="font-display text-base font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground">1-of-1 Handmade</p>
                </div>
                
                <Link
                  to="/contact"
                  search={{ creation: item.label }}
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={`Enquire about ${item.label}`}
                >
                  <ArrowUpRight className="size-4" />
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setDisplayCount((prev) => prev + 12)}
              className="border-border bg-card hover:bg-accent text-foreground"
            >
              Load more real work ({filteredItems.length - displayCount} remaining)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

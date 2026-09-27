import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CreationCard } from "@/components/creation-card";
import { Button } from "@/components/ui/button";
import { categories, creations } from "@/lib/creations";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Custom Keepsakes | thaddeus creates" },
      { name: "description", content: "Explore custom resin frames, name keychains, celebration thalis, cards and satin flower bouquets available for custom order." },
      { property: "og:title", content: "Shop Custom Keepsakes | thaddeus creates" },
      { property: "og:description", content: "Browse personalised resin, paper and satin keepsakes made for your special moments." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://thaddeuscreates.shop/shop" },
      { property: "og:image", content: "https://thaddeuscreates.shop/og-image.jpg" },
      { property: "og:image:secure_url", content: "https://thaddeuscreates.shop/og-image.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://thaddeuscreates.shop/og-image.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Handmade Custom Keepsakes & Services",
          itemListElement: creations.map((creation, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: creation.name,
            description: creation.summary,
            url: `https://thaddeuscreates.shop/creations/${creation.slug}`,
          })),
        }),
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const filtered = category === "All" ? creations : creations.filter((item) => item.category === category);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12">
        <p className="section-kicker">Shop Collections & Services</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <h1 className="max-w-[14ch] font-display text-5xl font-light leading-[0.98] sm:text-7xl text-foreground">
              Handmade options for your moments.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Choose a creation style below to customize with your own photos, names, dates, and color story.
            </p>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-3">
            <Link
              to="/creations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Browse Studio Gallery (35 Real Works) ➔
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" aria-label="Filter shop items">
          {categories.map((item) => (
            <Button
              key={item}
              variant={category === item ? "default" : "outline"}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className="rounded-full text-xs font-semibold"
            >
              {item}
            </Button>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((creation, index) => (
            <CreationCard key={creation.slug} creation={creation} priority={index < 2} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-background p-8 sm:p-12 lg:p-16 shadow-lg text-center">
          <span className="section-kicker">Have something unique in mind?</span>
          <h2 className="mt-3 font-display text-4xl font-light sm:text-5xl text-foreground">
            Let’s shape your idea together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-sm sm:text-base leading-relaxed">
            Every piece is made slowly by hand. Tell us about the person, occasion, and special details you want to include.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" variant="tactile">
              <Link to="/contact">
                Start Custom Enquiry <ArrowUpRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

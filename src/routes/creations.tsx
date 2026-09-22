import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CreationCard } from "@/components/creation-card";
import { Button } from "@/components/ui/button";
import { categories, creations } from "@/lib/creations";

export const Route = createFileRoute("/creations")({
  head: () => ({ meta: [
    { title: "Custom Creations | thaddeus creates" },
    { name: "description", content: "Browse custom resin frames, name keychains, celebration thalis, handmade cards and satin bouquets." },
    { property: "og:title", content: "Custom Creations | thaddeus creates" },
    { property: "og:description", content: "Explore personalised resin, paper and satin keepsakes made for meaningful occasions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CreationsPage,
});

function CreationsPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const filtered = category === "All" ? creations : creations.filter((item) => item.category === category);
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12">
        <p className="section-kicker">The collection</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end"><h1 className="max-w-[12ch] font-display text-5xl font-light leading-[0.98] sm:text-7xl">A little something, made personal.</h1><p className="max-w-lg text-base leading-7 text-muted-foreground">Explore the materials, forms and occasions that can become the starting point for your own custom piece.</p></div>
        <div className="mt-10 flex flex-wrap gap-2" aria-label="Filter creations">{categories.map((item) => <Button key={item} variant={category === item ? "default" : "outline"} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</Button>)}</div>
      </section>
      <section className="border-t border-border bg-card px-5 py-14 sm:px-8 sm:py-20 lg:px-12"><div className="mx-auto grid max-w-7xl gap-x-6 gap-y-14 sm:grid-cols-2">{filtered.map((creation, index) => <CreationCard key={creation.slug} creation={creation} priority={index < 2} />)}</div></section>
    </main>
  );
}
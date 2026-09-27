import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { StudioWorkGrid } from "@/components/studio-work-grid";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/creations/")({
  head: () => ({ meta: [
    { title: "Studio Creations & Gallery | thaddeus creates" },
    { name: "description", content: "Explore 35 real handmade resin, paper and satin flower creations made for our clients." },
    { property: "og:title", content: "Studio Creations & Gallery | thaddeus creates" },
    { property: "og:description", content: "Browse our gallery of real handmade keepsakes, resin frames, keychains, thalis and satin bouquets." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://thaddeuscreates.shop/creations" },
    { property: "og:image", content: "https://thaddeuscreates.shop/og-image.jpg" },
    { property: "og:image:secure_url", content: "https://thaddeuscreates.shop/og-image.jpg" },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Studio Creations & Gallery | thaddeus creates" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "https://thaddeuscreates.shop/og-image.jpg" },
  ] }),
  component: CreationsPage,
});

function CreationsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-12">
        <p className="section-kicker">Studio Gallery</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <h1 className="max-w-[14ch] font-display text-5xl font-light leading-[0.98] sm:text-7xl">
              Real work, made with heart.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Explore 35+ real handcrafted pieces created for our clients, from floral resin frames to satin rose bouquets.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <Button asChild variant="tactile" size="lg">
              <Link to="/shop">
                View Shop & Ordering Options <ArrowUpRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Full Studio Gallery Grid */}
      <StudioWorkGrid />
    </main>
  );
}
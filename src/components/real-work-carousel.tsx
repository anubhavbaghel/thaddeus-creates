import { Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { realWork, type RealWorkItem } from "@/lib/real-work";

const instagramUrl = "https://www.instagram.com/thaddeus_creates/";

export function RealWorkCarousel({
  items = realWork,
  compact = false,
}: {
  items?: RealWorkItem[];
  compact?: boolean;
}) {
  return (
    <section className="border-y border-border bg-card px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Made in the studio</p>
            <h2 className="mt-3 max-w-[13ch] font-display text-4xl font-light leading-[1.02] sm:text-6xl">
              Real work, made with heart.
            </h2>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4"
          >
            <Instagram className="size-5" /> See more on Instagram
          </a>
        </div>

        <Carousel className="mt-10" opts={{ align: "start", loop: true }} aria-label="Real work gallery">
          <CarouselContent className="-ml-3 sm:-ml-5">
            {items.map((item, index) => (
              <CarouselItem
                key={`${item.label}-${index}`}
                className={`pl-3 sm:pl-5 ${compact ? "basis-[86%] sm:basis-1/2 lg:basis-1/3" : "basis-[82%] sm:basis-1/2 lg:basis-[36%]"}`}
              >
                <figure className="group overflow-hidden rounded-lg bg-muted">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={768}
                    height={1024}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <figcaption className="flex items-center justify-between gap-3 border-t border-border bg-background px-4 py-4">
                    <span className="font-display text-lg font-medium">{item.label}</span>
                    <span className="section-kicker shrink-0">{item.category}</span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex gap-2">
            <CarouselPrevious className="static size-11 translate-x-0 translate-y-0 rounded-md" />
            <CarouselNext className="static size-11 translate-x-0 translate-y-0 rounded-md" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
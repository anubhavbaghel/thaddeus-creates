import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeSocialProof } from "@/components/home-social-proof";
import { RealWorkCarousel } from "@/components/real-work-carousel";
import { HeroWorkStack } from "@/components/hero-work-stack";
import { creations } from "@/lib/creations";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "thaddeus creates | Personalised Handmade Keepsakes" },
    { name: "description", content: "Custom resin frames, keychains, thalis, invitations, occasion cards and satin flower bouquets, handmade for your moments." },
    { property: "og:title", content: "thaddeus creates | Handmade just for you" },
    { property: "og:description", content: "Personalised resin, paper and satin keepsakes for every celebration." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: HomePage,
});

function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-12 lg:pb-24">
        <div className="grid items-end gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <div className="relative z-10 pb-2"><p className="section-kicker flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /> Handmade, one at a time</p><h1 className="mt-6 max-w-[10ch] font-display text-[clamp(3.5rem,11vw,6.8rem)] font-light leading-[0.91]">Little things, made <span className="ink-swish">all yours.</span></h1><p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">Resin, paper and satin keepsakes shaped around your people, your stories and your happiest days.</p><Button asChild variant="tactile" size="xl" className="mt-8"><Link to="/creations">Explore custom keepsakes <ArrowUpRight className="size-5" /></Link></Button></div>
          <HeroWorkStack />
        </div>
      </section>

      <section className="border-y border-border bg-card px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">Our Handmade Services & Collections</p>
              <h2 className="mt-3 max-w-[16ch] font-display text-4xl font-light leading-tight sm:text-6xl">
                Personalised keepsakes for your special moments
              </h2>
            </div>
            <Link to="/creations" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Explore full gallery <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {creations.map((creation) => (
              <article key={creation.slug} className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border/80 bg-background transition-all duration-300 hover:shadow-lg">
                <div>
                  <div className="relative overflow-hidden bg-muted">
                    <img
                      src={creation.image}
                      alt={creation.imageAlt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm border border-border/60">
                      {creation.category}
                    </div>
                    <div className="absolute bottom-3 left-3 rounded-md bg-foreground/90 px-3 py-1 text-xs font-semibold text-background backdrop-blur-sm">
                      {creation.startingPrice}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Crafting time: {creation.craftingTime}</span>
                    </div>

                    <h3 className="mt-2 font-display text-2xl font-medium leading-snug group-hover:text-primary transition-colors">
                      {creation.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {creation.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {creation.options.slice(0, 3).map((opt) => (
                        <span key={opt} className="rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                          {opt}
                        </span>
                      ))}
                      {creation.options.length > 3 && (
                        <span className="rounded-md bg-secondary/80 px-2 py-1 text-xs font-medium text-muted-foreground">
                          +{creation.options.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/70 p-4 bg-card/50 flex items-center justify-between">
                  <Link
                    to="/contact"
                    search={{ creation: creation.shortName }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    Customize Order <ArrowUpRight className="size-3.5" />
                  </Link>
                  <Link
                    to="/creations/$slug"
                    params={{ slug: creation.slug }}
                    className="text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    View Details ➔
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-24 lg:px-12"><div><p className="section-kicker">Make it unmistakably theirs</p><h2 className="mt-3 max-w-[12ch] font-display text-4xl font-light leading-[1.02] sm:text-6xl">Your story is the finishing touch.</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">Bring the photo, the name, the date or even a half-formed idea. Each detail is chosen with you, then made slowly by hand.</p><div className="mt-8 flex flex-wrap gap-2.5">{["Names & dates", "Your photos", "Colour stories", "Flowers & finishes", "Gift wrapping"].map((item) => <span key={item} className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold">{item}</span>)}</div></div><div><p className="section-kicker">From hello to handmade</p><ol className="mt-5 border-t border-border">{[["01", "Share your idea", "Tell us who it is for, the occasion and the little details you love."], ["02", "Shape it together", "We align the colours, photos, names and finishing touches with you."], ["03", "Made just for you", "Your piece is crafted by hand and prepared to become part of the moment."]].map(([number, title, copy]) => <li key={number} className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-border py-6 sm:grid-cols-[5.5rem_1fr]"><span className="font-display text-5xl font-light leading-none text-primary sm:text-6xl">{number}</span><div><h3 className="font-display text-xl font-medium">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p></div></li>)}</ol></div></section>

      <section className="bg-secondary px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="section-kicker text-secondary-foreground/65">The studio approach</p><h2 className="mt-3 max-w-3xl font-display text-4xl font-light leading-tight text-secondary-foreground sm:text-6xl">Small details make a gift feel truly seen.</h2><p className="mt-5 max-w-xl leading-7 text-secondary-foreground/70">Every piece begins with a person or moment, then finds its shape through material, colour and careful handwork.</p></div><Button asChild variant="outline" size="lg" className="border-secondary-foreground/25 bg-transparent text-secondary-foreground hover:bg-background"><Link to="/about">Read our story <ArrowRight /></Link></Button></div></section>
      <RealWorkCarousel />
      <HomeSocialProof />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-8 sm:p-12 lg:p-16 shadow-lg">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="size-2 rounded-full bg-primary" /> Start Your Custom Creation
              </span>

              <h2 className="mt-4 font-display text-4xl font-light leading-[1.02] sm:text-6xl text-foreground">
                Let’s turn your moment into something you can hold.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Whether you have a photo ready, a specific colour palette, or just a quiet gift idea in mind — we craft every piece slowly and thoughtfully around your story.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs font-medium text-foreground">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" /> 100% Handcrafted Botanicals
                </span>
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" /> 5–7 Days Turnaround
                </span>
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary" /> 1-on-1 Design Approval
                </span>
              </div>

              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Button asChild size="xl" variant="tactile" className="w-full sm:w-auto">
                  <Link to="/contact">
                    Start Custom Order <ArrowUpRight className="size-5" />
                  </Link>
                </Button>

                <Button asChild size="xl" variant="outline" className="w-full sm:w-auto border-border bg-background text-foreground hover:bg-accent">
                  <a
                    href="https://wa.me/919654435911?text=Hi%20Thaddeus%20Creates,%20I'm%20interested%20in%20a%20custom%20keepsake"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/whatsapp-svgrepo-com.svg" alt="" className="size-5 shrink-0" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Featured Artwork / Studio Preview Card */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border border-border bg-background p-3 shadow-md">
                <img
                  src={creations[0]?.image || "/images/resin-frame.jpg"}
                  alt="Handmade custom keepsake sample"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
                <div className="mt-3 flex items-center justify-between px-1">
                  <div>
                    <p className="font-display text-lg font-medium text-foreground">{creations[0]?.name}</p>
                    <p className="text-xs text-muted-foreground">{creations[0]?.startingPrice} · Handcrafted to order</p>
                  </div>
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    ★ 5.0 Rated Keepsake
                  </span>
                </div>
              </div>

              {/* Overlapping floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-lg border border-border bg-background p-3.5 shadow-xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded-full bg-primary/15 text-primary font-display text-lg font-bold">
                    TC
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Made slowly by hand</p>
                    <p className="text-[0.7rem] text-muted-foreground">Each piece is 1-of-1 unique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
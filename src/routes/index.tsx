import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeSocialProof } from "@/components/home-social-proof";
import { creations } from "@/lib/creations";
import heroImage from "../assets/thaddeus-hero.jpg";

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
          <div className="relative z-10 pb-2"><p className="section-kicker flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /> Handmade, one at a time</p><h1 className="mt-6 max-w-[10ch] font-display text-[clamp(3.5rem,11vw,6.8rem)] font-light leading-[0.91]">Little things, made <span className="ink-swish">all yours.</span></h1><p className="mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">Resin, paper and satin keepsakes shaped around your people, your stories and your happiest days.</p><Button asChild size="lg" className="mt-8"><Link to="/creations">Browse the makes <ArrowUpRight /></Link></Button></div>
          <div className="hero-frame relative"><span className="absolute -left-3 top-8 z-10 -rotate-3 rounded-sm bg-accent px-3 py-2 text-xs font-semibold shadow-sm sm:-left-6 sm:text-sm">made from memories</span><img src={heroImage} alt="A collection of custom resin, paper and floral gifts" width={1600} height={1104} fetchPriority="high" className="aspect-[1.22/1] w-full object-cover" /></div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-kicker">The tiny treasure shelf</p><h2 className="mt-3 max-w-[14ch] font-display text-4xl font-light leading-none sm:text-6xl">Pick a place to begin</h2></div><Link to="/creations" className="inline-flex items-center gap-2 text-sm font-semibold">See every creation <ArrowRight className="size-4" /></Link></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{creations.slice(0, 3).map((creation) => <Link key={creation.slug} to="/creations/$slug" params={{ slug: creation.slug }} className="group"><div className="overflow-hidden rounded-lg"><img src={creation.image} alt={creation.imageAlt} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" /></div><div className="flex items-center justify-between pt-4"><h3 className="font-display text-2xl font-medium">{creation.shortName}</h3><ArrowUpRight className="size-5 text-primary" /></div></Link>)}</div></div></section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-24 lg:px-12"><div><p className="section-kicker">Make it unmistakably theirs</p><h2 className="mt-3 max-w-[12ch] font-display text-4xl font-light leading-[1.02] sm:text-6xl">Your story is the finishing touch.</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">Bring the photo, the name, the date or even a half-formed idea. Each detail is chosen with you, then made slowly by hand.</p><div className="mt-8 flex flex-wrap gap-2.5">{["Names & dates", "Your photos", "Colour stories", "Flowers & finishes", "Gift wrapping"].map((item) => <span key={item} className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold">{item}</span>)}</div></div><div><p className="section-kicker">From hello to handmade</p><ol className="mt-5 border-t border-border">{[["01", "Share your idea", "Tell us who it is for, the occasion and the little details you love."], ["02", "Shape it together", "We align the colours, photos, names and finishing touches with you."], ["03", "Made just for you", "Your piece is crafted by hand and prepared to become part of the moment."]].map(([number, title, copy]) => <li key={number} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-border py-5"><span className="text-sm font-semibold text-primary">{number}</span><div><h3 className="font-display text-xl font-medium">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p></div></li>)}</ol></div></section>

      <section className="bg-secondary px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="section-kicker text-secondary-foreground/65">The studio approach</p><h2 className="mt-3 max-w-3xl font-display text-4xl font-light leading-tight text-secondary-foreground sm:text-6xl">Small details make a gift feel truly seen.</h2><p className="mt-5 max-w-xl leading-7 text-secondary-foreground/70">Every piece begins with a person or moment, then finds its shape through material, colour and careful handwork.</p></div><Button asChild variant="outline" size="lg" className="border-secondary-foreground/25 bg-transparent text-secondary-foreground hover:bg-background"><Link to="/about">Read our story <ArrowRight /></Link></Button></div></section>
      <HomeSocialProof />
      <section className="bg-foreground px-5 py-16 text-background sm:px-8 sm:py-24 lg:px-12"><div className="mx-auto max-w-7xl"><p className="section-kicker text-primary">Have something in mind?</p><div className="mt-3 grid items-end gap-8 lg:grid-cols-[1fr_auto]"><div><h2 className="max-w-[13ch] font-display text-4xl font-light leading-[1.02] sm:text-6xl">Let’s turn your moment into something you can hold.</h2><p className="mt-5 max-w-xl leading-7 text-background/70">Start with the occasion and what you would love to make. We’ll help you gather the useful details.</p></div><Button asChild size="lg" variant="secondary"><Link to="/contact">Prepare an enquiry <ArrowUpRight /></Link></Button></div></div></section>
    </main>
  );
}
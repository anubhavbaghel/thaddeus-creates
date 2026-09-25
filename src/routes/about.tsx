import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Flower2, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
const heroImage = "/images/thaddeus-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Our Story | thaddeus creates" }, { name: "description", content: "Discover the thoughtful, personal approach behind every handmade thaddeus creates keepsake." },
    { property: "og:title", content: "Our Story | thaddeus creates" }, { property: "og:description", content: "Small details, meaningful stories and keepsakes made slowly by hand." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AboutPage,
});

function AboutPage() {
  const values = [{ icon: Heart, title: "Personal first", copy: "The person, memory and occasion guide every creative choice." }, { icon: Flower2, title: "Made thoughtfully", copy: "Materials and details are composed with care rather than repeated from a template." }, { icon: Sparkles, title: "Joy in the details", copy: "Colour, texture, photographs and tiny flourishes make a piece feel unmistakably theirs." }];
  return <main><section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:px-12 lg:pb-24"><div><p className="section-kicker">Our story</p><h1 className="mt-3 font-display text-5xl font-light leading-[0.98] sm:text-7xl">Made for the feeling behind the gift.</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">thaddeus creates is a handmade gifting studio centred on the details that make people and occasions feel known.</p></div><img src={heroImage} alt="A collection of handmade resin, paper and floral creations" width={1600} height={1104} fetchPriority="high" className="aspect-[1.35/1] w-full rounded-lg object-cover" /></section><section className="border-y border-border bg-card px-5 py-14 sm:px-8 sm:py-20 lg:px-12"><div className="mx-auto max-w-7xl"><p className="section-kicker">What guides the making</p><div className="mt-8 grid gap-8 md:grid-cols-3">{values.map(({ icon: Icon, title, copy }) => <article key={title} className="border-t border-border pt-6"><span className="grid size-12 place-items-center rounded-xl bg-primary/15"><Icon className="size-6 text-primary" strokeWidth={1.8} /></span><h2 className="mt-5 font-display text-2xl font-medium">{title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div></div></section><section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12"><div><p className="section-kicker">Your idea belongs here</p><h2 className="mt-3 max-w-3xl font-display text-4xl font-light leading-tight sm:text-6xl">Bring the memory. We’ll shape the details around it.</h2></div><Button asChild size="lg"><Link to="/contact">Plan a piece <ArrowUpRight /></Link></Button></section></main>;
}
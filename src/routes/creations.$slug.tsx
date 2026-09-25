import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Clock, ShieldCheck, Tag } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { RealWorkCarousel } from "@/components/real-work-carousel";
import { creations, getCreation } from "@/lib/creations";
import { realWork } from "@/lib/real-work";

const SITE = "https://thaddeus-creates.lovable.app";

export const Route = createFileRoute("/creations/$slug")({
  loader: ({ params }) => {
    const creation = getCreation(params.slug);
    if (!creation) throw notFound();
    return creation;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Creation not found | thaddeus creates" }, { name: "robots", content: "noindex" }] };
    }
    const url = `${SITE}/creations/${params.slug}`;
    return {
      meta: [
        { title: loaderData.seoTitle },
        { name: "description", content: loaderData.seoDescription },
        { property: "og:title", content: loaderData.seoTitle },
        { property: "og:description", content: loaderData.seoDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: loaderData.name,
                description: loaderData.seoDescription,
                serviceType: loaderData.category,
                url,
                provider: { "@type": "LocalBusiness", name: "thaddeus creates", url: SITE },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                  { "@type": "ListItem", position: 2, name: "Creations", item: `${SITE}/creations` },
                  { "@type": "ListItem", position: 3, name: loaderData.name, item: url },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: loaderData.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: CreationNotFound,
  component: CreationDetail,
});

function CreationDetail() {
  const creation = Route.useLoaderData();
  const related = creations.filter((item) => item.slug !== creation.slug).slice(0, 2);
  const matchingWork = realWork.filter((item) => item.category === creation.category);
  const galleryItems = matchingWork.length > 0 ? matchingWork : realWork;
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24">
        <Link to="/creations" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> All creations</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-lg bg-muted"><img src={creation.image} alt={creation.imageAlt} width={1200} height={900} fetchPriority="high" className="aspect-[4/3] w-full object-cover" /></div>
          <div>
            <p className="section-kicker">{creation.category} · Made to order</p>
            <h1 className="mt-3 font-display text-5xl font-light leading-[0.98] sm:text-7xl">{creation.name}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{creation.intro}</p>
            
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Tag className="size-3.5" /> {creation.startingPrice}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                <Clock className="size-3.5 text-primary" /> {creation.craftingTime}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                <ShieldCheck className="size-3.5 text-primary" /> Handcrafted to order
              </span>
            </div>

            <Button asChild variant="tactile" size="lg" className="mt-8">
              <Link to="/contact" search={{ creation: creation.shortName }}>
                Customize this piece <ArrowUpRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">What makes it</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-light leading-tight">{creation.description}</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {creation.highlights.map((item) => (
              <div key={item.title} className="border-t border-border pt-4">
                <h3 className="font-display text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RealWorkCarousel items={galleryItems} compact />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-kicker">Make it yours</p>
            <h2 className="mt-3 font-display text-4xl font-light">Details we can shape together</h2>
            <div className="mt-6 flex flex-wrap gap-2">{creation.options.map((item) => <span key={item} className="rounded-md border border-border bg-card px-3 py-2 text-sm font-medium">{item}</span>)}</div>
            <p className="mt-8 section-kicker">Lovely for</p>
            <ul className="mt-4 divide-y divide-border border-y border-border">{creation.occasions.map((item) => <li key={item} className="py-3 text-sm font-medium">{item}</li>)}</ul>
          </div>
          <div>
            <p className="section-kicker">How it is made</p>
            <ol className="mt-6 grid gap-6">
              {creation.process.map((step, index) => (
                <li key={step.title} className="flex gap-4 sm:gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/20 font-display text-2xl font-light leading-none text-primary sm:size-14 sm:text-3xl">{index + 1}</span>
                  <div><h3 className="font-display text-xl font-medium">{step.title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{step.text}</p></div>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-md text-sm leading-6 text-muted-foreground">{creation.detail}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div><p className="section-kicker">Good to know</p><h2 className="mt-3 font-display text-4xl font-light">Questions we are often asked</h2></div>
          <Accordion type="single" collapsible className="w-full">
            {creation.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm leading-6 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 pb-24 sm:pb-20">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-kicker">Ready when you are</p>
            <p className="mt-4 max-w-sm leading-7 text-muted-foreground">Share the occasion, the date and any photos you would like included, and the design can be planned around them.</p>
            <Button asChild variant="tactile" size="lg" className="mt-6">
              <Link to="/contact" search={{ creation: creation.shortName }}>
                Customize this piece ({creation.startingPrice}) <ArrowUpRight className="size-5" />
              </Link>
            </Button>
          </div>
          <div>
            <p className="section-kicker">You may also like</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} to="/creations/$slug" params={{ slug: item.slug }} className="group flex gap-4">
                  <img src={item.image} alt="" width={180} height={180} loading="lazy" className="size-24 rounded-md object-cover" />
                  <div>
                    <h3 className="font-display text-xl font-medium group-hover:text-primary">{item.shortName}</h3>
                    <span className="mt-1 block text-xs font-semibold text-primary">{item.startingPrice}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">View creation</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-border/80 bg-background/95 px-4 py-3 shadow-lg backdrop-blur-md sm:hidden">
        <div>
          <p className="truncate text-sm font-semibold">{creation.shortName}</p>
          <p className="text-xs font-semibold text-primary">{creation.startingPrice}</p>
        </div>
        <Button asChild size="sm" variant="tactile">
          <Link to="/contact" search={{ creation: creation.shortName }}>
            Order now <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </main>
  );
}

function CreationNotFound() {
  return <main className="mx-auto min-h-[60vh] max-w-3xl px-5 py-24 text-center"><p className="section-kicker">Not found</p><h1 className="mt-3 font-display text-5xl font-light">That keepsake isn’t on the shelf.</h1><Button asChild className="mt-8"><Link to="/creations">Browse all creations</Link></Button></main>;
}

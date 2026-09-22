import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { creations, getCreation } from "@/lib/creations";

export const Route = createFileRoute("/creations/$slug")({
  loader: ({ params }) => {
    const creation = getCreation(params.slug);
    if (!creation) throw notFound();
    return creation;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.name} | thaddeus creates` : "Creation not found | thaddeus creates";
    const description = loaderData?.summary ?? "This creation could not be found.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  notFoundComponent: CreationNotFound,
  component: CreationDetail,
});

function CreationDetail() {
  const creation = Route.useLoaderData();
  const related = creations.filter((item) => item.slug !== creation.slug).slice(0, 2);
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24">
        <Link to="/creations" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> All creations</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden rounded-lg bg-muted"><img src={creation.image} alt={creation.imageAlt} width={1200} height={900} fetchPriority="high" className="aspect-[4/3] w-full object-cover" /></div>
          <div><p className="section-kicker">{creation.category} · Made to order</p><h1 className="mt-3 font-display text-5xl font-light leading-[0.98] sm:text-7xl">{creation.name}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{creation.description}</p><Button asChild size="lg" className="mt-8"><Link to="/contact">Start an enquiry <ArrowUpRight /></Link></Button></div>
        </div>
      </section>
      <section className="border-y border-border bg-card px-5 py-14 sm:px-8 sm:py-20 lg:px-12"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20"><div><p className="section-kicker">Make it yours</p><h2 className="mt-3 font-display text-4xl font-light">Details we can shape together</h2><div className="mt-6 flex flex-wrap gap-2">{creation.options.map((item) => <span key={item} className="rounded-md border border-border bg-background px-3 py-2 text-sm font-medium">{item}</span>)}</div></div><div><p className="section-kicker">Lovely for</p><ul className="mt-5 divide-y divide-border border-y border-border">{creation.occasions.map((item) => <li key={item} className="py-3 text-sm font-medium">{item}</li>)}</ul></div></div></section>
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="section-kicker">Made by hand</p><p className="mt-4 max-w-sm leading-7 text-muted-foreground">{creation.detail}</p></div><div><p className="section-kicker">You may also like</p><div className="mt-5 grid gap-5 sm:grid-cols-2">{related.map((item) => <Link key={item.slug} to="/creations/$slug" params={{ slug: item.slug }} className="group flex gap-4"><img src={item.image} alt="" width={180} height={180} loading="lazy" className="size-24 rounded-md object-cover" /><div><h3 className="font-display text-xl font-medium group-hover:text-primary">{item.shortName}</h3><span className="mt-2 block text-sm text-muted-foreground">View creation</span></div></Link>)}</div></div></div></section>
    </main>
  );
}

function CreationNotFound() {
  return <main className="mx-auto min-h-[60vh] max-w-3xl px-5 py-24 text-center"><p className="section-kicker">Not found</p><h1 className="mt-3 font-display text-5xl font-light">That keepsake isn’t on the shelf.</h1><Button asChild className="mt-8"><Link to="/creations">Browse all creations</Link></Button></main>;
}
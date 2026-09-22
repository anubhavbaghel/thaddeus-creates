import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/thaddeus-hero.jpg";
import resinFrame from "../assets/resin-frame.jpg";
import cardsInvitations from "../assets/cards-invitations.jpg";
import satinBouquet from "../assets/satin-bouquet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "thaddeus creates | Custom Keepsakes & Handmade Gifts" },
      { name: "description", content: "Custom resin frames, keychains, thalis, invitations, occasion cards and satin flower bouquets, handmade for your moments." },
      { property: "og:title", content: "thaddeus creates | Handmade just for you" },
      { property: "og:description", content: "Personalised resin, paper and satin keepsakes for every celebration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Arrow = () => <span aria-hidden="true">↗</span>;

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="thaddeus creates home">
          <span className="grid size-9 -rotate-3 place-items-center rounded-[10px] bg-primary font-display text-lg font-extrabold text-primary-foreground transition-transform group-hover:rotate-0">t</span>
          <span className="font-display text-[15px] font-bold leading-none sm:text-base">thaddeus creates</span>
        </a>
        <a href="#enquire" className="rounded-full border border-foreground/20 px-4 py-2 text-xs font-bold transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-sm">Let’s create</a>
      </nav>

      <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8 sm:pt-10 lg:px-12 lg:pb-24">
        <div className="grid items-end gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <div className="relative z-10 pb-2">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground"><span className="size-2 rounded-full bg-primary" /> Handmade, one at a time</p>
            <h1 className="max-w-[9ch] font-display text-[clamp(3.25rem,13vw,6.6rem)] font-extrabold leading-[0.88]">Little things, made <span className="ink-swish">all yours.</span></h1>
            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">Resin, paper and satin keepsakes shaped around your people, your stories and your happiest days.</p>
            <a href="#creations" className="mt-7 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">Browse the makes <Arrow /></a>
          </div>
          <div className="hero-frame relative">
            <span className="absolute -left-3 top-8 z-10 -rotate-6 rounded-sm bg-accent px-3 py-2 text-xs font-bold shadow-sm sm:-left-6 sm:text-sm">made from memories</span>
            <img src={heroImage} alt="A collection of custom resin, paper and floral gifts" width={1600} height={1104} fetchPriority="high" className="aspect-[1.22/1] w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="creations" className="border-y border-border bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-9 flex items-end justify-between gap-6">
            <div><p className="section-kicker">The tiny treasure shelf</p><h2 className="mt-2 max-w-[12ch] font-display text-4xl font-extrabold leading-none sm:text-5xl">Pick a place to begin</h2></div>
            <span className="hidden max-w-[20ch] text-right text-sm leading-6 text-muted-foreground sm:block">Every piece changes to fit your occasion.</span>
          </div>
          <div className="bento-grid">
            <article className="tile tile-resin group"><img src={resinFrame} alt="Blush resin photo frame with pressed flowers" loading="lazy" width={912} height={1104} /><div className="tile-label"><span>01</span><h3>Resin frames</h3></div></article>
            <article className="tile tile-paper group"><img src={cardsInvitations} alt="Handmade floral cards and invitations" loading="lazy" width={1104} height={864} /><div className="tile-label"><span>02</span><h3>Invites & cards</h3></div></article>
            <article className="tile tile-bouquet group"><img src={satinBouquet} alt="Satin rose bouquet with chocolates and photos" loading="lazy" width={1008} height={1200} /><div className="tile-label"><span>03</span><h3>Satin bouquets</h3></div></article>
            <article className="mini-tile bg-secondary"><span className="mini-icon">A</span><div><span>04</span><h3>Name keychains</h3></div></article>
            <article className="mini-tile bg-accent"><span className="mini-icon">✦</span><div><span>05</span><h3>Celebration thalis</h3></div></article>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <div>
          <p className="section-kicker">Make it unmistakably theirs</p>
          <h2 className="mt-3 max-w-[11ch] font-display text-4xl font-extrabold leading-[0.98] sm:text-5xl">Your story is the finishing touch.</h2>
          <p className="mt-5 max-w-lg leading-7 text-muted-foreground">Bring the photo, the name, the date or even a half-formed idea. Each detail is chosen with you, then made slowly by hand.</p>
          <div className="mt-8 flex flex-wrap gap-2.5" aria-label="Personalisation options">
            {['Names & dates', 'Your photos', 'Colour stories', 'Flowers & finishes', 'Gift wrapping'].map((item) => <span key={item} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold">{item}</span>)}
          </div>
        </div>
        <div>
          <p className="section-kicker">From hello to handmade</p>
          <ol className="mt-5 border-t border-border">
            {[
              ['01', 'Share your idea', 'Tell us who it is for, the occasion and the little details you love.'],
              ['02', 'Shape it together', 'We align the colours, photos, names and finishing touches with you.'],
              ['03', 'Made just for you', 'Your piece is crafted by hand and prepared to become part of the moment.'],
            ].map(([number, title, copy]) => <li key={number} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-border py-5"><span className="font-display text-sm font-extrabold text-primary">{number}</span><div><h3 className="font-display text-lg font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section id="enquire" className="bg-foreground px-5 py-16 text-background sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Have something in mind?</p>
          <div className="mt-3 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div><h2 className="max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] sm:text-6xl">Let’s turn your moment into something you can hold.</h2><p className="mt-5 max-w-xl text-sm leading-6 text-background/70 sm:text-base">Share the occasion and what you would love to make. Contact details will be added here soon.</p></div>
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-background/30 px-6 py-3.5 text-sm font-bold text-background/60" aria-disabled="true">Enquiries opening soon <Arrow /></span>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 bg-foreground px-5 pb-8 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><span className="font-display font-bold text-background">thaddeus creates</span><span>Handmade for the moments worth keeping.</span></footer>
    </main>
  );
}
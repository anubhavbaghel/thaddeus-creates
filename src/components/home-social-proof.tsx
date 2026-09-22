import { Instagram, MessageCircleMore, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const instagramUrl = "https://www.instagram.com/thaddeus_creates/";

const reviewPlaceholders = [
  { number: "01", prompt: "Add a customer’s words about their custom piece here." },
  { number: "02", prompt: "Add a review about the personalisation or making experience here." },
  { number: "03", prompt: "Add a note about gifting, the occasion or the finished piece here." },
];

const faqs = [
  {
    question: "What can I personalise?",
    answer:
      "Depending on the piece, you can share names, dates, photographs, wording, colours, flower styles and finishing details. The available choices are listed on each creation page.",
  },
  {
    question: "How do I begin a custom order?",
    answer:
      "Start with the occasion, who the piece is for and which creation you like. Share any names, dates, colours or photographs you already have, and the remaining details can be shaped together.",
  },
  {
    question: "Can I ask for something that is not shown?",
    answer:
      "Yes. The collection is a starting point, so you can share a half-formed idea or a different combination of personal details for consideration.",
  },
  {
    question: "Will every handmade piece look exactly the same?",
    answer:
      "Each piece is arranged and finished by hand. Small variations in flower placement, colour and detail are part of what makes an individual creation unique.",
  },
  {
    question: "Where can I see more recent work?",
    answer:
      "Follow @thaddeus_creates on Instagram for a closer look at recent pieces and studio updates.",
  },
];

export function HomeSocialProof() {
  return (
    <>
      <section className="border-y border-border bg-card px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="section-kicker">Kind words, kept close</p>
              <h2 className="mt-3 max-w-[13ch] font-display text-4xl font-light leading-[1.02] sm:text-6xl">
                Notes from happy moments.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground lg:justify-self-end">
              Sample spaces are ready for genuine customer reviews. Replace them whenever your
              favourites are ready to share.
            </p>
          </div>

          <Carousel className="mt-10" opts={{ align: "start" }} aria-label="Customer reviews">
            <CarouselContent>
              {reviewPlaceholders.map((review) => (
                <CarouselItem key={review.number} className="md:basis-1/2 lg:basis-1/3">
                  <article className="flex min-h-64 flex-col justify-between rounded-lg border border-border bg-background p-6 sm:p-8">
                    <Quote className="size-6 text-primary" aria-hidden="true" />
                    <p className="mt-8 font-display text-2xl font-light leading-snug">
                      “{review.prompt}”
                    </p>
                    <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-xs font-semibold uppercase text-muted-foreground">
                      <span>Sample review</span>
                      <span>{review.number}</span>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex gap-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0 rounded-md" />
              <CarouselNext className="static translate-x-0 translate-y-0 rounded-md" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">Fresh from the studio</p>
              <h2 className="mt-3 max-w-[12ch] font-display text-4xl font-light leading-[1.02] sm:text-6xl">
                Real pieces, real little details.
              </h2>
            </div>
<Button asChild variant="tactile-ink" size="lg">
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                <Instagram className="size-5" /> Follow on Instagram
              </a>
            </Button>
          </div>

          <div className="mt-10 grid min-h-80 place-items-center rounded-lg border border-dashed border-border bg-muted px-6 py-16 text-center">
            <div className="max-w-md">
              <Instagram className="mx-auto size-8 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-medium">Studio gallery coming together</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Original work photographs will appear here once they are added. Until then, visit
                Instagram for the latest makes.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4"
              >
                @thaddeus_creates <Instagram className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="section-kicker text-secondary-foreground/65">Good to know</p>
            <h2 className="mt-3 font-display text-4xl font-light leading-[1.02] text-secondary-foreground sm:text-6xl">
              A few thoughtful answers.
            </h2>
            <MessageCircleMore className="mt-8 size-7 text-secondary-foreground/50" aria-hidden="true" />
          </div>
          <Accordion type="single" collapsible className="border-t border-secondary-foreground/20">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="border-secondary-foreground/20">
                <AccordionTrigger className="py-5 font-display text-lg font-medium text-secondary-foreground hover:no-underline sm:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-6 leading-7 text-secondary-foreground/75">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
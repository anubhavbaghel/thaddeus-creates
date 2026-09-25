import { MessageCircleMore, Quote, Star } from "lucide-react";
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

const reviews = [
  {
    author: "Shimit",
    text: "I ordered this as a surprise and honestly, it turned out even better than I expected! The detailing and personalised touches were amazing, and she absolutely loved it. Thank you for making the surprise so special!",
    tag: "Custom Keepsake Order",
  },
  {
    author: "Aarchi",
    text: "Everything was so beautifully made! The little details, colours, and personalised touches made it feel truly special. It was even more beautiful in person and made such a lovely keepsake.",
    tag: "Personalised Gift",
  },
  {
    author: "Chitra",
    text: "Such a beautiful experience from start to finish! The gift was thoughtfully made, perfectly arranged, and looked absolutely gorgeous. You can really see the love and effort behind every creation. Highly recommended!",
    tag: "Custom Creation",
  },
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
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-500" />
                ))}
                <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Loved by customers</span>
              </div>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                Real words from people who trusted us with their special moments and personalised gifts.
              </p>
            </div>
          </div>

          <Carousel className="mt-10" opts={{ align: "start" }} aria-label="Customer reviews">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={review.author} className="md:basis-1/2 lg:basis-1/3">
                  <article className="flex h-full flex-col justify-between rounded-lg border border-border bg-background p-6 sm:p-8">
                    <div>
                      <div className="flex items-center justify-between">
                        <Quote className="size-6 text-primary" aria-hidden="true" />
                        <div className="flex gap-0.5 text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="size-3.5 fill-amber-500" />
                          ))}
                        </div>
                      </div>
                      <p className="mt-6 text-base leading-relaxed text-foreground">
                        “{review.text}”
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-xs font-semibold text-muted-foreground">
                      <span className="font-display text-base font-medium text-foreground">{review.author}</span>
                      <span className="uppercase text-muted-foreground/80">0{index + 1}</span>
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
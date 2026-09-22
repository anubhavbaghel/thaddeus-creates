import resinFrame from "../assets/resin-frame.jpg";
import resinKeychains from "../assets/resin-keychains.jpg";
import celebrationThali from "../assets/celebration-thali.jpg";
import cardsInvitations from "../assets/cards-invitations.jpg";
import satinBouquet from "../assets/satin-bouquet.jpg";

export type Creation = {
  slug: string;
  name: string;
  shortName: string;
  category: "Resin" | "Paper" | "Bouquets";
  image: string;
  imageAlt: string;
  summary: string;
  description: string;
  options: string[];
  occasions: string[];
  detail: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  highlights: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export const creations: Creation[] = [
  {
    slug: "pressed-flower-resin-frames",
    name: "Pressed flower resin frames",
    shortName: "Resin frames",
    category: "Resin",
    image: resinFrame,
    imageAlt: "Blush resin photo frame with delicate pressed flowers",
    summary: "A favourite photograph held in soft colour, flowers and a glossy resin finish.",
    description: "Designed around a photograph and colour story, each frame becomes a small, personal piece of the occasion.",
    options: ["Photo", "Colour palette", "Pressed flowers", "Name or date", "Finish"],
    occasions: ["Birthdays", "Anniversaries", "Wedding gifts", "New baby"],
    detail: "Resin pieces are composed and finished by hand, so the placement of every flower and detail is naturally unique.",
    seoTitle: "Custom Pressed Flower Resin Photo Frames | thaddeus creates",
    seoDescription:
      "Handmade pressed flower resin photo frames, personalised with your photograph, colours, names and dates. Made to order for birthdays, weddings and anniversaries.",
    intro:
      "A resin frame turns one photograph into an object you can hold. Real pressed flowers, soft pigments and a clear glossy pour are layered around your image, so the memory sits inside the piece rather than behind glass.",
    highlights: [
      { title: "Built around your photo", text: "Send the image first; the palette, flowers and layout are then chosen to suit it." },
      { title: "Real pressed botanicals", text: "Dried and pressed flowers are placed individually, never printed or stickered." },
      { title: "Names, dates, messages", text: "Small lettering or gold detailing can be set into the resin as part of the design." },
      { title: "Sturdy, lasting finish", text: "Cured resin is sanded and polished so edges stay smooth and the surface stays clear." },
    ],
    process: [
      { title: "Share the photograph", text: "Send the picture and tell us about the occasion and the person receiving it." },
      { title: "Agree the design", text: "We settle on size, colour story, flowers and any wording before anything is poured." },
      { title: "Pour, cure and finish", text: "The frame is layered, left to cure fully, then sanded, polished and packed." },
    ],
    faqs: [
      { question: "What photo quality do you need?", answer: "A clear, well-lit photo at the largest size you have. Screenshots of social posts often print softly." },
      { question: "How long does a resin frame take?", answer: "Resin needs full curing time between layers, so frames are made over several days rather than same-day." },
      { question: "Can you match wedding or event colours?", answer: "Yes. Share your palette or an invitation image and the pigments and flowers are chosen to sit alongside it." },
    ],
  },
  {
    slug: "floral-name-keychains",
    name: "Floral name keychains",
    shortName: "Name keychains",
    category: "Resin",
    image: resinKeychains,
    imageAlt: "Pastel resin letter keychains with tiny white flowers",
    summary: "Initials and names made pocket-sized with florals, colour and tiny keepsake details.",
    description: "A little everyday gift customised around a favourite letter, soft colour combination and finishing charm.",
    options: ["Letter or name", "Resin colour", "Flower style", "Gold details", "Charm"],
    occasions: ["Friendship gifts", "Return gifts", "Birthdays", "Just because"],
    detail: "Each piece is poured, arranged and finished individually for a one-of-a-kind arrangement.",
    seoTitle: "Personalised Resin Name & Letter Keychains | thaddeus creates",
    seoDescription:
      "Custom resin name keychains with pressed flowers, gold flakes and your choice of colour. Handmade personalised initial keychains for gifts and return gifts.",
    intro:
      "Keychains are the easiest way to give something personal. A letter or full name is set in tinted resin with tiny dried flowers and gold flake, then finished with a charm and ring.",
    highlights: [
      { title: "Letters or full names", text: "Single initials, short names and simple words all work within the standard sizes." },
      { title: "Your colour, your flowers", text: "Pick a pastel, a deeper tone or a clear pour with floral detail only." },
      { title: "Good for bulk gifting", text: "Sets for return gifts and favours can be made in a matching style with different letters." },
      { title: "Everyday durable", text: "Fully cured resin with a polished edge and a secure metal ring." },
    ],
    process: [
      { title: "Choose letters and colour", text: "Tell us the initials or names and the shade you have in mind." },
      { title: "Confirm the set", text: "For multiples, one style is agreed and repeated across the set." },
      { title: "Made and finished", text: "Each keychain is poured, demoulded, sanded and fitted with its hardware." },
    ],
    faqs: [
      { question: "Can I order a matching set?", answer: "Yes, sets are common for return gifts and friend groups, with different letters in one shared style." },
      { question: "Will the colours look exactly like the photos?", answer: "Very close, though handmade pours vary slightly, which is part of the character." },
      { question: "Can you add a charm?", answer: "Small charms and tassels can be fitted at the ring when you ask for them." },
    ],
  },
  {
    slug: "celebration-resin-thalis",
    name: "Celebration resin thalis",
    shortName: "Celebration thalis",
    category: "Resin",
    image: celebrationThali,
    imageAlt: "Blush resin celebration thali with flowers and gold details",
    summary: "A ceremonial piece shaped with pressed flowers, delicate colour and meaningful details.",
    description: "Created to complement the colours and feeling of a celebration while keeping the arrangement beautifully personal.",
    options: ["Colour story", "Flower details", "Name or date", "Gold accents", "Arrangement"],
    occasions: ["Raksha Bandhan", "Weddings", "Festive gifting", "Family ceremonies"],
    detail: "The layout and included details are discussed before making so the finished piece suits your celebration.",
    seoTitle: "Custom Resin Pooja & Celebration Thali Sets | thaddeus creates",
    seoDescription:
      "Handmade resin celebration thalis with pressed flowers and gold accents, personalised with names and colours for Raksha Bandhan, weddings and festive ceremonies.",
    intro:
      "A thali is used and seen by everyone in the room, so it deserves to look like the occasion. Resin lets colour, pressed flowers and gold detailing sit permanently in the surface while staying easy to wipe clean.",
    highlights: [
      { title: "Made for the ceremony", text: "Layouts are planned around what the thali actually needs to hold on the day." },
      { title: "Family names and dates", text: "Lettering can be set into the base so the piece stays meaningful afterwards." },
      { title: "Festive palettes", text: "Blush, ivory, deep reds and gold combinations are all possible." },
      { title: "Keepsake after the day", text: "Finished pieces stay display-worthy long after the ceremony ends." },
    ],
    process: [
      { title: "Tell us the occasion", text: "Raksha Bandhan, a wedding ritual or a house ceremony each suit different shapes." },
      { title: "Plan the layout", text: "Sizes, compartments, colours and any wording are agreed in advance." },
      { title: "Cast and finish", text: "The thali is poured in stages, cured fully, then polished and packed." },
    ],
    faqs: [
      { question: "How should I care for it?", answer: "Wipe with a soft dry cloth, and keep it away from direct flame and prolonged heat." },
      { question: "Can you make a matching set?", answer: "Yes, smaller matching bowls or accents can be made in the same colour story." },
      { question: "How far ahead should I order?", answer: "Festive periods fill quickly, so enquire as early as you can for a dated ceremony." },
    ],
  },
  {
    slug: "handmade-invitations-and-cards",
    name: "Handmade invitations & cards",
    shortName: "Invites & cards",
    category: "Paper",
    image: cardsInvitations,
    imageAlt: "Handmade floral invitations and occasion cards in blush and green",
    summary: "Layered paper details made to introduce a celebration or hold a message worth keeping.",
    description: "From a single birthday card to a coordinated invitation, paper, colour and small dimensional details come together by hand.",
    options: ["Occasion", "Wording", "Colour palette", "Floral details", "Format"],
    occasions: ["Weddings", "Birthdays", "Anniversaries", "Thank you notes"],
    detail: "Wording and visual details are aligned before the final piece is assembled and finished.",
    seoTitle: "Handmade Wedding Invitations & Custom Occasion Cards | thaddeus creates",
    seoDescription:
      "Hand-assembled wedding invitations and personalised cards with layered paper, floral detailing and custom wording for birthdays, anniversaries and celebrations.",
    intro:
      "Paper still sets the tone for a celebration. Layered card, cut florals and small dimensional details are assembled by hand, with wording arranged around your names, dates and message.",
    highlights: [
      { title: "One card or a full set", text: "A single birthday card and a coordinated invitation suite are both possible." },
      { title: "Your wording", text: "Text is laid out with you, including names, dates, venues and short messages." },
      { title: "Dimensional detailing", text: "Cut and layered florals give the piece depth rather than a flat printed look." },
      { title: "Coordinated palettes", text: "Colours can follow your event styling or a favourite combination." },
    ],
    process: [
      { title: "Share the occasion", text: "Tell us what the card is for, the quantity and the tone you want." },
      { title: "Approve the wording", text: "Final text and spelling are confirmed before assembly begins." },
      { title: "Assembled by hand", text: "Each card is cut, layered and finished, then packed carefully for delivery." },
    ],
    faqs: [
      { question: "Do you take bulk invitation orders?", answer: "Yes, though handmade sets take time, so share your quantity and date early." },
      { question: "Can you match my event theme?", answer: "Send your colours or existing styling and the palette will be built to sit with it." },
      { question: "Who checks the spelling?", answer: "You approve the final wording in writing before anything is assembled." },
    ],
  },
  {
    slug: "satin-chocolate-photo-bouquets",
    name: "Satin, chocolate & photo bouquets",
    shortName: "Satin bouquets",
    category: "Bouquets",
    image: satinBouquet,
    imageAlt: "Satin rose bouquet with chocolates and small photo keepsakes",
    summary: "Satin flowers, favourite treats and photographs gathered into one lasting surprise.",
    description: "A celebratory arrangement that combines permanent blooms with personal photographs and selected treats.",
    options: ["Satin colours", "Photographs", "Chocolate choice", "Message", "Wrapping"],
    occasions: ["Birthdays", "Graduations", "Anniversaries", "Congratulations"],
    detail: "The final arrangement is balanced around your chosen colours, photographs and occasion details.",
    seoTitle: "Satin Flower, Chocolate & Photo Bouquets | thaddeus creates",
    seoDescription:
      "Handmade satin rose bouquets with chocolates and personalised photo keepsakes. Lasting custom bouquets for birthdays, graduations and anniversaries.",
    intro:
      "Fresh flowers fade within days. A satin bouquet keeps its shape and colour, and makes room for the things a bouquet usually cannot hold: chocolates and printed photographs of the person receiving it.",
    highlights: [
      { title: "Blooms that last", text: "Hand-shaped satin roses stay exactly as they arrive, with no water needed." },
      { title: "Photos in the arrangement", text: "Printed photographs are mounted and set among the flowers." },
      { title: "Treats included", text: "Chocolates are arranged into the bouquet rather than added as a separate box." },
      { title: "Wrapped to gift", text: "Finished wrapping, ribbon and a written message tag come as part of it." },
    ],
    process: [
      { title: "Pick colours and size", text: "Choose satin shades and how full you want the bouquet to be." },
      { title: "Send photos and treats", text: "Share the images to print and let us know the chocolate preference." },
      { title: "Arranged and wrapped", text: "Flowers, photos and treats are balanced, then wrapped and tagged." },
    ],
    faqs: [
      { question: "How many photos can be included?", answer: "A small handful sits best; too many crowd the flowers and lose their effect." },
      { question: "Do the chocolates have a shelf life?", answer: "Yes, they are sealed shop-bought chocolates, so eat them within their own date." },
      { question: "How long will the bouquet last?", answer: "The satin flowers and wrapping are made to keep indefinitely with light dusting." },
    ],
  },
];

export const categories = ["All", "Resin", "Paper", "Bouquets"] as const;

export function getCreation(slug: string) {
  return creations.find((creation) => creation.slug === slug);
}

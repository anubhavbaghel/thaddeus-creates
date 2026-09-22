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
  },
];

export const categories = ["All", "Resin", "Paper", "Bouquets"] as const;

export function getCreation(slug: string) {
  return creations.find((creation) => creation.slug === slug);
}
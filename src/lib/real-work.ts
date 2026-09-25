const resinCoasters = { url: "/images/real-work/resin-flower-coasters.webp" };
const redRoseBouquet = { url: "/images/real-work/red-rose-newspaper-bouquet.webp" };
const heldRoseBouquet = { url: "/images/real-work/red-rose-bouquet-held.webp" };
const birthdayBouquet = { url: "/images/real-work/birthday-photo-bouquet.webp" };
const resinFlowerPiece = { url: "/images/real-work/pressed-flower-resin-piece.webp" };
const chocolateBouquet = { url: "/images/real-work/chocolate-photo-satin-bouquet.webp" };
const satinRoseBouquet = { url: "/images/real-work/red-satin-rose-bouquet.webp" };
const familyFrame = { url: "/images/real-work/family-photo-resin-frame.webp" };
const personalisedKeepsake = { url: "/images/real-work/personalised-resin-keepsake.jpg" };
const blushResinPiece = { url: "/images/real-work/blush-floral-resin-piece.jpg" };

export type RealWorkItem = {
  src: string;
  alt: string;
  label: string;
  category: "Resin" | "Bouquets";
};

export const realWork: RealWorkItem[] = [
  { src: resinCoasters.url, alt: "Pair of handmade blush resin pieces with pressed red flowers held against the sky", label: "Pressed flower resin", category: "Resin" },
  { src: redRoseBouquet.url, alt: "Handmade red rose bouquet wrapped in black-edged newspaper paper", label: "Red rose bouquet", category: "Bouquets" },
  { src: heldRoseBouquet.url, alt: "Customer holding a handmade bouquet of red roses in newspaper wrapping", label: "A bouquet made to gift", category: "Bouquets" },
  { src: birthdayBouquet.url, alt: "Birthday bouquet with satin roses, personal photographs and a red bow", label: "Birthday photo bouquet", category: "Bouquets" },
  { src: resinFlowerPiece.url, alt: "Blush resin keepsake with pressed red flowers and hand-drawn details", label: "Botanical resin keepsake", category: "Resin" },
  { src: chocolateBouquet.url, alt: "Pink, red and yellow satin flower bouquet with photographs and chocolates", label: "Chocolate & photo bouquet", category: "Bouquets" },
  { src: satinRoseBouquet.url, alt: "Red satin rose bouquet styled with newspaper wrapping", label: "Satin rose bouquet", category: "Bouquets" },
  { src: familyFrame.url, alt: "Personalised round resin frame with family photographs, pearls and pink flowers", label: "Family photo frame", category: "Resin" },
  { src: personalisedKeepsake.url, alt: "Personalised resin keepsake with a photograph, flowers and a heartfelt message", label: "Personalised photo keepsake", category: "Resin" },
  { src: blushResinPiece.url, alt: "Blush resin piece with dried red flowers and gold flakes held against the sky", label: "Blush floral resin", category: "Resin" },
];
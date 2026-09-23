import resinCoasters from "@/assets/real-work/resin-flower-coasters.webp.asset.json";
import redRoseBouquet from "@/assets/real-work/red-rose-newspaper-bouquet.webp.asset.json";
import heldRoseBouquet from "@/assets/real-work/red-rose-bouquet-held.webp.asset.json";
import birthdayBouquet from "@/assets/real-work/birthday-photo-bouquet.webp.asset.json";
import resinFlowerPiece from "@/assets/real-work/pressed-flower-resin-piece.webp.asset.json";
import chocolateBouquet from "@/assets/real-work/chocolate-photo-satin-bouquet.webp.asset.json";
import satinRoseBouquet from "@/assets/real-work/red-satin-rose-bouquet.webp.asset.json";
import familyFrame from "@/assets/real-work/family-photo-resin-frame.webp.asset.json";
import personalisedKeepsake from "@/assets/real-work/personalised-resin-keepsake.jpg.asset.json";
import blushResinPiece from "@/assets/real-work/blush-floral-resin-piece.jpg.asset.json";

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
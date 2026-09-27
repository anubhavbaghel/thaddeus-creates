export const WHATSAPP_PHONE = "919654435911";

export function getWhatsAppLink(message?: string): string {
  const defaultText = "Hi Thaddeus Creates! I'm interested in ordering a custom handmade keepsake.";
  const textToEncode = message || defaultText;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(textToEncode)}`;
}

export function getProductWhatsAppLink(productName: string, startingPrice?: string): string {
  const priceInfo = startingPrice ? ` (${startingPrice})` : "";
  const message = `Hi Thaddeus Creates! 👋\n\nI'm interested in ordering a custom *${productName}*${priceInfo}.\n\nI saw this on thaddeuscreates.shop and would love to discuss photos, colours and custom options!`;
  return getWhatsAppLink(message);
}

export function getGalleryItemWhatsAppLink(itemLabel: string, category: string): string {
  const message = `Hi Thaddeus Creates! 👋\n\nI saw your handmade *${itemLabel}* (${category}) in the Studio Gallery on thaddeuscreates.shop and would love to enquire about ordering a similar custom piece!`;
  return getWhatsAppLink(message);
}

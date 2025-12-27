export function buildWhatsAppLink(phone: string, message?: string) {
  const digits = phone.replace(/[^\d]/g, ""); // +507 6534-3521 -> 50765343521
  const text = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${digits}${text ? `?text=${text}` : ""}`;
}

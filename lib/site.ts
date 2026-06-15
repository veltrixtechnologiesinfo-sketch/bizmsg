// ────────────────────────────────────────────────────────────────
//  BizMsg — central site configuration.
//  Edit phone / email / pricing here once; the whole site updates.
// ────────────────────────────────────────────────────────────────

export const site = {
  name: "BizMsg",
  tagline: "Affordable WhatsApp Messaging API for Pakistani Businesses",
  subtitle:
    "Send lab reports, appointment reminders, and notifications to your customers on WhatsApp — reliable, automated, and made in Pakistan.",
  domain: "bizmsg.pro",
  url: "https://bizmsg.pro",

  // Contact
  phoneDisplay: "+92 325 1411 320",
  phoneIntl: "923251411320", // used for wa.me (no +, no spaces)
  email: "veltrixtechnologiesinfo@gmail.com",
  ownerName: "Adeel",

  // Social links (update with real URLs when ready)
  social: {
    whatsapp: "https://wa.me/923251411320",
    facebook: "#",
    linkedin: "#",
    instagram: "#",
  },
} as const;

/**
 * Build a wa.me deep link with a pre-filled message.
 * Works on mobile (opens app) and desktop (WhatsApp Web).
 */
export function waLink(message: string): string {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}

/** Quote-request message in the format requested. */
export function buildQuoteMessage(fields: {
  name: string;
  business: string;
  phone: string;
  service: string;
}): string {
  return `Salam ${site.ownerName},
I'd like to discuss BizMsg services.
Name: ${fields.name}
Business: ${fields.business}
Phone: ${fields.phone}
Interested in: ${fields.service}
Please share details.`;
}

/** Generic "Get Quote" message used by header / hero buttons. */
export const quickQuoteMessage = `Salam ${site.ownerName},
I'd like to get a quote for BizMsg WhatsApp messaging services. Please share details.`;

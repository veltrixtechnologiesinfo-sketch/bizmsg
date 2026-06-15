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

/** Detailed, professional quotation request built from the form fields. */
export function buildQuoteMessage(fields: {
  name: string;
  business: string;
  phone: string;
  service: string;
}): string {
  return `Assalam o Alaikum ${site.ownerName},

I would like to request a quotation for BizMsg WhatsApp messaging services. My details are as follows:

• Name: ${fields.name}
• Business: ${fields.business}
• Contact Number: ${fields.phone}
• Service of Interest: ${fields.service}

Kindly share the pricing, features and onboarding process at your earliest convenience.

Thank you.`;
}

/** Short, professional quotation request used by header / hero / floating buttons. */
export const quickQuoteMessage = `Assalam o Alaikum ${site.ownerName},

I would like to request a quotation for BizMsg WhatsApp messaging services. Kindly share the available plans, pricing and setup details.

Thank you.`;

/** Professional quotation request for a specific pricing plan. */
export function buildPlanMessage(plan: string, price: string): string {
  return `Assalam o Alaikum ${site.ownerName},

I am interested in the BizMsg ${plan} plan (Rs ${price}/month). Kindly share the complete details, features and the process to get started.

Thank you.`;
}

/** Professional request for a custom / high-volume plan. */
export const customPlanMessage = `Assalam o Alaikum ${site.ownerName},

I require a custom BizMsg plan for higher messaging volume. Kindly share the available options and pricing.

Thank you.`;

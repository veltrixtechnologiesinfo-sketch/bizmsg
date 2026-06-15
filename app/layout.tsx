import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Body / UI font — clean, modern, highly readable for B2B.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Display / heading font — geometric, confident, professional.
const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — WhatsApp Messaging API for Pakistani Businesses`,
  description: site.subtitle,
  keywords: [
    "WhatsApp API Pakistan",
    "WhatsApp messaging for labs",
    "hospital appointment reminders",
    "bulk WhatsApp Pakistan",
    "lab report WhatsApp",
    "BizMsg",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Affordable WhatsApp Messaging API`,
    description: site.subtitle,
    url: site.url,
    siteName: site.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — WhatsApp Messaging API`,
    description: site.subtitle,
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}

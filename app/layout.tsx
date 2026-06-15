import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}

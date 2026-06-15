"use client";

import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

const features = [
  {
    icon: "💬",
    title: "WhatsApp Integration",
    short: "Reach customers where they already are — on WhatsApp.",
    back: "Send messages directly to verified WhatsApp numbers with delivery receipts. No app downloads for your customers.",
    gradient: "from-wa to-wa-dark",
  },
  {
    icon: "🔌",
    title: "REST API Access",
    short: "Simple, well-documented API for developers.",
    back: "Trigger messages from your own software with a single HTTP request. Clear docs, sample code, and webhook support.",
    gradient: "from-navy to-navy-light",
  },
  {
    icon: "📄",
    title: "PDF Report Support",
    short: "Send lab reports & invoices as PDF attachments.",
    back: "Deliver lab reports, prescriptions, and invoices as secure PDF files straight to your customer's chat.",
    gradient: "from-wa-dark to-navy",
  },
  {
    icon: "⏱️",
    title: "99.9% Uptime",
    short: "Reliable infrastructure that never sleeps.",
    back: "Monitored 24/7 with redundant servers, so your appointment reminders and alerts always go out on time.",
    gradient: "from-navy-light to-wa",
  },
  {
    icon: "💸",
    title: "Affordable Pricing",
    short: "Plans built for Pakistani businesses.",
    back: "Transparent monthly pricing in PKR with no hidden charges. Start small and scale as you grow.",
    gradient: "from-wa to-navy",
  },
  {
    icon: "🇵🇰",
    title: "Made in Pakistan",
    short: "Local support, local understanding.",
    back: "Built and supported in Pakistan. Talk to a real person on WhatsApp who understands your business needs.",
    gradient: "from-navy to-wa-dark",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything you need to{" "}
              <span className="text-wa">message at scale</span>
            </>
          }
          subtitle="Hover any card to see how it works. Powerful features, zero complexity."
        />

        <RevealGroup className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="flip-card h-64 w-full" tabIndex={0}>
                <div className="flip-inner rounded-2xl shadow-lg">
                  {/* Front */}
                  <div className="flip-face items-start gap-4 rounded-2xl border border-slate-100 bg-white p-7">
                    <div
                      className={`grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br ${f.gradient} text-2xl shadow-lg`}
                    >
                      {f.icon}
                    </div>
                    <h3 className="text-xl font-bold text-navy">{f.title}</h3>
                    <p className="text-slate-600">{f.short}</p>
                    <span className="mt-auto text-sm font-semibold text-wa-dark">
                      Hover to learn more →
                    </span>
                  </div>
                  {/* Back */}
                  <div
                    className={`flip-face flip-back items-start justify-center gap-3 rounded-2xl bg-gradient-to-br ${f.gradient} p-7 text-white`}
                  >
                    <div className="text-3xl">{f.icon}</div>
                    <h3 className="text-xl font-bold">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-white/95">{f.back}</p>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

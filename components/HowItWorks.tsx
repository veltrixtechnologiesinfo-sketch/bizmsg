"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

const steps = [
  {
    num: "01",
    icon: "📝",
    title: "Sign Up",
    text: "Send us a quick message on WhatsApp and pick the plan that fits your business.",
  },
  {
    num: "02",
    icon: "📲",
    title: "Scan QR Code",
    text: "Link your WhatsApp number by scanning a QR code — takes less than a minute.",
  },
  {
    num: "03",
    icon: "🚀",
    title: "Start Messaging",
    text: "Send reports, reminders and notifications instantly via dashboard or API.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-wa/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-navy/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              Live in <span className="text-wa">3 simple steps</span>
            </>
          }
          subtitle="No technical headache. Get up and running the same day."
        />

        <RevealGroup className="relative grid gap-10 md:grid-cols-3">
          {/* connecting dashed line */}
          <div className="absolute left-0 right-0 top-12 hidden md:block">
            <svg className="h-2 w-full" preserveAspectRatio="none">
              <line
                x1="16%"
                y1="4"
                x2="84%"
                y2="4"
                stroke="#25d366"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {steps.map((s) => (
            <RevealItem key={s.num} className="relative">
              <div className="group flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-navy to-wa text-4xl shadow-xl ring-8 ring-slate-50"
                >
                  {s.icon}
                  <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-white text-sm font-extrabold text-navy shadow-md">
                    {s.num}
                  </span>
                </motion.div>
                <h3 className="mt-6 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 max-w-xs text-slate-600">{s.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

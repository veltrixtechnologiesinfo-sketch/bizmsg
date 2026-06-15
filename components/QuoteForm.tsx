"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { waLink, buildQuoteMessage, site } from "@/lib/site";
import { WhatsAppIcon } from "./WaButton";

const services = [
  "Basic Plan (Rs 10,000/month — 5,000 messages)",
  "Pro Plan (Rs 15,000/month — 10,000 messages)",
  "Enterprise Plan (Rs 25,000/month — Unlimited)",
  "API Integration",
  "Custom / Not sure yet",
];

export function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    city: "",
    email: "",
    service: services[1],
    requirements: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [shake, setShake] = useState(false);

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, boolean> = {};
    if (!form.name.trim()) next.name = true;
    if (!form.business.trim()) next.business = true;
    if (!form.phone.trim()) next.phone = true;

    if (Object.keys(next).length) {
      setErrors(next);
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }

    const url = waLink(buildQuoteMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const fieldBase =
    "w-full rounded-xl border bg-white/95 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4";

  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-brand-gradient py-20 sm:py-28"
    >
      {/* blobs */}
      <div className="pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full bg-wa/20 blur-3xl [animation:var(--animate-blob)]" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl [animation:var(--animate-blob)] [animation-delay:-6s]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          light
          eyebrow="Get Quote"
          title="Get your free quote in 30 seconds"
          subtitle="Fill the form — it opens WhatsApp with your details pre-filled. No spam, ever."
        />

        <div className="grid items-center gap-10 lg:grid-cols-5">
          {/* Left blurb */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="space-y-6 text-white">
              <h3 className="text-2xl font-bold">Talk to a real person 🇵🇰</h3>
              <p className="text-blue-100/90">
                No call centers, no bots. Send your details and chat directly with
                our team on WhatsApp to get started today.
              </p>
              <ul className="space-y-3">
                {[
                  "Reply within minutes during business hours",
                  "Free consultation & setup guidance",
                  "Custom plans for high volume",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-wa text-white">
                      <WhatsAppIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-blue-50">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm text-blue-100">Prefer to message directly?</p>
                <p className="mt-1 text-lg font-bold text-white">
                  {site.phoneDisplay}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form card */}
          <Reveal direction="left" className="lg:col-span-3">
            <motion.form
              onSubmit={handleSubmit}
              animate={shake ? { x: [0, -10, 10, -8, 8, -4, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-navy">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="e.g. Ahmed Khan"
                    className={`${fieldBase} ${
                      errors.name
                        ? "border-red-400 focus:ring-red-100"
                        : "border-slate-200 focus:border-wa focus:ring-wa/15"
                    }`}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-navy">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={form.business}
                    onChange={update("business")}
                    placeholder="e.g. City Diagnostic Lab"
                    className={`${fieldBase} ${
                      errors.business
                        ? "border-red-400 focus:ring-red-100"
                        : "border-slate-200 focus:border-wa focus:ring-wa/15"
                    }`}
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-navy">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="e.g. 0300 1234567"
                    className={`${fieldBase} ${
                      errors.phone
                        ? "border-red-400 focus:ring-red-100"
                        : "border-slate-200 focus:border-wa focus:ring-wa/15"
                    }`}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-navy">
                    City <span className="font-normal text-slate-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={update("city")}
                    placeholder="e.g. Karachi"
                    className={`${fieldBase} border-slate-200 focus:border-wa focus:ring-wa/15`}
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-navy">
                    Email <span className="font-normal text-slate-400">(optional)</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="e.g. info@yourbusiness.com"
                    className={`${fieldBase} border-slate-200 focus:border-wa focus:ring-wa/15`}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-navy">
                    Plan Interest
                  </label>
                  <select
                    value={form.service}
                    onChange={update("service")}
                    className={`${fieldBase} border-slate-200 focus:border-wa focus:ring-wa/15`}
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-semibold text-navy">
                  Specific Requirements{" "}
                  <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <textarea
                  value={form.requirements}
                  onChange={update("requirements")}
                  rows={3}
                  placeholder={
                    "e.g. Need to send lab reports (PDF) to patients\nApproximately 200-300 reports per day\nIntegration with our existing system"
                  }
                  className={`${fieldBase} resize-none border-slate-200 focus:border-wa focus:ring-wa/15`}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-water mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-wa px-6 py-4 text-lg font-bold text-white shadow-lg shadow-wa/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <WhatsAppIcon className="h-6 w-6" /> Get Quote on WhatsApp
                </span>
              </motion.button>

              <p className="mt-4 text-center text-xs text-slate-400">
                By submitting, WhatsApp will open with your details pre-filled to{" "}
                {site.phoneDisplay}.
              </p>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

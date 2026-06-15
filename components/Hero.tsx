"use client";

import { motion } from "framer-motion";
import { site, waLink, quickQuoteMessage } from "@/lib/site";
import { WaButton, WhatsAppIcon } from "./WaButton";

const chats = [
  { from: "BizMsg", text: "✅ Your lab report is ready. Tap to view PDF.", me: false },
  { from: "You", text: "Reminder: Appointment tomorrow at 5:00 PM 🗓️", me: true },
  { from: "BizMsg", text: "💊 Your medicine is ready for pickup at the pharmacy.", me: false },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-gradient pt-28 pb-20"
    >
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-wa/30 blur-3xl [animation:var(--animate-blob)]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl [animation:var(--animate-blob)] [animation-delay:-5s]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-wa/20 blur-3xl [animation:var(--animate-blob)] [animation-delay:-9s]" />
      </div>

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-wa" />
            </span>
            🇵🇰 Made in Pakistan · 99.9% Uptime
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            WhatsApp Messaging{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-wa-light to-wa bg-clip-text text-transparent">
                API
              </span>
            </span>{" "}
            for Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-xl text-lg text-blue-100/90 lg:mx-0"
          >
            {site.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center"
          >
            <WaButton href={waLink(quickQuoteMessage)} pulse float>
              <WhatsAppIcon className="h-5 w-5" /> Get Quote
            </WaButton>
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              View Pricing
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-blue-100/80 lg:justify-start"
          >
            {["No setup fee", "PDF report support", "REST API access"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <svg className="h-5 w-5 text-wa" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: floating phone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto w-72 rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl"
          >
            {/* notch */}
            <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
            <div className="overflow-hidden rounded-[1.7rem] bg-[#0b141a]">
              {/* chat header */}
              <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-wa text-white">
                  <WhatsAppIcon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">BizMsg</p>
                  <p className="text-xs text-wa-light">online</p>
                </div>
              </div>
              {/* messages */}
              <div className="space-y-3 px-3 py-5 [background:#0b141a]">
                {chats.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1 + i * 0.6, duration: 0.4 }}
                    className={`flex ${c.me ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow ${
                        c.me
                          ? "rounded-br-sm bg-[#005c4b] text-white"
                          : "rounded-bl-sm bg-[#1f2c34] text-slate-100"
                      }`}
                    >
                      {c.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* floating tags */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-16 rounded-xl bg-white px-4 py-2 shadow-xl"
          >
            <p className="text-xs font-semibold text-navy">⚡ Delivered</p>
            <p className="text-[10px] text-slate-500">in &lt; 2 seconds</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 bottom-20 rounded-xl bg-white px-4 py-2 shadow-xl"
          >
            <p className="text-xs font-semibold text-wa-dark">📄 PDF Sent</p>
            <p className="text-[10px] text-slate-500">lab-report.pdf</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Water wave divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-[60px] w-full sm:h-[90px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C300,120 600,0 900,50 C1050,75 1150,60 1200,40 L1200,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, waLink, quickQuoteMessage } from "@/lib/site";
import { WaButton, WhatsAppIcon } from "./WaButton";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#quote", label: "Get Quote" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 group">
          <motion.span
            whileHover={{ rotate: [0, -12, 12, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-navy to-wa text-white shadow-lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </motion.span>
          <span
            className={`text-xl font-extrabold tracking-tight transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Biz<span className="text-wa">Msg</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-wa after:transition-all hover:after:w-full ${
                  scrolled
                    ? "text-slate-700 hover:text-navy"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WaButton
            href={waLink(quickQuoteMessage)}
            className="!px-5 !py-2.5 !text-sm"
            pulse
          >
            <WhatsAppIcon className="h-4 w-4" /> Get Quote
          </WaButton>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 grid h-10 w-10 place-items-center rounded-lg lg:hidden ${
            scrolled || open ? "text-navy" : "text-white"
          }`}
        >
          <div className="space-y-1.5">
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-current"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-current"
            />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white/95 backdrop-blur-md shadow-lg lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-100 hover:text-navy"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="px-3 pt-2">
                <a
                  href={waLink(quickQuoteMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-water flex items-center justify-center gap-2 rounded-full bg-wa px-5 py-3 font-semibold text-white"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <WhatsAppIcon className="h-4 w-4" /> Get Quote on WhatsApp
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

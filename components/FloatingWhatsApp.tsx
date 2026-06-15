"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { waLink, quickQuoteMessage } from "@/lib/site";
import { WhatsAppIcon } from "./WaButton";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink(quickQuoteMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -8, 0] }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            scale: { type: "spring", stiffness: 260, damping: 18 },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className="animate-pulse-ring fixed bottom-5 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-wa text-white shadow-2xl ring-4 ring-white sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        >
          <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

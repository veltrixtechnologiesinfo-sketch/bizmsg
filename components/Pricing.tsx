"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import { waLink, site } from "@/lib/site";
import { WhatsAppIcon } from "./WaButton";

const plans = [
  {
    name: "Basic",
    price: "10,000",
    messages: "5,000 messages / month",
    popular: false,
    features: [
      "5,000 WhatsApp messages",
      "Single WhatsApp number",
      "PDF report sending",
      "Dashboard access",
      "Email & WhatsApp support",
    ],
  },
  {
    name: "Pro",
    price: "15,000",
    messages: "10,000 messages / month",
    popular: true,
    features: [
      "10,000 WhatsApp messages",
      "API access included",
      "PDF reports & invoices",
      "Delivery reports",
      "Priority WhatsApp support",
      "Webhook notifications",
    ],
  },
  {
    name: "Enterprise",
    price: "25,000",
    messages: "Unlimited messages",
    popular: false,
    features: [
      "Unlimited messages",
      "Multiple WhatsApp numbers",
      "Full REST API + webhooks",
      "Dedicated account manager",
      "99.9% uptime SLA",
      "Custom integrations",
    ],
  },
];

function planMessage(plan: string, price: string) {
  return `Salam ${site.ownerName},
I'm interested in the BizMsg ${plan} plan (Rs ${price}/month).
Please share details and how to get started.`;
}

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple, transparent <span className="text-wa">PKR pricing</span>
            </>
          }
          subtitle="No setup fees. No hidden charges. Cancel anytime."
        />

        <RevealGroup className="grid items-stretch gap-8 lg:grid-cols-3">
          {plans.map((p) => (
            <RevealItem key={p.name} className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 250 }}
                className={`relative flex h-full flex-col rounded-3xl p-8 shadow-xl ${
                  p.popular
                    ? "bg-gradient-to-br from-navy to-navy-dark text-white ring-2 ring-wa lg:-mt-4 lg:mb-4"
                    : "border border-slate-100 bg-white text-slate-900"
                }`}
              >
                {p.popular && (
                  <motion.span
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-wa px-4 py-1.5 text-sm font-bold text-white shadow-lg"
                  >
                    ⭐ Most Popular
                  </motion.span>
                )}

                <h3
                  className={`text-lg font-bold uppercase tracking-wide ${
                    p.popular ? "text-wa-light" : "text-wa-dark"
                  }`}
                >
                  {p.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-semibold opacity-70">Rs</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {p.price}
                  </span>
                  <span className="opacity-70">/mo</span>
                </div>
                <p
                  className={`mt-1 text-sm font-medium ${
                    p.popular ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {p.messages}
                </p>

                <ul className="mt-7 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full ${
                          p.popular ? "bg-wa text-white" : "bg-wa/15 text-wa-dark"
                        }`}
                      >
                        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className={p.popular ? "text-blue-50" : "text-slate-600"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(planMessage(p.name, p.price))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-water mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-transform hover:scale-[1.03] ${
                    p.popular
                      ? "bg-wa text-white shadow-lg"
                      : "bg-navy text-white hover:bg-navy-light"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <WhatsAppIcon className="h-5 w-5" /> Choose {p.name}
                  </span>
                </a>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-10 text-center text-slate-500">
          Need a custom volume?{" "}
          <a
            href={waLink(`Salam ${site.ownerName}, I need a custom BizMsg plan. Please share details.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-wa-dark underline-offset-4 hover:underline"
          >
            Talk to us on WhatsApp →
          </a>
        </p>
      </div>
    </section>
  );
}

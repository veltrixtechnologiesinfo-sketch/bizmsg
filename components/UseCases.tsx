"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";
import { waLink, site } from "@/lib/site";

const cases = [
  {
    icon: "🧪",
    title: "Labs",
    desc: "Send test reports as PDFs the moment they're ready. No more patients calling to ask.",
    points: ["Instant report delivery", "Sample-ready alerts", "Payment reminders"],
    gradient: "from-wa to-wa-dark",
  },
  {
    icon: "🏥",
    title: "Hospitals",
    desc: "Automate appointment reminders and reduce no-shows with timely WhatsApp nudges.",
    points: ["Appointment reminders", "Admission updates", "Follow-up care"],
    gradient: "from-navy to-navy-light",
  },
  {
    icon: "💊",
    title: "Pharmacies",
    desc: "Notify customers when medicines arrive and send refill reminders automatically.",
    points: ["Stock-ready alerts", "Refill reminders", "Delivery updates"],
    gradient: "from-wa-dark to-navy",
  },
  {
    icon: "🎓",
    title: "Coaching Centers",
    desc: "Share class schedules, fee reminders and results with students and parents.",
    points: ["Class schedules", "Fee reminders", "Result announcements"],
    gradient: "from-navy-light to-wa",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Use Cases"
          title={
            <>
              Built for businesses{" "}
              <span className="text-wa">across Pakistan</span>
            </>
          }
          subtitle="From single labs to multi-branch hospitals — BizMsg fits right in."
        />

        <RevealGroup className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c, i) => (
            <RevealItem
              key={c.title}
              pop
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-md"
              >
                <div
                  className={`absolute inset-x-0 -top-20 h-40 bg-gradient-to-br ${c.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
                />
                <div
                  className={`relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${c.gradient} text-3xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  {c.icon}
                </div>
                <h3 className="relative mt-5 text-xl font-bold text-navy">
                  {c.title}
                </h3>
                <p className="relative mt-2 text-sm text-slate-600">{c.desc}</p>
                <ul className="relative mt-4 space-y-2">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-wa" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 text-center">
          <a
            href={waLink(
              `Assalam o Alaikum ${site.ownerName},\n\nI run a business and would like to use BizMsg for WhatsApp messaging. Kindly share the plans, pricing and details.\n\nThank you.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-water inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 sm:px-7 sm:py-3.5 sm:text-base"
          >
            <span className="relative z-10">Don&apos;t see your industry? Ask us →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoom";

const offset: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 50 },
  down: { y: -50 },
  left: { x: 70 },
  right: { x: -70 },
  zoom: { scale: 0.8 },
};

// Replay on every scroll-in, and only trigger once a good chunk is visible.
const viewport = { once: false, amount: 0.25 } as const;

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset[direction] },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container — wrap a grid of <RevealItem> children. */
export function RevealGroup({
  children,
  className,
  stagger = 0.18,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
  pop = false,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  /** Dramatic "boom" entrance — flies in from the edge and springs into place. */
  pop?: boolean;
}) {
  const boom = pop
    ? {
        left: { x: -90, rotate: -5 },
        right: { x: 90, rotate: 5 },
        up: { y: 110 },
        down: { y: -110 },
        zoom: {},
      }[direction]
    : offset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, scale: pop ? 0.5 : 1, ...boom },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: pop
        ? // slower, softer spring so the "boom" is clearly visible
          { type: "spring", stiffness: 65, damping: 15, mass: 1.1 }
        : { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

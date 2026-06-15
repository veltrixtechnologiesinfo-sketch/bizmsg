"use client";

/**
 * BizMsg brand mark — a gradient chat bubble (navy → WhatsApp green)
 * with a bold "B" inside. Fully coded SVG, scales crisply at any size.
 */
export function BizLogo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="BizMsg logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bizGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#25D366" />
        </linearGradient>
      </defs>

      {/* Speech bubble with a tail at the bottom-left */}
      <path
        d="M18 5 H46 A13 13 0 0 1 59 18 V37 A13 13 0 0 1 46 50 H23 L9 60 V18 A13 13 0 0 1 22 5 Z"
        fill="url(#bizGrad)"
      />

      {/* Rounded white "B" */}
      <text
        x="32"
        y="29"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-display), system-ui, sans-serif"
        fontWeight="800"
        fontSize="30"
        fill="#ffffff"
      >
        B
      </text>
    </svg>
  );
}

import React from "react";

// Custom mark: a blueprint bracket/corner-mark morphing into a code bracket —
// ties the "blueprint to code" narrative into the brand itself.
const Logo = ({ className = "brand-mark" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={className}
    aria-label="Somil Garak logo"
    role="img"
  >
    <path
      d="M6 6H14"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M6 6V14"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <path
      d="M34 34H26"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      opacity="0.55"
    />
    <path
      d="M34 34V26"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      opacity="0.55"
    />
    <path
      d="M16 14L11 20L16 26"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 14L29 20L24 26"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12L19 28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

export default Logo;

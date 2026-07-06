import type { SVGProps } from "react";

const TailwindCSS = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 154" preserveAspectRatio="xMidYMid">
    <defs>
      <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="tailwind-gradient">
        <stop stopColor="#2298BD" offset="0%" />
        <stop stopColor="#0ED7B5" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M128 0Q76.8 0 64 51.2 83.2 25.6 108.8 32c14.629 3.657 25.088 14.275 36.659 26.037C163.85 77.09 185.472 99.2 230.4 99.2q51.2 0 64-51.2-19.2 25.6-44.8 19.2c-14.629-3.657-25.088-14.275-36.659-26.037C194.55 22.11 172.928 0 128 0zM25.6 54.4Q-25.6 54.4-38.4 105.6q19.2-25.6 44.8-19.2c14.629 3.657 25.088 14.275 36.659 26.037C61.45 131.49 83.072 153.6 128 153.6q51.2 0 64-51.2-19.2 25.6-44.8 19.2c-14.629-3.657-25.088-14.275-36.659-26.037C92.15 76.51 70.528 54.4 25.6 54.4z"
      fill="url(#tailwind-gradient)"
    />
  </svg>
);

export { TailwindCSS };

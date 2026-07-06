import type { SVGProps } from "react";

const Firebase = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 351" preserveAspectRatio="xMidYMid">
    <defs>
      <linearGradient id="firebase-a" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFC24A" />
        <stop offset="100%" stopColor="#F6820C" />
      </linearGradient>
      <linearGradient id="firebase-b" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F6820C" />
        <stop offset="100%" stopColor="#FCCA3F" />
      </linearGradient>
      <linearGradient id="firebase-c" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFCB2B" />
        <stop offset="100%" stopColor="#FFCB2B" />
      </linearGradient>
    </defs>
    <path
      d="M1.253 280.732l1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732z"
      fill="url(#firebase-a)"
    />
    <path
      d="M134.417 148.974l32.039-32.812-32.039-61.518c-3.042-5.791-10.433-5.791-13.474 0l-18.146 34.453v3.817l31.62 56.06z"
      fill="url(#firebase-b)"
    />
    <path
      d="M0 282.998l.962-2.012 64.432-113.014 69.023 69.023-85.947 85.948A15.03 15.03 0 0133.5 331L0 282.998z"
      fill="url(#firebase-c)"
    />
    <path
      d="M139.121 347.551l116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0023.513.005"
      fill="#FCCA3F"
    />
  </svg>
);

export { Firebase };

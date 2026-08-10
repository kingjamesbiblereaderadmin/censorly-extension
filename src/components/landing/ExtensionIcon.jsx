// TextVeil brand logo — a wave/veil motif: three faded text lines with a
// flowing wavy veil line drifting across them. Inline SVG, teal via the
// accent token, so it inherits the brand color everywhere it's used.
export default function ExtensionIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="TextVeil"
    >
      <g
        stroke="hsl(var(--wsp-accent))"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.35"
      >
        <line x1="4" y1="8.5" x2="20" y2="8.5" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="15.5" x2="20" y2="15.5" />
      </g>
      <path
        d="M3 12 Q 6 6, 9 12 T 15 12 T 21 12"
        stroke="hsl(var(--wsp-accent))"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
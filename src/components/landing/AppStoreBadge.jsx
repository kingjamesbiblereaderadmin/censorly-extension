export default function AppStoreBadge({ className = "" }) {
  return (
    <a
      href="https://apps.apple.com/us/app/censorly/id6814797862?mt=12"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Censorly on the App Store"
      className={`inline-flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 min-h-[44px] ${className}`}
    >
      <svg
        viewBox="0 0 120 40"
        className="h-[44px] sm:h-[52px] w-auto"
        role="img"
        aria-label="Download on the App Store"
      >
        <rect width="120" height="40" rx="7.5" fill="#000000" />
        <g transform="translate(17,11.5) scale(0.0332)">
          <path
            fill="#ffffff"
            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.7-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
          />
        </g>
        <text x="36" y="16" fill="#ffffff" fontSize="8" fontFamily="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif">
          Download on the
        </text>
        <text x="36" y="30" fill="#ffffff" fontSize="15" fontWeight="600" fontFamily="-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif">
          App Store
        </text>
      </svg>
    </a>
  );
}
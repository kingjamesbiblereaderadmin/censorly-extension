// Word Shield Pro brand logo — shield emoji.
export default function ExtensionIcon({ className = "" }) {
  return (
    <span
      className={className}
      role="img"
      aria-label="Word Shield Pro logo"
      style={{ fontSize: "1.4rem", lineHeight: 1, display: "inline-flex", alignItems: "center" }}
    >
      🛡️
    </span>
  );
}
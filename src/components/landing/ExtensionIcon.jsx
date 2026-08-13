const ICON_URL =
  "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/085c83db8_censorly-icon-512.png";

// Censorly brand icon — teal gradient rounded square with a censor bar.
// Renders the official icon image so every logo usage stays identical.
export default function ExtensionIcon({ className = "" }) {
  return (
    <img
      src={ICON_URL}
      alt="Censorly"
      className={className}
      draggable={false}
    />
  );
}
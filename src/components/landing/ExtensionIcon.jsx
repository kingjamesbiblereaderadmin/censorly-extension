// Word Shield Pro brand logo — custom-drawn shield icon.
const ICON_URL =
  "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/79f81ae78_icon128.png";

export default function ExtensionIcon({ className = "" }) {
  return (
    <img
      src={ICON_URL}
      alt="Word Shield Pro logo"
      className={className}
      style={{ objectFit: "contain", display: "inline-block" }}
    />
  );
}
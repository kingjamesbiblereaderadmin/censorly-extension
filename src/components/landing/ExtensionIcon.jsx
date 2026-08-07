// Real Word Shield Pro Chrome extension toolbar icon.
const ICON_128 =
  "https://base44.app/api/apps/6a7554db139ec155f84e28de/files/mp/public/6a7554db139ec155f84e28de/a30cad416_icon128.png";

export const EXTENSION_ICON_URL = ICON_128;

export default function ExtensionIcon({ className = "w-7 h-7" }) {
  return (
    <img
      src={ICON_128}
      alt="Word Shield Pro extension icon"
      className={className}
      draggable={false}
    />
  );
}
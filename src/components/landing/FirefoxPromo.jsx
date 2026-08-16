const AMO_URL = "https://addons.mozilla.org/en-GB/android/addon/censorly/";
const AMO_BADGE =
  "https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg";

export default function FirefoxPromo({ className = "" }) {
  return (
    <a
      href={AMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Censorly for Firefox from Firefox Add-ons"
      className={`inline-flex items-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wsp-accent))] focus-visible:ring-offset-2 ${className}`}
    >
      <img
        src={AMO_BADGE}
        alt="Get the add-on — Firefox Add-ons"
        className="h-[44px] sm:h-[56px] w-auto max-w-full rounded-xl"
        draggable={false}
      />
    </a>
  );
}
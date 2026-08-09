import { Search, MessageCircle, Clock, ThumbsUp } from "lucide-react";
import { filterText } from "./filterText";

const SITE_URL = "https://news.example.com/article/spam-alert";

const HEADLINE = "New spam wave spreads damn fast — a clever scam hitting inboxes";
const BYLINE = "By J. Rivera · Tech desk";
const ARTICLE =
  "Reports of a coordinated spam campaign are flooding inboxes nationwide this week. Security researchers warn these scam networks are spreading faster than ever, baiting users with get-rich promises. \"It's a damn mess,\" one analyst told this desk. Stay alert and verify every link.";
const SEARCH_QUERY = "spam scam reports";
const COMMENTS = [
  { name: "alex_dev", time: "2h ago", body: "This spam is totally out of control. Got hit by a scam last week 😤", likes: 42 },
  { name: "sami_k", time: "5h ago", body: "Damn, I almost fell for one of these. Stay safe out there, everyone.", likes: 18 },
];

function BrowserChrome() {
  return (
    <div className="flex items-center gap-2 px-4 h-10 border-b border-[hsl(var(--wsp-navy)/0.08)] bg-[hsl(var(--wsp-navy)/0.03)]">
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
      <div className="ml-3 flex-1 flex items-center gap-2 rounded-md bg-white border border-[hsl(var(--wsp-navy)/0.1)] px-3 h-7 text-xs text-[hsl(var(--wsp-navy)/0.6)] font-mono truncate">
        <span className="text-[hsl(var(--wsp-navy)/0.4)]">🔒</span>
        {SITE_URL}
      </div>
    </div>
  );
}

export default function SampleFeed({ words, mode, blurIntensity, active }) {
  const f = (text) => (active ? filterText(text, words, mode, blurIntensity) : text);

  return (
    <div className="rounded-2xl border border-[hsl(var(--wsp-navy)/0.1)] bg-white overflow-hidden shadow-xl shadow-[hsl(var(--wsp-navy)/0.08)]">
      <BrowserChrome />

      <div className="p-6 sm:p-8">
        {/* Article */}
        <article>
          <h3 className="font-heading font-bold text-2xl sm:text-[1.7rem] leading-tight text-[hsl(var(--wsp-navy))]">
            {f(HEADLINE)}
          </h3>
          <div className="mt-3 flex items-center gap-3 text-xs text-[hsl(var(--wsp-navy)/0.5)] font-mono">
            <span>{f(BYLINE)}</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 8 min read</span>
          </div>
          <p className="mt-5 text-[15.5px] leading-[1.85] text-[hsl(var(--wsp-navy)/0.78)]">
            {f(ARTICLE)}
          </p>

          {/* Search box — filtered words masked inside the field too */}
          <div className="mt-6">
            <div className="flex items-center gap-2.5 rounded-xl border border-[hsl(var(--wsp-navy)/0.12)] bg-[hsl(var(--wsp-navy)/0.02)] px-3.5 h-11">
              <Search className="w-4 h-4 text-[hsl(var(--wsp-navy)/0.4)] shrink-0" />
              <span className="text-sm text-[hsl(var(--wsp-navy)/0.75)]">{f(SEARCH_QUERY)}</span>
            </div>
          </div>
        </article>

        {/* Comments */}
        <div className="mt-8 pt-6 border-t border-[hsl(var(--wsp-navy)/0.08)]">
          <div className="flex items-center gap-2 text-sm font-semibold text-[hsl(var(--wsp-navy))]">
            <MessageCircle className="w-4 h-4 text-[hsl(var(--wsp-accent))]" />
            Comments
            <span className="text-[hsl(var(--wsp-navy)/0.4)] font-normal">({COMMENTS.length})</span>
          </div>
          <div className="mt-4 space-y-4">
            {COMMENTS.map((c) => (
              <div key={c.name} className="flex gap-3">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[hsl(var(--wsp-accent)/0.15)] text-[hsl(var(--wsp-accent))] flex items-center justify-center text-xs font-bold uppercase">
                  {c.name.slice(0, 2)}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-[hsl(var(--wsp-navy))]">@{c.name}</span>
                    <span className="text-xs text-[hsl(var(--wsp-navy)/0.4)]">{c.time}</span>
                  </div>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-[hsl(var(--wsp-navy)/0.78)]">{f(c.body)}</p>
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-[hsl(var(--wsp-navy)/0.45)]">
                    <ThumbsUp className="w-3.5 h-3.5" /> {c.likes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import { Fragment } from "react";
import FilteredWord from "./FilteredWord";

// Accent-insensitive normaliser: lowercase, strip diacritics, drop non-alphanumerics.
const norm = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

// Splits text into whitespace / token parts, and each token into
// (punctuation prefix)(core word)(punctuation suffix). Cores that match a
// filtered word are wrapped in <FilteredWord>; everything else renders raw.
export function filterText(text, words, mode, blurIntensity) {
  const normWords = new Set(words.map(norm).filter(Boolean));
  if (normWords.size === 0) return text;

  return text.split(/(\s+)/).map((part, i) => {
    if (part === "" || /^\s+$/.test(part)) return <Fragment key={i}>{part}</Fragment>;

    const m = part.match(/^([^\w]*)([\w'-]*)([^\w]*)$/);
    if (!m) return <Fragment key={i}>{part}</Fragment>;
    const [, pre, core, post] = m;
    if (core && normWords.has(norm(core))) {
      return (
        <Fragment key={i}>
          {pre}
          <FilteredWord word={core} mode={mode} blurIntensity={blurIntensity} />
          {post}
        </Fragment>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
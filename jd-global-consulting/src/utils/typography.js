const NBSP_WORDS = [
  "a",
  "i",
  "o",
  "u",
  "w",
  "z",
  "do",
  "na",
  "po",
  "za",
  "od",
  "we",
  "ze",
  "oraz",
  "ale",
  "lecz",
  "czy",
  "lub",
  "ani",
  "że",
  "które",
  "który",
  "która",
  "którzy",
  "których",
  "którym",
  "którego",
  "którą",
  "to",
  "tak",
  "jak",
  "gdy",
  "aby",
  "aż",
  "więc",
];

const WORDS_RE = new RegExp(String.raw`\b(${NBSP_WORDS.join("|")})\s`, "giu");

export function fixPolishWidows(text = "") {
  if (typeof text !== "string" || !text) return text;
  return text.replace(WORDS_RE, (_m, w) => `${w}\u00A0`);
}

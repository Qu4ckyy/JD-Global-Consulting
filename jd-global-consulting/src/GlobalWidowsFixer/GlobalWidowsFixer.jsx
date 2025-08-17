import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fixPolishWidows } from "../utils/typography";

export default function GlobalWidowsFixer() {
  const location = useLocation();

  useEffect(() => {
    const SKIP_TAGS = new Set([
      "SCRIPT",
      "STYLE",
      "NOSCRIPT",
      "CODE",
      "PRE",
      "TEXTAREA",
      "INPUT",
      "SELECT",
    ]);
    const shouldSkipEl = (el) =>
      SKIP_TAGS.has(el.tagName) ||
      el.isContentEditable ||
      el.closest?.('[contenteditable="true"]') ||
      el.closest?.(".js-nbsp-skip, [data-nbsp-skip]");

    const walk = (node) => {
      if (!node) return;
      if (node.nodeType === Node.TEXT_NODE) {
        const next = fixPolishWidows(node.nodeValue);
        if (next !== node.nodeValue) node.nodeValue = next;
        return;
      }
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = /** @type {HTMLElement} */ (node);
        if (shouldSkipEl(el)) return;
        for (const child of el.childNodes) walk(child);
      }
    };

    const id = requestAnimationFrame(() => walk(document.body));

    const mo = new MutationObserver((records) => {
      for (const r of records) {
        for (const n of r.addedNodes) {
          if (n.nodeType === 1) {
            if (!shouldSkipEl(n)) walk(n);
          } else if (n.nodeType === 3) {
            const t = n.nodeValue || "";
            const next = fixPolishWidows(t);
            if (next !== t) n.nodeValue = next;
          }
        }
        if (r.type === "characterData" && r.target?.nodeType === 3) {
          const text = r.target.nodeValue || "";
          const next = fixPolishWidows(text);
          if (next !== text) r.target.nodeValue = next;
        }
      }
    });
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      cancelAnimationFrame(id);
      mo.disconnect();
    };
  }, [location.pathname]);

  return null;
}

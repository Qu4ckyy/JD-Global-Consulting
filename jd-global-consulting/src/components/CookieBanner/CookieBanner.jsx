import React, { useState, useEffect } from "react";
import "./CookieBanner.scss";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const necessary = true;

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cookieConsent");
      if (raw) {
        const data = JSON.parse(raw);
        if (
          data?.acceptedAt &&
          Date.now() - data.acceptedAt < 24 * 60 * 60 * 1000
        ) {
          return;
        }
      }
    } catch (_) {}
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const hide = () => setVisible(false);

  const acceptAll = () => {
    setAnalytics(true);
    setMarketing(true);
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        analytics: true,
        marketing: true,
        acceptedAt: Date.now(),
      })
    );
    hide();
  };

  const rejectAll = () => {
    setAnalytics(false);
    setMarketing(false);
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        analytics: false,
        marketing: false,
        acceptedAt: Date.now(),
      })
    );
    hide();
  };

  const saveSelected = () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ analytics, marketing, acceptedAt: Date.now() })
    );
    hide();
  };

  return (
    <div className={`cookie-banner${visible ? " visible" : ""}`}>
      <div className="cookie-banner__inner">
        <button
          className="cookie-banner__close"
          onClick={hide}
          aria-label="Zamknij baner cookies"
        >
          ✕
        </button>

        <p className="cookie-banner__lead">
          Ta strona używa plików cookie i przetwarza dane osobowe w celu
          personalizacji treści i reklam oraz analizy ruchu.
        </p>

        {/* Niezbędne */}
        <div className="cookie-banner__group">
          <input
            id="cb-necessary"
            className="cookie-banner__checkbox"
            type="checkbox"
            checked
            readOnly
            disabled
          />
          <label htmlFor="cb-necessary" className="cookie-banner__label">
            <span className="cookie-banner__label-title">Niezbędne</span>
            <span className="cookie-banner__label-desc">
              Wymagane do prawidłowego działania strony
            </span>
          </label>
        </div>

        {/* Analityczne */}
        <div className="cookie-banner__group">
          <input
            id="cb-analytics"
            className="cookie-banner__checkbox"
            type="checkbox"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
          />
          <label htmlFor="cb-analytics" className="cookie-banner__label">
            <span className="cookie-banner__label-title">Analityczne</span>
            <span className="cookie-banner__label-desc">
              Pomagają nam zrozumieć, jak użytkownicy korzystają z naszej strony
            </span>
          </label>
        </div>

        {/* Marketingowe i personalizacja */}
        <div className="cookie-banner__group">
          <input
            id="cb-marketing"
            className="cookie-banner__checkbox"
            type="checkbox"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
          />
          <label htmlFor="cb-marketing" className="cookie-banner__label">
            <span className="cookie-banner__label-title">
              Marketingowe i Personalizacja
            </span>
            <span className="cookie-banner__label-desc">
              Używane do wyświetlania spersonalizowanych reklam i treści
            </span>
          </label>
        </div>

        <div className="cookie-banner__buttons">
          <button className="btn btn--ghost" onClick={rejectAll}>
            Odrzuć wszystkie
          </button>
          <button className="btn btn--primary" onClick={saveSelected}>
            Zapisz wybrane
          </button>
          <button className="btn btn--secondary" onClick={acceptAll}>
            Akceptuj wszystkie
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

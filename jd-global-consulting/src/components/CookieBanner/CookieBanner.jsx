import React, { useState, useEffect } from "react";
import "./CookieBanner.scss";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const necessary = true;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const hide = () => setVisible(false);

  const acceptAll = () => {
    setAnalytics(true);
    setMarketing(true);
    hide();
  };

  const rejectAll = () => {
    setAnalytics(false);
    setMarketing(false);
    hide();
  };

  const saveSelected = () => {
    sessionStorage.setItem(
      "cookieSettings",
      JSON.stringify({ analytics, marketing })
    );
    hide();
  };

  return (
    <div className={`cookie-banner${visible ? " visible" : ""}`}>
      <button className="cookie-banner__close" onClick={hide}>
        ✕
      </button>

      <p className="cookie-banner__intro">
        Ta strona używa plików cookie i przetwarza dane osobowe w celu
        personalizacji treści i reklam oraz analizy ruchu.
      </p>

      <div className="cookie-banner__options">
        <label>
          <input type="checkbox" checked={necessary} disabled />
          <span className="cookie-banner__opt-label">Niezbędne</span>
          <small>Wymagane do prawidłowego działania strony</small>
        </label>
        <label>
          <input
            type="checkbox"
            checked={analytics}
            onChange={() => setAnalytics((v) => !v)}
          />
          <span className="cookie-banner__opt-label">Analityczne</span>
          <small>
            Pomagają nam zrozumieć, jak użytkownicy korzystają z naszej strony
          </small>
        </label>
        <label>
          <input
            type="checkbox"
            checked={marketing}
            onChange={() => setMarketing((v) => !v)}
          />
          <span className="cookie-banner__opt-label">
            Marketingowe i Personalizacja
          </span>
          <small>
            Używane do wyświetlania spersonalizowanych reklam i treści
          </small>
        </label>
      </div>

      <div className="cookie-banner__actions">
        <button className="btn btn--outline" onClick={rejectAll}>
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
  );
};

export default CookieBanner;

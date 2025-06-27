import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const TechSpecialist = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = false;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`page${isMobile ? " mobile" : ""}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className={`baner${isMobile ? " mobile" : ""}`}>
        <img
          src="/logo JD global.png"
          alt="logo"
          onClick={() => navigate("/")}
        />
        {isMobile && (
          <button className="hamburger-icon" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        )}
        <div
          className={`nav-buttons${isMobile ? " mobile" : ""}${
            isMenuOpen ? " open" : ""
          }`}
        >
          <button className="aboutUs" onClick={() => navigate("/about")}>
            O nas
          </button>
          <button className="specialists" onClick={() => navigate("/")}>
            Specjaliści
          </button>
          <button className="services" onClick={() => navigate("/offer")}>
            Nasze usługi
          </button>
          <button className="news" onClick={() => navigate("/news")}>
            Aktualności
          </button>
          <button className="contact" onClick={() => navigate("/contact")}>
            Kontakt
          </button>
        </div>
      </header>
      <section className="header">
        <h1>Specjalista ds. Technologii i Cyfrowej Transformacji</h1>
        <button onClick={() => navigate("/contact")}>
          Umów się na konsultacje
        </button>
      </section>
      <div className="specialist-content">
        <section className="specialistsTasks">
          <div className="sTask">
            <img src="Internet.png" alt="strategia" />
            <span>
              Wdrażanie nowoczesnych technologii informatycznych w celu
              optymalizacji procesów biznesowych.{" "}
            </span>
          </div>
          <div className="sTask">
            <img src="sort.png" alt="kalendarz" />
            <span>
              Zarządzanie projektami cyfryzacji i transformacji technologicznej
              w firmie.
            </span>
          </div>
          <div className="sTask">
            <img src="shield.png" alt="analiza" />
            <span>
              Opracowywanie polityk bezpieczeństwa IT oraz zapewnienie ochrony
              danych.
            </span>
          </div>
          <div className="sTask">
            <img src="voice.png" alt="szukanie" />
            <span>
              Monitorowanie trendów technologicznych i proponowanie
              innowacyjnych rozwiązań.
            </span>
          </div>
        </section>
        <div className="specImage">
          <img src="specialists.png" alt="specjaliści" />
        </div>
      </div>
      <hr />
      <footer className={`footer${isMobile ? " mobile" : ""}`}>
        <div className="footer-top">
          <div className="footer-left">
            <h2>Bądź na bieżąco z rynkiem i innowacjami.</h2>
            <p>
              Chcesz dowiedzieć się, jak możemy Ci pomóc?
              <br />
              Skontaktuj się z nami.
            </p>
          </div>
          <form className="footer-newsletter">
            <label htmlFor="footer-email">Dołącz do newslettera</label>
            <input
              type="email"
              id="footer-email"
              placeholder="imie@gmail.com"
            />
            <div className="checkbox-row">
              <input type="checkbox" id="footer-agreement" />
              <label htmlFor="footer-agreement">
                Akceptuję politykę prywatności i chcę otrzymywać newsletter,
                czyli informacje handlowe o promocjach.
              </label>
            </div>
          </form>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="/logo JD global.png" alt="logo" />
            <span>Wszystkie prawa zastrzeżone</span>
          </div>
          <nav className="footer-nav">
            <button className="aboutUs" onClick={() => navigate("/about")}>
              O nas
            </button>
            <button className="news" onClick={() => navigate("/news")}>
              Aktualności
            </button>
            <button className="specialists" onClick={() => navigate("/")}>
              Specjaliści
            </button>
            <button className="services" onClick={() => navigate("/offer")}>
              Oferta
            </button>
            <button className="contact" onClick={() => navigate("/contact")}>
              Kontakt
            </button>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default TechSpecialist;

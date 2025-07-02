import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";

const DevelopmentSpecialist = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile(825);

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
        <h1>Specjalista ds. Rozwoju</h1>
        <button onClick={() => navigate("/contact")}>
          Umów się na konsultacje
        </button>
      </section>
      <div className="specialist-content">
        <section className="specialistsTasks">
          <div className="sTask">
            <img src="Data.png" alt="strategia" />
            <span>
              Tworzenie długoterminowej strategii rozwoju firmy oraz wzrostu
              marki na rynku.{" "}
            </span>
          </div>
          <div className="sTask">
            <img src="exchange.png" alt="kalendarz" />
            <span>
              Poszukiwanie nowych partnerów biznesowych oraz budowanie relacji z
              inwestorami.{" "}
            </span>
          </div>
          <div className="sTask">
            <img src="community.png" alt="analiza" />
            <span>
              Wdrażanie działań CSR związanych z zrównoważonym rozwojem i
              odpowiedzialnością społeczną.
            </span>
          </div>
          <div className="sTask">
            <img src="sort.png" alt="szukanie" />
            <span>
              Doradztwo w zakresie rozwoju produktów i usług w odpowiedzi na
              zmieniające się potrzeby rynku.
            </span>
          </div>
        </section>
      </div>
      <div className="specImage">
        <img src="specialists.png" alt="specjaliści" />
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

export default DevelopmentSpecialist;

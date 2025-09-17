import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";

const ProductionSpecialist = () => {
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
          <button className="aboutUs" onClick={() => navigate("/oNas")}>
            O nas
          </button>
          <button
            className="specialists"
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const teamSection = document.getElementById("team-header");
                if (teamSection) {
                  teamSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
            Specjaliści
          </button>
          <button className="services" onClick={() => navigate("/oferta")}>
            Nasze usługi
          </button>
          <button className="news" onClick={() => navigate("/aktualności")}>
            Aktualności
          </button>
          <button className="contact" onClick={() => navigate("/kontakt")}>
            Kontakt
          </button>
        </div>
      </header>
      <section className="header">
        <h1>Specjalista ds. Produkcji</h1>
        <button onClick={() => navigate("/kontakt")}>
          Umów się na konsultacje
        </button>
      </section>
      <div className="specialist-content">
        <section className="specialistsTasks">
          <div className="sTask">
            <img src="People.png" alt="strategia" />
            <span>Nadzorowanie zgodności wyrobów z normami jakościowymi. </span>
          </div>
          <div className="sTask">
            <img src="search.png" alt="kalendarz" />
            <span>
              Identyfikowanie obszarów wymagających poprawy oraz optymalizacja
              procesów produkcyjnych w celu zwiększenia efektywności i redukcji
              kosztów.{" "}
            </span>
          </div>
          <div className="sTask">
            <img src="exchange.png" alt="" />
            <span>
              Współpraca z działem technologicznym i kontrolą jakości w celu
              zapewnienia ciągłości produkcji i wdrażania usprawnień.
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
          {/* NARAZIE UKRYTE <form className="footer-newsletter">
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
          </form> */}
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="/logo JD global.png" alt="logo" />
            <span>Wszystkie prawa zastrzeżone</span>
          </div>
          <nav className="footer-nav">
            <button className="aboutUs" onClick={() => navigate("/oNas")}>
              O nas
            </button>
            <button className="news" onClick={() => navigate("/aktualności")}>
              Aktualności
            </button>
            <button
              className="specialists"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const teamSection = document.getElementById("team-header");
                  if (teamSection) {
                    teamSection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              Specjaliści
            </button>
            <button className="services" onClick={() => navigate("/oferta")}>
              Nasze usługi
            </button>
            <button className="contact" onClick={() => navigate("/kontakt")}>
              Kontakt
            </button>
            <button
              className="privacy-policy"
              onClick={() =>
                window.open(
                  "/Informacja-o-administratorze-danych-osobowych-JD%20GLOBAL.pdf",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Polityka prywatności
            </button>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default ProductionSpecialist;

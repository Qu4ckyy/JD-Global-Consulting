import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";
import "./AboutUs.scss";
import { fixPolishWidows } from "../../utils/typography";

const AboutUs = () => {
  const isMobile = useIsMobile(825);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={`page${isMobile ? " mobile" : ""}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className={`baner${isMobile ? " mobile" : ""}`}>
        <img
          src="/logo JD global.png"
          alt="logo"
          loading="lazy"
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
          <button className="specialists" onClick={() => navigate("/")}>
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

      <div className="aboutUsPage-content">
        <h1 className="title">O nas</h1>

        {/* WRAPPER NA 3 KAFELKI */}
        <div className="tilesBox">
          <section className="aboutMission">
            <hr />
            <div className="aboutSection-inner">
              <div className="missionLeft">
                <img src="mission.png" loading="lazy" alt="misja" />
              </div>
              <div className="missionRight">
                <h1>Misja</h1>
                <span>
                  {fixPolishWidows(
                    "Naszą misją jest wspieranie przedsiębiorstw w opracowywaniu i wdrażaniu strategii, które umożliwiają fundamentalne zmiany, podnoszą efektywność oraz prowadzą do osiągnięcia wyższych poziomów dojrzałości biznesowej."
                  )}
                  <br /> <br />
                  {fixPolishWidows(
                    "Pomagamy organizacjom nie tylko rozwiązywać bieżące problemy, ale również budować trwałe fundamenty dla długoterminowego rozwoju."
                  )}
                </span>
              </div>
            </div>
          </section>

          <section className="vision">
            <div className="aboutSection-inner">
              <div className="visionLeft">
                <h1>Wizja</h1>
                <span>
                  {fixPolishWidows(
                    "Chcemy być pierwszym wyborem dla firm poszukujących przełomowych rozwiązań, niezależnie od skali czy branży."
                  )}
                  <br /> <br />
                  {fixPolishWidows(
                    "Dążymy do tego, by dzięki naszemu wsparciu przedsiębiorstwa skutecznie reagowały na zmieniające się warunki rynkowe, rozwijały się dynamicznie i osiągały trwałą przewagę konkurencyjną."
                  )}
                </span>
              </div>
              <div className="visionRight">
                <img src="vision.png" alt="wizja" loading="lazy" />
              </div>
            </div>
          </section>

          <section className="whoAreWe">
            <div className="aboutSection-inner">
              <div className="whoLeft">
                <img src="aboutUs.png" alt="kim jesteśmy?" loading="lazy" />
              </div>
              <div className="whoRight">
                <h1>Kim jesteśmy?</h1>
                <span>
                  {fixPolishWidows(
                    "JD Global Consulting to zaufany partner biznesowy, który łączy doświadczenie, wiedzę i innowacyjność."
                  )}
                  <br />
                  <br />
                  {fixPolishWidows(
                    "Tworzymy zespół ekspertów oraz praktyków, którzy zdobywali doświadczenie na strategicznych stanowiskach w różnych sektorach gospodarki. Dzięki temu oferujemy nie tylko doradztwo, ale również realne, wdrażalne rozwiązania."
                  )}
                </span>
              </div>
            </div>
          </section>
        </div>
        {/* /tilesBox */}

        <section className="whyUs">
          <h2 className="whyUs-title">Dlaczego my?</h2>
          <div className="whyUs-cards">
            <div className="why">
              <img src="statistics.png" alt="" loading="lazy" />
              <span>
                Skutecznie łączymy doradztwo strategiczne z operacyjnym
                wsparciem
              </span>
            </div>
            <div className="why">
              <img src="dollar.png" alt="" loading="lazy" />
              <span>
                Wdrażamy innowacyjne technologie wspierające transformację
                cyfrową
              </span>
            </div>
            <div className="why">
              <img src="exchange.png" alt="" loading="lazy" />
              <span>
                Stawiamy na długoterminową współpracę i realne rezultaty
              </span>
            </div>
            <div className="why">
              <img src="account.png" alt="" loading="lazy" />
              <span>
                Rozumiemy zróżnicowane wyzwania sektora MŚP oraz dużych
                korporacji
              </span>
            </div>
          </div>
        </section>
      </div>

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
          {/* NARAZIE UKRYTE {/* NARAZIE UKRYTE <form className="footer-newsletter">
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
            <img src="/logo JD global.png" alt="logo" loading="lazy" />
            <span>Wszystkie prawa zastrzeżone</span>
          </div>
          <nav className="footer-nav">
            <button className="aboutUs" onClick={() => navigate("/oNas")}>
              O nas
            </button>
            <button className="news" onClick={() => navigate("/aktualności")}>
              Aktualności
            </button>
            <button className="specialists" onClick={() => navigate("/")}>
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

export default AboutUs;

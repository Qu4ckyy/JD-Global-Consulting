import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../../hooks/useIsMobile";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Transformation = () => {
  const isMobile = useIsMobile(825);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (id) => {
    scrollToSection(id);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

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
      <section className="mainHeader">
        <div className="mainHeader-inner">
          <div className="headerLeft">
            <img src="planning.png" alt="biznes" />
          </div>
          <div className="headerRight">
            <h1 className="bold">Doradztwo transformacyjne, </h1>
            <h1 className="thin">które przynosi realny rozwój.</h1>
            <p className="description">
              Każda organizacja potrzebuje zmian – ale tylko dobrze zaplanowana
              transformacja prowadzi do trwałego rozwoju.{" "}
              <span className="bolder">
                Pomagamy firmom wprowadzać zmiany strategiczne, operacyjne i
                kulturowe,
              </span>{" "}
              które przekładają się na konkretne wyniki. Łączymy wizję z
              działaniem, by Twoja firma nie tylko się zmieniała – ale rosła w
              siłę.
            </p>
            <p className="ending">
              Z nami rozwój to coś więcej niż hasło. <br /> To konkretny plan i
              trwały efekt.
            </p>
            <button className="visitation" onClick={() => navigate("/contact")}>
              Umów się na konsultacje
            </button>
          </div>
        </div>
      </section>
      <section className="job">
        <div className="ourJob">
          <h1>Co robimy?</h1>
          <div className="ourJob-tasks">
            <div className="task">
              <img src="Internet.png" alt="IT" />
              <p>
                Wspieramy firmy w procesach transformacji organizacyjnej,
                cyfrowej i strategicznej.
              </p>
            </div>
            <div className="task">
              <img src="Growth.png" alt="bank" />
              <p>
                Opracowujemy plany rozwoju dostosowane do realiów rynkowych i
                wewnętrznego potencjału.
              </p>
            </div>
            <div className="task">
              <img src="idea.png" alt="tarcza" />
              <p>Pomagamy w budowie kultury innowacji i zarządzaniu zmianą.</p>
            </div>
            <div className="task">
              <img src="Conference.png" alt="dźwięk" />
              <p>
                Pracujemy z liderami i zespołami nad wdrażaniem nowego podejścia
                do działania.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="subHeader subHeader--reversed-on-mobile">
        <div className="subHeaderLeft">
          <div className="subHeaderLeft-content">
            <h2>Jak działamy?</h2>
            <p className="description">
              Zaczynamy od dogłębnej diagnozy – gdzie jesteś i dokąd chcesz
              dojść. Na tej podstawie tworzymy plan transformacji: realistyczny,
              etapowy i możliwy do wdrożenia. <br />{" "}
              <span className="bolder">
                Nie działamy powierzchownie – zmiany, które wprowadzamy, mają
                być trwałe
              </span>{" "}
              i zrozumiałe dla całej organizacji.
            </p>
            <button className="visitation" onClick={() => navigate("/contact")}>
              Umów się na konsultacje
            </button>
          </div>
        </div>
        <div className="subHeaderRight">
          <img src="machine.png" alt="praca" />
        </div>
      </section>
      <hr />
      <section className="subHeader2">
        <div className="subLeft2">
          <img src="marking.png" alt="tarcza" />
        </div>
        <div className="subRight2">
          <div className="subRight2-content">
            <h2>Dlaczego warto?</h2>
            <p className="description">
              Pomagamy wyjść poza codzienność i zaplanować przyszłość, która
              daje przewagę.{" "}
              <span className="bolder">
                Dzięki naszemu wsparciu transformacja nie rozbija firmy, tylko
                ją wzmacnia.
              </span>{" "}
              Działasz nowocześniej, szybciej i skuteczniej.
            </p>
            <button className="visitation" onClick={() => navigate("/contact")}>
              Umów się na konsultacje
            </button>
          </div>
        </div>
      </section>
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
            <button className="specialists" onClick={() => navigate("/")}>
              Specjaliści
            </button>
            <button className="services" onClick={() => navigate("/oferta")}>
              Oferta
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

export default Transformation;

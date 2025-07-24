import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../../hooks/useIsMobile";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Finances = () => {
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
            <img src="calculator.png" alt="praca" />
          </div>
          <div className="headerRight">
            <h1 className="bold">
              Doradztwo finansowe <br />i fundusze unijne
            </h1>
            <h1 className="thin">w jednym miejscu.</h1>
            <p className="description">
              Rozwój firmy wymaga solidnych fundamentów finansowych i dostępu do
              odpowiednich źródeł finansowania. Nasze{" "}
              <span className="bolder">
                doradztwo finansowe i wsparcie w pozyskiwaniu funduszy unijnych
                to konkretna pomoc
              </span>{" "}
              w planowaniu, zabezpieczaniu i realizacji Twoich celów
              biznesowych.
            </p>
            <p className="ending">
              Z nami pieniądze nie są przeszkodą – <br />
              są narzędziem rozwoju.
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
              <img src="Addchart.png" alt="struktura" />
              <p>
                Doradzamy w zakresie finansowania działalności, inwestycji i
                rozwoju.
              </p>
            </div>
            <div className="task">
              <img src="euro2.png" alt="euro" />
              <p>
                Pomagamy pozyskać dotacje z funduszy unijnych – od pomysłu po
                rozliczenie projektu.
              </p>
            </div>
            <div className="task">
              <img src="Strategy.png" alt="strategia" />
              <p>
                Opracowujemy strategie finansowe i modele biznesowe oparte na
                danych.
              </p>
            </div>
            <div className="task">
              <img src="Analytics.png" alt="analiza" />
              <p>
                Analizujemy ryzyka i pomagamy podejmować bezpieczne decyzje
                finansowe.
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
              Działamy kompleksowo – od identyfikacji możliwości finansowania,
              przez przygotowanie dokumentacji, aż po wsparcie w realizacji i
              rozliczeniu projektów. <br />{" "}
              <span className="bolder">
                Pracujemy w oparciu o aktualne programy unijne i krajowe oraz
                najlepsze praktyki finansowe.
              </span>
            </p>
            <button className="visitation" onClick={() => navigate("/contact")}>
              Umów się na konsultacje
            </button>
          </div>
        </div>
        <div className="subHeaderRight">
          <img src="UEflag.png" alt="flaga Unii" />
        </div>
      </section>
      <hr />
      <section className="subHeader2">
        <div className="subLeft2">
          <img src="euro.png" alt="pieniądze" />
        </div>
        <div className="subRight2">
          <div className="subRight2-content">
            <h2>Dlaczego warto?</h2>
            <p className="description">
              Zyskujesz dostęp do dodatkowych środków bez ryzyka przepaleń czy
              błędów formalnych.{" "}
              <span className="bolder">
                Unikasz biurokracji, zyskujesz czas i partnera, który
                przeprowadzi Cię przez cały proces finansowania.
              </span>{" "}
              <br />
              Pomagamy firmom rosnąć mądrze – na solidnych, dobrze zaplanowanych
              fundamentach finansowych.
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

export default Finances;

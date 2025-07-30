import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../../hooks/useIsMobile";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Marketing = () => {
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
            <img src="marketing1.png" alt="spotkanie" />
          </div>
          <div className="headerRight">
            <div className="header-title">
              <h1 className="bold">Doradztwo marketingowe,</h1>
              <h1 className="thin">które realnie napędza sprzedaż.</h1>
            </div>
            <p className="description">
              <span className="bolder">
                Silna marka, skuteczna komunikacja i dobrze zaplanowane
                działania marketingowe
              </span>{" "}
              to dziś podstawa biznesowego sukcesu. Nasze doradztwo marketingowe
              łączy strategię z kreatywnością, a dane z doświadczeniem. Dzięki
              nam Twoje działania marketingowe są spójne, trafne i przede
              wszystkim – skuteczne.
            </p>
            <p className="ending">
              Z nami Twój marketing wreszcie zaczyna działać. <br /> Skutecznie.
              Strategicznie. Sprzedażowo.
            </p>
            <button className="visitation" onClick={() => navigate("/kontakt")}>
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
              <img src="Data.png" alt="dane" />
              <p>
                Tworzymy strategie marketingowe dopasowane do Twojego biznesu i
                rynku.
              </p>
            </div>
            <div className="task">
              <img src="settings.png" alt="ustawienia" />
              <p>
                Doradzamy w zakresie brandingu, komunikacji, digital marketingu
                i kampanii reklamowych.
              </p>
            </div>
            <div className="task">
              <img src="dynamicform.png" alt="formularz" />
              <p>
                Analizujemy efektywność dotychczasowych działań i wskazujemy, co
                naprawdę działa.
              </p>
            </div>
            <div className="task">
              <img src="document.png" alt="dokument" />
              <p>
                Pomagamy w budowie silnej marki, która przyciąga i sprzedaje.
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
              Zaczynamy od zrozumienia Twojego biznesu, a nie od narzucania
              gotowych technologii.{" "}
              <span className="bolder">
                Doradzamy tak, by technologia była narzędziem realizacji celów –
                nie kosztem bez efektu.
              </span>{" "}
              <br />
              Współpracujemy z menedżerami, zespołami IT i dostawcami, by całość
              była spójna, opłacalna i przyszłościowa.
            </p>
            <button className="visitation" onClick={() => navigate("/kontakt")}>
              Umów się na konsultacje
            </button>
          </div>
        </div>
        <div className="subHeaderRight">
          <img src="socialmedia.png" alt="Social Media" />
        </div>
      </section>
      <hr />
      <section className="subHeader2">
        <div className="subLeft2">
          <img src="bars.png" alt="praca" />
        </div>
        <div className="subRight2">
          <div className="subRight2-content">
            <h2>Dlaczego warto?</h2>
            <p className="description">
              Zyskujesz pewność, że inwestujesz w rozwiązania, które faktycznie
              działają i przynoszą zwrot.{" "}
              <span className="bolder">
                Unikasz kosztownych błędów, niepotrzebnych systemów i wdrożeń
                bez strategii.
              </span>{" "}
              <br /> Dzięki naszej pomocy Twoja firma staje się bardziej
              nowoczesna, elastyczna i gotowa na wyzwania cyfrowej gospodarki.
            </p>
            <button className="visitation" onClick={() => navigate("/kontakt")}>
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

export default Marketing;

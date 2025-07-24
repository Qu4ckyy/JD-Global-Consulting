import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../../hooks/useIsMobile";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Tech = () => {
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
      <section className="mainHeader">
        <div className="mainHeader-inner">
          <div className="headerLeft">
            <img src="stocks.png" alt="wykresy" />
          </div>
          <div className="headerRight">
            <h1 className="bold">
              Doradztwo <br /> technologiczne,
            </h1>{" "}
            <h1 className="thin">które napędza innowacje.</h1>
            <p className="description">
              Technologia to dziś nie dodatek – to fundament konkurencyjnego
              biznesu. W świecie, gdzie zmiana jest stałą, pomagamy firmom
              wybierać, wdrażać i wykorzystywać rozwiązania technologiczne,
              które realnie wspierają wzrost i efektywność.{" "}
              <span className="bolder">
                Łączymy wiedzę strategiczną z praktycznym podejściem
              </span>{" "}
              do transformacji cyfrowej.
            </p>
            <p className="ending">
              Z nami technologia staje się Twoją przewagą – <br /> nie
              przeszkodą.
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
              <img src="Data.png" alt="dane" />
              <p>
                Analizujemy potrzeby technologiczne Twojej firmy i wskazujemy
                najlepsze rozwiązania.
              </p>
            </div>
            <div className="task">
              <img src="settings.png" alt="ustawienia" />
              <p>
                Doradzamy w zakresie cyfryzacji, automatyzacji procesów i
                transformacji IT.
              </p>
            </div>
            <div className="task">
              <img src="dynamicform.png" alt="formularz" />
              <p>
                Pomagamy w wyborze, wdrożeniu i integracji nowoczesnych narzędzi
                IT, ERP, CRM i innych systemów wspierających biznes.
              </p>
            </div>
            <div className="task">
              <img src="document.png" alt="dokument" />
              <p>
                Wspieramy przy projektach IT, przetargach, migracjach danych i
                zmianie infrastruktury.
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
            <button className="visitation" onClick={() => navigate("/contact")}>
              Umów się na konsultacje
            </button>
          </div>
        </div>
        <div className="subHeaderRight">
          <img src="office.png" alt="praca" />
        </div>
      </section>
      <hr />
      <section className="subHeader2">
        <div className="subLeft2">
          <img src="work2.png" alt="praca" />
        </div>
        <div className="subRight2">
          <div className="subRight2-content">
            <h2>Dlaczego warto?</h2>
            <p className="description">
              Zyskujesz pewność, że{" "}
              <span className="bolder">
                inwestujesz w rozwiązania, które faktycznie działają i przynoszą
                zwrot.{" "}
              </span>
              Unikasz kosztownych błędów, niepotrzebnych systemów i wdrożeń bez
              strategii. Dzięki naszej pomocy Twoja firma staje się bardziej
              nowoczesna, elastyczna i gotowa na wyzwania cyfrowej gospodarki.
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

export default Tech;

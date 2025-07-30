import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../../hooks/useIsMobile";
import "../yourBiznesUnderControl/underControl.scss";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const UnderControl = () => {
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
            <img src="/twójbiznes.png" alt="biznes" />
          </div>
          <div className="headerRight">
            <h1 className="bold">Twój biznes pod kontrolą</h1>
            <h1 className="thin">Ryzyko - pod naszą.</h1>
            <p className="description">
              W dzisiejszym dynamicznym środowisku biznesowym brak kontroli nad
              ryzykiem to zbyt duże ryzyko. Dlatego{" "}
              <span className="bolder">
                wspieramy firmy w budowaniu stabilnych, bezpiecznych fundamentów{" "}
              </span>{" "}
              – poprzez skuteczny audyt i profesjonalne zarządzanie ryzykiem.
            </p>
            <p className="ending">
              Z nami audyt to nie kontrola - <br /> to strategia na przyszłość
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
              <img src="structure.png" alt="struktura" />
              <p>
                Wykrywamy słabe punkty w strukturze, procesach i procedurach.
              </p>
            </div>
            <div className="task">
              <img src="drop.png" alt="spadek" />
              <p>
                Minimalizujemy ryzyka prawne, finansowe i operacyjne, zanim
                zaczną generować straty.
              </p>
            </div>
            <div className="task">
              <img src="sort.png" alt="sortowanie" />
              <p>
                Uporządkowujemy wewnętrzne procesy i wzmacniamy zgodność z
                regulacjami.
              </p>
            </div>
            <div className="task">
              <img src="Verified.png" alt="zweryfikowane" />
              <p>
                Dostarczamy praktyczne, gotowe do wdrożenia rozwiązania, nie
                tylko raporty.
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
              Stawiamy na jasną komunikację, konkretne dane i partnerskie
              podejście. Mówimy językiem biznesu, a nie trudnym żargonem.{" "}
              <span className="bolder">
                Nasze działania są dostosowane do skali i branży Twojej firmy -{" "}
                <br />
              </span>{" "}
              od MŚP, po duże organizacje.
            </p>
            <button className="visitation" onClick={() => navigate("/kontakt")}>
              Umów się na konsultacje
            </button>
          </div>
        </div>
        <div className="subHeaderRight">
          <img src="work.png" alt="praca" />
        </div>
      </section>
      <hr />
      <section className="subHeader2">
        <div className="subLeft2">
          <img src="duo.png" alt="praca" />
        </div>
        <div className="subRight2">
          <div className="subRight2-content">
            <h2>Dlaczego warto?</h2>
            <p className="description">
              Zyskujesz spokój, przejrzystość i przewagę konkurencyjną. <br />{" "}
              <span className="bolder">Chronisz swój biznes</span> przed
              nieprzewidzianymi zagrożeniami{" "}
              <span className="bolder">i budujesz zaufanie </span> – klientów,
              inwestorów i partnerów.
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

export default UnderControl;

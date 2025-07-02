import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../../hooks/useIsMobile";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Economic = () => {
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
            <img src="doradztwoGosp.png" alt="biznes" />
          </div>
          <div className="headerRight">
            <h1 className="bold">
              Doradztwo w zakresie <br /> wywiadu gospodarczego
            </h1>
            <h1 className="thin">– podejmuj decyzje świadomie.</h1>
            <p className="description">
              Każda współpraca biznesowa niesie ryzyko, dlatego warto znać
              swojego kontrahenta, zanim powierzysz mu pieniądze, czas i
              zaufanie.{" "}
              <span className="bolder">
                Oferujemy profesjonalne analizy firm, raporty wiarygodności i
                pełne wywiady gospodarcze,
              </span>{" "}
              które dają Ci przewagę negocjacyjną i bezpieczeństwo działania.
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
              <img src="statistics.png" alt="IT" />
              <p>
                Sporządzamy szczegółowe raporty o firmach – polskich i
                zagranicznych.
              </p>
            </div>
            <div className="task">
              <img src="dollar.png" alt="bank" />
              <p>
                Weryfikujemy sytuację finansową, historię płatniczą i powiązania
                właścicielskie.
              </p>
            </div>
            <div className="task">
              <img src="bug.png" alt="tarcza" />
              <p>
                Identyfikujemy ukryte ryzyka i potencjalne zagrożenia we
                współpracy.
              </p>
            </div>
            <div className="task">
              <img src="safety.png" alt="dźwięk" />
              <p>
                Doradzamy, jak bezpiecznie zawierać umowy i unikać nieuczciwych
                partnerów.
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
              Działamy szybko, dyskretnie i zgodnie z prawem. Korzystamy z
              wiarygodnych źródeł, danych rejestrowych, baz płatniczych i
              informacji branżowych. <br />{" "}
              <span className="bolder">
                Analizy dostosowujemy do konkretnej sytuacji i potrzeb
              </span>{" "}
              – od prostych weryfikacji po pogłębione due diligence.
            </p>
            <button className="visitation" onClick={() => navigate("/contact")}>
              Umów się na konsultacje
            </button>
          </div>
        </div>
        <div className="subHeaderRight">
          <img src="wykresy2.png" alt="praca" />
        </div>
      </section>
      <hr />
      <section className="subHeader2">
        <div className="subLeft2">
          <img src="talking.png" alt="tarcza" />
        </div>
        <div className="subRight2">
          <div className="subRight2-content">
            <h2>Dlaczego warto?</h2>
            <p className="description">
              Zyskujesz pewność, że podejmujesz świadome decyzje biznesowe.
              <span className="bolder">
                Ograniczasz ryzyko strat finansowych, opóźnień i nieudanych
                inwestycji.
              </span>{" "}
              <br /> Dbasz o stabilność firmy, zanim pojawi się problem. Z nami
              działasz rozważnie, a nie reaktywnie.
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

export default Economic;

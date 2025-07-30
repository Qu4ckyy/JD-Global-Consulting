import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../../hooks/useIsMobile";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Logistic = () => {
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
            <img src="manager.png" alt="biznes" />
          </div>
          <div className="headerRight">
            <h1 className="bold">Doradztwo logistyczne,</h1>
            <h1 className="thin">
              które nie zawodzi. <br /> Transport, który <br />
              działa na zysk.
            </h1>
            <p className="description">
              Sprawna logistyka i efektywny transport to dziś niezbędne ogniwa
              konkurencyjnego biznesu.{" "}
              <span className="bolder">
                Pomagamy firmom optymalizować łańcuchy dostaw, zredukować koszty
                i zwiększyć niezawodność operacyjną.
              </span>{" "}
              Nasze doradztwo łączy analizę, technologię i praktykę – tak, aby
              logistyka pracowała na Twój wynik.
            </p>
            <p className="ending">
              Z nami logistyka staje się Twoim atutem, <br /> a nie kosztem.
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
              <img src="cart.png" alt="IT" />
              <p>
                Analizujemy i optymalizujemy procesy logistyczne, magazynowe i
                transportowe.
              </p>
            </div>
            <div className="task">
              <img src="Supplier.png" alt="bank" />
              <p>
                Doradzamy przy wyborze dostawców, narzędzi IT, systemów TMS i
                WMS.
              </p>
            </div>
            <div className="task">
              <img src="supplyChain.png" alt="tarcza" />
              <p>
                Projektujemy efektywne łańcuchy dostaw i modele dystrybucji.
              </p>
            </div>
            <div className="task">
              <img src="Savings.png" alt="dźwięk" />
              <p>
                Wskazujemy oszczędności, poprawiamy terminowość i podnosimy
                jakość obsługi klienta.
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
              Zaczynamy od audytu i analizy – danych, tras, kosztów, czasu.
              Następnie{" "}
              <span className="bolder">
                opracowujemy rozwiązania dopasowane do Twojego biznesu, a nie
                gotowe schematy.
              </span>{" "}
              Wspieramy także we wdrożeniu zmian i współpracy z operatorami
              logistycznymi.
            </p>
            <button className="visitation" onClick={() => navigate("/kontakt")}>
              Umów się na konsultacje
            </button>
          </div>
        </div>
        <div className="subHeaderRight">
          <img src="factory.png" alt="praca" />
        </div>
      </section>
      <hr />
      <section className="subHeader2">
        <div className="subLeft2">
          <img src="cargo.png" alt="tarcza" />
        </div>
        <div className="subRight2">
          <div className="subRight2-content">
            <h2>Dlaczego warto?</h2>
            <p className="description">
              Z nami odzyskujesz kontrolę nad procesami,{" "}
              <span className="bolder">
                redukujesz straty i podnosisz efektywność.
              </span>{" "}
              Logistyka przestaje być źródłem problemów, a staje się przewagą
              konkurencyjną. Niezależnie od skali –{" "}
              <span className="bolder">
                pomagamy firmom działać szybciej, sprawniej i taniej.
              </span>
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

export default Logistic;

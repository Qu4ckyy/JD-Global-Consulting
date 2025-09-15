import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../../hooks/useIsMobile";
import { fixPolishWidows } from "../../../../utils/typography";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Biznes = () => {
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
        <img src="/logo JD global.png" alt="logo" />
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
            <img src="teamwork.png" alt="biznes" />
          </div>
          <div className="headerRight">
            <h1 className="bold">Doradztwo biznesowe,</h1>
            <h1 className="thin">które przyspiesza rozwój Twojej firmy.</h1>
            <p className="description">
              {fixPolishWidows(
                "Każdy biznes napotyka wyzwania, ale to sposób, w jaki je pokonujesz, decyduje o przyszłości firmy."
              )}{" "}
              <span className="bolder">
                Nasze doradztwo biznesowe to klucz do efektywnego rozwoju,
              </span>{" "}
              {fixPolishWidows(
                "poprawy wyników i optymalizacji działań. Dzięki naszej wiedzy i doświadczeniu możesz w pełni wykorzystać potencjał swojej organizacji."
              )}
            </p>
            <p className="ending">
              Z nami Twoja firma zyska nową jakość – <br /> osiągnij sukces z
              pewnością i precyzją.
            </p>
            <button className="visitation">Umów się na konsultacje</button>
          </div>
        </div>
      </section>
      <section className="job">
        <div className="ourJob">
          <h1>Co robimy?</h1>
          <div className="ourJob-tasks">
            <div className="task">
              <img src="switch.png" alt="IT" />
              <p>
                Opracowujemy strategie rozwoju i optymalizacji procesów w Twojej
                firmie.
              </p>
            </div>
            <div className="task">
              <img src="/webhook.png" alt="bank" />
              <p>
                Doradzamy w zakresie zarządzania, wprowadzania innowacji oraz
                poprawy efektywności operacyjnej.
              </p>
            </div>
            <div className="task">
              <img src="Analytics.png" alt="tarcza" />
              <p>
                Pomagamy w analizie rynków, konkurencji oraz trendów branżowych.
              </p>
            </div>
            <div className="task">
              <img src="border.png" alt="dźwięk" />
              <p>
                Wspieramy w budowaniu silnych zespołów i poprawie struktury
                organizacyjnej.
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
              Pracujemy z Tobą na każdym etapie – od analizy sytuacji, przez
              planowanie strategii, aż po wdrażanie rozwiązań. <br />{" "}
              <span className="bolder">
                Dostosowujemy nasze podejście do specyfiki Twojego biznesu,
              </span>{" "}
              a nasze rekomendacje są konkretne, praktyczne i mierzalne.{" "}
              <span className="bolder">
                Pomagamy zarówno małym firmom, jak i dużym organizacjom.
              </span>
            </p>
            <button className="visitation">Umów się na konsultacje</button>
          </div>
        </div>
        <div className="subHeaderRight">
          <img src="meeting.png" alt="praca" />
        </div>
      </section>
      <hr />
      <section className="subHeader2">
        <div className="subLeft2">
          <img src="wykresy.png" alt="tarcza" />
        </div>
        <div className="subRight2">
          <div className="subRight2-content">
            <h2>Dlaczego warto?</h2>
            <p className="description">
              Doradztwo biznesowe to inwestycja, która zwraca się w postaci
              zwiększonej efektywności, lepszych wyników finansowych i przewagi
              konkurencyjnej. <br /> Dzięki naszej pomocy{" "}
              <span className="bolder">
                podejmujesz trafne decyzje, minimalizujesz ryzyko i osiągasz
                cele biznesowe szybciej.
              </span>{" "}
              Z nami wzmocnisz fundamenty swojej firmy, by sprostać wyzwaniom
              dzisiejszego rynku.
            </p>
            <button className="visitation">Umów się na konsultacje</button>
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

export default Biznes;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../../hooks/useIsMobile";
import "./cyberSec.scss";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const CyberSec = () => {
  const isMobile = useIsMobile();
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
          <button className="aboutUs" onClick={() => navigate("/")}>
            O nas
          </button>
          <button className="specialists" onClick={() => navigate("/")}>
            Specjaliści
          </button>
          <button className="services" onClick={() => navigate("/")}>
            Nasze usługi
          </button>
          <button className="partners" onClick={() => navigate("/")}>
            Partnerzy
          </button>
          <button className="news" onClick={() => navigate("/")}>
            Aktualności
          </button>
          <button className="contact" onClick={() => navigate("/")}>
            Kontakt
          </button>
        </div>
      </header>
      <section className="mainHeader">
        <div className="mainHeader-inner">
          <div className="headerLeft">
            <img src="trade.png" alt="biznes" />
          </div>
          <div className="headerRight">
            <h1 className="bold">Cyberbezpieczeństwo, </h1>
            <h1 className="thin">na które możesz liczyć.</h1>
            <p className="description">
              W dobie cyfryzacji zagrożenia w sieci stają się coraz bardziej
              zaawansowane i powszechne. Ochrona danych, systemów i informacji
              to nie tylko kwestia technologii, ale przede wszystkim strategii.
              Dzięki naszym usługom zyskujesz pewność, że Twoja firma jest
              bezpieczna przed cyberatakami.
            </p>
            <p className="ending">
              Z nami cyberbezpieczeństwo to nie tylko technologia <br /> – to
              strategia obrony Twojej firmy.
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
              <img src="it.png" alt="IT" />
              <p>
                ✔ Audytujemy infrastrukturę IT, identyfikując potencjalne luki w
                zabezpieczeniach.
              </p>
            </div>
            <div className="task">
              <img src="bank.png" alt="bank" />
              <p>
                ✔ Opracowujemy kompleksowe strategie ochrony danych i systemów
                przed cyberzagrożeniami.
              </p>
            </div>
            <div className="task">
              <img src="shield.png" alt="tarcza" />
              <p>
                ✔ Wdrażamy rozwiązania chroniące przed atakami z zewnątrz i
                wewnętrznymi incydentami.
              </p>
            </div>
            <div className="task">
              <img src="voice.png" alt="dźwięk" />
              <p>
                ✔ Szkolimy pracowników, zwiększając świadomość zagrożeń i
                umiejętności reagowania na kryzysowe sytuacje.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="subHeader">
        <div className="subHeaderLeft">
          <div className="subHeaderLeft-content">
            <h2>Jak działamy?</h2>
            <p className="description">
              Kroczymy z Tobą przez proces ochrony, zaczynając od audytu, przez
              implementację rozwiązań, aż po stałe monitorowanie. Nasze
              działania są dostosowane do charakterystyki Twojej działalności i
              skali organizacji. Współpracujemy z firmami z różnych branż – od
              małych bprzedsiębiorstw po duże korporacje.
            </p>
            <button className="visitation">Umów się na konsultacje</button>
          </div>
        </div>
        <div className="subHeaderRight">
          <img src="office.png" alt="praca" />
        </div>
      </section>
      <hr />
      <section className="subHeader2">
        <div className="subLeft2">
          <img src="compShield.png" alt="tarcza" />
        </div>
        <div className="subRight2">
          <div className="subRight2-content">
            <h2>Dlaczego warto?</h2>
            <p className="description">
              Ochrona przed cyberzagrożeniami to nie tylko kwestia technologii,
              ale i reputacji firmy. Działając w zgodzie z najlepszymi
              praktykami, minimalizujesz ryzyko utraty danych, finansowych
              konsekwencji czy uszczerbku na wizerunku. Z nami budujesz cyfrową
              odporność i zyskujesz zaufanie swoich klientów i partnerów.
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
            <button className="aboutUs" onClick={() => navigate("/")}>
              O nas
            </button>
            <button className="news" onClick={() => navigate("/")}>
              Aktualności
            </button>
            <button className="specialists" onClick={() => navigate("/")}>
              Specjaliści
            </button>
            <button className="services" onClick={() => navigate("/")}>
              Oferta
            </button>
            <button className="contact" onClick={() => navigate("/")}>
              Kontakt
            </button>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default CyberSec;

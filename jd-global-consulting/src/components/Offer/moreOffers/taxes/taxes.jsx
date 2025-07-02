import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../../hooks/useIsMobile";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Taxes = () => {
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
            <img src="lawyers.png" alt="prawnicy" />
          </div>
          <div className="headerRight">
            <div className="header-title">
              <h1 className="bold">Doradztwo prawno-podatkowe, które chroni</h1>
              <h1 className="thin">i wspiera Twój biznes.</h1>
            </div>
            <p className="description">
              Zarządzanie kwestiami prawnymi i podatkowymi to kluczowy element
              sukcesu każdej firmy. Nasze doradztwo prawno-podatkowe pomoże Ci
              unikać ryzyk, minimalizować koszty i działać zgodnie z
              obowiązującymi przepisami.{" "}
              <span className="bolder">
                Zapewniamy pełne wsparcie, które pozwala skoncentrować się na
                rozwoju biznesu,
              </span>{" "}
              a nie na problemach prawnych.
            </p>
            <p className="ending">
              Z nami zyskujesz pewność, że Twoja firma jest <br /> zawsze w
              zgodzie z prawem i optymalizuje <br /> obciążenia podatkowe.
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
              <img src="bar.png" alt="wykres" />
              <p>
                Oferujemy kompleksową pomoc w zakresie doradztwa podatkowego, w
                tym optymalizacji podatkowej.
              </p>
            </div>
            <div className="task">
              <img src="Balance.png" alt="waga" />
              <p>
                Udzielamy wsparcia prawnego w zakresie umów, transakcji, fuzji i
                przejęć.
              </p>
            </div>
            <div className="task">
              <img src="bank2.png" alt="bank" />
              <p>
                Reprezentujemy naszych klientów przed organami podatkowymi i
                sądami.
              </p>
            </div>
            <div className="task">
              <img src="money.png" alt="waluta" />
              <p>
                Pomagamy w dostosowaniu struktury organizacyjnej i finansowej do
                zmieniających się przepisów.
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
              Pracujemy w ścisłej współpracy z Twoją firmą, analizując
              indywidualne potrzeby i wyzwania. Nasze podejście jest dostosowane
              do branży i specyfiki Twojego biznesu. <br /> Dzięki naszej wiedzy
              prawnej i podatkowej{" "}
              <span className="bolder">oferujemy praktyczne rozwiązania,</span>{" "}
              które są zgodne z aktualnymi przepisami, ale także{" "}
              <span className="bolder">
                skuteczne w obniżeniu obciążeń podatkowych i prawnych.
              </span>
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
              Z nami unikniesz błędów, które mogą prowadzić do kosztownych
              konsekwencji prawnych lub podatkowych.{" "}
              <span className="bolder">
                Nasze wsparcie pozwala zaoszczędzić czas i pieniądze,
              </span>{" "}
              zapewniając pełną zgodność z przepisami. <br />{" "}
              <span className="bolder">
                Dzięki naszym usługom masz pewność, że Twoja firma działa na
                solidnych fundamentach prawnych i finansowych,
              </span>{" "}
              co w dłuższej perspektywie przyczynia się do jej stabilności i
              rozwoju.
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

export default Taxes;

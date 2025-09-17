import "./Offer.scss";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";
import React, { useState } from "react";

const servicesData = [
  {
    img: "twójbiznes.png",
    title: "Twój biznes pod kontrolą. \nRyzyko – pod naszą.",
    description:
      "W dzisiejszym dynamicznym środowisku biznesowym brak kontroli nad ryzykiem to zbyt duże ryzyko....",
    href: "/twójBiznesPodKontrolą",
  },
  {
    img: "trade.png",
    title: "Cyberbezpieczeństwo, \nna które możesz liczyć.",
    description:
      "W dobie cyfryzacji zagrożenia w sieci stają się coraz bardziej zaawansowane i powszechne...",
    href: "/cyberbezpieczeństwo",
  },
  {
    img: "doradztwoBiznesowe.png",
    title: "Doradztwo biznesowe, \nktóre przyspiesza rozwój Twojej firmy.",
    description:
      "Każdy biznes napotyka wyzwania, ale to sposób, w jaki je pokonujesz, decyduje o przyszłości firmy.....",
    href: "/biznes",
  },
  {
    img: "lawyers.png",
    title: "Doradztwo prawno-podatkowe, \nktóre chroni i wspiera Twój biznes.",
    description:
      "Zarządzanie kwestiami prawnymi i podatkowymi to kluczowy element sukcesu każdej firmy...",
    href: "/podatki",
  },
  {
    img: "stocks.png",
    title: "Doradztwo technologiczne, \nktóre napędza innowacje.",
    description:
      "Technologia to dziś nie dodatek – to fundament konkurencyjnego biznesu...",
    href: "/technologia",
  },
  {
    img: "marketing1.png",
    title: "Doradztwo marketingowe, \nktóre realnie napędza sprzedaż.",
    description:
      "Silna marka, skuteczna komunikacja i dobrze zaplanowane działania marketingowe to dziś podstawa biznesowego sukcesu...",
    href: "/marketing",
  },
  {
    img: "calculator.png",
    title: "Doradztwo finansowe \ni fundusze unijne w jednym miejscu.",
    description:
      "Rozwój firmy wymaga solidnych fundamentów finansowych i dostępu do odpowiednich źródeł finansowania. Nasze....",
    href: "/finanse",
  },
  {
    img: "doradztwoHR.png",
    title: "Doradztwo HR – \nLudzie to Twój największy kapitał.",
    description:
      "Skuteczny biznes zaczyna się od dobrego zespołu. Oferujemy doradztwo HR...",
    href: "/HR",
  },
  {
    img: "doradztwoLogi.png",
    title: "Doradztwo logistyczne, \nktóre nie zawodzi.",
    description:
      "Sprawna logistyka i efektywny transport to dziś niezbędne ogniwa konkurencyjnego biznesu...",
    href: "/logistyka",
  },
  {
    img: "doradztwoTransform.png",
    title: "Doradztwo transformacyjne, \nktóre przynosi realny rozwój.",
    description:
      "Każda organizacja potrzebuje zmian – ale tylko dobrze zaplanowana transformacja prowadzi do trwałego rozwoju...",
    href: "/transformacja",
  },
  {
    img: "wywiadGosp.png",
    title: "Doradztwo w zakresie wywiadu gospodarczego.",
    description:
      "Każda współpraca biznesowa niesie ryzyko, dlatego warto znać swojego kontrahenta...",
    href: "/ekonomia",
  },
];

const Offer = () => {
  const isMobile = useIsMobile(825);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={`page${isMobile ? " mobile" : ""}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className={`baner${isMobile ? " mobile" : ""}`}>
        <img
          src="/logo JD global.png"
          alt="logo"
          loading="lazy"
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
          <button
            className="specialists"
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const teamSection = document.getElementById("team-header");
                if (teamSection) {
                  teamSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
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

      <section className="offerContent">
        <div className="offerInner">
          <h1>Nasze usługi</h1>
          <hr />
          <div className="ourServices">
            {servicesData.map((service, index) => (
              <div className="ourService" key={index}>
                <img src={service.img} alt="" loading="lazy" />
                <div className="boxContent">
                  <h5 className="bold">{service.title}</h5>
                  <p>{service.description}</p>
                  <button onClick={() => navigate(service.href)}>
                    Zobacz więcej
                  </button>
                </div>
              </div>
            ))}
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
            <img src="/logo JD global.png" alt="logo" loading="lazy" />
            <span>Wszystkie prawa zastrzeżone</span>
          </div>
          <nav className="footer-nav">
            <button className="aboutUs" onClick={() => navigate("/oNas")}>
              O nas
            </button>
            <button className="news" onClick={() => navigate("/aktualności")}>
              Aktualności
            </button>
            <button
              className="specialists"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const teamSection = document.getElementById("team-header");
                  if (teamSection) {
                    teamSection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
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

export default Offer;

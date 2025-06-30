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
    href: "/underControl",
  },
  {
    img: "trade.png",
    title: "Cyberbezpieczeństwo, \nna które możesz liczyć.",
    description:
      "W dobie cyfryzacji zagrożenia w sieci stają się coraz bardziej zaawansowane i powszechne...",
    href: "/cyberSec",
  },
  {
    img: "doradztwoBiznesowe.png",
    title: "Doradztwo biznesowe, \nktóre przyspiesza rozwój Twojej firmy.",
    description:
      "W dzisiejszym dynamicznym środowisku biznesowym brak kontroli nad ryzykiem to zbyt duże ryzyko....",
    href: "/biznes",
  },
  {
    img: "lawyers.png",
    title: "Doradztwo prawno-podatkowe, \nktóre chroni i wspiera Twój biznes.",
    description:
      "Zarządzanie kwestiami prawnymi i podatkowymi to kluczowy element sukcesu każdej firmy...",
    href: "/taxes",
  },
  {
    img: "stocks.png",
    title: "Doradztwo technologiczne, \nktóre napędza innowacje.",
    description:
      "Technologia to dziś nie dodatek – to fundament konkurencyjnego biznesu...",
    href: "/tech",
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
      "W dzisiejszym dynamicznym środowisku biznesowym brak kontroli nad ryzykiem to zbyt duże ryzyko....",
    href: "/finances",
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
    href: "/logistic",
  },
  {
    img: "doradztwoTransform.png",
    title: "Doradztwo transformacyjne, \nktóre przynosi realny rozwój.",
    description:
      "Każda organizacja potrzebuje zmian – ale tylko dobrze zaplanowana transformacja prowadzi do trwałego rozwoju...",
    href: "/transformation",
  },
  {
    img: "wywiadGosp.png",
    title: "Doradztwo w zakresie wywiadu gospodarczego.",
    description:
      "Każda współpraca biznesowa niesie ryzyko, dlatego warto znać swojego kontrahenta...",
    href: "/economic",
  },
];

const Offer = () => {
  const isMobile = useIsMobile();
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
          <button
            className="aboutUs"
            onClick={() => handleNavigation("/about")}
          >
            O nas
          </button>
          <button className="specialists" onClick={() => handleNavigation("/")}>
            Specjaliści
          </button>
          <button
            className="services"
            onClick={() => handleNavigation("/offer")}
          >
            Nasze usługi
          </button>
          <button className="news" onClick={() => handleNavigation("/news")}>
            Aktualności
          </button>
          <button
            className="contact"
            onClick={() => handleNavigation("/contact")}
          >
            Kontakt
          </button>
        </div>
      </header>

      <section className="offerContent">
        <h1>Nasze usługi</h1>
        <hr />
        <div className="ourServices">
          {servicesData.map((service, index) => (
            <div className="ourService" key={index}>
              <img src={service.img} alt="" />
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
            <img src="logo JD global.png" alt="logo" />
            <span>Wszystkie prawa zastrzeżone</span>
          </div>
          <nav className="footer-nav">
            <button
              className="aboutUs"
              onClick={() => handleNavigation("/about")}
            >
              O nas
            </button>
            <button className="news" onClick={() => handleNavigation("/news")}>
              Aktualności
            </button>
            <button
              className="specialists"
              onClick={() => handleNavigation("/")}
            >
              Specjaliści
            </button>
            <button
              className="services"
              onClick={() => handleNavigation("/offer")}
            >
              Oferta
            </button>
            <button
              className="contact"
              onClick={() => handleNavigation("/contact")}
            >
              Kontakt
            </button>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Offer;

import "./Contact.scss";
import useIsMobile from "../../hooks/useIsMobile";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Contact = () => {
  const isMobile = useIsMobile(825);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

      <section
        className={`contactForm${isMobile ? " mobile" : ""}`}
        id="contactForm"
      >
        <div className="contactForm__left">
          <h1>
            <strong>Porozmawiajmy</strong> <br /> o przyszłości
            <br />
            Twojego biznesu
          </h1>
          <p>
            Chcesz dowiedzieć się, jak możemy Ci pomóc? Skontaktuj się z nami.
          </p>
          <div className="contactInfo">
            <div className="email">
              <span className="icon">
                <img src="mail vector.svg" alt="email" />
              </span>
              <div>
                <p>Email</p>
                <span>biuro@jdgc.pl</span>
              </div>
            </div>
            <div className="phone">
              <span className="icon">
                <img src="phone vector.svg" alt="phone" />
              </span>
              <div>
                <p>Telefon</p>
                <a href="tel:+48601272625">+48 601 27 26 25</a>
              </div>
            </div>
            <div className="adress">
              <span className="icon">
                <img src="location_icon.svg" alt="adress" />
              </span>
              <div>
                <p>Adres</p>
                <span>ul. Dobrzańskiego 3 Lublin, 20-262</span>
              </div>
            </div>
            {/* <div className="guardian">
              <img src="piotr.png" alt="person" />
              <div>
                <p>Piotr Brzęczyszczykiewicz</p>
                <span>Opiekun klienta</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="contactForm__right">
          <form
            action="https://formsubmit.co/0ea6a996a3b02edcfc716fed5ab14963"
            method="POST"
          >
            <label>Imie</label>
            <input type="text" name="name" placeholder="Jan Kowalski" />
            <label>Email</label>
            <input type="email" name="email" placeholder="imie@gmail.com" />
            <label>Wiadomość</label>
            <textarea
              placeholder="Tu wpisz swoją wiadomość"
              name="message"
            ></textarea>
            <div className="checkbox-row">
              <input type="checkbox" id="agreement" required />
              <label htmlFor="agreement">
                Akceptuję politykę prywatności i chce otrzymywać newsletter,
                czyli informacje handlowe o promocjach.
              </label>
            </div>
            <button type="submit">Wyślij wiadomość</button>
          </form>
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

export default Contact;

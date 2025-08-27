import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import useIsMobile from "../../hooks/useIsMobile";
import { useNavigate } from "react-router-dom";
import { articles } from "../../data/articles";
import CookieBanner from "./../CookieBanner/CookieBanner";
import { fixPolishWidows } from "../../utils/typography";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const MainPage = () => {
  const isMobile = useIsMobile(825);
  const width = useWindowWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSectionClick = (id) => {
    scrollToSection(id);
    if (isMobile) setIsMenuOpen(false);
  };

  return (
    <div className={`page${isMobile ? " mobile" : ""}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className={`baner${isMobile ? " mobile" : ""}`}>
        <CookieBanner />
        <img
          src="/logo2.png"
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
            onClick={() => handleSectionClick("team-header")}
          >
            Specjaliści
          </button>
          <button className="services" onClick={() => navigate("/oferta")}>
            Nasze usługi
          </button>
          {/*NARAZIE UKRYTE <button
            className="recomendations"
            onClick={() => handleSectionClick("")}
          >
            Rekomendacje
          </button> */}
          <button className="news" onClick={() => navigate("/aktualności")}>
            Aktualności
          </button>
          <button
            className="contact"
            onClick={() => handleSectionClick("contactForm")}
          >
            Kontakt
          </button>
        </div>
      </header>

      <section className={`info${isMobile ? " mobile" : ""}`}>
        {isMobile || (width >= 825 && width <= 1024) ? (
          <>
            <div className="company">
              <h1>
                <span className="bold">JD Global Consulting –</span>
                <br />
                <span className="thin">
                  Twój partner w rozwoju i transformacji biznesu
                </span>
              </h1>
            </div>
            <div className="mission">
              <h4>Nasza misja</h4>
              <span>
                {fixPolishWidows(
                  "W świecie dynamicznych zmian pomagamy firmom osiągać stabilny wzrost,"
                )}
                <wbr />{" "}
                {fixPolishWidows(
                  "wdrażać innowacyjne strategie i zdobywać przewagę konkurencyjną."
                )}
              </span>
              <button className="learnMore" onClick={() => navigate("/oNas")}>
                Dowiedz się więcej
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mission">
              <h4>Nasza misja</h4>
              <span>
                {fixPolishWidows(
                  "W świecie dynamicznych zmian pomagamy firmom osiągać stabilny wzrost,"
                )}
                <wbr />{" "}
                {fixPolishWidows(
                  "wdrażać innowacyjne strategie i zdobywać przewagę konkurencyjną."
                )}
              </span>
              <button className="learnMore" onClick={() => navigate("/oNas")}>
                Dowiedz się więcej
              </button>
            </div>
            <div className="company">
              <h1>
                <span className="bold">JD Global Consulting –</span>
                <br />
                <span className="thin">
                  Twój partner w rozwoju i transformacji biznesu
                </span>
              </h1>
            </div>
          </>
        )}
      </section>

      {/* NARAZIE UKRYTE <div className={`companies${isMobile ? " mobile" : ""}`} id="companies">
        <span>Zaufali nam:</span>
        <div className="companies__slider">
          <div className="companies__track">
            {Array(2).fill(
              <>
                <div className="partner">
                  <img src="Microsoft Black 4.png" alt="microsoft" />
                </div>
                <div className="partner">
                  <img src="logo 1.png" alt="uke" />
                </div>
                <div className="partner">
                  <img src="Microsoft Black 4.png" alt="microsoft" />
                </div>
                <div className="partner">
                  <img src="logo 1.png" alt="uke" />
                </div>
                <div className="partner">
                  <img src="Microsoft Black 4.png" alt="microsoft" />
                </div>
                <div className="partner">
                  <img src="logo 1.png" alt="uke" />
                </div>
                <div className="partner">
                  <img src="Microsoft Black 4.png" alt="microsoft" />
                </div>
                <div className="partner">
                  <img src="logo 1.png" alt="uke" />
                </div>
              </>
            )}
          </div>
        </div>
      </div> */}

      <div className="buildingImage">
        <img className="building" src="Rectangle 1.png" loading="lazy" alt="" />
      </div>

      <section className={`whatWeDo${isMobile ? " mobile" : ""}`} id="whatWeDo">
        <h2>Zmieniamy wyzwania w możliwości</h2>
        <span>
          {fixPolishWidows(
            "W świecie dynamicznych zmian pomagamy firmom osiągać stabilny wzrost, wdrażać innowacyjne strategie i zdobywać przewagę konkurencyjną."
          )}{" "}
          <span className="bold">
            Wspieramy zarówno małe i średnie przedsiębiorstwa, jak i duże
            korporacje -niezależnie od branży.
          </span>
        </span>
        <div className="images">
          <div className="image1">
            <p>
              Łączymy doradztwo strategiczne
              <br />z operacyjnym wsparciem
            </p>
          </div>
          <div className="image2">
            <p>Wdrażamy innowacyjne technologie</p>
          </div>
          <div className="image3">
            <p>Stawiamy na długoterminowe relacje</p>
          </div>
          <div className="image4">
            <p>Rozumiemy wyzwania MŚP i dużych korporacji</p>
          </div>
        </div>
      </section>

      <section className={`offer${isMobile ? " mobile" : ""}`} id="offer">
        <h2>Zakres usług</h2>
        <p>Ekspercka pomoc w kluczowych obszarach biznesu</p>

        <div className="services-list">
          <div className="service">
            <p>
              Twój biznes pod kontrolą.
              <br />
              Ryzyko - pod naszą.
            </p>
            <span>
              {fixPolishWidows(
                "W dzisiejszym dynamicznym środowisku biznesowym brak kontroli nad ryzykiem to zbyt duże ryzyko. Dlatego wspieramy firmy w budowaniu stabilnych, bezpiecznych fundamentów – poprzez skuteczny audyt i profesjonalne zarządzanie ryzykiem."
              )}
            </span>
            <p>
              Z nami audyt to nie kontrola-
              <br />
              to strategia na przyszłość.
            </p>
            <button onClick={() => navigate("/twójBiznesPodKontrolą")}>
              Zobacz więcej
            </button>
          </div>

          <div className="service">
            <p>
              Cyberbezpieczeństwo, <br />
              na które możesz liczyć.
            </p>
            <span>
              {fixPolishWidows(
                "W dobie cyfryzacji zagrożenia w sieci stają się coraz bardziej zaawansowane i powszechne. Ochrona danych, systemów i informacji to nie tylko kwestia technologii, ale przede wszystkim strategii. Dzięki naszym usługom zyskujesz pewność, że Twoja firma jest bezpieczna przed cyberatakami."
              )}
            </span>
            <p>
              Z nami cyberbezpieczeństwo to nie tylko technologia – to strategia
              obrony Twojej firmy.
            </p>
            <button onClick={() => navigate("/cyberbezpieczeństwo")}>
              Zobacz więcej
            </button>
          </div>

          <div className="service">
            <p>
              Doradztwo prawno-podatkowe, <br />
              które chroni i wspiera Twój biznes.
            </p>
            <span>
              {fixPolishWidows(
                "Zarządzanie kwestiami prawnymi i podatkowymi to kluczowy element sukcesu każdej firmy. Nasze doradztwo prawno podatkowe pomoże Ci unikać ryzyk, minimalizować koszty i działać zgodnie z obowiązującymi przepisami. Zapewniamy pełne wsparcie, które pozwala skoncentrować się na rozwoju biznesu, a nie na problemach prawnych."
              )}
            </span>
            <p>
              Z nami zyskujesz pewność, że Twoja firma jest zawsze w zgodzie z
              prawem i optymalizuje obciążenia podatkowe.
            </p>
            <button onClick={() => navigate("/podatki")}>Zobacz więcej</button>
          </div>

          <div className="service">
            <p>
              Doradztwo technologiczne, <br />
              które napędza innowacje.
            </p>
            <span>
              {fixPolishWidows(
                "Technologia to dziś nie dodatek – to fundament konkurencyjnego biznesu. W świecie, gdzie zmiana jest stałą, pomagamy firmom wybierać, wdrażać i wykorzystywać rozwiązania technologiczne, które realnie wspierają wzrost i efektywność. Łączymy wiedzę strategiczną z praktycznym podejściem do transformacji cyfrowej."
              )}
            </span>
            <p>Z nami technologia staje się Twoją przewagą – nie przeszkodą.</p>
            <button onClick={() => navigate("/technologia")}>
              Zobacz więcej
            </button>
          </div>

          <div className="service">
            <p>
              Doradztwo marketingowe,
              <br />
              które realnie napędza sprzedaż.
            </p>
            <span>
              {fixPolishWidows(
                "Silna marka, skuteczna komunikacja i dobrze zaplanowane działania marketingowe to dziś podstawa biznesowego sukcesu. Nasze doradztwo marketingowe łączy strategię z kreatywnością, a dane z doświadczeniem. Dzięki nam Twoje działania marketingowe są spójne, trafne i przede wszystkim –skuteczne."
              )}
            </span>
            <p>
              Z nami Twój marketing wreszcie zaczyna działać. Skutecznie.
              Strategicznie. Sprzedażowo.
            </p>
            <button onClick={() => navigate("/marketing")}>
              Zobacz więcej
            </button>
          </div>

          <div className="service">
            <p>Doradztwo finansowe i fundusze unijne w jednym miejscu.</p>
            <span>
              {fixPolishWidows(
                "Rozwój firmy wymaga solidnych fundamentów finansowych i dostępu do odpowiednich źródeł finansowania. Nasze doradztwo finansowe i wsparcie w pozyskiwaniu funduszy unijnych to konkretna pomoc w planowaniu, zabezpieczaniu i realizacji Twoich celów biznesowych."
              )}
            </span>
            <p>
              Z nami pieniądze
              <br />
              nie są przeszkodą – są narzędziem rozwoju.
            </p>
            <button onClick={() => navigate("/finanse")}>Zobacz więcej</button>
          </div>
        </div>

        <button onClick={() => navigate("/oferta")}>Zobacz więcej usług</button>
      </section>

      <section className={`team${isMobile ? " mobile" : ""}`} id="team-header">
        <h3>Nasi Specjaliści</h3>
        <hr />
        <div className="team-header">
          <div className="subtitle">
            EKSPERCI, KTÓRZY REALNIE ZMIENIAJĄ FIRMY
          </div>
          <div className="description">
            Każdy z naszych doradców to praktyk z wieloletnim doświadczeniem w
            biznesie. Poznaj nasz zespół i jego kompetencje.
          </div>
        </div>
        <div className="employees">
          <div className="employee">
            <p>Specjalista ds. Strategii i Zarządzania</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.strategii",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Technologii i Cyfrowej Transformacji</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.technologii",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Finansów</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.finansów",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Podatków</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.podatków",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Fuzji i Przejęć</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.fuzji",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Prawnych</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.prawnych",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Zarządzania Zasobami Ludzkimi</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.zasobówLudzkich",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Marketingu</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.marketingu",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Rozwoju</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.rozwoju",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Produkcji</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.produkcji",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Transportu i Logistyki</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.logistyki",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Funduszy Unijnych</p>
            <button
              onClick={() =>
                window.open(
                  "/specjalistaDS.funduszyUE",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Zobacz więcej
            </button>
          </div>
        </div>
      </section>

      <section
        className={`contactForm${isMobile ? " mobile" : ""}`}
        id="contactForm"
      >
        <div className="contactForm__left">
          <h1>
            <strong>Porozmawiajmy</strong> <br />
            o przyszłości
            <br />
            Twojego biznesu
          </h1>
          <p>
            {fixPolishWidows(
              "Chcesz dowiedzieć się, jak możemy Ci pomóc? Skontaktuj się z nami."
            )}
          </p>
          <div className="contactInfo">
            {/* krótkie pola kontaktowe – bez wrappera */}
            <div className="email">
              <span className="icon">
                <img src="mail vector.svg" alt="email" />
              </span>
              <div>
                <p>Email</p>
                <a href="mailto:biuro@jdgc.pl">biuro@jdgc.pl</a>
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
            <textarea placeholder="Tu wpisz swoją wiadomość" name="message" />
            <div className="checkbox-row">
              <input type="checkbox" id="agreement" required />
              <label htmlFor="agreement">
                {fixPolishWidows(
                  "Akceptuję politykę prywatności i chce otrzymywać newsletter, czyli informacje handlowe o promocjach."
                )}
              </label>
            </div>
            <button type="submit">Wyślij wiadomość</button>
          </form>
        </div>
      </section>

      <section className={`newsfeed${isMobile ? " mobile" : ""}`} id="newsFeed">
        <h1>Aktualności</h1>
        <hr />
        <div className="articles">
          {articles.slice(0, 3).map((article) => {
            const open = () => navigate(`/aktualności/${article.slug}`);
            const short =
              article.description.length > 120
                ? article.description.slice(0, 120).trim() + "..."
                : article.description;
            return (
              <div
                className="article"
                key={article.slug}
                role="link"
                tabIndex={0}
                onClick={open}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && open()
                }
              >
                <div className="image-wrapper">
                  <img
                    src={
                      article.img.startsWith("/")
                        ? article.img.slice(1)
                        : article.img
                    }
                    alt={article.title}
                  />
                  <button
                    className="read-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      open();
                    }}
                  >
                    Przeczytaj artykuł
                  </button>
                </div>

                <div className="readingTime">
                  <img src="clock.png" alt="clock" />
                  <p>{article.time}</p>
                </div>

                <h3>{article.title}</h3>
                <p className="description">{short}</p>
              </div>
            );
          })}
        </div>

        <button
          className="main-news-btn"
          onClick={() => navigate("/aktualności")}
        >
          Zobacz wszystkie artykuły
        </button>
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
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="/logo JD global.png" loading="lazy" alt="logo" />
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

export default MainPage;

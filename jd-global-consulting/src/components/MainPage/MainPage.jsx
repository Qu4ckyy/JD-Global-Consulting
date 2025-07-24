import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import useIsMobile from "../../hooks/useIsMobile";
import { useNavigate } from "react-router-dom";
import { articles } from "../../data/articles";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
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
        <img src="/logo2.png" alt="logo" onClick={() => navigate("/")} />
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
          <button
            className="services"
            onClick={() => handleSectionClick("oferta")}
          >
            Nasze usługi
          </button>
          {/*NARAZIE UKRYTE <button
            className="recomendations"
            onClick={() => handleSectionClick("")}
          >
            Rekomendacje
          </button> */}
          <button
            className="news"
            onClick={() => handleSectionClick("newsFeed")}
          >
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
                W świecie dynamicznych zmian pomagamy firmom osiągać stabilny
                wzrost,
                <wbr /> wdrażać innowacyjne strategie i zdobywać przewagę
                konkurencyjną.
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
                W świecie dynamicznych zmian pomagamy firmom osiągać stabilny
                wzrost,
                <wbr /> wdrażać innowacyjne strategie i zdobywać przewagę
                konkurencyjną.
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
        <img className="building" src="Rectangle 1.png" alt="" />
      </div>
      <section className={`whatWeDo${isMobile ? " mobile" : ""}`} id="whatWeDo">
        <h2>Zmieniamy wyzwania w możliwości</h2>
        <span>
          W świecie dynamicznych zmian pomagamy firmom osiągać stabilny wzrost,
          wdrażać innowacyjne strategie i zdobywać przewagę konkurencyjną.
          <span className="bold">
            Wspieramy zarówno małe i średnie przedsiębiorstwa, jak i duże
            korporacje -niezależnie od branży.
          </span>
        </span>
        <div className="images">
          <div className="image1">
            <p>
              Łączymy doradztwo strategiczne <br /> z operacyjnym wsparciem
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
              W dzisiejszym dynamicznym środowisku biznesowym brak kontroli nad
              ryzykiem to zbyt duże ryzyko. Dlatego wspieramy firmy w budowaniu
              stabilnych, bezpiecznych fundamentów – poprzez skuteczny audyt i
              profesjonalne zarządzanie ryzykiem.
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
              Cyberbezpieczeństwo, <br /> na które możesz liczyć.
            </p>
            <span>
              W dobie cyfryzacji zagrożenia w sieci stają się coraz bardziej
              zaawansowane i powszechne. Ochrona danych, systemów i informacji
              to nie tylko kwestia technologii, ale przede wszystkim strategii.
              Dzięki naszym usługom zyskujesz pewność, że Twoja firma jest
              bezpieczna przed cyberatakami.
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
              Doradztwo prawno-podatkowe, <br /> które chroni i wspiera Twój
              biznes.
            </p>
            <span>
              Zarządzanie kwestiami prawnymi i podatkowymi to kluczowy element
              sukcesu każdej firmy. Nasze doradztwo prawno podatkowe pomoże Ci
              unikać ryzyk, minimalizować koszty i działać zgodnie z
              obowiązującymi przepisami. Zapewniamy pełne wsparcie, które
              pozwala skoncentrować się na rozwoju biznesu, a nie na problemach
              prawnych.
            </span>
            <p>
              Z nami zyskujesz pewność, że Twoja firma jest zawsze w zgodzie z
              prawem i optymalizuje obciążenia podatkowe.
            </p>
            <button onClick={() => navigate("/podatki")}>Zobacz więcej</button>
          </div>
          <div className="service">
            <p>
              Doradztwo technologiczne, <br /> które napędza innowacje.
            </p>
            <span>
              Technologia to dziś nie dodatek – to fundament konkurencyjnego
              biznesu. W świecie, gdzie zmiana jest stałą, pomagamy firmom
              wybierać, wdrażać i wykorzystywać rozwiązania technologiczne,
              które realnie wspierają wzrost i efektywność. Łączymy wiedzę
              strategiczną z praktycznym podejściem do transformacji cyfrowej.
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
              Silna marka, skuteczna komunikacja i dobrze zaplanowane działania
              marketingowe to dziś podstawa biznesowego sukcesu. Nasze doradztwo
              marketingowe łączy strategię z kreatywnością, a dane z
              doświadczeniem. Dzięki nam Twoje działania marketingowe są spójne,
              trafne i przede wszystkim –skuteczne.
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
              Rozwój firmy wymaga solidnych fundamentów finansowych i dostępu do
              odpowiednich źródeł finansowania. Nasze doradztwo finansowe i
              wsparcie w pozyskiwaniu funduszy unijnych to konkretna pomoc w
              planowaniu, zabezpieczaniu i realizacji Twoich celów biznesowych.
            </span>
            <p>
              Z nami pieniądze <br /> nie są przeszkodą – są narzędziem rozwoju.
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
            <button onClick={() => navigate("/specjalistaDS.strategii")}>
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Technologii i Cyfrowej Transformacji</p>
            <button onClick={() => navigate("/specjalistaDS.technologii")}>
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Finansów</p>
            <button onClick={() => navigate("/specjalistaDS.finansów")}>
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Podatków</p>
            <button onClick={() => navigate("/specjalistaDS.podatków")}>
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Fuzji i Przejęć</p>
            <button onClick={() => navigate("/specjalistaDS.fuzjii")}>
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Prawnych</p>
            <button onClick={() => navigate("/specjalistaDS.prawnych")}>
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Zarządzania Zasobami Ludzkimi</p>
            <button onClick={() => navigate("/specjalistaDS.zasobówLudzkich")}>
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Marketingu</p>
            <button onClick={() => navigate("/specjalistaDS.marketingu")}>
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Rozwoju</p>
            <button onClick={() => navigate("/specjalistaDS.rozwoju")}>
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Produkcji</p>
            <button onClick={() => navigate("/specjalistaDS.produkcji")}>
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Transportu i Logistyki</p>
            <button onClick={() => navigate("/specjalistaDS.logistyki")}>
              Zobacz więcej
            </button>
          </div>
          <div className="employee">
            <p>Specjalista ds. Funduszy Unijnych</p>
            <button onClick={() => navigate("/specjalistaDS.funduszyUE")}>
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
                <span>+ 48 601 27 26 25</span>
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
          <form action="https://formspree.io/f/mrbkgrww" method="POST">
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
      <section className={`newsfeed${isMobile ? " mobile" : ""}`} id="newsFeed">
        <h1>Aktualności</h1>
        <hr />
        <div className="articles">
          {articles.slice(0, 3).map((article) => (
            <div className="article" key={article.slug}>
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
                  onClick={() => navigate(`/news/${article.slug}`)}
                >
                  Przeczytaj artykuł
                </button>
              </div>
              <div className="readingTime">
                <img src="clock.png" alt="clock" />
                <p>{article.time}</p>
              </div>
              <h3>{article.title}</h3>
              <p className="description">
                {article.description.length > 120
                  ? article.description.slice(0, 120).trim() + "..."
                  : article.description}
              </p>
            </div>
          ))}
        </div>
        <button
          className="main-news-btn"
          onClick={() => navigate("/aktualności")}
        >
          Zobacz wszystkie artykuły
        </button>
      </section>
      {/* NARAZIE UKRYTE  <section className={`newsletter${isMobile ? " mobile" : ""}`}>
        <div className="newsletter-left">
          <h2>
            Bądź na bieżąco z rynkiem <br /> i innowacjami.
          </h2>
          <p>Zapisz się na nasz newsletter i otrzymuj:</p>
          <div className="benefits">
            <div className="benefit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="6" fill="#22C55E" />
                <path
                  d="M7 13.5L10.5 17L17 10.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Porady ekspertów</p>
            </div>
            <div className="benefit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="6" fill="#22C55E" />
                <path
                  d="M7 13.5L10.5 17L17 10.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Analizy trendów</p>
            </div>
            <div className="benefit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="6" fill="#22C55E" />
                <path
                  d="M7 13.5L10.5 17L17 10.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Informacje o wydarzeniach</p>
            </div>
          </div>
        </div>
        <div className="newsletter-right">
          <form action="" method="post">
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="text" name="imie" id="name" placeholder="Imię" />
            <div className="checkbox-row">
              <input type="checkbox" name="agreement" id="agreement" required />
              <label htmlFor="agreement">
                Akceptuję politykę prywatności i chcę otrzymywać newsletter,
                czyli informacje handlowe o promocjach
              </label>
            </div>
            <button type="submit">Zapisz się do newslettera</button>
          </form>
        </div>
      </section> */}
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
          {/* NARAZIE UKRYTE  {/* NARAZIE UKRYTE <form className="footer-newsletter">
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

export default MainPage;

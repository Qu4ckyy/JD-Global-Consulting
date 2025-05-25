import React from "react";
import "./MainPage.scss";
import useIsMobile from "../../hooks/useIsMobile";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const MainPage = () => {
  const isMobile = useIsMobile();
  return (
    <div className={`page${isMobile ? " mobile" : ""}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className={`baner${isMobile ? " mobile" : ""}`}>
        <img src="/logo JD global.png" alt="logo" />
        <div className={`nav-buttons${isMobile ? " mobile" : ""}`}>
          <button
            className="aboutUs"
            onClick={() => scrollToSection("whatWeDo")}
          >
            O nas
          </button>
          <button
            className="specialists"
            onClick={() => scrollToSection("team-header")}
          >
            Specjaliści
          </button>
          <button className="services" onClick={() => scrollToSection("offer")}>
            Oferta
          </button>
          <button
            className="partners"
            onClick={() => scrollToSection("companies")}
          >
            Partnerzy
          </button>
          <button className="news" onClick={() => scrollToSection("newsFeed")}>
            Aktualności
          </button>
          <button
            className="contact"
            onClick={() => scrollToSection("contactForm")}
          >
            Kontakt
          </button>
        </div>
      </header>
      <section className={`info${isMobile ? " mobile" : ""}`}>
        {isMobile ? (
          <>
            <div className="company">
              <span>
                <span className="bold">JD Global Consulting -</span> Twój
                partner rozwoju i transformacji biznesu
              </span>
            </div>
            <div className="mission">
              <h4>Nasza misja</h4>
              <span>
                W świecie dynamicznych zmian pomagamy firmom osiągać stabilny
                wzrost, wdrażać innowacyjne strategie i zdobywać przewagę
                konkurencyjną.
              </span>
              <button className="learnMore">Dowiedz się więcej</button>
            </div>
          </>
        ) : (
          <>
            <div className="mission">
              <h4>Nasza misja</h4>
              <span>
                W świecie dynamicznych zmian pomagamy firmom osiągać stabilny
                wzrost, wdrażać innowacyjne strategie i zdobywać przewagę
                konkurencyjną.
              </span>
              <button className="learnMore">Dowiedz się więcej</button>
            </div>
            <div className="company">
              <span>
                <span className="bold">JD Global Consulting -</span> Twój
                partner rozwoju i transformacji biznesu
              </span>
            </div>
          </>
        )}
      </section>
      <div className={`companies${isMobile ? " mobile" : ""}`} id="companies">
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
      </div>
      <img className="building" src="Rectangle 1.png" alt="" />
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
            <p>Łączymy doradztwo strategiczne z operacyjnym wsparciem</p>
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
            <p>Twój biznes pod kontrolą. Ryzyko – pod naszą.</p>
            <span>
              W dzisiejszym dynamicznym środowisku biznesowym brak kontroli nad
              ryzykiem to zbyt duże ryzyko. Dlatego wspieramy firmy w budowaniu
              stabilnych, bezpiecznych fundamentów – poprzez skuteczny audyt i
              profesjonalne zarządzanie ryzykiem.
            </span>
            <p>Z nami audyt to nie kontrola – to strategia na przyszłość.</p>
            <button>Zobacz więcej</button>
          </div>
          <div className="service">
            <p>Cyberbezpieczeństwo, na które możesz liczyć.</p>
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
            <button>Zobacz więcej</button>
          </div>
          <div className="service">
            <p>
              Doradztwo prawno-podatkowe, które chroni i wspiera Twój biznes.
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
            <button>Zobacz więcej</button>
          </div>
          <div className="service">
            <p>Doradztwo technologiczne, które napędza innowacje.</p>
            <span>
              Technologia to dziś nie dodatek – to fundament konkurencyjnego
              biznesu. W świecie, gdzie zmiana jest stałą, pomagamy firmom
              wybierać, wdrażać i wykorzystywać rozwiązania technologiczne,
              które realnie wspierają wzrost i efektywność. Łączymy wiedzę
              strategiczną z praktycznym podejściem do transformacji cyfrowej.
            </span>
            <p>Z nami technologia staje się Twoją przewagą – nie przeszkodą.</p>
            <button>Zobacz więcej</button>
          </div>
          <div className="service">
            <p>Doradztwo marketingowe, które realnie napędza sprzedaż.</p>
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
            <button>Zobacz więcej</button>
          </div>
          <div className="service">
            <p>Doradztwo finansowe i fundusze unijne w jednym miejscu.</p>
            <span>
              Rozwój firmy wymaga solidnych fundamentów finansowych i dostępu do
              odpowiednich źródeł finansowania. Nasze doradztwo finansowe i
              wsparcie w pozyskiwaniu funduszy unijnych to konkretna pomoc w
              planowaniu, zabezpieczaniu i realizacji Twoich celów biznesowych.
            </span>
            <p>Z nami pieniądze nie są przeszkodą – są narzędziem rozwoju.</p>
            <button>Zobacz więcej</button>
          </div>
        </div>
        <button>Zobacz więcej usług</button>
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
            <img src="krzysztof1.png" alt="person" />
            <p>Krzysztof Iksiński</p>
            <p>Founder & CEO</p>
          </div>
          <div className="employee">
            <img src="krzysztof2.png" alt="person" />
            <p>Krzysztof Iksiński</p>
            <p>Founder & CEO</p>
          </div>
          <div className="employee">
            <img src="krzysztof3.png" alt="person" />
            <p>Krzysztof Iksiński</p>
            <p>Chief of staff</p>
          </div>
          <div className="employee">
            <img src="elżbieta1.png" alt="person" />
            <div className="author-info">
              <p>Elżbieta Wolska</p>
              <p>System developer</p>
            </div>
          </div>
          <div className="employee">
            <img src="krzysztof4.png" alt="person" />
            <p>Krzysztof Iksiński</p>
            <p>Founder & CEO</p>
          </div>
          <div className="employee">
            <img src="krzysztof5.png" alt="person" />
            <div className="author-info">
              <p>Krzysztof Iksiński</p>
              <p>System developer</p>
            </div>
          </div>
          <div className="employee">
            <img src="elżbieta2.png" alt="person" />
            <div className="author-info">
              <p>Elżbieta Wolska</p>
              <p>System Developer</p>
            </div>
          </div>
          <div className="employee">
            <img src="krzysztof6.png" alt="person" />
            <div className="author-info">
              <p>Krzysztof Iksiński</p>
              <p>System Developer</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`contactForm${isMobile ? " mobile" : ""}`}
        id="contactForm"
      >
        <div className="contactForm__left">
          <h1>
            <strong>Porozmawiajmy</strong> o przyszłości
            <br />
            Twojego biznesu
          </h1>
          <p>
            Chcesz dowiedzieć się, jak możemy Ci pomóc? Skontaktuj się z nami.
          </p>
          <div className="contactInfo">
            <div className="email">
              <span className="icon">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#070046"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="20"
                    height="16"
                    x="2"
                    y="4"
                    rx="4"
                    stroke="#070046"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M22 6 12 13 2 6"
                    stroke="#070046"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
              <div>
                <p>Email</p>
                <span>biuro@jdgc.pl</span>
              </div>
            </div>
            <div className="phone">
              <span className="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>
              </span>
              <div>
                <p>Telefon</p>
                <span>+ 48 888 888 888</span>
              </div>
            </div>
            <div className="guardian">
              <img src="piotr.png" alt="person" />
              <div>
                <p>Piotr Brzęczyszczykiewicz</p>
                <span>Opiekun klienta</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contactForm__right">
          <form>
            <label>Imie</label>
            <input type="text" placeholder="Jan Kowalski" />
            <label>Email</label>
            <input type="email" placeholder="imie@gmail.com" />
            <label>Wiadomość</label>
            <textarea placeholder="Tu wpisz swoją wiadomość"></textarea>
            <div className="checkbox-row">
              <input type="checkbox" id="agreement" />
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
          <div className="article">
            <img src="news1.png" alt="articleImg" />
            <div className="readingTime">
              <img src="clock.png" alt="icon" />
              <p>5-10 minut czytania</p>
            </div>
            <h3>5 kluczowych kroków do skutecznej transformacji biznesowej</h3>
            <span>
              W dynamicznie zmieniającym się świecie transformacja biznesowa to
              nie opcja — to konieczność. Jednak bez jasno określonych etapów...
            </span>
            <div className="author">
              <img src="elżbieta1.png" alt="author" />
              <div className="author-info">
                <p>Katarzyna Wójcik</p>
                <p>Specjalistka do spraw finansowych</p>
              </div>
            </div>
          </div>
          <div className="article">
            <img src="news2.png" alt="articleImg" />
            <div className="readingTime">
              <img src="clock.png" alt="icon" />
              <p>5-10 minut czytania</p>
            </div>
            <h3>
              Cyberbezpieczeństwo w małej i średniej firmie — od czego zacząć?
            </h3>
            <span>
              W dynamicznie zmieniającym się świecie transformacja biznesowa to
              nie opcja — to konieczność. Jednak bez jasno określonych etapów...
            </span>
            <div className="author">
              <img src="krzysztof5.png" alt="author" />
              <div className="author-info">
                <p>Krzysztof Iksiński</p>
                <p>System developer</p>
              </div>
            </div>
          </div>
          <div className="article">
            <img src="news3.png" alt="articleImg" />
            <div className="readingTime">
              <img src="clock.png" alt="icon" />
              <p>5-10 minut czytania</p>
            </div>
            <h3>5 kluczowych kroków do skutecznej transformacji biznesowej</h3>
            <span>
              W dynamicznie zmieniającym się świecie transformacja biznesowa to
              nie opcja — to konieczność. Jednak bez jasno określonych etapów...
            </span>
            <div className="author">
              <img src="elżbieta1.png" alt="author" />
              <div className="author-info">
                <p>Katarzyna Wójcik</p>
                <p>Specjalistka do spraw finansowych</p>
              </div>
            </div>
          </div>
        </div>
        <button className="main-news-btn">Zobacz wszystkie artykuły</button>
      </section>
      <section className={`newsletter${isMobile ? " mobile" : ""}`}>
        <div className="newsletter-left">
          <h2>Bądź na bieżąco z rynkiem i innowacjami.</h2>
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
              <input type="checkbox" name="agreement" id="agreement" />
              <label htmlFor="agreement">
                Akceptuję politykę prywatności i chcę otrzymywać newsletter,
                czyli informacje handlowe o promocjach
              </label>
            </div>
            <button type="submit">Zapisz się do newslettera</button>
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
              onClick={() => scrollToSection("whatWeDo")}
            >
              O nas
            </button>
            <button
              className="news"
              onClick={() => scrollToSection("newsFeed")}
            >
              Aktualności
            </button>
            <button
              className="specialists"
              onClick={() => scrollToSection("team-header")}
            >
              Specjaliści
            </button>
            <button
              className="services"
              onClick={() => scrollToSection("offer")}
            >
              Oferta
            </button>
            <button
              className="contact"
              onClick={() => scrollToSection("contactForm")}
            >
              Kontakt
            </button>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;

import React from "react";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="page">
      <header className="baner">
        <img src="/logo JD global.png" alt="logo" />
        <div className="nav-buttons">
          <button className="aboutUs">O nas</button>
          <button className="specialists">Specjaliści</button>
          <button className="services">Nasze usługi</button>
          <button className="partners">Partnerzy</button>
          <button className="recomendations">Rekomendacje</button>
          <button className="news">Aktualności</button>
          <button className="contact">Kontakt</button>
        </div>
      </header>
      <body>
        <section className="info">
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
              <span className="bold">JD Global Consulting -</span> Twój partner
              rozwoju i transformacji biznesu
            </span>
          </div>
        </section>
        <div className="companies">
          <span>Zaufali nam:</span>
          <div className="partner">
            <img src="Microsoft Black 4.png" alt="microsoft" />
          </div>
          <div className="partner">
            <img src="logo 1.png" alt="" />
          </div>
          <div className="partner">
            <img src="Microsoft Black 4.png" alt="" />
          </div>
          <div className="partner">
            <img src="logo 1.png" alt="" />
          </div>
          <div className="partner">
            <img src="Microsoft Black 4.png" alt="" />
          </div>
          <div className="partner">
            <img src="logo 1.png" alt="" />
          </div>
        </div>
        <img className="building" src="Rectangle 1.png" alt="" />
        <section className="whatWeDo">
          <h2>Zmieniamy wyzwania w możliwości</h2>
          <span>
            W świecie dynamicznych zmian pomagamy firmom osiągać stabilny
            wzrost, wdrażać innowacyjne strategie i zdobywać przewagę
            konkurencyjną.
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
        <section className="offer">
          <h1>Zakres usług</h1>
          <p>Ekspercka pomoc w kluczowych obszarach biznesu</p>
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
          <button>Zobacz więcej usług</button>
        </section>
        <section className="team">
          <h3>EKSPERCI, KTÓRZY REALNIE ZMIENIAJĄ FIRMY</h3>
          <p>
            Każdy z naszych doradców to praktyk z wieloletnim doświadczeniem w
            biznesie. Poznaj nasz zespół i jego kompetencje.
          </p>
          <div className="employees">
            <h1>Nasi specjaliści</h1>
            <hr />
            <div className="employee">
              <img src="" alt="person" />
              <p>//Imię i nazwisko</p>
              <p>stanowisko</p>
            </div>
            <div className="employee">
              <img src="" alt="person" />
              <p>//Imię i nazwisko</p>
              <p>stanowisko</p>
            </div>
            <div className="employee">
              <img src="" alt="person" />
              <p>//Imię i nazwisko</p>
              <p>stanowisko</p>
            </div>
            <div className="employee">
              <img src="" alt="person" />
              <p>//Imię i nazwisko</p>
              <p>stanowisko</p>
            </div>
            <div className="employee">
              <img src="" alt="person" />
              <p>//Imię i nazwisko</p>
              <p>stanowisko</p>
            </div>
            <div className="employee">
              <img src="" alt="person" />
              <p>//Imię i nazwisko</p>
              <p>stanowisko</p>
            </div>
          </div>
        </section>
        <section className="contactForm">
          <h1>
            <strong>Porozmawiajmy</strong> o przyszłości Twojego biznesu
          </h1>
          <p>
            Chcesz dowiedzieć się, jak możemy Ci pomóc? Skontaktuj się z nami.
          </p>
          <div className="contactInfo">
            <div className="email">
              <img src="" alt="icon" />
              <p>Email</p>
              <span>biuro@jdgc.pl</span>
            </div>
            <div className="phone">
              <img src="" alt="icon" />
              <p>Telefon</p>
              <span>+ 48 888 888 888</span>
            </div>
            <div className="guardian">
              <img src="" alt="person" />
              <p>//Imię i nazwisko</p>
              <span>Opiekun klienta</span>
            </div>
          </div>
          <div className="form">
            <form action="" method="post">
              <p>Imię</p> <br />
              <input
                type="text"
                name="imie"
                id="name"
                placeholder="Jan Kowalski"
              />
              <br />
              <p>Email</p> <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="imie@gamil.com"
              />
              <br />
              <p>Wiadomość</p> <br />
              <input
                type="text"
                name="wiadomosc"
                id="message"
                placeholder="Tu wpisz swoją wiadomość"
              />
              <br />
              <input type="checkbox" name="agreement" id="agreement" />
              Akceptuję politykę prywatności i chce otrzymywać newsletter, czyli
              informacje handlowe o promocjach.
              <button type="submit" name="send" id="send">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </section>
        <section className="news">
          <h1>Aktualności</h1>
          <hr />
          <div className="article">
            <img src="" alt="articleImg" />
            <div className="readingTime">
              <img src="" alt="icon" />
              <p>5-10 minut czytania</p>
            </div>
            <h3>5 kluczowych kroków do skutecznej transformacji biznesowej</h3>
            <span>
              W dynamicznie zmieniającym się świecie transformacja biznesowa to
              nie opcja — to konieczność. Jednak bez jasno określonych etapów...
            </span>
            <div className="author">
              <img src="" alt="author" />
              <p>//Imie</p>
              <p>//Stanowisko</p>
            </div>
          </div>
          <div className="article">
            <img src="" alt="articleImg" />
            <div className="readingTime">
              <img src="" alt="icon" />
              <p>5-10 minut czytania</p>
            </div>
            <h3>5 kluczowych kroków do skutecznej transformacji biznesowej</h3>
            <span>
              W dynamicznie zmieniającym się świecie transformacja biznesowa to
              nie opcja — to konieczność. Jednak bez jasno określonych etapów...
            </span>
            <div className="author">
              <img src="" alt="author" />
              <p>//Imie</p>
              <p>//Stanowisko</p>
            </div>
          </div>
          <div className="article">
            <img src="" alt="articleImg" />
            <div className="readingTime">
              <img src="" alt="icon" />
              <p>5-10 minut czytania</p>
            </div>
            <h3>5 kluczowych kroków do skutecznej transformacji biznesowej</h3>
            <span>
              W dynamicznie zmieniającym się świecie transformacja biznesowa to
              nie opcja — to konieczność. Jednak bez jasno określonych etapów...
            </span>
            <div className="author">
              <img src="" alt="author" />
              <p>//Imie</p>
              <p>//Stanowisko</p>
            </div>
          </div>
          <button>Zobacz więcej aktualności</button>
        </section>
        <section className="newsletter">
          <h2>Bądź na bieżąco z rynkiem i innowacjami.</h2>
          <p>Zapisz się na nasz newsletter i otrzymuj</p>
          <div className="benefits">
            <div className="benefit">
              <img src="" alt="tickIcon" />
              <p>Porady ekspertów</p>
            </div>
            <div className="benefit">
              <img src="" alt="tickIcon" />
              <p>Analizy trendów</p>
            </div>
            <div className="benefit">
              <img src="" alt="tickIcon" />
              <p>Informacje o wydarzeniach</p>
            </div>
          </div>
          <form action="" method="post">
            <input type="text" name="email" id="email" placeholder="Email" />{" "}
            <br />
            <input type="text" name="imie" id="name" placeholder="Imię" />{" "}
            <br />
            <input type="checkbox" name="agreement" id="agreement" /> Akceptuję
            politykę prywatności i chcę otrzymywać newsletter, czyli informacje
            handlowe o promocjach
            <button type="submit">Zapisz się do newslettera</button>
          </form>
        </section>
      </body>
      <hr />
      <footer>
        <div className="footerInfo">
          <div className="footertext">
            <h2>Bądź na bieżąco rynkiem i innowacjami.</h2>
            <p>Chcesz dowiedzieć się, jak możemy Ci pomóc?</p>
            <p>Skontaktuj się z nami.</p>
          </div>
          <div className="footerInput">
            <p>Dołącz do newsletter</p> <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="imie@gmail.com"
            />{" "}
            <br />
            <input type="checkbox" name="agreement" id="agreement" /> Akceptuję
            politykę prywatności i chce otrzymywać newsletter, czyli informacje
            handlowe o promocjach.
          </div>
        </div>
        <hr />
        <div className="footerButtons">
          <div className="logo">
            <img src="" alt="logo" />
            <p>Wszelkie prawa zastrzeżone</p>
          </div>
          <div className="buttons">
            <button className="aboutUs">O nas</button>
            <button className="specialists">Specjaliści</button>
            <button className="services">Nasze usługi</button>
            <button className="partners">Partnerzy</button>
            <button className="recomendations">Rekomendacje</button>
            <button className="news">Aktualności</button>
            <button className="contact">Kontakt</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;

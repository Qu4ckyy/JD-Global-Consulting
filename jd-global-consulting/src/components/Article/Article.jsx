import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { articles as defaultArticles } from "../../data/articles";
import "./Article.scss";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";

const Article = () => {
  const { slug } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile(825);

  const navigate = useNavigate();

  const [articles, setArticles] = useState(defaultArticles);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const saved = localStorage.getItem("cms_articles");
    if (saved) {
      try {
        setArticles(JSON.parse(saved));
      } catch (err) {
        console.error("Nie udało się sparsować cms_articles", err);
      }
    }
  }, []);

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="article-page">
        <p>Nie znaleziono artykułu.</p>
        <Link to="/news" className="back-button">
          ‹ Powrót do listy
        </Link>
      </div>
    );
  }

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

      <section className="article-header">
        <h1>{article.title}</h1>
        <p className="subtitle">{article.description}</p>
        <div className="meta">
          <span className="date">{article.date}</span>
          {/* <span className="authorsName">{article.authorName}</span> */}
          <span className="time">{article.time}</span>
        </div>
      </section>

      <figure className="hero">
        <img src={article.heroImg || article.img} alt={article.title} />
      </figure>

      <section className="article-content">
        {article.content.map((block, i) =>
          block.type === "h2" ? (
            <h2 key={i}>{block.text}</h2>
          ) : (
            <p key={i}>{block.text}</p>
          )
        )}
      </section>

      {/* Sekcja Zobacz również */}
      <section className="also-see-section">
        <h2 className="also-see-title">Zobacz również</h2>
        <hr />
        <div className="also-see-articles">
          {articles
            .filter((a) => a.slug !== article.slug)
            .slice(0, 3)
            .map((a) => (
              <div
                className="also-see-article"
                key={a.slug}
                onClick={() => navigate(`/news/${a.slug}`)}
              >
                <div className="also-see-image-wrapper">
                  <img src={a.img} alt={a.title} />
                  <button className="also-see-read-button">
                    Przeczytaj artykuł
                  </button>
                </div>
                <div className="also-see-meta">
                  <div className="also-see-readingTime">
                    <img src="/clock.png" alt="czas czytania" />
                    <span>{a.time}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p className="also-see-description">
                    {a.description.length > 120
                      ? a.description.slice(0, 120).trim() + "..."
                      : a.description}
                  </p>
                  {/* <div className="also-see-author">
                    <img src={a.authorImg} alt={a.authorName} />
                    <div>
                      <span className="also-see-authorName">
                        {a.authorName}
                      </span>
                      <span className="also-see-authorRole">
                        {a.authorRole}
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
        </div>
      </section>

      <Link to="/news" className="back-button">
        ‹ Powrót do aktualności
      </Link>
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
            <button
              className="privacy-policy"
              onClick={() =>
                window.open(
                  "/Informacja-o-administratorze-danych-osobowych-JD%20GLOBAL.docx",
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

export default Article;

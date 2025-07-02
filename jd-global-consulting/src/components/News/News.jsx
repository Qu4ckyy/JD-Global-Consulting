import "./News.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";
import { articles as defaultArticles } from "../../data/articles";

const News = () => {
  const isMobile = useIsMobile(825);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const truncate = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  const [articles, setArticles] = useState(defaultArticles);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const [sortType, setSortType] = useState("najnowsze");
  const [showSort, setShowSort] = useState(false);

  const sortOptions = [
    { value: "najnowsze", label: "Najnowsze" },
    { value: "najstarsze", label: "Najstarsze" },
    { value: "az", label: "A-Z" },
    { value: "za", label: "Z-A" },
  ];

  const sortedArticles = React.useMemo(() => {
    let sorted = [...articles];
    if (sortType === "najnowsze") {
      sorted.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    } else if (sortType === "najstarsze") {
      sorted.sort((a, b) => (a.date || "").localeCompare(b.date || ""));
    } else if (sortType === "az") {
      sorted.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else if (sortType === "za") {
      sorted.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
    }
    return sorted;
  }, [articles, sortType]);

  const paginateArticles = () => {
    const start = (currentPage - 1) * articlesPerPage;
    return sortedArticles.slice(start, start + articlesPerPage);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("cms_articles");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setArticles(parsed);
      } catch (e) {
        console.error("Błąd parsowania CMS articles z localStorage", e);
      }
    }
  }, []);

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

      <div className="newsInner">
        <div className="newsfeed-header">
          <h1>Aktualności</h1>
          <div className="sort-wrapper">
            <button className="sort-btn" onClick={() => setShowSort((v) => !v)}>
              Sortuj według
            </button>
            {showSort && (
              <div className="sort-dropdown">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    className={`sort-option${
                      sortType === opt.value ? " active" : ""
                    }`}
                    onClick={() => {
                      setSortType(opt.value);
                      setShowSort(false);
                      setCurrentPage(1);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <hr />
        </div>
        <section className="articles">
          {paginateArticles().map((article) => (
            <div className="article" key={article.slug}>
              <div className="image-wrapper">
                <img src={article.img} alt={article.title} />
                <button
                  className="read-button"
                  onClick={() => navigate(`/news/${article.slug}`)}
                >
                  Przeczytaj artykuł
                </button>
              </div>
              <div className="readingTime">
                <img src="clock.png" alt="czas czytania" />
                <p>{article.time}</p>
              </div>
              <h3>{article.title}</h3>
              <p className="description">
                {truncate(article.description, 120)}
              </p>
              {/* <div className="authorData">
                <img src={article.authorImg} alt={article.authorName} />
                <div className="authorInfo">
                  <p>{article.authorName}</p>
                  <p>{article.authorRole}</p>
                </div>
              </div> */}
            </div>
          ))}
        </section>
        <div className="pagination">
          <button
            className="pagination-arrow"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &#60;
          </button>
          <span className="pagination-label">Strona</span>
          {Array.from({ length: totalPages }).map((_, idx) => {
            if (
              idx + 1 === 1 ||
              idx + 1 === totalPages ||
              Math.abs(idx + 1 - currentPage) <= 1
            ) {
              return (
                <button
                  key={idx}
                  className={`pagination-page${
                    currentPage === idx + 1 ? " active" : ""
                  }`}
                  onClick={() => handlePageChange(idx + 1)}
                  disabled={currentPage === idx + 1}
                >
                  {idx + 1}
                </button>
              );
            } else if (
              (idx + 1 === currentPage - 2 && currentPage > 3) ||
              (idx + 1 === currentPage + 2 && currentPage < totalPages - 2)
            ) {
              return (
                <span key={idx} className="pagination-dots">
                  ...
                </span>
              );
            }
            return null;
          })}
          <button
            className="pagination-arrow"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &#62;
          </button>
        </div>
      </div>

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

export default News;

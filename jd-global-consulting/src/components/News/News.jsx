import "./News.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";
import { Helmet } from "react-helmet";

const COCKPIT_URL =
  process.env.REACT_APP_COCKPIT_URL || "https://jdc.technischools.com";
const COCKPIT_TOKEN =
  process.env.REACT_APP_COCKPIT_TOKEN ||
  "API_920e6ce6751e922bf7fc2700b936c98b4526aa10";

function stripHTML(html = "") {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

const News = () => {
  const isMobile = useIsMobile(825);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
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

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const truncate = (text, maxLength = 120) => {
    if (!text) return "";
    return text.length <= maxLength
      ? text
      : text.slice(0, maxLength).trim() + "...";
  };

  useEffect(() => {
    async function loadArticles() {
      try {
        const res = await fetch(
          `${COCKPIT_URL.replace(
            /\/+$/,
            ""
          )}/api/content/items/article?token=${encodeURIComponent(
            COCKPIT_TOKEN
          )}`
        );
        const json = await res.json();
        console.log("cockpit raw json:", json);

        const list = Array.isArray(json)
          ? json
          : Array.isArray(json.entries)
          ? json.entries
          : Array.isArray(json.items)
          ? json.items
          : [];

        const baseUrl = COCKPIT_URL.replace(/\/api$/, "").replace(/\/+$/, "");

        const makeUrl = (assetOrArray) => {
          let asset = null;
          if (Array.isArray(assetOrArray)) {
            asset = assetOrArray[0];
          } else if (
            typeof assetOrArray === "object" &&
            assetOrArray !== null
          ) {
            asset = assetOrArray;
          }
          if (!asset || !asset.path) return "";
          const p = asset.path;
          if (p.startsWith("http")) return p;
          return `${baseUrl}/storage/uploads${
            p.startsWith("/") ? "" : "/"
          }${p}`;
        };

        const formatted = list.map((item) => ({
          slug: item.slug,
          title: item.title,
          description: stripHTML(item.description),
          date: item.date,
          time: item.time,
          img: makeUrl(item.img),
          heroImg: makeUrl(item.heroImg),
          content: item.content || [],
        }));

        setArticles(formatted);
      } catch (err) {
        console.error("Błąd ładowania artykułów:", err);
      }
    }

    loadArticles();
  }, []);

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

  return (
    <div className={`page${isMobile ? " mobile" : ""}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Helmet>
        <title>Aktualności | JD Global Consulting</title>
        <meta
          name="description"
          content="Zobacz najnowsze artykuły o zarządzaniu, technologii i biznesie na JD Global Consulting."
        />
        <link rel="canonical" href="https://jdgc.pl/aktualności" />
      </Helmet>
      <header className={`baner${isMobile ? " mobile" : ""}`}>
        <img
          src="/logo JD global.png"
          alt="logo"
          loading="lazy"
          onClick={() => navigate("/")}
        />
        {isMobile && (
          <button className="hamburger-icon" onClick={toggleMenu}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
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

      <div className="newsInner">
        <div className="newsfeed-header">
          <div className="newsfeed-title-block">
            <h1>Aktualności</h1>
            <hr className="newsfeed-hr" />
          </div>
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
        </div>

        <section className="articles">
          {paginateArticles().map((article) => {
            const open = () => navigate(`/aktualności/${article.slug}`);

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
                aria-label={`Przejdź do artykułu: ${article.title}`}
              >
                <div className="image-wrapper">
                  <img
                    src={article.img}
                    alt={article.title}
                    loading="lazy"
                    style={{ objectFit: "cover" }}
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
                  <img src="clock.png" alt="czas czytania" />
                  <p>{article.time}</p>
                </div>

                <h3>{article.title}</h3>
                <p className="description">
                  {truncate(article.description, 120)}
                </p>
              </div>
            );
          })}
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
            const page = idx + 1;
            if (
              page === 1 ||
              page === totalPages ||
              Math.abs(page - currentPage) <= 1
            ) {
              return (
                <button
                  key={page}
                  className={`pagination-page${
                    currentPage === page ? " active" : ""
                  }`}
                  onClick={() => handlePageChange(page)}
                  disabled={currentPage === page}
                >
                  {page}
                </button>
              );
            } else if (
              (page === currentPage - 2 && currentPage > 3) ||
              (page === currentPage + 2 && currentPage < totalPages - 2)
            ) {
              return (
                <span key={page} className="pagination-dots">
                  …
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

export default News;

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";
import "./Article.scss";
import { Helmet } from "react-helmet";
import { articles as localArticles } from "../../data/articles";

const COCKPIT_URL =
  process.env.REACT_APP_COCKPIT_URL || "http://localhost/cockpit";
const COCKPIT_TOKEN =
  process.env.REACT_APP_COCKPIT_TOKEN ||
  "API-920e6ce6751e922bf7fc2700b936c98b4526aa10";

function stripHTML(html = "") {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function makeUrl(input, baseUrl) {
  if (Array.isArray(input) && input[0]?.path) {
    const p = input[0].path;
    return p.startsWith("http") ? p : `${baseUrl}/storage/uploads${p}`;
  }
  if (input?.path) {
    const p = input.path;
    return p.startsWith("http") ? p : `${baseUrl}/storage/uploads${p}`;
  }
  return "";
}

const Article = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile(825);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const heroCrop = {
    "5-kluczowych-zasad-jak-skutecznie-rozwijac": "center bottom",
    "co-napedza-rozwoj-it-5-trendow-ktore-trzeba-znać": "center center",
  };
  const [article, setArticle] = useState(null);
  const [alsoSee, setAlsoSee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const baseUrl = COCKPIT_URL.replace(/\/api$/, "");
    const headers = { "api-key": COCKPIT_TOKEN };

    async function fetchArticle() {
      const res = await fetch(
        `${COCKPIT_URL}/api/content/items/article?filter[slug]=${encodeURIComponent(
          slug
        )}`,
        { headers }
      );
      const json = await res.json();
      const list = Array.isArray(json)
        ? json
        : Array.isArray(json.items)
        ? json.items
        : [];

      if (list.length === 0) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const it = list[0];
      const blocks = (Array.isArray(it.content) ? it.content : []).flatMap(
        (entry) => [
          { type: "h2", text: entry.heading },
          { type: "p", text: entry.text },
        ]
      );

      setArticle({
        slug: it.slug,
        title: it.title,
        description: stripHTML(it.description),
        date: it.date,
        time: it.time,
        img: makeUrl(it.img, baseUrl),
        heroImg: makeUrl(it.heroImg, baseUrl),
        content: blocks,
      });
      setLoading(false);
    }

    async function fetchAlsoSee() {
      const res = await fetch(
        `${COCKPIT_URL}/api/content/items/article?limit=4`,
        { headers }
      );
      const json = await res.json();
      const list = Array.isArray(json)
        ? json
        : Array.isArray(json.items)
        ? json.items
        : [];
      const others = list
        .filter((it) => it.slug !== slug)
        .slice(0, 3)
        .map((it) => ({
          slug: it.slug,
          title: it.title,
          time: it.time,
          img: makeUrl(it.img, baseUrl),
          description: stripHTML(it.description),
        }));
      setAlsoSee(others);
    }

    fetchArticle().catch((err) => {
      console.error("Błąd pobierania artykułu:", err);
      const fallback = (localArticles || []).find((a) => a.slug === slug);
      if (fallback) {
        setArticle(fallback);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    });
    fetchAlsoSee().catch(() => {});
  }, [slug]);

  if (loading) {
    return <p>Ładowanie…</p>;
  }

  if (notFound || !article) {
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
      <Helmet>
        <title>{article.title} | JD Global Consulting</title>
        <meta
          name="description"
          content={stripHTML(article.description).slice(0, 150)}
        />
        <link
          rel="canonical"
          href={`https://jdgc.pl/news/${encodeURIComponent(article.slug)}`}
        />
      </Helmet>
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
        <img
          src={article.heroImg || article.img}
          alt={article.title}
          loading="lazy"
          style={{
            objectPosition: heroCrop[slug] || "center center",
          }}
        />
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

      <section className="also-see-section">
        <h2 className="also-see-title">Zobacz również</h2>
        <hr />
        <div className="also-see-articles">
          {alsoSee.map((a) => (
            <div
              className="also-see-article"
              key={a.slug}
              onClick={() => navigate(`/news/${a.slug}`)}
            >
              <div className="also-see-image-wrapper">
                <img src={a.img} alt={a.title} loading="lazy" />
                <button className="also-see-read-button">
                  Przeczytaj artykuł
                </button>
              </div>
              <div className="also-see-meta">
                <div className="also-see-readingTime">
                  <img src="/clock.png" alt="czas czytania" loading="lazy" />
                  <span>{a.time}</span>
                </div>
                <h3>{a.title}</h3>
                <p className="also-see-description">
                  {a.description.length > 120
                    ? a.description.slice(0, 120).trim() + "..."
                    : a.description}
                </p>
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

export default Article;

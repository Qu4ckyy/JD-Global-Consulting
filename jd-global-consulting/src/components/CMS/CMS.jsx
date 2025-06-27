// src/components/CMS/CMS.jsx
import React, { useState, useEffect } from "react";
import { articles as initialArticles } from "../../data/articles";
import { Link } from "react-router-dom";
import "./CMS.scss";

const CMS = () => {
  const [articles, setArticles] = useState(() => {
    const saved = localStorage.getItem("cms_articles");
    return saved ? JSON.parse(saved) : initialArticles;
  });

  // Jeśli edytujemy, trzyma slug oryginału
  const [editingSlug, setEditingSlug] = useState(null);

  const [newArticle, setNewArticle] = useState({
    slug: "",
    title: "",
    description: "",
    date: "",
    authorName: "",
    authorRole: "",
    authorImg: "",
    img: "",
    heroImg: "",
    time: "",
    content: [],
  });

  useEffect(() => {
    localStorage.setItem("cms_articles", JSON.stringify(articles));
  }, [articles]);

  const handleFieldChange = (field) => (e) => {
    setNewArticle((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleImageUpload = (field) => (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setNewArticle((prev) => ({ ...prev, [field]: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const addBlock = (type) => {
    setNewArticle((prev) => ({
      ...prev,
      content: [...prev.content, { type, text: "" }],
    }));
  };

  const handleBlockTextChange = (idx) => (e) => {
    setNewArticle((prev) => ({
      ...prev,
      content: prev.content.map((blk, i) =>
        i === idx ? { ...blk, text: e.target.value } : blk
      ),
    }));
  };

  const removeBlock = (idx) => {
    setNewArticle((prev) => ({
      ...prev,
      content: prev.content.filter((_, i) => i !== idx),
    }));
  };

  const resetForm = () => {
    setNewArticle({
      slug: "",
      title: "",
      description: "",
      date: "",
      authorName: "",
      authorRole: "",
      authorImg: "",
      img: "",
      heroImg: "",
      time: "",
      content: [],
    });
    setEditingSlug(null);
  };

  const saveArticle = () => {
    if (!newArticle.slug || !newArticle.title) return;

    if (editingSlug) {
      // edycja istniejącego
      setArticles((prev) =>
        prev.map((a) => (a.slug === editingSlug ? newArticle : a))
      );
    } else {
      // dodanie nowego
      setArticles((prev) => [...prev, newArticle]);
    }

    resetForm();
  };

  const removeArticle = (slug) => {
    if (editingSlug === slug) {
      // jeśli usuwamy akurat edytowany, czyścimy formę
      resetForm();
    }
    setArticles((prev) => prev.filter((a) => a.slug !== slug));
  };

  const handleEdit = (slug) => {
    const art = articles.find((a) => a.slug === slug);
    if (!art) return;
    setNewArticle(art);
    setEditingSlug(slug);
  };

  return (
    <div className="cms-page">
      <h1>CMS – Zarządzanie artykułami</h1>

      <section className="cms-form">
        <h2>{editingSlug ? "Edytuj artykuł" : "Dodaj artykuł"}</h2>

        <input
          placeholder="Slug"
          value={newArticle.slug}
          onChange={handleFieldChange("slug")}
        />

        <input
          placeholder="Tytuł"
          value={newArticle.title}
          onChange={handleFieldChange("title")}
        />

        <textarea
          placeholder="Krótki opis (description)"
          value={newArticle.description}
          onChange={handleFieldChange("description")}
          rows={3}
        />

        <input
          placeholder="Data (DD.MM.RRRR)"
          value={newArticle.date}
          onChange={handleFieldChange("date")}
        />

        <input
          placeholder="Czas czytania"
          value={newArticle.time}
          onChange={handleFieldChange("time")}
        />

        <input
          placeholder="Autor"
          value={newArticle.authorName}
          onChange={handleFieldChange("authorName")}
        />

        <input
          placeholder="Stanowisko autora"
          value={newArticle.authorRole}
          onChange={handleFieldChange("authorRole")}
        />

        <div>
          <label>Miniaturka (na liście):</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload("img")}
          />
        </div>

        <div>
          <label>Hero image (na stronie artykułu):</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload("heroImg")}
          />
        </div>

        <div>
          <label>Zdjęcie autora:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload("authorImg")}
          />
        </div>

        <div className="content-blocks">
          <button onClick={() => addBlock("h2")}>+ Nagłówek</button>
          <button onClick={() => addBlock("p")}>+ Paragraf</button>
        </div>

        {newArticle.content.map((blk, idx) => (
          <div key={idx} className="content-block">
            <strong>{blk.type === "h2" ? "Nagłówek" : "Paragraf"}</strong>
            <textarea
              placeholder={
                blk.type === "h2" ? "Tekst nagłówka" : "Tekst paragrafu"
              }
              value={blk.text}
              onChange={handleBlockTextChange(idx)}
              rows={blk.type === "h2" ? 1 : 3}
            />
            <button onClick={() => removeBlock(idx)} className="btn btn-danger">
              Usuń blok
            </button>
          </div>
        ))}

        <button className="btn btn-primary" onClick={saveArticle}>
          {editingSlug ? "Zaktualizuj artykuł" : "Zapisz artykuł"}
        </button>
      </section>

      <table className="cms-table">
        <thead>
          <tr>
            <th>Slug</th>
            <th>Tytuł</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((a) => (
            <tr key={a.slug}>
              <td>{a.slug}</td>
              <td>{a.title}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeArticle(a.slug)}
                >
                  Usuń
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleEdit(a.slug)}
                >
                  Edytuj
                </button>
                <Link to={`/news/${a.slug}`} className="btn btn-link">
                  Podgląd
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="back-link">
        <Link to="/">↩ Wróć do głównej strony</Link>
      </p>
    </div>
  );
};

export default CMS;

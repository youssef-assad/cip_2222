/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import  { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../../products.json";
import "./listproducts.css";

const CATEGORIES = [
  { key: "",          label: "Tous",           icon: "icon-grid" },
  { key: "agro",      label: "Agro-alimentaire", icon: "icon-chemistry" },
  { key: "medical",   label: "Médical",          icon: "icon-heart" },
  { key: "plasturgie",label: "Plasturgie",        icon: "icon-settings" },
  { key: "industrie", label: "Industrie",         icon: "icon-wrench" },
  { key: "decoration",label: "Décoration",        icon: "icon-grid" },
];

function ProductCard({ p, index }) {
  return (
    <Link
      className="pc"
      to={`/products/${p.id}`}
      style={{ animationDelay: `${(index % 12) * 0.05}s` }}
    >
      <div className="pc-img-wrap">
        <img
          src={p.images[0]}
          alt={p.title || "Produit"}
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
        />
        <div className="pc-overlay">
          <span className="pc-detail-btn">
            <i className="icon-eye" /> Voir détail
          </span>
        </div>
        {p.secteur && <span className="pc-badge">{p.secteur}</span>}
      </div>
      <div className="pc-body">
        <h3>{p.title || "Sans titre"}</h3>
        <p>{p.desc}</p>
        <div className="pc-footer">
          <span className="pc-cat">{p.categorie}</span>
          <span className="pc-arrow">
            <i className="icon-arrow-right" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function ListProducts() {
  const { cate } = useParams();
  const [selectedCat, setSelectedCat] = useState(cate || "");
  const [search, setSearch]           = useState("");
  const [view, setView]               = useState("grid"); // "grid" | "list"
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => { setSelectedCat(cate || ""); }, [cate]);

  const filtered = useMemo(() => {
    let list = Products;
    if (selectedCat)
      list = list.filter(p => p.categorie?.toLowerCase() === selectedCat.toLowerCase());
    if (search.trim())
      list = list.filter(p =>
        p.title?.toLowerCase().includes(search.toLowerCase()) ||
        p.desc?.toLowerCase().includes(search.toLowerCase())  ||
        p.secteur?.toLowerCase().includes(search.toLowerCase())
      );
    return list;
  }, [selectedCat, search]);

  return (
    <div className="lp-page">

      {/* ── Page header ── */}
      <div className="lp-header">
        <div className="lp-header-text">
          <span className="lp-eyebrow">Notre catalogue</span>
          <h1>Nos <span>Produits</span></h1>
        </div>

        {/* Search bar */}
        <div className="lp-search">
          <i className="icon-magnifier" />
          <input
            type="text"
            placeholder="Rechercher un produit…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="lp-search-clear" onClick={() => setSearch("")}>
              <i className="icon-close" />
            </button>
          )}
        </div>

        {/* View toggle */}
        <div className="lp-view-toggle">
          <button className={view === "grid" ? "active" : ""} onClick={() => setView("grid")} aria-label="Grille">
            <i className="icon-grid" />
          </button>
          <button className={view === "list" ? "active" : ""} onClick={() => setView("list")} aria-label="Liste">
            <i className="icon-list" />
          </button>
        </div>
      </div>

      <div className="lp-body">

        {/* ── Sidebar ── */}
        <aside className={`lp-sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="lp-sidebar-header">
            <h3>Catégories</h3>
            <button className="lp-sidebar-close" onClick={() => setSidebarOpen(false)}>
              <i className="icon-close" />
            </button>
          </div>

          <ul className="lp-cat-list">
            {CATEGORIES.map(c => (
              <li key={c.key}>
                <button
                  className={`lp-cat-btn ${selectedCat === c.key ? "active" : ""}`}
                  onClick={() => { setSelectedCat(c.key); setSidebarOpen(false); }}
                >
                  <i className={c.icon} />
                  <span>{c.label}</span>
                  <span className="lp-cat-count">
                    {c.key
                      ? Products.filter(p => p.categorie?.toLowerCase() === c.key).length
                      : Products.length}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Quick contact in sidebar */}
          <div className="lp-sidebar-cta">
            <p>Besoin d'un devis ?</p>
            <a href="https://wa.me/212661946011" target="_blank" rel="noopener noreferrer" className="lp-cta-btn">
              <i className="icon-whatsapp" /> Contactez-nous
            </a>
          </div>
        </aside>

        {/* ── Mobile filter bar ── */}
        <div className="lp-mobile-bar">
          <button className="lp-filter-btn" onClick={() => setSidebarOpen(true)}>
            <i className="icon-equalizer" /> Filtrer
            {selectedCat && <span className="lp-filter-dot" />}
          </button>

          {/* Horizontal scroll pills on mobile */}
          <div className="lp-pills">
            {CATEGORIES.map(c => (
              <button
                key={c.key}
                className={`lp-pill ${selectedCat === c.key ? "active" : ""}`}
                onClick={() => setSelectedCat(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Products grid/list ── */}
        <main className="lp-main">

          {/* Results bar */}
          <div className="lp-results-bar">
            <span>
              {filtered.length} produit{filtered.length !== 1 ? "s" : ""}
              {selectedCat && ` dans "${CATEGORIES.find(c => c.key === selectedCat)?.label}"`}
              {search && ` pour "${search}"`}
            </span>
            {(selectedCat || search) && (
              <button className="lp-reset" onClick={() => { setSelectedCat(""); setSearch(""); }}>
                <i className="icon-close" /> Réinitialiser
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className={`lp-grid ${view === "list" ? "lp-grid--list" : ""}`}>
              {filtered.map((p, i) => (
                <ProductCard key={p.id} p={p} index={i} />
              ))}
            </div>
          ) : (
            <div className="lp-empty">
              <i className="icon-ghost" />
              <h3>Aucun produit trouvé</h3>
              <p>Essayez une autre catégorie ou un autre mot-clé.</p>
              <button className="lp-reset" onClick={() => { setSelectedCat(""); setSearch(""); }}>
                Voir tous les produits
              </button>
            </div>
          )}

        </main>
      </div>

      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="lp-overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}

export default ListProducts;
/* eslint-disable react/prop-types */
import  { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../../products.json";
import "./listproducts.css";

const CATS = [
  { key: "",           label: "Tous"             },
  { key: "agro",       label: "Agro-alimentaire" },
  { key: "medical",    label: "Médical"          },
  { key: "plasturgie", label: "Plasturgie"       },
  { key: "industrie",  label: "Industrie"        },
  { key: "decoration", label: "Décoration"       },
];

function ProdCard({ p }) {
  return (
    <Link className="prod-card" to={`/products/${p.id}`}>
      <div className="prod-card-img">
        <img
          src={p.images[0]}
          alt={p.title || "Produit"}
          onContextMenu={e => e.preventDefault()}
          draggable="false"
        />
        {p.secteur && <span className="prod-card-badge">{p.secteur}</span>}
        <div className="prod-card-hover">
          <span>Voir détail →</span>
        </div>
      </div>
      <div className="prod-card-info">
        <h3>{p.title || "Sans titre"}</h3>
        <span className="prod-card-cat">{p.categorie}</span>
      </div>
    </Link>
  );
}

function ListProducts() {
  const { cate } = useParams();
  const [cat, setCat]       = useState(cate || "");
  const [search, setSearch] = useState("");

  useEffect(() => { setCat(cate || ""); }, [cate]);

  const filtered = useMemo(() => {
    let list = Products;
    if (cat)    list = list.filter(p => p.categorie?.toLowerCase() === cat);
    if (search) list = list.filter(p =>
      p.title?.toLowerCase().includes(search.toLowerCase()) ||
      p.secteur?.toLowerCase().includes(search.toLowerCase())
    );
    return list;
  }, [cat, search]);

  return (
    <div className="catalog-page">

      {/* ── Top bar ── */}
      <div className="catalog-topbar">
        <div className="catalog-topbar-left">
          <p className="catalog-eyebrow">Notre catalogue</p>
          <h1 className="catalog-title">Nos <span>Produits</span></h1>
        </div>
        <div className="catalog-searchbox">
          <i className="icon-magnifier" />
          <input
            type="text"
            placeholder="Rechercher…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button onClick={() => setSearch("")}>✕</button>
          )}
        </div>
      </div>

      {/* ── Filter pills ── */}
      <div className="catalog-filters">
        {CATS.map(c => (
          <button
            key={c.key}
            className={`catalog-pill ${cat === c.key ? "catalog-pill--on" : ""}`}
            onClick={() => setCat(c.key)}
          >
            {c.label}
            <span className="catalog-pill-count">
              {c.key
                ? Products.filter(p => p.categorie?.toLowerCase() === c.key).length
                : Products.length}
            </span>
          </button>
        ))}
      </div>

      {/* ── Results info ── */}
      <div className="catalog-meta">
        <span>{filtered.length} produit{filtered.length !== 1 ? "s" : ""}</span>
        {(cat || search) && (
          <button className="catalog-reset" onClick={() => { setCat(""); setSearch(""); }}>
            ✕ Réinitialiser
          </button>
        )}
      </div>

      {/* ── Grid ── */}
      {filtered.length > 0 ? (
        <div className="catalog-grid">
          {filtered.map(p => <ProdCard key={p.id} p={p} />)}
        </div>
      ) : (
        <div className="catalog-empty">
          <p>😕</p>
          <h3>Aucun produit trouvé</h3>
          <button className="catalog-reset" onClick={() => { setCat(""); setSearch(""); }}>
            Voir tous les produits
          </button>
        </div>
      )}

    </div>
  );
}

export default ListProducts;
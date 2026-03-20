import  { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Products from "../../products.json";
import "./ProductDisplay.css";

const contactList = [
  { icon: "icon-phone",          label: "Téléphone",  link: "tel:+212661946011",                                        value: "+212 661 946 011",         color: "#17a34a" },
  { icon: "icon-envelope",       label: "Email",      link: "mailto:cip.industrie@gmail.com",                           value: "cip.industrie@gmail.com",  color: "var(--blue-clair)" },
  { icon: "icon-whatsapp",       label: "WhatsApp",   link: "https://wa.me/212661946011",                               value: "+212 661 946 011",         color: "#25d366" },
  { icon: "icon-social-linkedin",label: "LinkedIn",   link: "https://www.linkedin.com/in/abdellah-assad-767970181/",    value: "Chaudro Industrie Plast",  color: "#0a66c2" },
];

function Product() {
  const { id } = useParams();
  const product = Products.find(p => p.id === parseInt(id));
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return (
    <div className="pd-not-found">
      <i className="icon-ghost" />
      <h2>Produit introuvable</h2>
      <Link to="/list_products" className="pd-back-btn">← Retour aux produits</Link>
    </div>
  );

  // Related products (same category, excluding current)
  const related = Products
    .filter(p => p.categorie === product.categorie && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pd-page">

      {/* ── Breadcrumb ── */}
      <nav className="pd-breadcrumb">
        <Link to="/">Accueil</Link>
        <i className="icon-arrow-right" />
        <Link to="/list_products">Produits</Link>
        <i className="icon-arrow-right" />
        <Link to={`/list_products/${product.categorie}`}>{product.categorie}</Link>
        <i className="icon-arrow-right" />
        <span>{product.title || "Produit"}</span>
      </nav>

      <div className="pd-layout">

        {/* ── Left: images ── */}
        <div className="pd-gallery">
          <Swiper
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Navigation, Thumbs, FreeMode]}
            className="pd-main-swiper"
            onSlideChange={s => setActiveImg(s.activeIndex)}
          >
            {product.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`${product.title} — image ${i + 1}`}
                  onContextMenu={e => e.preventDefault()}
                  draggable="false"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {product.images.length > 1 && (
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={8}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Thumbs]}
              className="pd-thumb-swiper"
            >
              {product.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`thumb ${i + 1}`}
                    className={activeImg === i ? "active" : ""}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* ── Right: info ── */}
        <div className="pd-info">
          {product.secteur && (
            <span className="pd-badge">{product.secteur}</span>
          )}
          <h1>{product.title || "Produit sans titre"}</h1>

          <div className="pd-divider" />

          <p className="pd-desc">{product.desc}</p>

          <div className="pd-meta">
            <div className="pd-meta-item">
              <span className="pd-meta-label">Catégorie</span>
              <Link to={`/list_products/${product.categorie}`} className="pd-meta-value link">
                {product.categorie}
              </Link>
            </div>
            {product.secteur && (
              <div className="pd-meta-item">
                <span className="pd-meta-label">Secteur</span>
                <span className="pd-meta-value">{product.secteur}</span>
              </div>
            )}
          </div>

          <div className="pd-divider" />

          {/* Contact options */}
          <p className="pd-contact-title">Intéressé ? Contactez-nous</p>
          <div className="pd-contacts">
            {contactList.map(c => (
              <a
                key={c.label}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-contact-card"
                style={{ "--cc": c.color }}
              >
                <i className={c.icon} />
                <span className="pd-contact-label">{c.label}</span>
                <span className="pd-contact-value">{c.value}</span>
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/212661946011"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-cta"
          >
            <i className="icon-whatsapp" /> Demander un devis
          </a>
        </div>
      </div>

      {/* ── Related products ── */}
      {related.length > 0 && (
        <section className="pd-related">
          <h2>Produits similaires</h2>
          <div className="pd-related-grid">
            {related.map(p => (
              <Link key={p.id} to={`/products/${p.id}`} className="pd-related-card">
                <img src={p.images[0]} alt={p.title} />
                <span>{p.title || "Produit"}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Product;
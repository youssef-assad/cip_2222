/* eslint-disable react/prop-types */
import GoogleMap from "../../components/GoogleMap";
import Form from "./Form";
import "./contact.css";
import useIntersectionObserver from "../../components/useInterSection";

const contactList = [
  {
    icon: "icon-location",
    label: "Adresse",
    value: "Had Soualem, Maroc",
    link: "https://maps.google.com/?q=Had+Soualem",
    external: true,
    color: "var(--red)",
  },
  {
    icon: "icon-phone",
    label: "Téléphone",
    value: "+212 661 946 011",
    link: "tel:+212661946011",
    color: "#17a34a",
  },
  {
    icon: "icon-envelope",
    label: "Email",
    value: "cip.industrie@gmail.com",
    link: "mailto:cip.industrie@gmail.com",
    color: "var(--blue-clair)",
  },
  {
    icon: "icon-globe",
    label: "Site web",
    value: "www.cip.ma",
    link: "https://cip.ma",
    external: true,
    color: "#9333ea",
  },
];

function ContactCard({ icon, label, value, link, external, color, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  return (
    <a
      ref={ref}
      href={link}
      className={`contact-card ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="contact-card-icon" style={{ background: `${color}18`, color }}>
        <i className={icon} />
      </div>
      <div className="contact-card-text">
        <span className="contact-card-label">{label}</span>
        <span className="contact-card-value">{value}</span>
      </div>
      <i className="icon-arrow-right contact-card-arrow" />
    </a>
  );
}

function Contact() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [formRef, formVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="contact-page">

      {/* ── Hero banner ── */}
      <section className="contact-hero">
        <div className="contact-hero-bg" aria-hidden="true" />
        <div ref={headerRef} className={`contact-hero-content ${headerVisible ? "visible" : ""}`}>
          <span className="contact-eyebrow">Contactez-nous</span>
          <h1>Parlons de <span>votre projet</span></h1>
          <p>Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans vos projets industriels.</p>
        </div>
      </section>

      {/* ── Cards + Map ── */}
      <section className="contact-main">
        <div className="contact-cards">
          {contactList.map((c, i) => (
            <ContactCard key={c.label} {...c} index={i} />
          ))}
        </div>

        <div className="contact-map-wrap">
          <div className="map-label">
            <i className="icon-location" /> Had Soualem, Maroc
          </div>
          <GoogleMap />
        </div>
      </section>

      {/* ── Form ── */}
      <section
        ref={formRef}
        className={`contact-form-section ${formVisible ? "visible" : ""}`}
      >
        <div className="contact-form-left">
          <span className="contact-eyebrow">Formulaire de contact</span>
          <h2>Prenez contact<br />avec nous</h2>
          <p>Remplissez le formulaire et notre équipe vous répondra dans les plus brefs délais.</p>

          <div className="form-perks">
            {[
              { icon: "icon-clock",     text: "Réponse sous 24h" },
              { icon: "icon-check",     text: "Devis gratuit" },
              { icon: "icon-star",      text: "Service personnalisé" },
            ].map(p => (
              <div key={p.text} className="form-perk">
                <i className={p.icon} />
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-right">
          <Form />
        </div>
      </section>

    </div>
  );
}

export default Contact;
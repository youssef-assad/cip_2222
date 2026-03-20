/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./footer.css";

const sectors = [
  { label: "Plasturgie", to: "/" },
  { label: "Industrie", to: "/" },
  { label: "Mobilier médical", to: "/" },
  { label: "Agro-Alimentaire", to: "/" },
  { label: "Décoration Int/Ext", to: "/" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Products", to: "/list_products" },
];

const socialLinks = [
  { icon: "icon-social-facebook", to: "https://web.facebook.com/abdellah.assad.5", label: "Facebook" },
  { icon: "icon-envelope", to: "mailto:cip.industrie@gmail.com", label: "Email" },
  { icon: "icon-whatsapp", to: "https://wa.me/212661946011", label: "WhatsApp" },
  { icon: "icon-social-linkedin", to: "https://www.linkedin.com/in/abdellah-assad-767970181/", label: "LinkedIn" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* About */}
        <div className="footer-col footer-about">
          <h6>About</h6>
          <p>
            <strong>cip.ma</strong> —{" "}
            <em>
              <span className="brand-name">
                Chaudro <span className="industrie">Industrie</span> Plast
              </span>
            </em>
            , s'engage à offrir des produits de qualité supérieure, à des prix
            raisonnables, avec un service impeccable et une réputation de haute
            estime.
          </p>
        </div>

        {/* Sectors */}
        <div className="footer-col">
          <h6>Secteurs</h6>
          <ul className="footer-links">
            {sectors.map((s) => (
              <li key={s.label}>
                <Link to={s.to}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} All Rights Reserved —{" "}
          <a href="https://www.cip.ma">CIP</a>
        </p>

        <ul className="social-icons">
          {socialLinks.map((s) => (
            <li key={s.label}>
              <Link to={s.to} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <i className={s.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
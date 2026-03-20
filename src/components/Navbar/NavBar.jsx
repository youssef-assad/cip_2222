import  { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo_cip from "../../../public/logos/cip_logo_rm.png";
import "./navbar.css";

function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = prev; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { url: "/", page: "Home" },
    { url: "/about", page: "About" },
    { url: "/list_products", page: "Products" },
    { url: "/contact", page: "Contact" },
  ];

  const isActive = (url) =>
    url === "/" ? location.pathname === "/" : location.pathname.startsWith(url);

  return (
    <>
      <header className={`navbar ${isSticky ? "navbar--sticky" : ""}`}>
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img
            src={logo_cip}
            alt="CIP Logo"
            width={90}
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="navbar__links" aria-label="Main navigation">
          {menuItems.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className={`navbar__link ${isActive(item.url) ? "navbar__link--active" : ""}`}
            >
              {item.page}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button (mobile only) */}
        <button
          className={`navbar__hamburger ${isMenuOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <aside className={`navbar__drawer ${isMenuOpen ? "navbar__drawer--open" : ""}`} aria-label="Mobile navigation">
        <div className="navbar__drawer-header">
          <img src={logo_cip} alt="CIP Logo" width={70} />
          <button
            className="navbar__drawer-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav>
          {menuItems.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className={`navbar__drawer-link ${isActive(item.url) ? "navbar__drawer-link--active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.page}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default NavBar;
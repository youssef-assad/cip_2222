import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              cip.ma{" "}
              <i>
                <span>
                  Chaudro <span className="industrie" >Industrie</span> Plast
                </span>
                , s'engage solennellement à offrir des produits de qualité
                supérieure, à des prix raisonnables, avec un service impeccable
                et une réputation de haute estime. Nous remercions nos amis de
                tous horizons pour leur soutien et leur affection.{" "}
              </i>
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Secteurs</h6>
            <ul className="footer-links">
              <li>
                <Link to="http://scanfcode.com/category/front-end-development/">
                  PLASTURGIE
                </Link>
              </li>
              <li>
                <Link to="http://scanfcode.com/category/back-end-development/">
                  INDUSTRIE
                </Link>
              </li>
              <li>
                <Link to="http://scanfcode.com/category/java-programming-language/">
                  Mobilier médical
                </Link>
              </li>
              <li>
                <Link to="http://scanfcode.com/category/android/">
                  Agro-Alimentaire
                </Link>
              </li>
              <li>
                <Link to="http://scanfcode.com/category/templates/">
                  DÉCORATION INTER/EXTER
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="http://scanfcode.com/sitemap/">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2024 All Rights Reserved by
              <a style={{ textDecoration: "none" }} href="www.cip.ma">
                {" "}
                Cip
              </a>
              .
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <Link
                  to="https://web.facebook.com/abdellah.assad.5"
                  target="_blank"
                >
                  <i className="icon-social-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="mailto:cip.industrie@gmail.com" target="_blank">
                  <i className="icon-envelope"></i>
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/212661946011" target="_blank">
                  <i className="icon-whatsapp"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/abdellah-assad-767970181/"
                  target="_blank"
                >
                  <i className="icon-social-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

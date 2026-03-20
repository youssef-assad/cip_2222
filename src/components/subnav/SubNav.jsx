import React from "react";
import "./subNav.css";

function SubNav() {
  return (
    <div className="custom-sub-navbar">
      <ul className="custom-contact-nav">
        <li>
          <a href="tel:+212661946011">
            <span>
              <i className="icon-phone" /> Tel
            </span>
            +212 661 946 011
          </a>
        </li>
        <li>
          <a href="https://wa.me/212661946011" target="_blank" rel="noopener noreferrer">
            <span>
              <i className="icon-whatsapp" /> WhatsApp
            </span>
            +212 661946011
          </a>
        </li>
        <li>
          <a href="mailto:cip.industrie@gmail.com">
            <span>
              <i className="icon-envelope" /> Email
            </span>
            cip.industrie@gmail.com
          </a>
        </li>
      </ul>
      <div className="all-icons">
        <a href="https://web.facebook.com/abdellah.assad.5" target="_blank" rel="noopener noreferrer">
          <span className="icon-social-facebook" />
        </a>
        <a href="https://www.linkedin.com/in/abdellah-assad-767970181/" target="_blank" rel="noopener noreferrer">
          <span className="icon-social-linkedin" />
        </a>
        <a href="mailto:cip.industrie@gmail.com">
          <span className="icon-mail" />
        </a>
      </div>
    </div>
  );
}

export default SubNav;

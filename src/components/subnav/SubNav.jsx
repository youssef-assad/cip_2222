import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./subNav.css";

const contactItems = [
  { href: "tel:+212661946011",              Icon: FaPhone,     label: "Tel",       value: "+212 661 946 011"        },
  { href: "https://wa.me/212661946011",     Icon: FaWhatsapp,  label: "WhatsApp",  value: "+212 661 946 011", external: true },
  { href: "mailto:cip.industrie@gmail.com", Icon: FaEnvelope,  label: "Email",     value: "cip.industrie@gmail.com" },
];

const socialItems = [
  { href: "https://web.facebook.com/abdellah.assad.5",             Icon: FaFacebook, label: "Facebook", external: true },
  { href: "https://www.linkedin.com/in/abdellah-assad-767970181/", Icon: FaLinkedin, label: "LinkedIn", external: true },
  { href: "mailto:cip.industrie@gmail.com",                        Icon: FaEnvelope, label: "Email"                   },
];

function SubNav() {
  return (
    <div className="custom-sub-navbar">
      <ul className="custom-contact-nav">
        {contactItems.map(({ href, Icon, label, value, external }) => (
          <li key={label}>
            <a href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
              <span><Icon size={13} /> {label}</span>
              {value}
            </a>
          </li>
        ))}
      </ul>

      <div className="all-icons">
        {socialItems.map(({ href, Icon, label, external }) => (
          <a key={label} href={href} aria-label={label}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SubNav;
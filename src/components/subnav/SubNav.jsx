import "./subNav.css";

const contactItems = [
  { href: "tel:+212661946011",              icon: "icon-phone",          label: "Tel",       value: "+212 661 946 011"      },
  { href: "https://wa.me/212661946011",     icon: "icon-whatsapp",       label: "WhatsApp",  value: "+212 661 946 011", external: true },
  { href: "mailto:cip.industrie@gmail.com", icon: "icon-envelope",       label: "Email",     value: "cip.industrie@gmail.com" },
];

const socialItems = [
  { href: "https://web.facebook.com/abdellah.assad.5",              icon: "icon-social-facebook",  label: "Facebook",  external: true },
  { href: "https://www.linkedin.com/in/abdellah-assad-767970181/",  icon: "icon-social-linkedin",  label: "LinkedIn",  external: true },
  { href: "mailto:cip.industrie@gmail.com",                         icon: "icon-mail",             label: "Email" },
];

function SubNav() {
  return (
    <div className="custom-sub-navbar">
      <ul className="custom-contact-nav">
        {contactItems.map(({ href, icon, label, value, external }) => (
          <li key={label}>
            <a href={href} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
              <span><i className={icon} /> {label}</span>
              {value}
            </a>
          </li>
        ))}
      </ul>

      <div className="all-icons">
        {socialItems.map(({ href, icon, label, external }) => (
          <a key={label} href={href} aria-label={label}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
            <span className={icon} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SubNav;
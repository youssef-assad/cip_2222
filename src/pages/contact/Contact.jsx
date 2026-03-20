import React from "react";
import GoogleMap from "../../components/GoogleMap";
import "./contact.css";
import Form from "./Form";
import { Link } from "react-router-dom";

const contactList = [
  {
    iconClassName: "icon-location",
    title: "Office Address",
    link:"",desc: "Had Soualem",
  },
  {
    iconClassName: "icon-phone",
    title: "Phone Number",
    link:"tel:+212661946011"
    ,desc: "+212 661946011",
  },
  {
    iconClassName: "icon-envelope",
    title: "Send Email",
    link:"mailto:cip.industrie@gmail.com"
    ,desc: "cip.industrie@gmail.com",
  },
  {
    iconClassName: "icon-globe",
    title: "Our Website",
    link:"https://cip.ma",desc: "www.cip.ma",
  },
];

function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-section">
        <div className="contact-header">
          <h3 className="contact-subtitle">Contactez-nous</h3>
          <h2 className="contact-title">
            Nous sommes toujours impatients d'avoir de vos nouvelles !
          </h2>
        </div>
        <div className="contact-content">
          <div className="map-container">
            <GoogleMap />
          </div>
          <div className="contact-info">
            {contactList.map((contact, index) => (
              <div key={index} className="contact-info-item">

                <i className={contact.iconClassName}></i>
                <div className="content-desc" >
                <h4>{contact.title}</h4>
                <Link to={contact.link} target="_blank" style={{textDecoration:"none"}} >
                  <p>{contact.desc}</p>
                </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <h3 className="contact-form-title">Prenez contact avec nous</h3>
        <h2 className="contact-form-subtitle">
          Remplissez le formulaire ci-dessous afin que nous puissions mieux vous
          connaître et mieux connaître vos besoins.
        </h2>
        <Form/>
      </div>
    </section>
  );
}

export default Contact;

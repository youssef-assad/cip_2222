import React from "react";
import "./secteur.css"; // Ensure you have the secteur.css file
import { Link } from "react-router-dom";

function Secteur() {
  const secteurs = [
    { name: "chaudro & tuyautrie inox-acier", link: "/list_products/chaudro_tuyautrie" },
    { name: "éléctromécanique & automatisme", link: "/list_products/electro" },
    { name: "Fabrication de machine industriel", link: "/list_products/fabrication_machine" },
    { name: "Industrie medical", link: "/list_products/medical" },
    { name: "Agro alimentaire", link: "/list_products/agro" },
    { name: "Industrie plastique", link: "/list_products/plastique" },
    { name: "Décoration", link: "/list_products/decoration" },
  ];

  return (
    <section className="secteur-section">
      <div className="secteur-content">
        <h2>Secteurs Principaux</h2>
        <p>
          Our hot selling products include stainless steel sheet/tube/coil,
          carbon steel sheet/tube/coil, galvanized steel sheet/tube/coil
          hastelloy plates/tubes, copper plate, aluminum plate, round steel,
          profiles and pipe fittings, etc. We will provide you with the shortest
          lead time on the basis of quality and quantity. "Integrity" is the
          only principle of the company, and "win-win" is the direction pursued.
        </p>

        <div className="button-group">
          {secteurs.map((button, index) => (
            <Link to={button.link} key={index} className="custom-button">
              {button.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="image-grid">
        <div className="image-item">
          <img src="chemin/vers/image1.jpg" alt="Image 1" />
          <h3>Titre de l'image 1</h3>
        </div>
        <div className="image-item">
          <img src="chemin/vers/image1.jpg" alt="Image 1" />
          <h3>Titre de l'image 1</h3>
        </div>      <div className="image-item">
          <img src="chemin/vers/image1.jpg" alt="Image 1" />
          <h3>Titre de l'image 1</h3>
        </div>      <div className="image-item">
          <img src="chemin/vers/image1.jpg" alt="Image 1" />
          <h3>Titre de l'image 1</h3>
        </div>
      </div>
    </section>
  );
}

export default Secteur;

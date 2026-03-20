import React from 'react';
import './Sectors.css';

const Sectors = () => {
  return (
    <section className="sectors">
      <h2>Nos Secteurs d'Activité</h2>
      <div className="sector">
        <h3>Mobilier Médical</h3>
        <ul>
          <li>Lavabo chirurgical</li>
          <li>Gaines tête de lit H/V</li>
          <li>Tables tournantes d'accumulation</li>
          <li>Tables de travail et de rinçage avec lavabo</li>
          <li>Armoires et casiers</li>
          <li>Chariots de soin avec tiroirs</li>
          <li>Revêtement mural</li>
        </ul>
      </div>
      <div className="sector">
        <h3>Agro-Alimentaire</h3>
        <ul>
          <li>Production laitière</li>
          <li>Fabrication des pasteurisateurs</li>
          <li>Fabrication des bacs à lait</li>
          <li>Plate-forme CIP</li>
          <li>Cuves pour boissons et jus</li>
          <li>Charcuterie</li>
          <li>Huilerie</li>
          <li>Chocolaterie</li>
          <li>Pâtisserie</li>
          <li>Transformation de poisson</li>
        </ul>
      </div>
      <div className="sector">
        <h3>Décoration Intérieure/Extérieure</h3>
        <ul>
          <li>Tables à manger</li>
          <li>Tables gigognes</li>
          <li>Tables basses</li>
          <li>Claustras</li>
          <li>Consoles</li>
          <li>Miroirs bibliothèque</li>
          <li>Garde-corps</li>
        </ul>
      </div>
    </section>
  );
};

export default Sectors;

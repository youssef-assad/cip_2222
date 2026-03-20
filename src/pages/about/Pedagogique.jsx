import React from "react";
import { philosophy } from "../../assets/data";
const Philosophy = () => {
  return (
    <section className="philosophy">
      <h2>Notre Philosophie d'Entreprise</h2>
      <p>La philosophie de notre entreprise repose sur le principe suivant :</p>
      <ul className="list-philosophy">
        {philosophy.map((p, i) => (
          <li key={i}>
            <span className="icon-checkmark" />
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Philosophy;

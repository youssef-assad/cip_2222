import React from "react";
import { forts } from "../../assets/data";

const Strengths = () => {
  return (
    <section className="strengths">
      <h2 className="strengths-title" >Nos Points Forts</h2>
      <ul className="list-group list-group-flush">
        {forts.map((f, i) => (
          <li
            className={`list-group-item delay-${i + 1}`} // dynamically add delay class
            key={i}
          >
            {f}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Strengths;

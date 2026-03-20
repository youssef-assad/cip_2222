import { philosophy } from "../../assets/data";
import useIntersectionObserver from "../../components/useInterSection";

function Philosophy() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <div className="philosophy-inner" ref={ref}>
      <div className={`phil-header ${isVisible ? "visible" : ""}`}>
        <span className="section-eyebrow" style={{ color: "var(--blue-clair)" }}>
          Nos valeurs
        </span>
        <h2>Notre Philosophie d'Entreprise</h2>
        <p>La philosophie de notre entreprise repose sur le principe suivant :</p>
      </div>

      <ul className="phil-list">
        {philosophy.map((p, i) => (
          <li
            key={i}
            className={`phil-item ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="phil-check">
              <i className="icon-checkmark" />
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Philosophy;
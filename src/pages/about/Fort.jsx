import { forts } from "../../assets/data";
import useIntersectionObserver from "../../components/useInterSection";

function Strengths() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="strengths-section" ref={ref}>
      <div className={`strengths-header ${isVisible ? "visible" : ""}`}>
        <span className="section-eyebrow">Ce qui nous distingue</span>
        <h2>Nos Points Forts</h2>
      </div>

      <div className="strengths-grid">
        {forts.map((f, i) => (
          <div
            key={i}
            className={`strength-card ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="strength-number">0{i + 1}</span>
            <div className="strength-pulse" />
            <p>{f}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Strengths;
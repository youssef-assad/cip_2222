import useIntersectionObserver from "../../components/useInterSection";
import { FaStar, FaTag, FaUsers, FaMedal } from "react-icons/fa";

const reasons = [
  { Icon: FaStar,         title: "Qualité supérieure",    desc: "Des produits fabriqués selon les normes les plus strictes de l'industrie." },
  { Icon: FaTag,          title: "Prix raisonnables",     desc: "Le meilleur rapport qualité-prix sans compromis sur l'excellence." },
  { Icon: FaUsers,       title: "Service impeccable",    desc: "Une équipe dédiée à votre satisfaction à chaque étape du projet." },
  { Icon: FaMedal,        title: "Réputation solide",     desc: "Plus de 15 ans de confiance et de partenariats durables au Maroc." },
];

function WhyChooseUs() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="why-section" ref={ref}>
      <div className={`why-header ${isVisible ? "visible" : ""}`}>
        <span className="section-eyebrow">Nos engagements</span>
        <h2>Pourquoi <span>Nous Choisir</span></h2>
        <p className="why-intro">
          Chaudro Industrie Plast s'engage solennellement à offrir des produits
          de qualité supérieure, à des prix raisonnables, avec un service
          impeccable et une réputation de haute estime.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map(({ Icon, title, desc }, i) => (
          <div
            key={title}
            className={`why-card ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
              <div className="why-icon">
              <Icon size={22} />
            </div>
            <div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
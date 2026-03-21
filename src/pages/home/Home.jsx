/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  FaFlask, FaHeart, FaCog, FaWrench, FaBolt, FaTh,
  FaStar, FaMedal, FaUsers, FaClock,
  FaWhatsapp, FaArrowRight,
} from "react-icons/fa";
import Banner from "../../components/banner/Banner";
import "./home.css";
import useIntersectionObserver from "../../components/useInterSection";
import img1 from "../../assets/secteurs/img1.jpg";
import img2 from "../../assets/secteurs/img2.jpg";
import img3 from "../../assets/secteurs/img3.jpg";
import img4 from "../../assets/secteurs/img4.jpg";
import img5 from "../../assets/secteurs/img5.jpg";
import img6 from "../../assets/secteurs/img6.jpg";

/* ── Data ─────────────────────────────────────────────── */
const sectors = [
  { Icon: FaFlask,  name: "Agro-alimentaire",           link: "/list_products/agro",        img: img1 },
  { Icon: FaHeart,  name: "Mobilier médical",           link: "/list_products/medical",     img: img2 },
  { Icon: FaCog,    name: "Plasturgie",                 link: "/list_products/plasturgie",  img: img3 },
  { Icon: FaWrench, name: "Chaudronnerie & Tuyauterie", link: "/list_products/industrie",   img: img4 },
  { Icon: FaBolt,   name: "Électromécanique",           link: "/list_products/electro",     img: img5 },
  { Icon: FaTh,     name: "Décoration Int/Ext",         link: "/list_products/decoration",  img: img6 },
];

const stats = [
  { value: "15+",  label: "Années d'expérience" },
  { value: "200+", label: "Projets réalisés"     },
  { value: "50+",  label: "Clients satisfaits"   },
  { value: "6",    label: "Secteurs d'activité"  },
];

const process = [
  { num: "01", title: "Consultation", desc: "Nous analysons vos besoins et définissons ensemble les spécifications du projet." },
  { num: "02", title: "Conception",   desc: "Nos ingénieurs conçoivent une solution sur mesure adaptée à votre secteur." },
  { num: "03", title: "Fabrication",  desc: "Production rigoureuse dans notre atelier avec des matériaux de haute qualité." },
  { num: "04", title: "Livraison",    desc: "Installation sur site, tests de conformité et suivi après-vente." },
];

const whyCards = [
  { Icon: FaStar,   title: "Qualité certifiée",  desc: "Matériaux premium et contrôle qualité rigoureux à chaque étape." },
  { Icon: FaMedal,  title: "Expertise reconnue", desc: "15+ ans de projets livrés dans 6 secteurs industriels." },
  { Icon: FaUsers,  title: "Équipe dédiée",      desc: "Des ingénieurs et techniciens passionnés à votre service." },
  { Icon: FaClock,  title: "Délais respectés",   desc: "Engagement ferme sur les délais de livraison et d'installation." },
];

const testimonials = [
  { name: "Ahmed Benali",  role: "Directeur industriel", text: "CIP a transformé notre ligne de production avec des équipements fiables et un service irréprochable." },
  { name: "Fatima Zahra",  role: "Responsable médical",  text: "Le mobilier médical livré dépasse nos attentes en termes de qualité et de finition." },
  { name: "Karim Alaoui",  role: "Chef de projet agro",  text: "Réactivité, professionnalisme et expertise — CIP est un partenaire de confiance depuis 5 ans." },
];

/* ── Sub-components ───────────────────────────────────── */
function SectorCard({ Icon, name, link, img, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });
  return (
    <Link
      ref={ref}
      to={link}
      className={`sector-card ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="sector-card-img">
        <img src={img} alt={name} draggable="false" onContextMenu={e => e.preventDefault()} />
        <div className="sector-card-overlay" />
      </div>
      <div className="sector-card-body">
        <div className="sector-icon"><Icon size={18} /></div>
        <span>{name}</span>
        <FaArrowRight size={13} className="sector-arrow" />
      </div>
    </Link>
  );
}

function StatCounter({ value, label, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  return (
    <div ref={ref} className={`home-stat ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}>
      <span className="home-stat-value">{value}</span>
      <span className="home-stat-label">{label}</span>
    </div>
  );
}

function ProcessStep({ num, title, desc, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  return (
    <div ref={ref} className={`process-step ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}>
      <div className="process-num">{num}</div>
      <div className="process-line" />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, role, text, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  return (
    <div ref={ref} className={`testimonial-card ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="testimonial-quote">"</div>
      <p>"{text}"</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">
          {name.split(" ").map(w => w[0]).join("").slice(0, 2)}
        </div>
        <div>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */
function Home() {
  const [sectorRef,  sectorVisible]  = useIntersectionObserver({ threshold: 0.05 });
  const [processRef, processVisible] = useIntersectionObserver({ threshold: 0.05 });
  const [ctaRef,     ctaVisible]     = useIntersectionObserver({ threshold: 0.2  });

  return (
    <div className="home-page">

      <Banner />

      {/* Stats */}
      <section className="home-stats">
        {stats.map((s, i) => <StatCounter key={s.label} {...s} index={i} />)}
      </section>

      {/* Sectors */}
      <section className="home-sectors">
        <div ref={sectorRef} className={`home-section-header ${sectorVisible ? "visible" : ""}`}>
          <span className="home-eyebrow">Ce que nous faisons</span>
          <h2>Nos Secteurs <span>d'Activité</span></h2>
          <p>De la conception à la livraison, CIP intervient dans 6 secteurs industriels clés.</p>
        </div>
        <div className="sectors-grid">
          {sectors.map((s, i) => <SectorCard key={s.name} {...s} index={i} />)}
        </div>
        <div className="sectors-cta">
          <Link to="/list_products" className="home-btn-primary">
            Voir tous nos produits <FaArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="home-process">
        <div ref={processRef} className={`home-section-header ${processVisible ? "visible" : ""}`}>
          <span className="home-eyebrow">Comment ça marche</span>
          <h2>Notre <span>Processus</span></h2>
          <p>Un accompagnement complet de la consultation à la livraison.</p>
        </div>
        <div className="process-grid">
          {process.map((p, i) => <ProcessStep key={p.num} {...p} index={i} />)}
        </div>
      </section>

      {/* Why us */}
      <section className="home-why">
        <div className="home-why-content">
          <span className="home-eyebrow" style={{ color: "var(--blue-clair)" }}>Pourquoi CIP ?</span>
          <h2>Plus de 15 ans d'expertise<br />industrielle au Maroc</h2>
          <p>Nous combinons savoir-faire artisanal et technologie moderne pour livrer des solutions industrielles durables, précises et adaptées à chaque client.</p>
          <Link to="/about" className="home-btn-outline">Découvrir notre histoire</Link>
        </div>
        <div className="home-why-grid">
          {whyCards.map(({ Icon, title, desc }) => (
            <div key={title} className="why-mini-card">
              <Icon size={20} />
              <div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-testimonials">
        <div className="home-section-header visible">
          <span className="home-eyebrow">Ils nous font confiance</span>
          <h2>Ce que disent <span>nos clients</span></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => <TestimonialCard key={t.name} {...t} index={i} />)}
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className={`home-cta ${ctaVisible ? "visible" : ""}`}>
        <div className="home-cta-content">
          <h2>Prêt à démarrer votre projet ?</h2>
          <p>Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.</p>
          <div className="home-cta-actions">
            <a href="https://wa.me/212661946011" target="_blank" rel="noopener noreferrer" className="home-btn-whatsapp">
              <FaWhatsapp size={18} /> WhatsApp
            </a>
            <Link to="/contact" className="home-btn-outline-white">
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
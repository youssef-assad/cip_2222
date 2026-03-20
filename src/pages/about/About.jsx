import { useRef } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import "./about.css";
import image from "../../../public/logos/cip_logo.jpg";
import play from "../../assets/animations/play1.json";
import WhyChooseUs from "./WhyChoose";
import Philosophy from "./Pedagogique";
import Strengths from "./Fort";
import useIntersectionObserver from "../../components/useInterSection";

const CV = "https://drive.google.com/file/d/1Qndg-EHbqrkLkn66wmQFIfpxHWRUiL_u/view?usp=sharing";

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "200+", label: "Projets réalisés" },
  { value: "50+", label: "Clients satisfaits" },
  { value: "6",   label: "Secteurs d'activité" },
];

const services = [
  { icon: "icon-wrench",     title: "Chaudronnerie",      desc: "Fabrication de cuves, citernes et équipements sur mesure." },
  { icon: "icon-bolt",       title: "Électromécanique",   desc: "Installation, maintenance et réparation de systèmes électromécaniques." },
  { icon: "icon-health",     title: "Mobilier médical",   desc: "Conception de mobilier et équipements pour le secteur médical." },
  { icon: "icon-settings",   title: "Plasturgie",         desc: "Machines d'injection, mélangeurs et systèmes de convoyeurs." },
  { icon: "icon-leaf",       title: "Agro-alimentaire",   desc: "Équipements conformes aux normes de l'industrie alimentaire." },
  { icon: "icon-home",       title: "Décoration",         desc: "Solutions décoratives intérieures et extérieures de qualité." },
];

function StatCard({ value, label, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`stat-card ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function ServiceCard({ icon, title, desc, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={`service-card ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="service-icon-wrap">
        <i className={icon} />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function About() {
  const lottieRef = useRef();
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [storyRef, storyVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="hero-bg-text" aria-hidden="true">CIP</div>
        <div
          ref={heroRef}
          className={`hero-content ${heroVisible ? "visible" : ""}`}
        >
          <p className="hero-eyebrow">Depuis plus de 15 ans</p>
          <h1>
            CHAUDRO <span>INDUSTRIE</span> PLAST
          </h1>
          <p className="hero-sub">
            Votre partenaire industriel de confiance au Maroc — innovation,
            précision et excellence à chaque projet.
          </p>
          <div className="hero-actions">
            <a href={CV} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <i className="icon-picture_as_pdf" /> Voir catalogue
            </a>
            <Link to="/contact" className="btn-outline">Nous contacter</Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} index={i} />
        ))}
      </section>

      {/* ── Story ── */}
      <section className="story-section">
        <div
          ref={storyRef}
          className={`story-image-wrap ${storyVisible ? "visible" : ""}`}
        >
          <img
            src={image}
            alt="CIP Logo"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
          <Lottie
            lottieRef={lottieRef}
            className="lottie-play"
            onDOMLoaded={() => lottieRef.current.setSpeed(1)}
            animationData={play}
          />
          <div className="story-badge">
            <span className="badge-number">15+</span>
            <span className="badge-text">ans d'expertise</span>
          </div>
        </div>

        <div className={`story-text ${storyVisible ? "visible" : ""}`}>
          <span className="section-eyebrow">Notre histoire</span>
          <h2>À propos de nous</h2>
          <p>
            La société <strong>Chaudro Industrie Plast (CIP)</strong> est
            spécialisée en chaudronnerie, électromécanique, maintenance
            industrielle et production de machines. Nous couvrons un large
            éventail d'activités : conception de mobilier médical, équipements
            pharmaceutiques et industrie des plastiques.
          </p>
          <p>
            Dans le domaine de la plasturgie, nous assurons l'installation et le
            renouvellement des machines d'injection ainsi que la fabrication de
            mélangeurs verticaux et horizontaux.
          </p>
          <p>
            Forts de notre engagement envers l'innovation et la satisfaction
            client, nous réalisons également tous types de travaux de
            chaudronnerie industrielle, la fabrication de cuves et citernes.
          </p>

          <div className="story-tags">
            {["ISO Qualité", "Sur mesure", "Made in Morocco", "Innovation"].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services-section">
        <div className="section-header">
          <span className="section-eyebrow">Ce que nous faisons</span>
          <h2>Nos secteurs d'activité</h2>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* ── Why us / Philosophy / Strengths ── */}
      <section className="extra-sections">
        <WhyChooseUs />
      </section>
      <section className="section-philosophy">
        <Philosophy />
      </section>
      <Strengths />
    </div>
  );
}

export default About;
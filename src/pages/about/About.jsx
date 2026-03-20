import React, { useRef } from "react";
import "./about.css";
import image from "../../../public/logos/cip_logo.jpg";
import play from "../../assets/animations/play1.json";
import Lottie from "lottie-react";
import WhyChooseUs from "./WhyChoose";
import Philosophy from "./Pedagogique";
import Strengths from "./Fort";
import useIntersectionObserver from "../../components/useInterSection";

const CV = "https://drive.google.com/file/d/1Qndg-EHbqrkLkn66wmQFIfpxHWRUiL_u/view?usp=sharing";

function About() {
  const lottieRef = useRef();
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });
  const [ref4, isVisible4] = useIntersectionObserver({ threshold: 0.1 });

  const getStyle = (duration, delay) => ({
    "--fade-duration": `${duration}s`,
    "--fade-delay": `${delay}s`,
  });

  return (
    <div className="container about-page">
      <h1 className="title-about animate__animated animate__zoomInDown ">
        CHAUDRO <span>INDUSTRIE</span> PLAST
      </h1>
      <div className="about-section">
        <div className="about-left animate__animated animate__rollIn">
          <img
            src={image}
            alt="logo_cip"
            className="about-img"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
          <Lottie
            lottieRef={lottieRef}
            className="icon-play"
            onDOMLoaded={() => {
              lottieRef.current.setSpeed(1);
            }}
            height={60}
            animationData={play}
          />
        </div>
        <div className="about-right">
          <h2 className="animate__animated animate__fadeInUp animate__delay-1s">
            À propos de nous
          </h2>

          <p
            ref={ref1}
            className={`fade-in ${isVisible1 ? "visible" : "exiting"}`}
            style={getStyle(0.6, 0)}
          >
            La société Chaudro Industrie Plast (CIP) est spécialisée dans
            ébullition, électromécanique, maintenance industrielle,
            et la production de machines. Un large éventail de nos activités comme
            la conception de mobilier médical, d’équipements pour
            Et l’industrie des plastiques est le fournisseur de divers services de notre part.

          </p>
          <p
            ref={ref2}
            className={`fade-in ${isVisible2 ? "visible" : "exiting"}`}
            style={getStyle(0.6, 0.3)}
          >
            Dans le domaine de la plasturgie, nous assurons l'installation et le
            renouvellement des machines d’injection ainsi que la fabrication de
            mélangeurs verticaux et horizontaux, et la mise en place de systèmes
            de convoyeurs pour optimiser les processus de production.
          </p>
          <p
            ref={ref3}
            className={`fade-in ${isVisible3 ? "visible" : "exiting"}`}
            style={getStyle(0.6, 0.6)}
          >
            Forts de notre engagement envers l'innovation et la satisfaction
            client, nous réalisons également tous types de travaux de
            chaudronnerie industrielle, la fabrication de cuves et citernes, et
            bien d'autres équipements spécifiques pour divers secteurs.
          </p>

          <a href={CV} target="_blank" className="button_pdf">
            <span className="button__text">Voir catalogue</span>
            <span className="button__icon">
              <i className="icon-picture_as_pdf" />
            </span>
          </a>
        </div>
      </div>

      <div
        ref={ref4}
        className={`fade-in ${isVisible4 ? "visible" : ""} section-whyUs`}
      >
        <WhyChooseUs />
      </div>
      <section className="section-philosophy">
        <Philosophy />
      </section>
      <Strengths />
    </div>
  );
}

export default About;

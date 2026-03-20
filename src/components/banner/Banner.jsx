import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "animate.css";
import "./banner.css";
import img1 from "../../assets/carousel/carousel1.jpeg";
import img2 from "../../assets/carousel/carousel2.jpg";
import img3 from "../../assets/carousel/carousel3.jpg";

const slides = [
  {
    img: img1,
    alt: "Equipement pharmaceutique",
    titleAnim: "animate__fadeInUp",
    listAnim: "animate__fadeInUp animate__delay-1s",
    items: ["Equipement pharmaceutique", "Mobilier médical", "Agro-alimentaire"],
  },
  {
    img: img2,
    alt: "Chaudronnerie industrielle",
    titleAnim: "animate__zoomIn",
    listAnim: "animate__bounceInUp animate__delay-1s",
    items: ["Chaudronnerie et tuyauterie inox-acier", "Électromécanique", "Maintenance industrielle"],
  },
  {
    img: img3,
    alt: "Fabrication industrielle",
    titleAnim: "animate__flash animate__slower",
    listAnim: "animate__fadeInLeftBig animate__delay-1s",
    items: ["Fabrication de machines industrielles", "Industrie plastique"],
  },
];

function Banner() {
  return (
    <div className="banner-container">
      <Carousel interval={5000} controls indicators pause={false}>
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <div className="carousel-overlay">
              <img
                className="d-block w-100 banner-image"
                src={slide.img}
                alt={slide.alt}
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
              <div className="overlay" />
              <Carousel.Caption>
                <h3 className={`animate__animated ${slide.titleAnim}`}>
                  CHAUDRO <span className="span-title">INDUSTRIE</span> PLAST
                </h3>
                <ul className={`animate__animated ${slide.listAnim}`}>
                  {slide.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/about">
                  <button className="button-learn-more">
                    <span>Learn More</span>
                  </button>
                </Link>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
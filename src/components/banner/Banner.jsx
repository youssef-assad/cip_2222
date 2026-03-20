import React from "react";
import img1 from "../../assets/carousel/carousel1.jpeg";
import img2 from "../../assets/carousel/carousel2.jpg";
import img3 from "../../assets/carousel/carousel3.jpg";
import Carousel from "react-bootstrap/Carousel";
import "animate.css";
import "./banner.css";  // Ensure this import is present
import { Link } from "react-router-dom";
function Banner() {

  return (
    <div className="banner-container">
      <Carousel interval={5000} controls={true} indicators={true} pause={false}>
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100 banner-image"
              src={img1}
              alt="First Slide"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <div className="overlay"></div>
            <Carousel.Caption>
              <h3 className="animate__animated animate__fadeInUp">
                CHAUDRO <span className="span-title">INDUSTRIE</span> PLAST
              </h3>
              <ul className="animate__animated animate__fadeInUp animate__delay-1s">
                <li>Equipement pharmaceutique</li>
                <li>mobilier médical </li>
                <li>Agro-alimentaire </li>
              </ul>
              <Link to="/about">
                <button className="button-learn-more">
                  <span>Learn More</span>
                </button>
              </Link>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100 banner-image"
              src={img2}
              alt="Second Slide"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <div className="overlay"></div>
            <Carousel.Caption>
              <h3 className="animate__animated animate__zoomIn">
                CHAUDRO <span className="span-title">INDUSTRIE</span> PLAST
              </h3>
              <ul className="animate__animated animate__bounceInUp animate__delay-1s">
                <li>haudronnerie et tuyautrie inox-acier</li>
                <li> Electromecanique </li>
                <li> maintenance industrielle </li>
              </ul>
              <Link to="/about">
                <button className="button-learn-more">
                  <span>Learn More</span>
                </button>
              </Link>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-overlay">
            <img
              className="d-block w-100 banner-image"
              src={img3}
              alt="Third Slide"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <div className="overlay"></div>
            <Carousel.Caption>
              <h3 className="animate__animated animate__flash animate__slower ">
                CHAUDRO <span className="span-title">INDUSTRIE</span> PLAST
              </h3>
              <ul className="animate__animated animate__fadeInLeftBig animate__delay-1s">
                <li>Fabrication de machines industrielles</li>
                <li> Industrie plastique </li>
              </ul>
              <Link to="/about">
                <button className="button-learn-more">
                  <span>Learn More</span>
                </button>
              </Link>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;

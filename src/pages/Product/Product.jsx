import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDisplay.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductDisplay.css";
import SideBar from "../../components/SideBar/SideBar";
import Products from '../../products.json'
function Product() {
  const { id } = useParams();


console.log(id);
const productFilter=Products.find(p=>p.id===parseInt(id))
  const contactList = [
    {
      iconClassName: "icon-phone",
      title: "Phone Number",
      link: "tel:++212661946011",
      desc: "+212 661946011",
    },
    {
      iconClassName: "icon-envelope",
      title: "Send Email",
      link: "mailto:cip.industrie@gmail.com",
      desc: "cip.industrie@gmail.com",
    },
    {
      iconClassName: "icon-social-linkedin",
      title: "Linkedin",
      link: "https://www.linkedin.com/in/abdellah-assad-767970181/",
      desc: "CHAUDRO INDUSTIE PLAST",
    },
    {
      iconClassName: "icon-whatsapp",
      title: "Whatsapp",
      link: "https://wa.me/212661946011",
      desc: "+212 661946011",
    },
  ];

  const images = productFilter.images;

  return (
    <div className="container product-display mt-4">
   <SideBar/>
      <main className="d-flex main-content">
        <div className="product-image">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            modules={[Navigation]}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                {/* <Zoom> */}
                  <img
                    src={img}
                    alt={`Product Image ${index + 1}`}
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                  />
                {/* </Zoom> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="product-info">
          <h2> {productFilter.title} </h2>
          <p>
            {productFilter.desc}
          </p>
          <h4>
            {productFilter.categorie}
          </h4>
          <div className="contact-info-products">
            {contactList.map((contact, index) => (
              <div key={index} className="contact-info-item-products">
                <i className={contact.iconClassName}></i>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.desc}
                </a>
              </div>
            ))}
          </div>
          <a className="online-message-button"  href="https://wa.me/212661946011" >ONLINE MESSAGE</a>
        </div>
      </main>
    </div>
  );
}

export default Product;

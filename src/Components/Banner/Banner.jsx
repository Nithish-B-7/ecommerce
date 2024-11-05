import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Autoplay } from 'swiper/modules';
import banner_1 from '../../Assets/slide1-phone.jpg';
import banner_2 from '../../Assets/slide2-laptop.jpg';
import banner_3 from '../../Assets/slide3-headphone.jpg';

const Banner = () => {
  const slides = [
    {
      img: banner_1,
      heading: "Exclusive Deals on Phones!",
      discount: "50% OFF",
      description: "Upgrade your experience with the latest technology."
    },
    {
      img: banner_2,
      heading: "Exclusive Deals on Laptops!",
      discount: "30% OFF",
      description: "Get the best performance for work and play."
    },
    {
      img: banner_3,
      heading: "Exclusive Deals on Headphones!",
      discount: "25% OFF",
      description: "Immerse yourself in high-quality sound."
    }
  ];

  return (
    <div className="whole-banner-div">
      <div className="banner-div">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        freeMode={true}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.img} alt={slide.heading} />
            <div className="banner-text">
              <h3>{slide.heading}</h3>
              <h1>{slide.discount}</h1>
              <p>{slide.description}</p>
              <button className="banner-btn">Shop Now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Banner;
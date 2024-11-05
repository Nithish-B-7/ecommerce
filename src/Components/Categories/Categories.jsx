import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Categories.css";
import { Pagination, Autoplay } from "swiper/modules";
import slide_1 from "../../Assets/slide-1.png";
import slide_2 from "../../Assets/slide-2.png";
import slide_3 from "../../Assets/slide-3.png";
import slide_4 from "../../Assets/slide-4.png";
import slide_5 from "../../Assets/slide-5.png";
import slide_6 from "../../Assets/slide-6.png";
import slide_7 from "../../Assets/slide-7.png";
import slide_8 from "../../Assets/slide-8.png";

const Categories = () => {
  const slides = [
    { id: 1, img: slide_1, name: "Play Station" },
    { id: 2, img: slide_2, name: "HeadPhones" },
    { id: 3, img: slide_3, name: "Smart Watch" },
    { id: 4, img: slide_4, name: "Laptops" },
    { id: 5, img: slide_5, name: "Phones" },
    { id: 6, img: slide_6, name: "Speakers" },
    { id: 7, img: slide_7, name: "Tablet" },
    { id: 8, img: slide_8, name: "TV" },
  ];

  return (
    <div className="whole-swiper-div">
        <h1>Categories</h1>
        <hr />
      <div className="sub-swiper-div">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true} 
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-content">
              <img src={slide.img} alt={slide.name} />
              <div className="slide-text">
                <h3>{slide.name}</h3>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;

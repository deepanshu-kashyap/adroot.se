"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/carousel.css";

export default function Carousel() {
  const images = [
    "/slider1.png",
    "/slider2.png",
    "/slider3.png",
    "/slider4.png",
    "/slider5.png",
    "/slider6.png",
    "/slider7.png",
    "/slider8.png",
    "/slider9.png",
    "/slider10.png",
    "/slider11.png",
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={6000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          slidesPerView={6}
          spaceBetween={80}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 50 },
            1024: { slidesPerView: 6, spaceBetween: 80 },
          }}
          className="partners-slider"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt="partner" className="partner-logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

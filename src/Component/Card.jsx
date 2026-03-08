// src/Component/Card.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "swiper/css";

const Card = ({ title, cards = [], slidesPerView = 1 }) => {
  if (!cards.length) return null;

  return (
    <div className="card-slider-wrapper cursor-pointer ">
      {/* Section Title (optional) */}
      {/* {title && <h2 className="slider-title">{title}</h2>} */}

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: slidesPerView },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card ">
              {/* Image */}
              {/* <div className="card-image w-full h-full">
                <img src={card.image} alt={card.title}  className="w-full h-full object-cover" />
              </div> */}
              <div className="card-image w-full aspect-square overflow-hidden rounded-[10px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover overflow-hidden rounded-[10px] "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;

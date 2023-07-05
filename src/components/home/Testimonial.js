"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { testimonies } from "./Objects";

const Testimonial = () => {
  const testimonialList = testimonies.map((testimony, iindex) => (
    <SwiperSlide>
      <div className="title">
        <p>
          {testimony.name}<br /><span style={{fontWeight: 'bold'}}>{testimony.post}</span>
        </p>
      </div>
      <Image
        src={testimony.img}
        alt={testimony.name}
        width={1000}
        height={1000}
        className="testimonial-image"
      />
      <div className="body">
        <p>{testimony.body}</p>
      </div>
    </SwiperSlide>
  ));

  return (
    <div id="testimonial">
      <h3>Our customers, Our Competence...</h3>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        className="swiper-container"
      >
        {testimonialList}
      </Swiper>
    </div>
  );
};

export default Testimonial;

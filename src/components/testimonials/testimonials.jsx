import React from "react";
import ReviewCard from "./reviewcard";
import image1 from "../../assets/avatar1.jpg";
import image2 from "../../assets/avatar2.jpg";
import image3 from "../../assets/avatar3.jpg";
import image4 from "../../assets/avatar4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
          <SwiperSlide>
            <ReviewCard name='`` Monica ``' image={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard name='`` Spike ``' image={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard name='`` Mark ``' image={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard name='`` Nuri ``' image={image4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default testimonials;

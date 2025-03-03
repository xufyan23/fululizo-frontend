"use client";

import React from "react";
// import User from "../../images/insurance-agent.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "../../data/constants";

const Testimonial = () => {
  console.log(testimonials);
  return (
    <section className="bg-[#192234] text-white py-16 px-6 xss:px-3 pb-[5rem] text-center mb-[5rem]">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-8 pb-2">
        What did our users say about us
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="max-w-3xl mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-[#F57261] mt-2 max-w-3xl xss:h-full h-[13rem] mx-auto p-6 xss:px-0 rounded-[1.5rem] relative">
              <div className="xss:hidden border-radius flex items-center justify-center w-[12rem] h-52 bg-gradient-to-r from-[#Fd7761] to-[#Fa4e57] rounded-[20px 100px 100px 20px] flex items-center justify-center absolute left-[0px] top-[0] z-[1]"></div>
              <div className="grid xss:grid-cols-1 grid-cols-[0.35fr_1fr] h-full items-center">
                <div className="z-[100]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="xss:justify-self-center
 img-transform w-[90px] h-[90px] object-cover rounded-full border-2 border-secondary xss:translate-x-0 transform-[40%]"
                  />
                </div>
                <p className="mt-6 md:mt-0 text-center md:text-left text-md font-medium leading-relaxed pl-[2rem] xss:pl-2 xss:pr-2">
                  {testimonial.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="bg-[#F57261] flex items-center justify-start max-w-3xl h-[13rem] mx-auto p-6 rounded-xl relative">

        <div className="w-52 h-52 bg-gradient-to-r from-[#F57261] to-[#Fc6076] rounded-[20px 100px 100px 20px] flex items-center justify-center absolute left-[-40px]">
          <img
            src={User}
            alt="User"
            className="w-24 h-24 rounded-full border-2 border-secondary"
          />
        </div>


        <p className="ml-20 text-left text-lg font-medium">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div> */}
    </section>
  );
};

export default Testimonial;

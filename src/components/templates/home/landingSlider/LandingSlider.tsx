"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./style.module.css";

export default function LandingSlider() {
  return (
    <div className={`mt-14 ${styles.wrapper}`}>
      <Swiper
        navigation
        pagination
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper w-full rounded-xl overflow-hidden"
      >
        {["/temp/1.gif", "/temp/2.webp", "/temp/3.webp", "/temp/4.webp", "/temp/5.webp"].map(
          (src, i) => (
            <SwiperSlide key={i} className="md:w-full">
              <div className="relative md:w-full aspect-[16/9] sm:aspect-[33/9]">
                <Image
                  src={src}
                  alt="sliderImage"
                  fill
                  priority={i === 0}
                  sizes="(max-width: 640px) 100vw, 100vw"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}

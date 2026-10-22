"use client";

import Title from "@/components/modules/title/Title";
import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import BrandCard from "@/components/modules/brandCard/BrandCard";

export default function Brands() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const brands = [
    { img: "/temp/brands/1.webp" },
    { img: "/temp/brands/2.webp" },
    { img: "/temp/brands/3.webp" },
    { img: "/temp/brands/4.webp" },
    { img: "/temp/brands/5.webp" },
    { img: "/temp/brands/6.webp" },
    { img: "/temp/brands/7.webp" },
    { img: "/temp/brands/8.webp" },
    { img: "/temp/brands/9.webp" },
    { img: "/temp/brands/10.webp" },
  ];

  return (
    <div className="flex flex-col mb-2">
      <Title title="محبوب‌ترین برندها" url="/" />
      {/* swiper */}
      <div className="min-w-0 relative mt-6 md:mt-10 h-full">
        <button
          ref={prevRef}
          className={`absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <IoIosArrowForward className="text-xl text-sky-700" />
        </button>

        <button
          ref={nextRef}
          className={`absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <IoIosArrowBack className="text-xl text-sky-700" />
        </button>

        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper: SwiperType) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          onSwiper={(swiper: SwiperType) => {
            // init navigation after refs exist
            setTimeout(() => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                swiper.navigation.init();
                swiper.navigation.update();
              }
            });

            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper: SwiperType) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          spaceBetween={16}
          dir="rtl"
          breakpoints={{
            0: {
              slidesPerView: 3.8,
            },
            480: {
              slidesPerView: 6.3,
            },
            768: {
              slidesPerView: 4.2,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 8.6,
            },
          }}
          className="w-full rounded-xl h-full"
        >
          {brands.map(({ img }, index) => (
            <SwiperSlide key={index} className="flex h-auto pt-3 pb-3">
              <BrandCard img={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

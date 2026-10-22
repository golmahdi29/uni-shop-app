"use client";

import { useRef, useState } from "react";
import HotCard from "@/components/modules/hotCard/HotCard";
import { HiOutlineFire } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function Hotest() {
  const cards = Array(12).fill(1);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const mobileSlides = Array.from({
    length: Math.ceil(cards.length / 3),
  }).map((_, index) => cards.slice(index * 3, index * 3 + 3));

  const handleSwiperInit = (swiper: SwiperType) => {
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
  };

  return (
    <div className="mt-20 relative">
      {/* Title */}
      <div className="flex gap-1 items-center text-center mb-10 justify-center">
        <HiOutlineFire className="text-xl md:text-2xl text-amber-500 font-bold" />
        <div className="font-bold text-[16px] md:text-[21px]">
          داغ‌ترین چند ساعت گذشته
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className={`md:hidden absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition ${
          isBeginning
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <IoIosArrowForward className="text-xl text-sky-700" />
      </button>

      <button
        ref={nextRef}
        className={`md:hidden absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition ${
          isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <IoIosArrowBack className="text-xl text-sky-700" />
      </button>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Navigation]}
          dir="rtl"
          spaceBetween={16}
          slidesPerView={1.1}
          onSwiper={handleSwiperInit}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {mobileSlides.map((group, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="flex flex-col gap-4">
                {group.map((_, index) => (
                  <HotCard key={index} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
        {cards.map((_, index) => (
          <HotCard key={index} />
        ))}
      </div>
    </div>
  );
}
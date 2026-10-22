"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ShopCard from "@/components/modules/shopCard/ShopCard";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function Offer() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="w-full p-4 flex flex-col lg:flex-row gap-6 bg-sky-700 rounded-xl mt-20 overflow-hidden">
      {/* left section */}
      <div className="flex flex-col items-center">
        {" "}
        <div className="font-bold text-2xl text-neutral-50 w-30 text-wrap text-center">
          {" "}
          پیشنهـــــاد شگفــــــت انگیـــــــــز{" "}
        </div>{" "}
        <div className="flex gap-2 items-center text-neutral-50 mt-4 *:font-bold">
          {" "}
          <div className="p-2 rounded-xl bg-neutral-50 text-neutral-800 flex items-center justify-center">
            {" "}
            ۰۳{" "}
          </div>{" "}
          <div>:</div>{" "}
          <div className="p-2 rounded-xl bg-neutral-50 text-neutral-800 flex items-center justify-center">
            {" "}
            ۰۳{" "}
          </div>{" "}
          <div>:</div>{" "}
          <div className="p-2 rounded-xl bg-neutral-50 text-neutral-800 flex items-center justify-center">
            {" "}
            ۰۳{" "}
          </div>{" "}
        </div>{" "}
        <div>
          {" "}
          <Image
            src={"/images/offer/gift.webp"}
            width={180}
            height={180}
            alt="offer"
          />{" "}
        </div>{" "}
        <Link
          href={"/"}
          className="text-sm text-neutral-50 flex gap-1 items-center mt-3"
        >
          {" "}
          مشاهده همه <IoIosArrowBack />{" "}
        </Link>{" "}
      </div>

      {/* swiper */}
      <div className="flex-1 min-w-0 relative">
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
              slidesPerView: 1.2,
            },
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4.2,
            },
          }}
          className="w-full rounded-xl h-full"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <SwiperSlide key={item} className="flex h-auto">
              <ShopCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

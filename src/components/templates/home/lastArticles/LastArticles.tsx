"use client";

import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import ShopCard from "@/components/modules/shopCard/ShopCard";
import ArticleCard from "@/components/modules/articleCard/ArticleCard";
import Title from "@/components/modules/title/Title";

import "swiper/css";
import "swiper/css/navigation";

export default function LastArticles() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const articles = [
    { img: "/temp/articles/1.webp" },
    { img: "/temp/articles/2.webp" },
    { img: "/temp/articles/3.webp" },
    { img: "/temp/articles/4.webp" },
    { img: "/temp/articles/5.webp" },
    { img: "/temp/articles/6.webp" },
  ];

  return (
    <div>
      <Title url="/" title="خواندنی‌ها" />

      <div className="min-w-0 relative mt-4 md:mt-10 h-full">
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
          spaceBetween={14}
          dir="rtl"
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5.6,
            },
          }}
          className="w-full rounded-xl h-80 md:h-full"
        >
          {articles.map(({ img }, index) => (
            <SwiperSlide key={index} className="flex h-auto md:pt-3 md:pb-8">
              <ArticleCard img={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdStar, MdStarBorder, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { BsCart2, BsTruck, BsArrowReturnLeft } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import ShopCard from "@/components/modules/shopCard/ShopCard";

const gallery = [
  "/temp/products/2.webp",
  "/temp/products/2.webp",
  "/temp/products/2.webp",
  "/temp/products/2.webp",
];

const colors = [
  { name: "مشکی", hex: "#1a1a1a" },
  { name: "نقره‌ای", hex: "#c0c0c0" },
  { name: "طلایی", hex: "#d4af37" },
];

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");

  return (
    <div className="my-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
        <Link href="/" className="hover:text-sky-600 transition-colors">خانه</Link>
        <IoIosArrowBack className="text-xs" />
        <Link href="/products" className="hover:text-sky-600 transition-colors">فروشگاه</Link>
        <IoIosArrowBack className="text-xs" />
        <span className="text-neutral-800 font-medium">لپ تاپ ایسوس ExpertBook</span>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Gallery */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 order-2 lg:order-1">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-16 h-16 rounded-xl border-2 overflow-hidden transition-all ${
                  selectedImage === i ? "border-sky-600 shadow-sm" : "border-neutral-200 opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={src} width={64} height={64} alt="thumbnail" className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
          <div className="flex-1 order-1 lg:order-2 relative">
            <div className="bg-neutral-50 rounded-2xl p-8 flex items-center justify-center border border-neutral-200/65">
              <Image src={gallery[selectedImage]} width={400} height={400} alt="product" className="object-contain w-full h-auto" />
            </div>
            <button
              onClick={() => setIsFavorite((v) => !v)}
              className="absolute top-4 left-4 p-2.5 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              {isFavorite ? (
                <MdFavorite className="text-red-500 text-xl" />
              ) : (
                <MdFavoriteBorder className="text-neutral-400 text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl bg-sky-600/10 text-sky-600 px-3 py-1 text-xs font-medium w-fit">
            لپ تاپ و تبلت
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-neutral-800 leading-tight">
            لپ تاپ 14 اینچی ایسوس مدل ExpertBook P3 P3405CVA-I716512G6D-i7
          </h1>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-amber-400">
              {[1, 2, 3, 4, 5].map((s) => (
                s <= 4 ? <MdStar key={s} /> : <MdStarBorder key={s} />
              ))}
            </div>
            <span className="text-sm text-neutral-500">۴.۵ از ۵</span>
            <span className="text-sm text-neutral-300">|</span>
            <span className="text-sm text-neutral-500">۱۲۴ نظر</span>
            <span className="text-sm text-neutral-300">|</span>
            <span className="text-sm text-neutral-500">۲۳ فروش</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-amber-500">۷۴,۰۰۰,۰۰۰</span>
            <span className="text-sm text-neutral-500">تومان</span>
            <span className="text-sm text-neutral-400 line-through">۷۸,۰۰۰,۰۰۰</span>
            <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full font-medium">۵٪ تخفیف</span>
          </div>

          {/* Color */}
          <div>
            <span className="text-sm font-medium text-neutral-700">رنگ: <span className="text-neutral-500">{colors[selectedColor].name}</span></span>
            <div className="flex gap-2 mt-2">
              {colors.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(i)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === i ? "border-sky-600 scale-110 shadow-sm" : "border-neutral-300"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-neutral-300 rounded-xl overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-neutral-600 hover:bg-neutral-100 transition-colors text-lg font-medium"
              >
                -
              </button>
              <span className="px-4 py-2 text-neutral-800 font-medium min-w-[40px] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-neutral-600 hover:bg-neutral-100 transition-colors text-lg font-medium"
              >
                +
              </button>
            </div>
            <button className="flex items-center gap-2 bg-sky-600 text-neutral-50 px-6 py-2.5 rounded-xl hover:bg-sky-700 transition-colors font-medium">
              <BsCart2 className="text-lg" />
              افزودن به سبد خرید
            </button>
          </div>

          {/* Short Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-200/65">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <BsTruck className="text-sky-600 text-lg" />
              ارسال سریع
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <HiOutlineShieldCheck className="text-sky-600 text-lg" />
              گارانتی ۱۸ ماهه
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <BsArrowReturnLeft className="text-sky-600 text-lg" />
              بازگشت ۷ روزه
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <span>اشتراک گذاری:</span>
            <button className="p-2 bg-green-50 rounded-lg text-green-600 hover:bg-green-100 transition-colors">
              <FaWhatsapp className="text-lg" />
            </button>
            <button className="p-2 bg-sky-50 rounded-lg text-sky-600 hover:bg-sky-100 transition-colors">
              <IoCopyOutline className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-12">
        <div className="flex border-b border-neutral-200 gap-6">
          {[
            { key: "description", label: "توضیحات" },
            { key: "specs", label: "مشخصات فنی" },
            { key: "reviews", label: "نظرات (۱۲۴)" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "text-sky-600 border-sky-600"
                  : "text-neutral-500 border-transparent hover:text-neutral-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-6">
          {activeTab === "description" && (
            <div className="text-neutral-600 leading-8 text-justify space-y-4">
              <p>
                لپ تاپ ایسوس ExpertBook P3 یک دستگاه قدرتمند و حرفه‌ای برای کاربران تجاری و
                اداری است. این لپ تاپ با پردازنده نسل ۱۳ اینتل Core i7 و ۱۶ گیگابایت رم
                DDR5، عملکرد فوق‌العاده‌ای در انجام وظایف روزمره و پردازش‌های سنگین دارد.
              </p>
              <p>
                صفحه نمایش ۱۴ اینچی Full HD با پنل IPS تصاویری زنده و واضح با زاویه دید
                گسترده ارائه می‌دهد. طراحی باریک و سبک این دستگاه، آن را به گزینه‌ای ایده‌آل
                برای حمل و نقل روزانه تبدیل کرده است.
              </p>
              <p>
                باتری با دوام بالا تا ۱۰ ساعت کار مداوم، پورت‌های متنوع از جمله USB-C و HDMI،
                و کیبورد با نور پس زمینه از دیگر ویژگی‌های این محصول هستند.
              </p>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["مدل پردازنده", "Core i7-13620H"],
                ["نسل پردازنده", "13"],
                ["حافظه رم", "16 گیگابایت DDR5"],
                ["حافظه داخلی", "512 گیگابایت SSD"],
                ["صفحه نمایش", "14 اینچ Full HD IPS"],
                ["کارت گرافیک", "Intel Iris Xe"],
                ["سیستم عامل", "بدون سیستم عامل"],
                ["وزن", "۱.۴ کیلوگرم"],
                ["باتری", "۳ سلولی ۵۰ وات ساعت"],
                ["گارانتی", "۱۸ ماهه"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl even:bg-white">
                  <span className="text-sm text-neutral-500">{label}</span>
                  <span className="text-sm font-medium text-neutral-800">{value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-4">
              {[
                { name: "علی رضایی", date: "۱۵ خرداد ۱۴۰۵", rating: 5, text: "محصول عالی و با کیفیت. سرعت و عملکرد فوق‌العاده‌ای داره." },
                { name: "سارا احمدی", date: "۱۰ خرداد ۱۴۰۵", rating: 4, text: "کیفیت ساخت خوبی داره. فقط کاش زودتر میومد!" },
                { name: "امیر حسینی", date: "۲ اردیبهشت ۱۴۰۵", rating: 5, text: "بسیار راضی هستم. قیمتش نسبت به امکاناتش مناسبه." },
              ].map((review, i) => (
                <div key={i} className="p-4 border border-neutral-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-sky-600/10 flex items-center justify-center text-sm font-medium text-sky-600">
                        {review.name[0]}
                      </div>
                      <span className="font-medium text-neutral-800 text-sm">{review.name}</span>
                    </div>
                    <span className="text-xs text-neutral-400">{review.date}</span>
                  </div>
                  <div className="flex items-center text-amber-400 text-sm mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      s <= review.rating ? <MdStar key={s} /> : <MdStarBorder key={s} />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-600 leading-7">{review.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-neutral-200 pt-8">
        <h2 className="text-xl font-bold text-neutral-800 mb-6">محصولات مرتبط</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <ShopCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

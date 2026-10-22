"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdStar, MdStarBorder } from "react-icons/md";
import { BsCart2, BsGrid3X3 } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoListOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import { CiSliderHorizontal } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const categories = [
  "موبایل",
  "لپ تاپ و تبلت",
  "هدفون و هندزفری",
  "کامپیوتر",
  "صوتی و تصویری",
  "گیمینگ",
  "ساعت هوشمند",
  "اسپیکر",
  "تی وی",
  "لوازم جانبی",
];

const brands = [
  "اپل",
  "سامسونگ",
  "شیائومی",
  "ایسوس",
  "لنوو",
  "هایلو",
  "بوز",
  "سونی",
];

const products = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: "لپ تاپ 14 اینچی ایسوس مدل ExpertBook P3 P3405CVA-I716512G6D-i7",
  price: "۷۴,۰۰۰,۰۰۰",
  oldPrice: "۷۸,۰۰۰,۰۰۰",
  discount: "۵٪",
  image: "/temp/products/2.webp",
  rating: 4,
  category: categories[i % categories.length],
  brand: brands[i % brands.length],
}));

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center text-amber-400 *:text-sm">
      {[1, 2, 3, 4, 5].map((star) => (
        star <= rating ? <MdStar key={star} /> : <MdStarBorder key={star} />
      ))}
    </div>
  );
}

export default function ProductsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("جدیدترین");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const sortOptions = ["جدیدترین", "پرفروش‌ترین", "ارزان‌ترین", "گران‌ترین", "محبوب‌ترین"];

  return (
    <div className="my-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
        <Link href="/" className="hover:text-sky-600 transition-colors">خانه</Link>
        <IoIosArrowBack className="text-xs" />
        <span className="text-neutral-800 font-medium">فروشگاه</span>
      </div>

      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-800">فروشگاه دومینور</h1>
          <p className="text-neutral-500 text-sm mt-1">۲۴ کالا در فروشگاه</p>
        </div>
      </div>

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 bg-sky-600 text-neutral-50 px-3 py-2 rounded-xl text-sm font-medium"
          >
            <CiSliderHorizontal className="text-lg" />
            فیلترها
          </button>
          <div className="hidden md:flex items-center gap-1 bg-neutral-100 rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-white shadow-sm text-sky-600" : "text-neutral-400"}`}
            >
              <BsGrid3X3 className="text-lg" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-white shadow-sm text-sky-600" : "text-neutral-400"}`}
            >
              <IoListOutline className="text-lg" />
            </button>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowSortDropdown((prev) => !prev)}
            className="flex items-center gap-2 text-sm font-medium text-neutral-700 bg-neutral-100 px-4 py-2 rounded-xl hover:bg-neutral-200 transition-colors"
          >
            مرتب‌سازی: {sortBy}
            <FiChevronDown className={`transition-transform duration-200 ${showSortDropdown ? "rotate-180" : ""}`} />
          </button>
          {showSortDropdown && (
            <div className="absolute left-0 top-full mt-2 bg-white border border-neutral-200 rounded-xl shadow-lg z-30 w-48 overflow-hidden">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => { setSortBy(option); setShowSortDropdown(false); }}
                  className={`w-full text-right px-4 py-2.5 text-sm transition-colors hover:bg-sky-50 ${sortBy === option ? "text-sky-600 font-medium bg-sky-50" : "text-neutral-700"}`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-8 relative">
        {/* Mobile Filter Overlay */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/30" onClick={() => setIsFilterOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-neutral-50 p-5 overflow-y-auto shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-neutral-800">فیلترها</h3>
                <button onClick={() => setIsFilterOpen(false)} className="text-2xl text-neutral-500">
                  <IoClose />
                </button>
              </div>
              <FilterContent
                categories={categories}
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                brands={brands}
                selectedBrands={selectedBrands}
                toggleBrand={toggleBrand}
              />
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white border border-neutral-200 rounded-2xl p-5 sticky top-5">
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-neutral-200">
              <HiOutlineAdjustmentsHorizontal className="text-xl text-sky-600" />
              <h3 className="font-bold text-neutral-800">فیلترها</h3>
            </div>
            <FilterContent
              categories={categories}
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              brands={brands}
              selectedBrands={selectedBrands}
              toggleBrand={toggleBrand}
            />

            {/* Price Range */}
            <div className="mb-6 pb-6 border-b border-neutral-200">
              <h4 className="font-medium text-neutral-800 mb-4">محدوده قیمت</h4>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="از"
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-700 placeholder:text-neutral-400 outline-none focus:border-sky-500 transition-colors"
                />
                <span className="text-neutral-400 text-xs">تا</span>
                <input
                  type="text"
                  placeholder="تا"
                  className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-sm text-neutral-700 placeholder:text-neutral-400 outline-none focus:border-sky-500 transition-colors"
                />
              </div>
              <button className="mt-3 w-full bg-sky-600 text-neutral-50 text-sm py-2 rounded-xl hover:bg-sky-700 transition-colors font-medium">
                اعمال
              </button>
            </div>

            {/* Rating Filter */}
            <div className="mb-6 pb-6 border-b border-neutral-200">
              <h4 className="font-medium text-neutral-800 mb-4">حداقل امتیاز</h4>
              {[4, 3, 2, 1].map((rate) => (
                <label key={rate} className="flex items-center gap-3 cursor-pointer mb-3 last:mb-0">
                  <input type="radio" name="rating" className="accent-sky-600 w-4 h-4" />
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      star <= rate ? <MdStar key={star} className="text-amber-400 text-sm" /> : <MdStarBorder key={star} className="text-neutral-300 text-sm" />
                    ))}
                    <span className="text-neutral-500 text-xs mr-2">به بالا</span>
                  </div>
                </label>
              ))}
            </div>

            {/* Availability */}
            <div>
              <h4 className="font-medium text-neutral-800 mb-4">وضعیت موجودی</h4>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="accent-sky-600 w-4 h-4 rounded" />
                <span className="text-sm text-neutral-700">فقط کالاهای موجود</span>
              </label>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 min-w-0">
          <div className={viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            : "flex flex-col gap-4"
          }>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="p-2 rounded-xl border border-neutral-300 text-neutral-500 hover:bg-sky-50 hover:border-sky-300 transition-colors">
              <IoIosArrowForward className="text-lg" />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-xl text-sm font-medium transition-colors ${page === 1 ? "bg-sky-600 text-neutral-50" : "border border-neutral-300 text-neutral-600 hover:bg-sky-50 hover:border-sky-300"}`}
              >
                {page}
              </button>
            ))}
            <button className="p-2 rounded-xl border border-neutral-300 text-neutral-500 hover:bg-sky-50 hover:border-sky-300 transition-colors">
              <IoIosArrowBack className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterContent({
  categories,
  selectedCategories,
  toggleCategory,
  brands,
  selectedBrands,
  toggleBrand,
}: {
  categories: string[];
  selectedCategories: string[];
  toggleCategory: (cat: string) => void;
  brands: string[];
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
}) {
  return (
    <>
      {/* Categories */}
      <div className="mb-6 pb-6 border-b border-neutral-200">
        <h4 className="font-medium text-neutral-800 mb-4">دسته‌بندی</h4>
        {categories.map((cat) => (
          <label key={cat} className="flex items-center gap-3 cursor-pointer mb-3 last:mb-0">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
              className="accent-sky-600 w-4 h-4 rounded"
            />
            <span className="text-sm text-neutral-700">{cat}</span>
          </label>
        ))}
      </div>

      {/* Brands */}
      <div className="mb-6 pb-6 border-b border-neutral-200">
        <h4 className="font-medium text-neutral-800 mb-4">برند</h4>
        {brands.map((brand) => (
          <label key={brand} className="flex items-center gap-3 cursor-pointer mb-3 last:mb-0">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleBrand(brand)}
              className="accent-sky-600 w-4 h-4 rounded"
            />
            <span className="text-sm text-neutral-700">{brand}</span>
          </label>
        ))}
      </div>
    </>
  );
}

function ProductCard({ product, viewMode }: { product: typeof products[0]; viewMode: "grid" | "list" }) {
  if (viewMode === "list") {
    return (
      <div className="bg-white flex items-center gap-5 rounded-xl shadow-xs border border-neutral-200/65 p-4 hover:shadow-md transition-shadow">
        <Link href={`/products/detail/${product.id}`} className="w-28 h-28 flex-shrink-0 relative">
          <Image src={product.image} width={200} height={200} alt={product.title} className="object-contain w-full h-full" />
        </Link>
        <div className="flex-1 min-w-0">
          <Link href={`/products/detail/${product.id}`} className="font-medium text-neutral-700 text-sm line-clamp-2 hover:text-sky-600 transition-colors">
            {product.title}
          </Link>
          <div className="flex items-center gap-2 mt-2">
            <StarRating rating={product.rating} />
            <span className="text-xs text-neutral-400">(۱۲ نظر)</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <div className="rounded-2xl bg-sky-600 text-neutral-50 px-2 py-1 text-xs font-medium">{product.discount} تخفیف</div>
          <div className="flex flex-col items-center gap-1 font-bold">
            <div className="flex items-center gap-1 text-amber-400 text-sm">{product.price} <span className="text-xs">تومان</span></div>
            <div className="text-xs text-neutral-400/80 line-through">{product.oldPrice}</div>
          </div>
          <BsCart2 className="text-sky-600 text-lg cursor-pointer hover:text-sky-700 transition-colors" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col items-center justify-between rounded-xl shadow-xs border border-neutral-200/65 py-3 px-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between w-full">
        <div className="rounded-2xl bg-sky-600 text-neutral-50 px-2 py-1 text-xs font-medium">{product.discount} تخفیف</div>
        <StarRating rating={product.rating} />
      </div>
      <Link href={`/products/detail/${product.id}`}>
        <Image src={product.image} width={200} height={200} alt={product.title} className="cursor-pointer hover:scale-105 transition-all duration-300" />
      </Link>
      <Link href={`/products/detail/${product.id}`} className="line-clamp-2 font-medium text-neutral-700 w-full text-[15px] hover:text-sky-600 transition-colors">
        {product.title}
      </Link>
      <div className="flex items-center justify-between w-full mt-2">
        <BsCart2 className="text-sky-600 text-xl cursor-pointer hover:text-sky-700 transition-colors" />
        <div className="flex flex-col items-center gap-1 font-bold">
          <div className="flex items-center gap-1 text-amber-400">{product.price} <span className="text-xs">تومان</span></div>
          <div className="text-sm text-neutral-400/80 line-through">{product.oldPrice}</div>
        </div>
      </div>
    </div>
  );
}

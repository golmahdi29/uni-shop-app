"use client";
import { HiOutlinePlus } from "react-icons/hi";

const brands = [
  { name: "سامسونگ", products: 34, logo: "S" },
  { name: "اپل", products: 28, logo: "A" },
  { name: "شیائومی", products: 22, logo: "X" },
  { name: "نایکی", products: 18, logo: "N" },
  { name: "آدیداس", products: 15, logo: "AD" },
  { name: "لگاریتم", products: 12, logo: "L" },
  { name: "پارمیس", products: 9, logo: "P" },
  { name: "دیجی‌تک", products: 7, logo: "D" },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-neutral-800">برندها</h1>
          <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت برندها</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium transition-colors self-start sm:self-auto">
          <HiOutlinePlus className="text-lg" />
          <span>افزودن برند</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <div key={brand.name} className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5 flex flex-col items-center text-center hover:shadow-sm transition-shadow">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-neutral-100 rounded-2xl flex items-center justify-center text-lg font-bold text-neutral-600 mb-3">{brand.logo}</div>
            <h3 className="font-medium text-neutral-800 text-sm md:text-base">{brand.name}</h3>
            <p className="text-xs text-neutral-400 mt-1">{brand.products} محصول</p>
          </div>
        ))}
      </div>
    </div>
  );
}

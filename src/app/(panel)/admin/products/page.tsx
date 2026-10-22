"use client";

import { HiOutlineSearch, HiOutlinePlus, HiOutlineFilter } from "react-icons/hi";

const products = [
  { name: "هدفون بی سیم", category: "الکترونیک", price: "1,250,000", stock: 42, status: "فعال" },
  { name: "کیف چرم", category: "مد و پوشاک", price: "890,000", stock: 18, status: "فعال" },
  { name: "کتاب برنامه نویسی", category: "کتاب", price: "250,000", stock: 65, status: "فعال" },
  { name: "ساعت هوشمند", category: "الکترونیک", price: "3,450,000", stock: 7, status: "ناموجود" },
  { name: "عینک آفتابی", category: "مد و پوشاک", price: "520,000", stock: 31, status: "فعال" },
  { name: "موس بی سیم", category: "الکترونیک", price: "680,000", stock: 0, status: "ناموجود" },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-neutral-800">محصولات</h1>
          <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت محصولات فروشگاه</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium transition-colors self-start sm:self-auto">
          <HiOutlinePlus className="text-lg" />
          <span>افزودن محصول</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <HiOutlineSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg" />
          <input type="text" placeholder="جستجوی محصول..." className="w-full pr-10 pl-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm placeholder:text-neutral-400" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 border border-neutral-300 rounded-xl text-sm text-neutral-600 hover:bg-neutral-50 transition-colors">
          <HiOutlineFilter className="text-lg" />
          <span>فیلتر</span>
        </button>
      </div>

      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">محصول</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">دسته بندی</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">قیمت</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">موجودی</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">وضعیت</th>
                <th className="py-3 px-4" />
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.name} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-neutral-800">{p.name}</td>
                  <td className="py-3 px-4 text-neutral-500">{p.category}</td>
                  <td className="py-3 px-4 text-neutral-800">{p.price} تومان</td>
                  <td className="py-3 px-4">
                    <span className={p.stock === 0 ? "text-red-500" : "text-neutral-700"}>{p.stock}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${p.status === "فعال" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>{p.status}</span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-sky-600 hover:text-sky-700 text-sm font-medium">ویرایش</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

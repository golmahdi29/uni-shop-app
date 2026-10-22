"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { HiOutlineShoppingBag, HiOutlineStar, HiOutlineEye, HiOutlineTrendingUp } from "react-icons/hi";

const topProducts = [
  { name: "هدفون بی سیم", فروش: 234, بازدید: 1890 },
  { name: "کیف چرم", فروش: 187, بازدید: 1450 },
  { name: "ساعت هوشمند", فروش: 156, بازدید: 2340 },
  { name: "کتاب برنامه نویسی", فروش: 142, بازدید: 980 },
  { name: "موس بی سیم", فروش: 98, بازدید: 1230 },
];

const categoryData = [
  { name: "الکترونیک", value: 38 },
  { name: "مد و پوشاک", value: 27 },
  { name: "کتاب", value: 18 },
  { name: "خانه", value: 12 },
  { name: "سایر", value: 5 },
];

const COLORS = ["#0284c7", "#059669", "#f59e0b", "#ef4444", "#8b5cf6"];

const stats = [
  { label: "کل محصولات", value: "532", icon: HiOutlineShoppingBag, color: "bg-amber-100 text-amber-600" },
  { label: "پرفروش ترین", value: "هدفون بی سیم", icon: HiOutlineTrendingUp, color: "bg-emerald-100 text-emerald-600" },
  { label: "میانگین امتیاز", value: "4.2", icon: HiOutlineStar, color: "bg-purple-100 text-purple-600" },
  { label: "بازدید کل", value: "124,500", icon: HiOutlineEye, color: "bg-blue-100 text-blue-600" },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">گزارش محصولات</h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-1">آمار و گزارش‌های محصولات</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color} mb-3`}>
                <Icon className="text-xl" />
              </div>
              <div className="text-lg md:text-xl font-bold text-neutral-800 mb-0.5">{s.value}</div>
              <div className="text-xs text-neutral-500">{s.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
          <h2 className="font-bold text-neutral-800 mb-4 text-sm md:text-base">پرفروش ترین محصولات</h2>
          <div dir="ltr" className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topProducts} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} stroke="#9ca3af" width={100} />
                <Tooltip />
                <Bar dataKey="فروش" fill="#0284c7" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
          <h2 className="font-bold text-neutral-800 mb-4 text-sm md:text-base">توزیع دسته بندی</h2>
          <div dir="ltr" className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({ name, value }) => `${name}: ${value}%`}>
                  {categoryData.map((_, idx) => (
                    <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

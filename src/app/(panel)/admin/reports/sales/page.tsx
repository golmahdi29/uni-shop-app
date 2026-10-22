"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line,
} from "recharts";
import { HiOutlineChartBar, HiOutlineCash, HiOutlineTrendingUp, HiOutlineClipboardList } from "react-icons/hi";

const monthlyData = [
  { name: "فروردین", فروش: 400, سفارش: 240 },
  { name: "اردیبهشت", فروش: 300, سفارش: 220 },
  { name: "خرداد", فروش: 520, سفارش: 290 },
  { name: "تیر", فروش: 480, سفارش: 310 },
  { name: "مرداد", فروش: 650, سفارش: 350 },
  { name: "شهریور", فروش: 580, سفارش: 380 },
];

const weeklyData = [
  { name: "شنبه", فروش: 45, سفارش: 12 },
  { name: "یکشنبه", فروش: 52, سفارش: 15 },
  { name: "دوشنبه", فروش: 38, سفارش: 10 },
  { name: "سه شنبه", فروش: 61, سفارش: 18 },
  { name: "چهارشنبه", فروش: 48, سفارش: 14 },
  { name: "پنجشنبه", فروش: 72, سفارش: 22 },
  { name: "جمعه", فروش: 35, سفارش: 8 },
];

const stats = [
  { label: "فروش کل", value: "2,850,000,000", icon: HiOutlineCash, color: "bg-emerald-100 text-emerald-600" },
  { label: "فروش ماه جاری", value: "580,000,000", icon: HiOutlineTrendingUp, color: "bg-blue-100 text-blue-600" },
  { label: "تعداد سفارشات", value: "1,243", icon: HiOutlineClipboardList, color: "bg-purple-100 text-purple-600" },
  { label: "میانگین فروش روزانه", value: "31,500,000", icon: HiOutlineChartBar, color: "bg-amber-100 text-amber-600" },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">گزارش فروش</h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-1">آمار و گزارش‌های فروش فروشگاه</p>
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
          <h2 className="font-bold text-neutral-800 mb-4 text-sm md:text-base">فروش ماهانه</h2>
          <div dir="ltr" className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
                <Tooltip />
                <Bar dataKey="فروش" fill="#0284c7" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
          <h2 className="font-bold text-neutral-800 mb-4 text-sm md:text-base">فروش هفتگی</h2>
          <div dir="ltr" className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
                <Tooltip />
                <Line type="monotone" dataKey="فروش" stroke="#0284c7" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="سفارش" stroke="#fb923c" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { HiOutlineUsers, HiOutlineUserAdd, HiOutlineUserRemove, HiOutlineEye } from "react-icons/hi";

const monthlyUsers = [
  { name: "فروردین", "کاربران": 120, "ثبت نام": 85 },
  { name: "اردیبهشت", "کاربران": 145, "ثبت نام": 92 },
  { name: "خرداد", "کاربران": 160, "ثبت نام": 110 },
  { name: "تیر", "کاربران": 140, "ثبت نام": 78 },
  { name: "مرداد", "کاربران": 185, "ثبت نام": 130 },
  { name: "شهریور", "کاربران": 170, "ثبت نام": 95 },
];

const genderData = [
  { name: "مرد", value: 58 },
  { name: "زن", value: 42 },
];

const COLORS = ["#0284c7", "#f472b6"];

const stats = [
  { label: "کل کاربران", value: "8,450", icon: HiOutlineUsers, color: "bg-blue-100 text-blue-600" },
  { label: "کاربران جدید (ماه)", value: "320", icon: HiOutlineUserAdd, color: "bg-emerald-100 text-emerald-600" },
  { label: "کاربران غیرفعال", value: "450", icon: HiOutlineUserRemove, color: "bg-red-100 text-red-600" },
  { label: "بازدید امروز", value: "1,230", icon: HiOutlineEye, color: "bg-purple-100 text-purple-600" },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">گزارش کاربران</h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-1">آمار و گزارش‌های کاربران</p>
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
          <h2 className="font-bold text-neutral-800 mb-4 text-sm md:text-base">ثبت نام کاربران</h2>
          <div dir="ltr" className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyUsers}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#9ca3af" />
                <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
                <Tooltip />
                <Bar dataKey={"کاربران"} fill="#0284c7" radius={[4, 4, 0, 0]} />
                <Bar dataKey={"ثبت نام"} fill="#38bdf8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
          <h2 className="font-bold text-neutral-800 mb-4 text-sm md:text-base">جنسیت کاربران</h2>
          <div dir="ltr" className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={genderData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" label={({ name, value }) => `${name}: ${value}%`}>
                  {genderData.map((_, idx) => (
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

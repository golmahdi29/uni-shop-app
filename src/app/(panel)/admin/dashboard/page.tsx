"use client";

import {
  HiOutlineShoppingBag,
  HiOutlineClipboardList,
  HiOutlineUsers,
  HiOutlineCash,
  HiOutlineEye,
  HiOutlineArrowLeft,
} from "react-icons/hi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  { label: "فروش کل", value: "۲,۸۵۰,۰۰۰,۰۰۰", change: "+۱۲%", icon: HiOutlineCash, color: "bg-emerald-100 text-emerald-600" },
  { label: "سفارشات", value: "۱,۲۴۳", change: "+۸%", icon: HiOutlineClipboardList, color: "bg-blue-100 text-blue-600" },
  { label: "کاربران", value: "۸,۴۵۰", change: "+۲۳%", icon: HiOutlineUsers, color: "bg-purple-100 text-purple-600" },
  { label: "محصولات", value: "۵۳۲", change: "+۵%", icon: HiOutlineShoppingBag, color: "bg-amber-100 text-amber-600" },
];

const chartData = [
  { name: "فروردین", فروش: 400, سفارش: 240 },
  { name: "اردیبهشت", فروش: 300, سفارش: 220 },
  { name: "خرداد", فروش: 520, سفارش: 290 },
  { name: "تیر", فروش: 480, سفارش: 310 },
  { name: "مرداد", فروش: 650, سفارش: 350 },
  { name: "شهریور", فروش: 580, سفارش: 380 },
];

const recentOrders = [
  { id: "ORD-۱۰۲۴", customer: "علی محمدی", date: "۱۴۰۵/۰۳/۲۵", total: "۲,۴۵۰,۰۰۰", status: "تحویل شده" },
  { id: "ORD-۱۰۲۳", customer: "سارا احمدی", date: "۱۴۰۵/۰۳/۲۴", total: "۸۷۵,۰۰۰", status: "در حال ارسال" },
  { id: "ORD-۱۰۲۲", customer: "رضا کریمی", date: "۱۴۰۵/۰۳/۲۴", total: "۳,۲۰۰,۰۰۰", status: "در انتظار" },
  { id: "ORD-۱۰۲۱", customer: "مریم حسینی", date: "۱۴۰۵/۰۳/۲۳", total: "۱,۵۴۰,۰۰۰", status: "تحویل شده" },
  { id: "ORD-۱۰۲۰", customer: "امیر رضایی", date: "۱۴۰۵/۰۳/۲۳", total: "۴,۸۰۰,۰۰۰", status: "لغو شده" },
];

const statusStyles: Record<string, string> = {
  "تحویل شده": "bg-emerald-100 text-emerald-700",
  "در حال ارسال": "bg-blue-100 text-blue-700",
  "در انتظار": "bg-amber-100 text-amber-700",
  "لغو شده": "bg-red-100 text-red-700",
};

function formatPrice(price: number) {
  return price.toLocaleString("fa-IR");
}

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-800">داشبورد</h1>
        <p className="text-sm text-neutral-500 mt-1">نمای کلی فروشگاه</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon className="text-xl" />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-lg">
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-neutral-800 mb-0.5">{stat.value}</div>
              <div className="text-xs text-neutral-500">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-neutral-800">نمودار فروش</h2>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                فروش
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                سفارشات
              </span>
            </div>
          </div>
          <div dir="ltr" className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
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

        <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
          <h2 className="font-bold text-neutral-800 mb-4">دسترسی سریع</h2>
          <div className="space-y-2">
            {[
              { label: "مدیریت محصولات", icon: HiOutlineShoppingBag, href: "/panel/products" },
              { label: "مدیریت سفارشات", icon: HiOutlineClipboardList, href: "/panel/orders" },
              { label: "مدیریت کاربران", icon: HiOutlineUsers, href: "/panel/users" },
              { label: "تنظیمات سایت", icon: HiOutlineEye, href: "/admin/all-site-options" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-neutral-50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-lg text-neutral-500" />
                    <span className="text-sm text-neutral-700">{item.label}</span>
                  </div>
                  <HiOutlineArrowLeft className="text-base text-neutral-300 group-hover:text-neutral-500 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-neutral-800">سفارشات اخیر</h2>
          <a href="/panel/orders" className="text-sm text-sky-600 hover:text-sky-700 font-medium">
            مشاهده همه
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100">
                <th className="text-right py-3 px-3 text-neutral-500 font-medium">شناسه</th>
                <th className="text-right py-3 px-3 text-neutral-500 font-medium">مشتری</th>
                <th className="text-right py-3 px-3 text-neutral-500 font-medium">تاریخ</th>
                <th className="text-right py-3 px-3 text-neutral-500 font-medium">مبلغ</th>
                <th className="text-right py-3 px-3 text-neutral-500 font-medium">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-3 font-medium text-neutral-800">{order.id}</td>
                  <td className="py-3 px-3 text-neutral-600">{order.customer}</td>
                  <td className="py-3 px-3 text-neutral-500">{order.date}</td>
                  <td className="py-3 px-3 text-neutral-800">{order.total} تومان</td>
                  <td className="py-3 px-3">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${statusStyles[order.status]}`}>
                      {order.status}
                    </span>
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

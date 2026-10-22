"use client";

import { HiOutlineCash, HiOutlineTrendingUp, HiOutlineTrendingDown, HiOutlineCreditCard } from "react-icons/hi";

const stats = [
  { label: "درآمد کل", value: "2,850,000,000", change: "+12%", icon: HiOutlineCash, color: "bg-emerald-100 text-emerald-600" },
  { label: "درآمد امروز", value: "12,450,000", change: "+5%", icon: HiOutlineTrendingUp, color: "bg-blue-100 text-blue-600" },
  { label: "بازگشت وجه", value: "23,500,000", change: "-3%", icon: HiOutlineTrendingDown, color: "bg-red-100 text-red-600" },
  { label: "کارمزد درگاه", value: "5,700,000", change: "+8%", icon: HiOutlineCreditCard, color: "bg-purple-100 text-purple-600" },
];

const transactions = [
  { id: "TRX-8921", desc: "فروش محصولات", amount: "+2,450,000", date: "1405/03/25", type: "واریز" },
  { id: "TRX-8920", desc: "بازگشت وجه سفارش ORD-1015", amount: "-875,000", date: "1405/03/24", type: "برداشت" },
  { id: "TRX-8919", desc: "فروش محصولات", amount: "+3,200,000", date: "1405/03/24", type: "واریز" },
  { id: "TRX-8918", desc: "کارمزد درگاه پرداخت", amount: "-48,000", date: "1405/03/23", type: "کارمزد" },
  { id: "TRX-8917", desc: "فروش محصولات", amount: "+1,540,000", date: "1405/03/23", type: "واریز" },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">مالی</h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت امور مالی</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}>
                  <Icon className="text-xl" />
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-lg ${s.change.startsWith("+") ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                  {s.change}
                </span>
              </div>
              <div className="text-lg md:text-xl font-bold text-neutral-800 mb-0.5">{s.value}</div>
              <div className="text-xs text-neutral-500">{s.label}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <div className="p-4 md:p-5 border-b border-neutral-100">
          <h2 className="font-bold text-neutral-800 text-sm md:text-base">تراکنش‌های اخیر</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">شناسه</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">شرح</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">مبلغ</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">تاریخ</th>
                <th className="py-3 px-4" />
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-neutral-800">{t.id}</td>
                  <td className="py-3 px-4 text-neutral-600">{t.desc}</td>
                  <td className={`py-3 px-4 font-medium ${t.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}>{t.amount} تومان</td>
                  <td className="py-3 px-4 text-neutral-500">{t.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${t.type === "واریز" ? "bg-green-100 text-green-700" : t.type === "برداشت" ? "bg-red-100 text-red-700" : "bg-neutral-100 text-neutral-600"}`}>
                      {t.type}
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

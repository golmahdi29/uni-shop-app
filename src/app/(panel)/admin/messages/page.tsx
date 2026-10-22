"use client";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
const messages = [
  { name: "محمد رضایی", subject: "سوال درباره نحوه بازگشت کالا", email: "mohamad@example.com", date: "1405/03/25", read: false },
  { name: "فاطمه مرادی", subject: "پیگیری سفارش شماره ORD-1024", email: "fateme@example.com", date: "1405/03/24", read: false },
  { name: "علی کریمی", subject: "پیشنهاد همکاری", email: "ali.karimi@example.com", date: "1405/03/23", read: true },
  { name: "زهرا احمدی", subject: "مشکل در پرداخت اینترنتی", email: "zahra@example.com", date: "1405/03/22", read: true },
  { name: "حسین موسوی", subject: "درخواست لغو سفارش", email: "hosein@example.com", date: "1405/03/21", read: false },
];
export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">پیام‌ها</h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-1">پیام‌های دریافتی از کاربران</p>
      </div>
      <div className="space-y-2">
        {messages.map((m) => (
          <div key={m.email + m.subject} className={`bg-white border border-neutral-200 rounded-xl p-4 md:p-5 hover:shadow-sm transition-shadow cursor-pointer ${!m.read ? "border-r-2 border-r-sky-500" : ""}`}>
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${m.read ? "bg-neutral-100 text-neutral-500" : "bg-sky-100 text-sky-600"}`}>
                {m.read ? <HiOutlineMailOpen className="text-lg" /> : <HiOutlineMail className="text-lg" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="font-medium text-neutral-800 text-sm md:text-base">{m.name}</span>
                    <span className="text-xs text-neutral-400 mx-2">•</span>
                    <span className={`text-sm ${m.read ? "text-neutral-500" : "text-neutral-800 font-medium"}`}>{m.subject}</span>
                  </div>
                  <span className="text-xs text-neutral-400 shrink-0">{m.date}</span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">{m.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

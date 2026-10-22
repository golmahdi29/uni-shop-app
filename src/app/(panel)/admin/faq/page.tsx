"use client";
import { useState } from "react";
import { HiOutlinePlus, HiOutlineChevronDown } from "react-icons/hi";
const faqs = [
  { q: "چگونه می‌توانم سفارش خود را ثبت کنم؟", a: "برای ثبت سفارش کافیست محصول مورد نظر خود را به سبد خرید اضافه کرده و مراحل ثبت سفارش را طی کنید." },
  { q: "مدت زمان ارسال سفارش چقدر است؟", a: "سفارشات معمولاً بین ۳ تا ۵ روز کاری تحویل داده می‌شوند." },
  { q: "چگونه می‌توانم کالا را بازگردانی کنم؟", a: "تا ۷ روز پس از دریافت سفارش، امکان بازگردانی کالا وجود دارد." },
  { q: "روش‌های پرداخت کدامند؟", a: "پرداخت آنلاین از طریق درگاه‌های بانکی، پرداخت در محل و کارت به کارت." },
];
export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-neutral-800">سوالات متداول</h1>
          <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت سوالات متداول</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium transition-colors self-start sm:self-auto">
          <HiOutlinePlus className="text-lg" />
          <span>افزودن سوال</span>
        </button>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
            <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex items-center justify-between px-4 md:px-6 py-4 text-right">
              <span className="font-medium text-neutral-800 text-sm md:text-base">{faq.q}</span>
              <HiOutlineChevronDown className={`text-neutral-400 text-lg transition-transform ${openIndex === idx ? "rotate-180" : ""}`} />
            </button>
            {openIndex === idx && (
              <div className="px-4 md:px-6 pb-4">
                <p className="text-sm text-neutral-600 leading-7 border-t border-neutral-100 pt-3">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

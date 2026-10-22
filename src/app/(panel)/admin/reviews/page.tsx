"use client";
import { HiOutlineStar } from "react-icons/hi";
const reviews = [
  { user: "علی محمدی", product: "هدفون بی سیم", rating: 5, content: "کیفیت عالی، صدای بسیار خوبی داره. خرید فوق العاده‌ای بود.", date: "1405/03/20", status: "تایید شده" },
  { user: "سارا احمدی", product: "کیف چرم", rating: 4, content: "کیفیت خوبی داره اما نسبت به قیمت کمی انتظار بیشتری داشتم.", date: "1405/03/18", status: "تایید شده" },
  { user: "رضا کریمی", product: "موس بی سیم", rating: 2, content: "بعد از یک هفته کار نکرد. پشتیبانی پیگیری نکرد.", date: "1405/03/15", status: "در انتظار" },
  { user: "مریم حسینی", product: "کتاب برنامه نویسی", rating: 5, content: "کتاب بسیار عالی و جامع. پیشنهاد می‌کنم حتما بخونید.", date: "1405/03/12", status: "تایید شده" },
  { user: "امیر رضایی", product: "ساعت هوشمند", rating: 3, content: "ظاهر خوبی داره اما باتری ضعیف عمل می‌کنه.", date: "1405/03/10", status: "رد شده" },
];
const statusStyles: Record<string, string> = { "تایید شده": "bg-emerald-100 text-emerald-700", "در انتظار": "bg-amber-100 text-amber-700", "رد شده": "bg-red-100 text-red-700" };
export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">نظرات</h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت نظرات محصولات</p>
      </div>
      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r.user + r.product} className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-medium text-neutral-800 text-sm md:text-base">{r.user}</span>
                  <span className="text-xs text-neutral-400">برای</span>
                  <span className="text-sm text-sky-600">{r.product}</span>
                </div>
                <div className="flex items-center gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <HiOutlineStar key={i} className={`text-base ${i < r.rating ? "text-amber-400 fill-amber-400" : "text-neutral-200"}`} />
                  ))}
                </div>
                <p className="text-sm text-neutral-600 leading-7">{r.content}</p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${statusStyles[r.status]}`}>{r.status}</span>
                <span className="text-xs text-neutral-400">{r.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

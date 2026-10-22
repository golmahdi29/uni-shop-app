"use client";
const colors = [
  { label: "رنگ اصلی", key: "primary", value: "#0284c7" },
  { label: "رنگ ثانویه", key: "secondary", value: "#059669" },
  { label: "رنگ متن", key: "text", value: "#1f2937" },
  { label: "رنگ پس زمینه", key: "bg", value: "#fafafa" },
  { label: "رنگ هدر", key: "header", value: "#ffffff" },
  { label: "رنگ فوتر", key: "footer", value: "#1e293b" },
];
export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">ظاهر سایت</h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-1">تنظیمات ظاهری سایت</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-6 space-y-5">
          <h2 className="font-bold text-neutral-800 text-sm md:text-base pb-3 border-b border-neutral-100">رنگ‌ها</h2>
          <div className="grid grid-cols-2 gap-4">
            {colors.map((c) => (
              <div key={c.key}>
                <label className="block text-xs text-neutral-600 mb-1.5">{c.label}</label>
                <div className="flex items-center gap-2">
                  <input type="color" defaultValue={c.value} className="w-9 h-9 p-0.5 rounded-lg border border-neutral-300 cursor-pointer" />
                  <span className="text-xs text-neutral-400">{c.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-6 space-y-5">
          <h2 className="font-bold text-neutral-800 text-sm md:text-base pb-3 border-b border-neutral-100">تنظیمات صفحه اصلی</h2>
          <div>
            <label className="block text-xs text-neutral-600 mb-1.5">طرح صفحه اصلی</label>
            <select className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm bg-white text-neutral-700">
              <option>پیش‌فرض</option>
              <option>تمام عرض</option>
              <option>جعبه‌ای</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-neutral-600 mb-1.5">تعداد ستون محصولات</label>
            <select className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm bg-white text-neutral-700">
              <option>4 ستون</option>
              <option>3 ستون</option>
              <option>2 ستون</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-neutral-600 mb-1.5">نمایش تخفیف‌ها در صفحه اصلی</label>
            <div className="flex items-center gap-3 mt-1">
              <label className="flex items-center gap-1.5 text-sm text-neutral-700">
                <input type="radio" name="showDiscounts" defaultChecked className="accent-sky-600" /> بله
              </label>
              <label className="flex items-center gap-1.5 text-sm text-neutral-700">
                <input type="radio" name="showDiscounts" className="accent-sky-600" /> خیر
              </label>
            </div>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-6 space-y-5">
          <h2 className="font-bold text-neutral-800 text-sm md:text-base pb-3 border-b border-neutral-100">فونت</h2>
          <div>
            <label className="block text-xs text-neutral-600 mb-1.5">فونت اصلی</label>
            <select className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm bg-white text-neutral-700">
              <option>وزیر</option>
              <option>ایران سنس</option>
              <option>یکان</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-neutral-600 mb-1.5">اندازه فونت</label>
            <select className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm bg-white text-neutral-700">
              <option>متوسط (14px)</option>
              <option>کوچک (12px)</option>
              <option>بزرگ (16px)</option>
            </select>
          </div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-6 space-y-5">
          <h2 className="font-bold text-neutral-800 text-sm md:text-base pb-3 border-b border-neutral-100">لوگو و هدر</h2>
          <div>
            <label className="block text-xs text-neutral-600 mb-1.5">تصویر لوگو</label>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-neutral-100 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-400 text-xs">لوگو</div>
              <button className="px-4 py-2 border border-neutral-300 rounded-xl text-sm text-neutral-600 hover:bg-neutral-50 transition-colors">آپلود</button>
            </div>
          </div>
          <div>
            <label className="block text-xs text-neutral-600 mb-1.5">نوع هدر</label>
            <select className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm bg-white text-neutral-700">
              <option>چسبنده</option>
              <option>ثابت</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

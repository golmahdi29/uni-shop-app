"use client";
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
const sliders = [
  { title: "حراج تابستانه", subtitle: "تا 50% تخفیف", active: true, order: 1 },
  { title: "محصولات جدید", subtitle: "جدیدترین محصولات فروشگاه", active: true, order: 2 },
  { title: "ارسال رایگان", subtitle: "برای سفارش‌های بالای 500 هزار تومان", active: false, order: 3 },
];
export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-neutral-800">اسلایدها</h1>
          <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت اسلایدهای صفحه اصلی</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium transition-colors self-start sm:self-auto">
          <HiOutlinePlus className="text-lg" />
          <span>افزودن اسلاید</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sliders.map((s) => (
          <div key={s.title} className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold text-neutral-700">{s.title}</div>
                <div className="text-sm text-neutral-500 mt-1">{s.subtitle}</div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${s.active ? "bg-emerald-500" : "bg-neutral-300"}`} />
                <span className="text-xs text-neutral-500">{s.active ? "فعال" : "غیرفعال"}</span>
                <span className="text-xs text-neutral-300 mx-1">|</span>
                <span className="text-xs text-neutral-500">اولویت {s.order}</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-500"><HiOutlinePencil /></button>
                <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500"><HiOutlineTrash /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

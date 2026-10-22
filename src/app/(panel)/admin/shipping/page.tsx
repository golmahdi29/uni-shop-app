"use client";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
const methods = [
  { name: "پست پیشتاز", cost: "45,000", estimated: "3 تا 5 روز", active: true },
  { name: "تیپاکس", cost: "80,000", estimated: "2 تا 3 روز", active: true },
  { name: "پیک موتوری (تهران)", cost: "35,000", estimated: "24 ساعت", active: true },
  { name: "ارسال بین المللی", cost: "350,000", estimated: "7 تا 14 روز", active: false },
];
export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">روش‌های ارسال</h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت روش‌های ارسال</p>
      </div>
      <div className="space-y-3">
        {methods.map((m) => (
          <div key={m.name} className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full ${m.active ? "bg-emerald-500" : "bg-neutral-300"}`} />
                  <h3 className="font-medium text-neutral-800 text-sm md:text-base">{m.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-lg ${m.active ? "bg-emerald-100 text-emerald-700" : "bg-neutral-100 text-neutral-500"}`}>{m.active ? "فعال" : "غیرفعال"}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-500 mt-1">
                  <span>هزینه: {m.cost} تومان</span>
                  <span>زمان تحویل: {m.estimated}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button className="p-2 rounded-lg hover:bg-neutral-100 text-neutral-500"><HiOutlinePencil /></button>
                <button className="p-2 rounded-lg hover:bg-red-50 text-red-500"><HiOutlineTrash /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

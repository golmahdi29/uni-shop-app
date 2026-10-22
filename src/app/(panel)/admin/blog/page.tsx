"use client";
import { HiOutlinePlus } from "react-icons/hi";
const articles = [
  { title: "10 نکته برای خرید آنلاین", author: "مدیریت", date: "1405/03/22", views: 1234, status: "منتشر شده" },
  { title: "راهنمای انتخاب هدفون", author: "مدیریت", date: "1405/03/18", views: 890, status: "منتشر شده" },
  { title: "ترندهای مد پاییز 1405", author: "مدیریت", date: "1405/03/10", views: 1567, status: "منتشر شده" },
  { title: "مقایسه ساعت‌های هوشمند", author: "مدیریت", date: "1405/02/28", views: 678, status: "پیش نویس" },
  { title: "نحوه ثبت سفارش در فروشگاه", author: "مدیریت", date: "1405/02/15", views: 2345, status: "منتشر شده" },
];
export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-neutral-800">مقالات</h1>
          <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت مقالات وبلاگ</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium transition-colors self-start sm:self-auto">
          <HiOutlinePlus className="text-lg" />
          <span>مقاله جدید</span>
        </button>
      </div>
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">عنوان</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">نویسنده</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">تاریخ</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">بازدید</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">وضعیت</th>
                <th className="py-3 px-4" />
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => (
                <tr key={a.title} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-neutral-800">{a.title}</td>
                  <td className="py-3 px-4 text-neutral-500">{a.author}</td>
                  <td className="py-3 px-4 text-neutral-500">{a.date}</td>
                  <td className="py-3 px-4 text-neutral-700">{a.views.toLocaleString("fa-IR")}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${a.status === "منتشر شده" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{a.status}</span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-sky-600 hover:text-sky-700 text-sm font-medium">ویرایش</button>
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

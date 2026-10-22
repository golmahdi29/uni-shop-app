"use client";
import { HiOutlinePlus } from "react-icons/hi";
const pages = [
  { title: "درباره ما", slug: "/about", updated: "1405/03/20", status: "منتشر شده" },
  { title: "تماس با ما", slug: "/contact-us", updated: "1405/03/18", status: "منتشر شده" },
  { title: "قوانین و مقررات", slug: "/rules", updated: "1405/02/10", status: "منتشر شده" },
  { title: "حریم خصوصی", slug: "/privacy", updated: "1404/12/25", status: "منتشر شده" },
  { title: "سوالات متداول", slug: "/faq", updated: "1405/01/05", status: "پیش نویس" },
  { title: "درباره تیم ما", slug: "/about-team", updated: "1404/08/15", status: "پیش نویس" },
];
export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-neutral-800">برگه‌ها</h1>
          <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت برگه‌های سایت</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium transition-colors self-start sm:self-auto">
          <HiOutlinePlus className="text-lg" />
          <span>برگه جدید</span>
        </button>
      </div>
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">عنوان</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">آدرس</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">آخرین ویرایش</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">وضعیت</th>
                <th className="py-3 px-4" />
              </tr>
            </thead>
            <tbody>
              {pages.map((p) => (
                <tr key={p.slug} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-neutral-800">{p.title}</td>
                  <td className="py-3 px-4 text-neutral-500 text-xs">{p.slug}</td>
                  <td className="py-3 px-4 text-neutral-500">{p.updated}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${p.status === "منتشر شده" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{p.status}</span>
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

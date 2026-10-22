"use client";
const discounts = [
  { code: "SUMMER1404", type: "درصدی", value: "20%", usage: 142, max: 500, expiry: "1405/06/30", status: "فعال" },
  { code: "WELCOME10", type: "مبلغی", value: "50,000", usage: 89, max: 200, expiry: "1405/12/29", status: "فعال" },
  { code: "FALL1404", type: "درصدی", value: "15%", usage: 34, max: 300, expiry: "1404/09/30", status: "منقضی" },
  { code: "VIP500", type: "مبلغی", value: "500,000", usage: 5, max: 50, expiry: "1405/08/15", status: "فعال" },
  { code: "BLACKFRIDAY", type: "درصدی", value: "40%", usage: 215, max: 1000, expiry: "1404/08/30", status: "منقضی" },
];
export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-neutral-800">تخفیف‌ها</h1>
          <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت کدهای تخفیف و حراجی</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium transition-colors self-start sm:self-auto">
          <span>افزودن تخفیف</span>
        </button>
      </div>
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">کد</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">نوع</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">مقدار</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">مصرف</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">انقضا</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">وضعیت</th>
                <th className="py-3 px-4" />
              </tr>
            </thead>
            <tbody>
              {discounts.map((d) => (
                <tr key={d.code} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-neutral-800">{d.code}</td>
                  <td className="py-3 px-4 text-neutral-500">{d.type}</td>
                  <td className="py-3 px-4 text-neutral-800">{d.value}</td>
                  <td className="py-3 px-4 text-neutral-600">{d.usage}/{d.max}</td>
                  <td className="py-3 px-4 text-neutral-500">{d.expiry}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${d.status === "فعال" ? "bg-emerald-100 text-emerald-700" : "bg-neutral-100 text-neutral-500"}`}>{d.status}</span>
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

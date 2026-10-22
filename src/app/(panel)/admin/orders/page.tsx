"use client";
const orders = [
  { id: "ORD-1024", customer: "علی محمدی", date: "1405/03/25", items: 3, total: "2,450,000", status: "تحویل شده" },
  { id: "ORD-1023", customer: "سارا احمدی", date: "1405/03/24", items: 1, total: "875,000", status: "در حال ارسال" },
  { id: "ORD-1022", customer: "رضا کریمی", date: "1405/03/24", items: 5, total: "3,200,000", status: "در انتظار" },
  { id: "ORD-1021", customer: "مریم حسینی", date: "1405/03/23", items: 2, total: "1,540,000", status: "تحویل شده" },
  { id: "ORD-1020", customer: "امیر رضایی", date: "1405/03/23", items: 4, total: "4,800,000", status: "لغو شده" },
  { id: "ORD-1019", customer: "زهرا موسوی", date: "1405/03/22", items: 2, total: "960,000", status: "در حال ارسال" },
  { id: "ORD-1018", customer: "حسین جعفری", date: "1405/03/22", items: 1, total: "320,000", status: "تحویل شده" },
];
const statusStyles: Record<string, string> = { "تحویل شده": "bg-emerald-100 text-emerald-700", "در حال ارسال": "bg-blue-100 text-blue-700", "در انتظار": "bg-amber-100 text-amber-700", "لغو شده": "bg-red-100 text-red-700" };
export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">سفارشات</h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت سفارشات مشتریان</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">شناسه</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">مشتری</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">تاریخ</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">تعداد</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">مبلغ</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">وضعیت</th>
                <th className="py-3 px-4" />
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-neutral-800">{o.id}</td>
                  <td className="py-3 px-4 text-neutral-600">{o.customer}</td>
                  <td className="py-3 px-4 text-neutral-500">{o.date}</td>
                  <td className="py-3 px-4 text-neutral-700">{o.items}</td>
                  <td className="py-3 px-4 text-neutral-800 font-medium">{o.total} تومان</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${statusStyles[o.status]}`}>{o.status}</span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-sky-600 hover:text-sky-700 text-sm font-medium">جزئیات</button>
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

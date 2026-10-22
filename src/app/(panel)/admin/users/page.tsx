"use client";
const users = [
  { name: "علی محمدی", email: "ali@example.com", phone: "09123456789", orders: 12, joined: "1403/05/10", status: "فعال" },
  { name: "سارا احمدی", email: "sara@example.com", phone: "09123456788", orders: 5, joined: "1404/01/22", status: "فعال" },
  { name: "رضا کریمی", email: "reza@example.com", phone: "09123456787", orders: 8, joined: "1403/11/05", status: "فعال" },
  { name: "مریم حسینی", email: "maryam@example.com", phone: "09123456786", orders: 0, joined: "1405/02/14", status: "مسدود" },
  { name: "امیر رضایی", email: "amir@example.com", phone: "09123456785", orders: 23, joined: "1402/08/20", status: "فعال" },
];
export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">کاربران</h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت کاربران سایت</p>
      </div>
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">نام</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">ایمیل</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">موبایل</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">سفارشات</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">تاریخ عضویت</th>
                <th className="text-right py-3 px-4 text-neutral-500 font-medium">وضعیت</th>
                <th className="py-3 px-4" />
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.email} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-neutral-800">{u.name}</td>
                  <td className="py-3 px-4 text-neutral-500">{u.email}</td>
                  <td className="py-3 px-4 text-neutral-600">{u.phone}</td>
                  <td className="py-3 px-4 text-neutral-700">{u.orders}</td>
                  <td className="py-3 px-4 text-neutral-500">{u.joined}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${u.status === "فعال" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>{u.status}</span>
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

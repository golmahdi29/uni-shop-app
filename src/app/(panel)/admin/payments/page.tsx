"use client";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";
const gateways = [
  { name: "زرین‌پال", connected: true, since: "1403/01/15" },
  { name: "ملی (به پرداخت)", connected: true, since: "1403/03/22" },
  { name: "آیدی پی", connected: false, since: "" },
  { name: "پی‌لینک", connected: false, since: "" },
];
export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">درگاه‌های پرداخت</h1>
        <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت درگاه‌های پرداخت</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gateways.map((g) => (
          <div key={g.name} className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${g.connected ? "bg-emerald-100" : "bg-neutral-100"}`}>
                  {g.connected ? <HiOutlineCheckCircle className="text-2xl text-emerald-600" /> : <HiOutlineXCircle className="text-2xl text-neutral-400" />}
                </div>
                <div>
                  <h3 className="font-medium text-neutral-800 text-sm md:text-base">{g.name}</h3>
                  {g.connected ? <p className="text-xs text-neutral-400 mt-0.5">متصل از {g.since}</p> : <p className="text-xs text-neutral-400 mt-0.5">متصل نیست</p>}
                </div>
              </div>
              <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${g.connected ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-sky-50 text-sky-600 hover:bg-sky-100"}`}>
                {g.connected ? "قطع اتصال" : "اتصال"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

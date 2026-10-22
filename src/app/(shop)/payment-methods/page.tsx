import { HiOutlineCreditCard } from "react-icons/hi2";
import { PiBankThin } from "react-icons/pi";
import { TbCash } from "react-icons/tb";

const methods = [
  {
    icon: HiOutlineCreditCard,
    title: "پرداخت آنلاین",
    desc: "پرداخت امن با تمام کارت‌های عضو شتاب از طریق درگاه پرداخت معتبر زرین‌پال",
  },
  {
    icon: PiBankThin,
    title: "کارت به کارت",
    desc: "واریز وجه به حساب بانکی دومینور و ثبت فیش واریز در حساب کاربری",
  },
  {
    icon: TbCash,
    title: "پرداخت در محل",
    desc: "امکان پرداخت نقدی هنگام دریافت سفارش برای شهر تهران",
  },
];

export default function Page() {
  return (
    <div className="my-20">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
        شیوه‌های پرداخت
      </h1>
      <p className="text-neutral-500 text-sm mb-12">
        روش‌های متنوع و امن برای پرداخت در دومینور
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {methods.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-neutral-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <item.icon className="text-sky-600 text-2xl" />
            </div>
            <h3 className="font-bold text-neutral-800 mb-2 text-lg">{item.title}</h3>
            <p className="text-neutral-600 text-sm leading-7">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

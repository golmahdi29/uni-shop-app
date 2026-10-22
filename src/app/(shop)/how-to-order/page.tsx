const steps = [
  {
    title: "مشاهده و انتخاب محصول",
    desc: "پس از ورود به سایت، محصول مورد نظر خود را از دسته‌بندی‌های مختلف جستجو کنید. با کلیک روی هر محصول می‌توانید جزئیات، قیمت و مشخصات آن را مشاهده کنید.",
  },
  {
    title: "افزودن به سبد خرید",
    desc: "پس از انتخاب محصول، با کلیک روی دکمه «افزودن به سبد خرید»، محصول به سبد خرید شما اضافه می‌شود. می‌توانید تعداد مورد نظر خود را تغییر دهید.",
  },
  {
    title: "تکمیل اطلاعات و ثبت سفارش",
    desc: "وارد سبد خرید شده و پس از اعمال کد تخفیف (در صورت وجود)، آدرس تحویل را وارد کرده و روش پرداخت خود را انتخاب نمایید. در نهایت با کلیک روی دکمه «ثبت سفارش»، سفارش شما نهایی می‌شود.",
  },
  {
    title: "پیگیری سفارش",
    desc: "پس از ثبت سفارش، کد رهگیری برای شما ارسال می‌شود. می‌توانید از طریق حساب کاربری خود وضعیت سفارش را در هر مرحله پیگیری کنید.",
  },
];

export default function Page() {
  return (
    <div className="my-20">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
        نحوه ثبت سفارش
      </h1>
      <p className="text-neutral-600 mb-10 leading-7">
        ثبت سفارش در دومینور بسیار ساده است. کافیست مراحل زیر را به ترتیب دنبال کنید.
      </p>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-neutral-200 rounded-xl p-6 flex gap-5 items-start"
          >
            <span className="w-10 h-10 shrink-0 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              {index + 1}
            </span>
            <div>
              <h2 className="font-bold text-neutral-800 mb-2">{step.title}</h2>
              <p className="text-neutral-600 text-sm leading-7">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

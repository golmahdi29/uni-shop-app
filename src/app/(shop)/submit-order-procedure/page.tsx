const steps = [
  {
    title: "مرحله اول: ثبت سفارش",
    desc: "پس از انتخاب کالاهای مورد نظر و تکمیل سبد خرید، اطلاعات خود را وارد کرده و سفارش خود را نهایی کنید.",
  },
  {
    title: "مرحله دوم: تایید و پرداخت",
    desc: "پس از ثبت سفارش، به درگاه پرداخت هدایت می‌شوید. پس از پرداخت موفق، سفارش شما ثبت و تایید می‌گردد.",
  },
  {
    title: "مرحله سوم: بسته‌بندی و تحویل به پست",
    desc: "سفارش شما پس از تایید، توسط تیم دومینور بسته‌بندی شده و برای ارسال به پست تحویل داده می‌شود.",
  },
  {
    title: "مرحله چهارم: پیگیری و دریافت",
    desc: "کد رهگیری مرسوله از طریق پیامک برای شما ارسال می‌شود و می‌توانید وضعیت سفارش خود را پیگیری کنید.",
  },
];

const shippingMethods = [
  {
    title: "ارسال عادی (پست پیشتاز)",
    desc: "تحویل ۳ تا ۵ روز کاری پس از ثبت سفارش. هزینه ارسال بر اساس وزن و مقصد محاسبه می‌شود.",
  },
  {
    title: "ارسال فوری (پیک)",
    desc: "تحویل ۲۴ تا ۴۸ ساعت پس از ثبت سفارش (فقط برای تهران و برخی کلان‌شهرها).",
  },
  {
    title: "ارسال رایگان",
    desc: "برای سفارش‌های بالای ۵۰۰ هزار تومان، هزینه ارسال رایگان خواهد بود.",
  },
];

const notes = [
  "سفارش‌های ثبت شده از شنبه تا چهارشنبه، روز بعد پردازش می‌شوند.",
  "سفارش‌های ثبت شده در روزهای پنج‌شنبه و جمعه، روز شنبه پردازش خواهند شد.",
  "کد رهگیری مرسوله حداکثر ۲۴ ساعت پس از تحویل به پست برای شما ارسال می‌شود.",
  "در صورت ناقص بودن آدرس، سفارش تا تکمیل اطلاعات توسط مشتری پردازش نخواهد شد.",
  "امکان تغییر آدرس تحویل تنها تا قبل از مرحله بسته‌بندی وجود دارد.",
];

export default function Page() {
  return (
    <div className="my-20">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
        رویه ارسال سفارش
      </h1>
      <p className="text-neutral-600 text-sm leading-7 mb-10">
        پس از ثبت سفارش، فرآیند ارسال کالا طی مراحل زیر انجام می‌شود. شما
        می‌توانید از طریق کد رهگیری، سفارش خود را پیگیری کنید.
      </p>

      {/* Steps */}
      <h2 className="text-xl font-bold text-neutral-800 mb-6">
        مراحل ارسال سفارش
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-neutral-200 rounded-xl p-5"
          >
            <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
              {index + 1}
            </span>
            <h3 className="font-bold text-neutral-800 mb-2">{step.title}</h3>
            <p className="text-neutral-600 text-sm leading-7">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Shipping Methods */}
      <h2 className="text-xl font-bold text-neutral-800 mb-6">
        روش‌های ارسال
      </h2>
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {shippingMethods.map((method, index) => (
          <div
            key={index}
            className="bg-white border border-neutral-200 rounded-xl p-5"
          >
            <h3 className="font-bold text-neutral-800 mb-2">{method.title}</h3>
            <p className="text-neutral-600 text-sm leading-7">{method.desc}</p>
          </div>
        ))}
      </div>

      {/* Notes */}
      <h2 className="text-xl font-bold text-neutral-800 mb-6">
        نکات مهم
      </h2>
      <div className="bg-white border border-neutral-200 rounded-xl p-5 space-y-3">
        {notes.map((item, index) => (
          <div
            key={index}
            className="text-neutral-600 text-sm leading-7 flex items-start gap-2"
          >
            <span className="text-sky-600 mt-1.5 shrink-0">•</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

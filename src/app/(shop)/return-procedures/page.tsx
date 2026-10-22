const steps = [
  {
    title: "مرحله اول: ثبت درخواست",
    desc: "وارد حساب کاربری خود شوید و از بخش سفارش‌های قبلی، گزینه درخواست بازگرداندن کالا را انتخاب کنید.",
  },
  {
    title: "مرحله دوم: بسته‌بندی کالا",
    desc: "کالا را همراه با تمام لوازم جانبی، جعبه اصلی و فاکتور خرید در بسته‌بندی مناسب قرار دهید.",
  },
  {
    title: "مرحله سوم: ارسال کالا",
    desc: "کالا را از طریق پست یا پیک به آدرس اعلام شده توسط دومینور ارسال کنید. هزینه ارسال بر عهده مشتری است.",
  },
  {
    title: "مرحله چهارم: بررسی و بازگشت وجه",
    desc: "پس از دریافت و بررسی کالا، وجه طی ۳ تا ۷ روز کاری به حساب شما بازگردانده می‌شود.",
  },
];

const conditions = [
  "کالا حداکثر تا ۷ روز پس از تحویل قابل بازگشت است.",
  "کالا باید در شرایط اولیه خود (بدون استفاده) و با بسته‌بندی اصلی بازگردانده شود.",
  "تمام لوازم جانبی، کتابچه راهنما و کارت گارانتی باید همراه کالا باشد.",
  "هزینه ارسال برای بازگرداندن کالا بر عهده مشتری است.",
  "کالاهای دارای تخفیف ویژه یا حراجی قابل بازگشت نیستند.",
  "محصولات بهداشتی و آرایشی به دلیل ملاحظات بهداشتی قابل بازگشت نیستند.",
];

const excluded = [
  "محصولات بهداشتی و آرایشی",
  "محصولات خوراکی و آشامیدنی",
  "نرم‌افزارها و بازی‌های رایانه‌ای پس از باز شدن بسته",
  "کالاهای دارای تخفیف ویژه (حراجی)",
  "محصولات سفارشی و شخصی‌سازی شده",
];

export default function Page() {
  return (
    <div className="my-20">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
        رویه‌های بازگرداندن کالا
      </h1>
      <p className="text-neutral-600 text-sm leading-7 mb-10">
        اگر از خرید خود راضی نیستید یا کالا دارای مشکل است، می‌توانید طبق
        شرایط زیر اقدام به بازگرداندن کالا کنید.
      </p>

      {/* Steps */}
      <h2 className="text-xl font-bold text-neutral-800 mb-6">
        مراحل بازگرداندن کالا
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

      {/* Conditions */}
      <h2 className="text-xl font-bold text-neutral-800 mb-6">
        شرایط بازگرداندن کالا
      </h2>
      <ul className="bg-white border border-neutral-200 rounded-xl p-5 space-y-3 mb-12">
        {conditions.map((item, index) => (
          <li key={index} className="text-neutral-600 text-sm leading-7 flex items-start gap-2">
            <span className="text-sky-600 mt-1.5 shrink-0">•</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Excluded items */}
      <h2 className="text-xl font-bold text-neutral-800 mb-6">
        کالاهای غیرقابل بازگشت
      </h2>
      <div className="bg-white border border-neutral-200 rounded-xl p-5 space-y-3">
        {excluded.map((item, index) => (
          <div
            key={index}
            className="text-neutral-600 text-sm leading-7 flex items-start gap-2"
          >
            <span className="text-red-500 mt-1.5 shrink-0">✕</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

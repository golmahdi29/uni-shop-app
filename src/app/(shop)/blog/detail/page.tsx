import Link from "next/link";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";

export default function Page() {
  return (
    <div className="my-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
        <Link href="/blog" className="hover:text-sky-600 transition-colors">
          اتاق خبر
        </Link>
        <span>/</span>
        <span className="text-neutral-800">
          به‌روزرسانی بزرگ زیرساخت سرورهای دومینور
        </span>
      </div>

      <article>
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
            <span className="bg-sky-50 text-sky-600 px-3 py-1 rounded-full font-medium">
              فناوری
            </span>
            <span className="flex items-center gap-1">
              <FiCalendar />
              ۲۵ خرداد ۱۴۰۵
            </span>
            <span className="flex items-center gap-1">
              <FiClock />
              ۴ دقیقه
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 leading-tight">
            به‌روزرسانی بزرگ زیرساخت سرورهای دومینور
          </h1>
        </header>

        {/* Body */}
        <div className="mb-16">
          <p className="text-neutral-600 leading-8 mb-5 text-justify">
            تیم فنی دومینور پس از ماه‌ها برنامه‌ریزی و تست، جدیدترین
            به‌روزرسانی زیرساخت سرورهای خود را با موفقیت اجرا کرد. این
            به‌روزرسانی که یکی از بزرگ‌ترین تغییرات زیرساختی در تاریخ دومینور
            محسوب می‌شود، شامل ارتقای سرورهای اصلی، بهینه‌سازی پایگاه‌های داده و
            بهبود معماری شبکه است.
          </p>
          <p className="text-neutral-600 leading-8 mb-5 text-justify">
            با اجرای این طرح، سرعت بارگذاری صفحات وب‌سایت تا ۴۰ درصد افزایش
            یافته و زمان پاسخگویی سرورها به کمتر از ۱۰۰ میلی‌ثانیه کاهش پیدا
            کرده است. همچنین با استفاده از سرویس‌های ابری نسل جدید، ظرفیت
            میزبانی همزمان کاربران تا ۳ برابر افزایش پیدا کرده است.
          </p>
          <p className="text-neutral-600 leading-8 mb-5 text-justify">
            یکی از مهم‌ترین بخش‌های این به‌روزرسانی، پیاده‌سازی سیستم
            متعادل‌کننده بار هوشمند است که ترافیک ورودی را به صورت خودکار بین
            سرورهای مختلف توزیع می‌کند. این قابلیت باعث شده تا در ساعات اوج
            ترافیک، هیچ‌گونه کاهش سرعت یا اختلالی در سرویس‌دهی ایجاد نشود.
          </p>
          <p className="text-neutral-600 leading-8 mb-5 text-justify">
            همچنین در این به‌روزرسانی، سیستم پشتیبان‌گیری خودکار با قابلیت
            بازیابی آنی (Instant Recovery) راه‌اندازی شده است. این سیستم در صورت
            بروز هرگونه مشکل، قادر است کل سرویس را در کمتر از ۵ دقیقه به حالت
            عادی بازگرداند.
          </p>
          <p className="text-neutral-600 leading-8 mb-5 text-justify">
            تیم فنی دومینور اعلام کرده که این به‌روزرسانی‌ها همچنان ادامه خواهد
            داشت و در فازهای بعدی، بهبود امنیت سایبری و افزایش سرعت شبکه توزیع
            محتوا (CDN) در دستور کار قرار دارد.
          </p>
        </div>

        {/* Navigation */}
        <div className="pt-8 border-t border-neutral-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-sky-600 transition-colors"
          >
            <FiArrowRight />
            بازگشت به اتاق خبر
          </Link>
        </div>
      </article>
    </div>
  );
}

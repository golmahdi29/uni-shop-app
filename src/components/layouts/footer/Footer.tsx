"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

import AccordionSection from "@/components/modules/accordionSection/AccordionSection";

export default function Footer() {
  return (
    <footer className="bg-linear-to-l from-neutral-700 to-sky-600">
      <div className="w-[95%] md:w-[78%] mx-auto py-14 text-neutral-50 flex flex-col lg:flex-row gap-12 justify-between">
        {/* Links */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col md:flex-row gap-6 md:gap-14 lg:gap-24">
            <AccordionSection title="با دومینور">
              <ul className="space-y-3 text-sm text-neutral-200/90">
                <li>
                  <Link href="/contact-us">تماس با دومینور</Link>
                </li>
                <li>
                  <Link href="/about">درباره دومینور</Link>
                </li>
                <li>
                  <Link href="/jobs">فرصت های شغلی</Link>
                </li>
                <li>
                  <Link href="/blog">اتاق خبر دومینور</Link>
                </li>
              </ul>
            </AccordionSection>

            <AccordionSection title="خدمات مشتریان">
              <ul className="space-y-3 text-sm text-neutral-200/90">
                <li>
                  <Link href="/faq">پاسخ به پرسش‌های متداول</Link>
                </li>
                <li>
                  <Link href="/return-procedures">رویه‌های بازگرداندن کالا</Link>
                </li>
                <li>
                  <Link href="/rules">شرایط استفاده</Link>
                </li>
                <li>
                  <Link href="/privacy">حریم خصوصی</Link>
                </li>
                <li>
                  <Link href="/report-bug">گزارش باگ</Link>
                </li>
              </ul>
            </AccordionSection>

            <AccordionSection title="راهنمای خرید از دومینور">
              <ul className="space-y-3 text-sm text-neutral-200/90">
                <li>
                  <Link href="/contact-us">تماس با دومینور</Link>
                </li>
                <li>
                  <Link href="/how-to-order">نحوه ثبت سفارش</Link>
                </li>
                <li>
                  <Link href="/submit-order-procedure">رویه ارسال سفارش</Link>
                </li>
                <li>
                  <Link href="/payment-methods">شیوه‌های پرداخت</Link>
                </li>
              </ul>
            </AccordionSection>
          </div>

          <div className="text-xs text-neutral-300 mt-8 md:mt-12 leading-7">
            برای استفاده از مطالب دومینور، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دومینور) است.
          </div>
        </div>

        {/* Social */}
        <div className="w-full lg:w-auto lg:min-w-90">
          <div className="font-bold text-lg mb-3">همراه ما باشید!</div>

          <div className="flex gap-6 items-center">
            <a href="#">
              <FaInstagram className="text-3xl md:text-4xl hover:text-sky-300 transition-colors" />
            </a>

            <a href="#">
              <FaXTwitter className="text-3xl md:text-4xl hover:text-sky-300 transition-colors" />
            </a>

            <a href="#">
              <FaLinkedin className="text-3xl md:text-4xl hover:text-sky-300 transition-colors" />
            </a>
          </div>

          <div className="mt-10">
            <div className="font-bold mb-3 text-sm md:text-base">
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                name="email"
                placeholder="ایمیل شما"
                className="flex-1 px-3 py-2 bg-neutral-100 text-neutral-900 rounded-xl border border-neutral-300 focus:outline-none placeholder:text-sm"
              />

              <button className="px-4 py-2 bg-neutral-400 hover:bg-neutral-300 hover:text-neutral-800 rounded-xl transition-colors text-neutral-800/65">
                ثبت
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <Link
              href="/"
              className="p-3 bg-neutral-50 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-xl"
            >
              <Image
                src="/temp/namad/kasbokar.webp"
                width={60}
                height={60}
                alt="namad"
              />
            </Link>

            <Link
              href="/"
              className="p-3 bg-neutral-50 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-xl"
            >
              <Image
                src="/temp/namad/logo.png"
                width={80}
                height={80}
                alt="namad"
              />
            </Link>

            <Link
              href="/"
              className="p-3 bg-neutral-50 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-xl"
            >
              <Image
                src="/temp/namad/rezi.webp"
                width={80}
                height={80}
                alt="namad"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

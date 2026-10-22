"use client";

import { useState } from "react";
import { FiMapPin, FiClock, FiBriefcase, FiChevronLeft, FiCheck } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const jobs = [
  {
    title: "توسعه‌دهنده فرانت‌اند",
    location: "تهران",
    type: "تمام وقت",
    department: "فناوری اطلاعات",
    responsibilities: [
      "توسعه و نگهداری رابط کاربری سایت با React و Next.js",
      "همکاری با تیم طراحی برای پیاده‌سازی UI/UX",
      "بهینه‌سازی عملکرد و سئوی فرانت‌اند",
      "کدنویسی تمیز و قابل نگهداری با TypeScript",
    ],
    requirements: [
      "حداقل ۲ سال سابقه کار با React",
      "تسلط به TypeScript و Tailwind CSS",
      "آشنایی با Next.js و مفاهیم SSR/SSG",
      "توانایی کار تیمی و ارتباط مؤثر",
    ],
    benefits: [
      "حقوق رقابتی",
      "بیمه تکمیلی",
      "روزهای تعطیل انعطاف‌پذیر",
      "دورکاری ترکیبی",
    ],
  },
  {
    title: "کارشناس پشتیبانی مشتریان",
    location: "تهران",
    type: "تمام وقت",
    department: "خدمات مشتریان",
    responsibilities: [
      "پاسخگویی به سوالات مشتریان از طریق تلفن، ایمیل و چت",
      "رسیدگی به شکایات و پیگیری تا رفع کامل مشکل",
      "ثبت و دسته‌بندی تیکت‌های پشتیبانی",
      "همکاری با تیم‌های دیگر برای بهبود فرآیندها",
    ],
    requirements: [
      "مهارت ارتباطی قوی و صبوری بالا",
      "آشنایی با نرم‌افزارهای CRM",
      "توانایی حل مسئله و مدیریت زمان",
      "حداقل دیپلم",
    ],
    benefits: [
      "حقوق ثابت + پاداش عملکرد",
      "بیمه تأمین اجتماعی",
      "برنامه کاری شیفتی",
      "دوره‌های آموزشی رایگان",
    ],
  },
  {
    title: "متخصص سئو",
    location: "دورکاری",
    type: "پاره وقت",
    department: "بازاریابی",
    responsibilities: [
      "بهینه‌سازی سایت برای موتورهای جستجو",
      "تحلیل کلمات کلیدی و ارائه استراتژی محتوا",
      "مانیتورینگ رتبه‌ها و گزارش‌دهی دوره‌ای",
      "بهبود ساختار فنی سایت از نظر سئو",
    ],
    requirements: [
      "تسلط به ابزارهای Google Search Console و Analytics",
      "آشنایی با سئوی تکنیکال و On-Page",
      "توانایی تحلیل داده و ارائه گزارش",
      "سابقه کار مرتبط حداقل ۱ سال",
    ],
    benefits: [
      "حقوق بر اساس پروژه",
      "ساعت کاری منعطف",
      "همکاری بلندمدت",
      "افزایش حقوق دوره‌ای",
    ],
  },
  {
    title: "مدیر محصول",
    location: "تهران",
    type: "تمام وقت",
    department: "محصول",
    responsibilities: [
      "تعریف و اولویت‌بندی ویژگی‌های محصول",
      "تحلیل نیاز کاربران و رقبا",
      "همکاری با تیم فنی و طراحی برای تحویل به موقع",
      "تعیین KPIها و پیگیری عملکرد محصول",
    ],
    requirements: [
      "حداقل ۳ سال سابقه مدیریت محصول در حوزه فناوری",
      "آشنایی با متدولوژی Agile و ابزارهای Jira",
      "تسلط به تحلیل داده و تصمیم‌گیری مبتنی بر داده",
      "مهارت رهبری و ارتباطات قوی",
    ],
    benefits: [
      "حقوق رقابتی با سهم سهام",
      "بیمه تکمیلی طلایی",
      "روزهای تعطیل نامحدود",
      "بودجه یادگیری سالانه",
    ],
  },
];

function JobCard({ job }: { job: (typeof jobs)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between p-5 text-right"
      >
        <div>
          <h3 className="font-bold text-neutral-800 mb-2">{job.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
            <span className="flex items-center gap-1">
              <FiBriefcase className="text-sky-600" />
              {job.department}
            </span>
            <span className="flex items-center gap-1">
              <FiMapPin className="text-sky-600" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <FiClock className="text-sky-600" />
              {job.type}
            </span>
          </div>
        </div>

        <span className="flex items-center gap-1 text-sky-600 hover:text-sky-700 font-medium text-sm shrink-0">
          {open ? "بستن" : "مشاهده جزئیات"}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <FiChevronLeft />
          </motion.span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-neutral-200 px-5 pb-5 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-neutral-800 mb-3">مسئولیت‌ها</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-neutral-600">
                      <FiCheck className="text-sky-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-neutral-800 mb-3">شرایط احراز</h4>
                <ul className="space-y-2">
                  {job.requirements.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-neutral-600">
                      <FiCheck className="text-sky-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-neutral-800 mb-3">مزایا</h4>
                <ul className="space-y-2">
                  {job.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-neutral-600">
                      <FiCheck className="text-sky-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Page() {
  return (
    <div className="my-20">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
        فرصت‌های شغلی
      </h1>
      <p className="text-neutral-500 text-sm mb-12">
        به تیم دومینور بپیوندید و در محیطی پویا و حرفه‌ای رشد کنید
      </p>

      {/* Intro */}
      <section className="mb-16 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-xl font-bold text-neutral-800 mb-4">
          چرا دومینور؟
        </h2>
        <p className="text-neutral-600 leading-8 mb-6">
          دومینور همواره به دنبال جذب افراد با استعداد و متعهد است. ما به
          رشد حرفه‌ای تیم خود اهمیت می‌دهیم و محیطی فراهم کرده‌ایم که
          خلاقیت و نوآوری در آن شکوفا شود.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "محیط پویا و جوان", value: "۲۰+" },
            { label: "متوسط سن تیم", value: "۲۸ سال" },
            { label: "فرصت رشد سالانه", value: "۱۰+" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-sky-600">{item.value}</div>
              <div className="text-neutral-500 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section>
        <h2 className="text-xl font-bold text-neutral-800 mb-6">
          موقعیت‌های شغلی باز
        </h2>
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
      </section>
    </div>
  );
}

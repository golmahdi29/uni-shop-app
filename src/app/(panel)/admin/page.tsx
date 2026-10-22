"use client";

import { useState, useRef, useEffect } from "react";
import { FiSave, FiUpload } from "react-icons/fi";
import {
  HiOutlineGlobe,
  HiOutlineMail,
  HiOutlineShare,
  HiOutlineSearch,
  HiOutlineColorSwatch,
  HiOutlineCreditCard,
} from "react-icons/hi";

type Option = {
  label: string;
  key: string;
  type: "text" | "email" | "tel" | "url" | "textarea" | "color" | "image" | "select" | "number";
  placeholder?: string;
  options?: { label: string; value: string }[];
};

type Section = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  options: Option[];
};

const sections: Section[] = [
  {
    title: "تنظیمات عمومی",
    icon: HiOutlineGlobe,
    options: [
      { label: "نام سایت", key: "siteName", type: "text", placeholder: "فروشگاه آنلاین" },
      { label: "توضیحات سایت", key: "siteDescription", type: "textarea", placeholder: "توضیح کوتاه درباره سایت" },
      { label: "کلمات کلیدی", key: "keywords", type: "text", placeholder: "فروشگاه, آنلاین, خرید" },
      { label: "لوگو", key: "logo", type: "image" },
      { label: "فاوآیکون", key: "favicon", type: "image" },
      {
        label: "واحد پول", key: "currency", type: "select",
        options: [{ label: "تومان", value: "toman" }, { label: "ریال", value: "rial" }, { label: "دلار", value: "dollar" }],
      },
      {
        label: "زبان پیش فرض", key: "lang", type: "select",
        options: [{ label: "فارسی", value: "fa" }, { label: "انگلیسی", value: "en" }],
      },
    ],
  },
  {
    title: "اطلاعات تماس",
    icon: HiOutlineMail,
    options: [
      { label: "ایمیل پشتیبانی", key: "supportEmail", type: "email", placeholder: "support@example.com" },
      { label: "شماره تماس", key: "phone", type: "tel", placeholder: "021-12345678" },
      { label: "آدرس", key: "address", type: "textarea", placeholder: "آدرس کامل فروشگاه" },
    ],
  },
  {
    title: "شبکه های اجتماعی",
    icon: HiOutlineShare,
    options: [
      { label: "اینستاگرام", key: "instagram", type: "url", placeholder: "https://instagram.com/..." },
      { label: "تلگرام", key: "telegram", type: "url", placeholder: "https://t.me/..." },
      { label: "واتساپ", key: "whatsapp", type: "url", placeholder: "https://wa.me/..." },
      { label: "یوتیوب", key: "youtube", type: "url", placeholder: "https://youtube.com/..." },
      { label: "ایتا", key: "eitaa", type: "url", placeholder: "https://eitaa.com/..." },
    ],
  },
  {
    title: "تنظیمات SEO",
    icon: HiOutlineSearch,
    options: [
      { label: "عنوان متا", key: "metaTitle", type: "text", placeholder: "عنوان پیش فرض برای SEO" },
      { label: "توضیحات متا", key: "metaDescription", type: "textarea", placeholder: "توضیحات متا برای موتورهای جستجو" },
    ],
  },
  {
    title: "ظاهر سایت",
    icon: HiOutlineColorSwatch,
    options: [
      { label: "رنگ اصلی", key: "primaryColor", type: "color" },
      { label: "رنگ ثانویه", key: "secondaryColor", type: "color" },
      { label: "رنگ متن", key: "textColor", type: "color" },
      { label: "رنگ پس زمینه", key: "bgColor", type: "color" },
      { label: "تعداد محصول در صفحه", key: "productsPerPage", type: "number", placeholder: "12" },
      {
        label: "فونت سایت", key: "font", type: "select",
        options: [{ label: "وزیر", value: "vazir" }, { label: "ایران سنس", value: "iransans" }],
      },
    ],
  },
  {
    title: "تنظیمات پرداخت و ارسال",
    icon: HiOutlineCreditCard,
    options: [
      { label: "هزینه ارسال رایگان از مبلغ", key: "freeShippingThreshold", type: "number", placeholder: "500000" },
      {
        label: "درگاه پرداخت", key: "paymentGateway", type: "select",
        options: [
          { label: "زرین پال", value: "zarinpal" },
          { label: "ملی", value: "melli" },
          { label: "پی لینک", value: "paylink" },
        ],
      },
      { label: "حداقل مبلغ سفارش", key: "minOrderAmount", type: "number", placeholder: "0" },
      { label: "حداکثر مبلغ سفارش", key: "maxOrderAmount", type: "number", placeholder: "10000000" },
      { label: "زمان تحویل تخمینی", key: "estimatedDelivery", type: "text", placeholder: "3 تا 5 روز کاری" },
    ],
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState(sections[0].title);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    const activeBtn = el.querySelector<HTMLButtonElement>(`[data-tab="${activeTab}"]`);
    activeBtn?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeTab]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-neutral-800">تنظیمات سایت</h1>
          <p className="text-xs md:text-sm text-neutral-500 mt-1">مدیریت تمام تنظیمات سایت از یک صفحه</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium transition-colors self-start sm:self-auto">
          <FiSave className="text-lg" />
          <span>ذخیره تغییرات</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div
          ref={tabsRef}
          className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 lg:w-56 lg:shrink-0 scrollbar-none"
        >
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.title}
                data-tab={section.title}
                onClick={() => setActiveTab(section.title)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-right whitespace-nowrap transition-colors shrink-0 ${
                  activeTab === section.title
                    ? "bg-sky-50 text-sky-600 font-medium"
                    : "text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                <Icon className="text-xl shrink-0" />
                <span className="hidden lg:inline">{section.title}</span>
              </button>
            );
          })}
        </div>

        <div className="flex-1 min-w-0">
          {sections.map(
            (section) =>
              activeTab === section.title && (
                <div key={section.title}>
                  <div className="bg-white border border-neutral-200 rounded-xl p-4 md:p-6 space-y-5">
                    <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
                      <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
                        <section.icon className="text-sky-600 text-xl" />
                      </div>
                      <div>
                        <h2 className="font-bold text-neutral-800 text-sm md:text-base">{section.title}</h2>
                      </div>
                    </div>

                    <div className="space-y-5">
                      {section.options.map((opt) => (
                        <div key={opt.key}>
                          <label className="block text-sm text-neutral-600 mb-1.5">{opt.label}</label>

                          {opt.type === "image" && (
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                              <div className="w-16 h-16 md:w-20 md:h-20 bg-neutral-100 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-400 shrink-0">
                                <FiUpload className="text-xl md:text-2xl" />
                              </div>
                              <button className="px-4 py-2 border border-neutral-300 rounded-xl text-sm text-neutral-600 hover:bg-neutral-50 transition-colors">
                                آپلود تصویر
                              </button>
                            </div>
                          )}

                          {opt.type === "color" && (
                            <div className="flex items-center gap-3">
                              <input
                                type="color"
                                defaultValue="#0284c7"
                                className="w-10 h-10 p-0.5 rounded-lg border border-neutral-300 cursor-pointer"
                              />
                              <span className="text-xs text-neutral-400">#0284c7</span>
                            </div>
                          )}

                          {opt.type === "select" && (
                            <select className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm bg-white text-neutral-500">
                              <option value="">انتخاب کنید</option>
                              {opt.options?.map((o) => (
                                <option key={o.value} value={o.value}>{o.label}</option>
                              ))}
                            </select>
                          )}

                          {opt.type === "textarea" && (
                            <textarea
                              rows={3}
                              placeholder={opt.placeholder}
                              className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm placeholder:text-neutral-400 resize-none"
                            />
                          )}

                          {(opt.type === "text" || opt.type === "email" || opt.type === "tel" || opt.type === "url") && (
                            <input
                              type={opt.type}
                              placeholder={opt.placeholder}
                              className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm placeholder:text-neutral-400"
                            />
                          )}

                          {opt.type === "number" && (
                            <input
                              type="number"
                              placeholder={opt.placeholder}
                              className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm placeholder:text-neutral-400"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium transition-colors">
                      <FiSave className="text-lg" />
                      <span>ذخیره تغییرات</span>
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

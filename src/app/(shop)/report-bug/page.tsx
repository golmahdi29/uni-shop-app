import { FaBug } from "react-icons/fa";
import { FiAlertTriangle, FiMonitor, FiSmartphone } from "react-icons/fi";

export default function Page() {
  return (
    <div className="my-20">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
        گزارش باگ
      </h1>
      <p className="text-neutral-500 text-sm mb-12">
        اگر با مشکلی در سایت مواجه شده‌اید، از این طریق به ما اطلاع دهید
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bug Categories */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
              <FaBug className="text-red-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-1">باگ عملکردی</h3>
              <p className="text-neutral-500 text-sm leading-7">
                مشکلات مربوط به عدم کارکرد صحیح دکمه‌ها، لینک‌ها، فرم‌ها و سایر
                بخش‌های تعاملی سایت
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
              <FiAlertTriangle className="text-amber-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-1">مشکل نمایشی</h3>
              <p className="text-neutral-500 text-sm leading-7">
                مشکلات ظاهری مانند بهم‌ریختگی صفحه، فونت‌ها، رنگ‌ها و عدم
                نمایش صحیح المان‌ها
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <FiMonitor className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-1">مشکل دسکتاپ</h3>
              <p className="text-neutral-500 text-sm leading-7">
                باگ‌هایی که فقط در نسخه دسکتاپ و مرورگرهای خاص رخ می‌دهند
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
              <FiSmartphone className="text-purple-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-1">مشکل موبایل</h3>
              <p className="text-neutral-500 text-sm leading-7">
                باگ‌های مربوط به نسخه موبایل و تبلت سایت
              </p>
            </div>
          </div>
        </div>

        {/* Bug Report Form */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6 space-y-5">
          <h3 className="font-bold text-neutral-800 text-lg">
            فرم گزارش باگ
          </h3>

          <div>
            <label className="block text-sm text-neutral-600 mb-1.5">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              placeholder="نام خود را وارد کنید"
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm placeholder:text-neutral-400"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-600 mb-1.5">
              ایمیل
            </label>
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm placeholder:text-neutral-400"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-600 mb-1.5">
              نوع باگ
            </label>
            <select className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm bg-white text-neutral-500">
              <option value="">انتخاب کنید</option>
              <option value="functional">باگ عملکردی</option>
              <option value="visual">مشکل نمایشی</option>
              <option value="desktop">مشکل دسکتاپ</option>
              <option value="mobile">مشکل موبایل</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-neutral-600 mb-1.5">
              آدرس صفحه
            </label>
            <input
              type="text"
              placeholder="لینک صفحه‌ای که باگ در آن مشاهده شده"
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm placeholder:text-neutral-400"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-600 mb-1.5">
              توضیحات
            </label>
            <textarea
              rows={4}
              placeholder="مشکل را به طور کامل توضیح دهید"
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm placeholder:text-neutral-400 resize-none"
            />
          </div>

          <button className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors text-sm font-medium">
            ارسال گزارش
          </button>
        </div>
      </div>
    </div>
  );
}

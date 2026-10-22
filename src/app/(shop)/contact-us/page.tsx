import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

export default function Page() {
  return (
    <div className="my-20">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
        تماس با دومینور
      </h1>
      <p className="text-neutral-500 text-sm mb-12">
        ما مشتاقانه منتظر شنیدن نظرات و پیشنهادهای شما هستیم
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
              <FiPhone className="text-sky-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-1">شماره تماس</h3>
              <p className="text-neutral-500 text-sm">۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p className="text-neutral-500 text-sm">۰۹۱۲-۳۴۵-۶۷۸۹</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
              <FiMail className="text-sky-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-1">ایمیل</h3>
              <p className="text-neutral-500 text-sm">support@dominor.ir</p>
              <p className="text-neutral-500 text-sm">info@dominor.ir</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
              <FiMapPin className="text-sky-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-1">آدرس</h3>
              <p className="text-neutral-500 text-sm leading-7">
                تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۲۳۴، طبقه ۵،
                واحد ۶
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center shrink-0">
              <FiClock className="text-sky-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-neutral-800 mb-1">ساعت کاری</h3>
              <p className="text-neutral-500 text-sm">
                شنبه تا چهارشنبه: ۹ صبح تا ۱۸
              </p>
              <p className="text-neutral-500 text-sm">پنجشنبه: ۹ صبح تا ۱۴</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6 space-y-5">
          <h3 className="font-bold text-neutral-800 text-lg">
            فرم تماس
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
              موضوع
            </label>
            <input
              type="text"
              placeholder="موضوع پیام"
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm placeholder:text-neutral-400"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-600 mb-1.5">
              پیام
            </label>
            <textarea
              rows={4}
              placeholder="پیام خود را بنویسید"
              className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-sky-500 text-sm placeholder:text-neutral-400 resize-none"
            />
          </div>

          <button className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl transition-colors text-sm font-medium">
            ارسال پیام
          </button>
        </div>
      </div>
    </div>
  );
}

import { FiCalendar, FiClock, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const posts = [
  {
    id: 1,
    category: "فناوری",
    date: "۲۵ خرداد ۱۴۰۵",
    readTime: "۴ دقیقه",
    title: "به‌روزرسانی بزرگ زیرساخت سرورهای دومینور",
    excerpt:
      "تیم فنی دومینور با هدف افزایش سرعت و پایداری، زیرساخت سرورهای خود را به‌طور کامل به‌روزرسانی کرد.",
  },
  {
    id: 2,
    category: "شرکت",
    date: "۱۸ خرداد ۱۴۰۵",
    readTime: "۳ دقیقه",
    title: "حضور دومینور در نمایشگاه الکامپ ۱۴۰۵",
    excerpt:
      "دومینور با جدیدترین محصولات و خدمات خود در بیست و هشتمین نمایشگاه الکامپ حضور خواهد داشت.",
  },
  {
    id: 3,
    category: "فناوری",
    date: "۱۰ خرداد ۱۴۰۵",
    readTime: "۵ دقیقه",
    title: "رونمایی از اپلیکیشن موبایل دومینور",
    excerpt:
      "اپلیکیشن موبایل دومینور با طراحی کاملاً جدید و تجربه کاربری بهتر برای سیستعامل‌های اندروید و iOS منتشر شد.",
  },
  {
    id: 4,
    category: "شرکت",
    date: "۲ اردیبهشت ۱۴۰۵",
    readTime: "۲ دقیقه",
    title: "دومینور در جمع برترین استارت‌اپ‌های ایران",
    excerpt:
      "بر اساس رتبه‌بندی سالانه وب‌سایت‌های تجارت الکترونیک، دومینور موفق به کسب رتبه برتر در حوزه فروشگاه‌های آنلاین شد.",
  },
  {
    id: 5,
    category: "فناوری",
    date: "۲۸ فروردین ۱۴۰۵",
    readTime: "۴ دقیقه",
    title: "قابلیت جستجوی هوشمند با هوش مصنوعی در دومینور",
    excerpt:
      "موتور جستجوی جدید دومینور با بهره‌گیری از هوش مصنوعی، نتایج دقیق‌تر و سریع‌تری را به کاربران ارائه می‌دهد.",
  },
  {
    id: 6,
    category: "شرکت",
    date: "۱۵ فروردین ۱۴۰۵",
    readTime: "۳ دقیقه",
    title: "تمدید گواهی امنیتی SSL و استانداردهای جدید",
    excerpt:
      "دومینور برای حفظ امنیت اطلاعات کاربران، گواهی SSL خود را به‌روزرسانی و استانداردهای امنیتی جدیدی را اعمال کرد.",
  },
];

export default function Page() {
  return (
    <div className="my-20">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
        اتاق خبر دومینور
      </h1>
      <p className="text-neutral-500 text-sm mb-12">
        آخرین اخبار و به‌روزرسانی‌های فناوری و شرکت
      </p>

      {/* Featured Post */}
      <section className="mb-16">
        <div className="bg-gradient-to-l from-sky-500 to-sky-600 rounded-2xl p-8 md:p-10 text-neutral-50">
          <div className="flex items-center gap-3 text-sm text-sky-100 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full">ویژه</span>
            <span>{posts[0].date}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {posts[0].title}
          </h2>
          <p className="text-sky-50 leading-7 mb-6 max-w-2xl">
            {posts[0].excerpt}
          </p>
          <Link
            href="/blog/detail"
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
          >
            ادامه مطلب
            <FiArrowLeft />
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
                <span className="bg-sky-50 text-sky-600 px-2.5 py-0.5 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <FiCalendar />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 mr-auto">
                  <FiClock />
                  {post.readTime}
                </span>
              </div>
              <h3 className="font-bold text-neutral-800 mb-2 leading-7">
                {post.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-7 mb-4">
                {post.excerpt}
              </p>
              <Link
                href="/blog/detail"
                className="inline-flex items-center gap-1 text-sky-600 text-sm font-medium hover:gap-2 transition-all"
              >
                ادامه مطلب
                <FiArrowLeft />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mt-16 pt-12 border-t border-neutral-200">
        <h2 className="text-lg font-bold text-neutral-800 mb-6">
          دسته‌بندی موضوعات
        </h2>
        <div className="flex flex-wrap gap-3">
          {["فناوری", "شرکت", "محصول", "رویدادها", "مقالات"].map(
            (category) => (
              <button
                key={category}
                className="px-4 py-2 border border-neutral-300 rounded-xl text-sm text-neutral-600 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-600 transition-colors"
              >
                {category}
              </button>
            )
          )}
        </div>
      </section>
    </div>
  );
}

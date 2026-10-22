import { FiTarget, FiEye, FiHeart, FiUsers, FiAward, FiShield } from "react-icons/fi";

const values = [
  {
    icon: FiHeart,
    title: "مشتری‌مداری",
    desc: "رضایت شما اولویت اول ماست. تمام تلاش خود را می‌کنیم تا تجربه‌ای بی‌نقص از خرید آنلاین را برایتان فراهم کنیم.",
  },
  {
    icon: FiShield,
    title: "اعتماد و امنیت",
    desc: "امنیت اطلاعات و پرداخت شما برای ما بسیار مهم است و همواره در تلاشیم تا فضایی امن برای خرید شما فراهم کنیم.",
  },
  {
    icon: FiAward,
    title: "کیفیت و اصالت",
    desc: "کالاهای ارائه شده در دومینور همگی از برندهای معتبر و با ضمانت اصالت کالا عرضه می‌شوند.",
  },
  {
    icon: FiUsers,
    title: "تیم حرفه‌ای",
    desc: "تیم ما متشکل از متخصصان با تجربه در حوزه فناوری، لجستیک و خدمات مشتریان است.",
  },
];

export default function Page() {
  return (
    <div className="my-20">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
        درباره دومینور
      </h1>
      <p className="text-neutral-500 text-sm mb-12">
        داستان ما، مأموریت و ارزش‌هایمان
      </p>

      {/* Story Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-neutral-800 mb-4">
              داستان ما
            </h2>
            <p className="text-neutral-600 leading-8 mb-4">
              دومینور در سال ۱۳۹۸ با هدف ایجاد یک فروشگاه آنلاین مطمئن و
              به‌روز در ایران فعالیت خود را آغاز کرد. آنچه ما را از سایرین
              متمایز می‌کند، تعهد به کیفیت، سرعت در ارسال و پشتیبانی بی‌وقفه
              از مشتریان است.
            </p>
            <p className="text-neutral-600 leading-8">
              امروز دومینور با هزاران محصول در دسته‌بندی‌های متنوع، یکی از
              مقصدهای اصلی خرید آنلاین در کشور محسوب می‌شود و همواره در تلاشیم
              تا با بهره‌گیری از جدیدترین فناوری‌ها، بهترین تجربه خرید را برای
              شما فراهم کنیم.
            </p>
          </div>
          <div className="bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl p-10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-sky-600 mb-2">۱۳۹۸</div>
              <p className="text-neutral-500 text-sm">سال تأسیس</p>
              <div className="w-16 h-0.5 bg-sky-300 mx-auto my-4" />
              <div className="text-5xl font-bold text-sky-600 mb-2">+۵۰,۰۰۰</div>
              <p className="text-neutral-500 text-sm">مشتریان راضی</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
            <FiTarget className="text-sky-600 text-xl" />
          </div>
          <h3 className="text-lg font-bold text-neutral-800 mb-2">مأموریت ما</h3>
          <p className="text-neutral-600 leading-7 text-sm">
            دسترسی آسان، سریع و مطمئن همه ایرانیان به محصولات باکیفیت و اصل،
            همراه با بهترین خدمات پشتیبانی و تجربه خرید لذت‌بخش.
          </p>
        </div>
        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
            <FiEye className="text-sky-600 text-xl" />
          </div>
          <h3 className="text-lg font-bold text-neutral-800 mb-2">چشم‌انداز ما</h3>
          <p className="text-neutral-600 leading-7 text-sm">
            تبدیل شدن به اولین و معتبرترین مقصد خرید آنلاین در ایران و ایجاد
            تحولی اساسی در تجربه خرید دیجیتال برای همه هموطنان.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-bold text-neutral-800 mb-8 text-center">
          ارزش‌های ما
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-neutral-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-sky-600 text-xl" />
              </div>
              <h3 className="font-bold text-neutral-800 mb-2">{item.title}</h3>
              <p className="text-neutral-600 text-sm leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

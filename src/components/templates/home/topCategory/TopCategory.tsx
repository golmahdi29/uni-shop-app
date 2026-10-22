import Title from "@/components/modules/title/Title";
import Image from "next/image";
import Link from "next/link";

const items = [
  { title: "هدفون و هندزفری", img: "/images/category/1.webp" },
  { title: "موبایل", img: "/images/category/2.webp" },
  { title: "گیمینگ", img: "/images/category/3.webp" },
  { title: "لپ تاپ", img: "/images/category/4.webp" },
  { title: "ساعت هوشمند", img: "/images/category/5.webp" },
  { title: "اسپیکر", img: "/images/category/6.webp" },
  { title: "تی وی", img: "/images/category/7.webp" },
];

export default function TopCategory() {
  return (
    <>
      <Title url="/" title="دسته‌بندی‌های برتر" />

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
        {items.map((item) => (
          <Link
            key={item.title}
            href="/"
            className="flex flex-col items-center gap-2"
          >
            <Image
              width={150}
              height={150}
              alt="categoryImage"
              src={item.img}
              className="h-auto w-24 sm:w-28 lg:w-37.5"
            />

            <div className="relative inline-block text-center text-sm sm:text-base font-medium transition-colors hover:text-sky-600/90 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-sky-600/90 after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

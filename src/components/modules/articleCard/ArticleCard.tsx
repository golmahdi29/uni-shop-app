import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function ArticleCard({ img }: { img: string }) {
  return (
    <Link
      href={"/"}
      className="max-w-full rounded-xl flex flex-col hover:shadow-lg transition-all border border-neutral-300/45 shadow-xs"
    >
      <div className="overflow-hidden rounded-tr-xl rounded-tl-xl">
        <Image
          unoptimized
          width={400}
          height={400}
          alt="article"
          src={img}
          className="rounded-tr-xl rounded-tl-xl hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className="px-4 pb-2 p-3">
        <div className="mt-1 mb-5 font-medium text-sm line-clamp-2 leading-6">
          پرفروش ترین گوشی های شیائومی
        </div>
      </div>
      <div className="flex justify-between items-center text-sky-600 text-xs px-4 pb-2">
        <div>۱۴۰۴/۰۶/۲۰</div>
        <div className="flex items-center gap-1 ">
          <div>مشاهده</div>
          <IoIosArrowBack />
        </div>
      </div>
    </Link>
  );
}

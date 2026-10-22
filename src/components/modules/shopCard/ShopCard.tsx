import Image from "next/image";

import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import Link from "next/link";

export default function ShopCard() {
  return (
    <div className="bg-white flex flex-col items-center justify-between rounded-xl shadow-xs w-full h-full py-3 px-4 border border-neutral-200/65 ">
      {/* Card Header */}
      <div className="flex justify-between w-full">
        <div className="rounded-2xl bg-sky-600 text-neutral-50 px-2 py-1 text-xs font-medium">
          ۵٪ تخفیف
        </div>
        <div className="flex items-center text-amber-400 *:text-sm">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStarBorder />
        </div>
      </div>
      <Link href={"/products/detail/1"}>
        <Image
          src={"/temp/products/2.webp"}
          width={200}
          height={200}
          alt="product"
          className="cursor-pointer hover:scale-105 transition-all duration-300"
        />
      </Link>

      <Link
        href={"/products/detail/1"}
        className="line-clamp-2 font-medium text-neutral-700 w-full text-[15px]"
      >
        لپ تاپ 14 اینچی ایسوس مدل ExpertBook P3 P3405CVA-I716512G6D-i7
        13620H-16GB DDR5 5200MHz-512GB SSD-IPS-Backlit-Fingerprint
      </Link>

      <div className="flex items-center justify-between w-full mt-2">
        <div>
          <BsCart2 className="text-sky-600 text-xl" />
        </div>
        <div className="flex flex-col items-center gap-1 font-bold">
          <div className="flex items-center gap-1 *:text-amber-400">
            <div>۷۴,۰۰۰,۰۰۰</div>
            <div>تومان</div>
          </div>

          <div className="text-sm text-neutral-400/80 line-through">
            ۷۸,۰۰۰,۰۰۰
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function HotCard() {
  return (
    <Link href={'/'} className="px-3 py-4 bg-neutral-100 flex gap-3 items-center justify-between rounded-xl max-w-96">
        <Image src={'/temp/products/5.webp'} width={80} height={80} alt="product" />
        <div className="line-clamp-2 text-neutral-800 font-medium md:text-[16px] text-xs">
            لپ تاپ 14 اینچی ایسوس مدل ExpertBook P3 P3405CVA-I716512G6D-i7 13620H-16GB DDR5
            5200MHz-512GBSSD-IPS-Backlit-Fingerprint
        </div>
    </Link>
  )
}

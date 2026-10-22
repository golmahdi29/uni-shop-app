import Image from "next/image";
import Link from "next/link";

export default function BrandCard({ img } : {img: string}) {
  return (
    <Link href={'/'} className="p-2 md:p-0 flex justify-center items-center w-20 h-20 md:w-36 md:h-36 rounded-xl border border-neutral-200/65 shadow-xs hover:shadow-md transition-all">
        <Image src={img} width={110} height={110} alt="brand" /> 
    </Link>
  )
}

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 mt-12 md:mt-23">
      <Link href="/" className="w-full md:w-full rounded-xl overflow-hidden">
        <Image
          src="/images/banners/single-banner.webp"
          alt="banner"
          width={3200}
          height={3000}
          unoptimized
          priority
          className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-105"
        />
      </Link>
    </div>
  );
}

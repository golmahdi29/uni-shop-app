import Image from "next/image";
import Link from "next/link";

export default function Banners() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 mt-12 md:mt-23">
      <Link
        href="/"
        className="w-full md:w-1/2 rounded-xl overflow-hidden"
      >
        <Image
          src="/images/banners/main-banner-1.webp"
          alt="banner"
          width={1200}
          height={500}
          className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <Link
        href="/"
        className="w-full md:w-1/2 rounded-xl overflow-hidden"
      >
        <Image
          src="/images/banners/main-banner-2.webp"
          alt="banner"
          width={1200}
          height={500}
          className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-105"
        />
      </Link>
    </div>
  );
}
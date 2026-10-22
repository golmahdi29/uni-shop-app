import Link from 'next/link'

import { IoIosArrowBack } from "react-icons/io";

export default function Title({ url, title } : {url: string, title: string}) {
  return (
    <div className='flex justify-between mt-14 md:mt-24'>
        <div className='font-bold md:text-xl text-sm'>{title}</div>

        <Link href={url} className='flex md:gap-2 items-center bg-sky-600 rounded-xl text-neutral-50 md:px-3 px-2 py-1.5 font-medium md:text-[16px] text-xs'>
            مشاهده همه
            <IoIosArrowBack />
        </Link>
    </div>
  )
}

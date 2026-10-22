import { TbTruckDelivery } from "react-icons/tb";
import { LuPackageCheck } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";

export default function Advantages() {
  return (
    <div className="flex flex-wrap md:flex-row flex-col gap-10 items-center justify-evenly mt-5 md:mt-20 w-full">
        <div className="flex flex-col items-center gap-2 text-sky-600">
            <TbTruckDelivery className="text-3xl md:text-4xl" />
            <div className="text-xs md:text-sm font-medium">ارسال سریع</div>
        </div>
        <div className="flex flex-col items-center gap-2 text-sky-600">
            <LuPackageCheck className="text-3xl md:text-4xl" />
            <div className="text-xs md:text-sm font-medium">تحویل به موقع</div>
        </div>
        <div className="flex flex-col items-center gap-2 text-sky-600">
            <MdOutlineSupportAgent className="text-3xl md:text-4xl" />
            <div className="text-xs md:text-sm font-medium">پشتیبانی ۲۴/۷</div>
        </div>
        <div className="flex flex-col items-center gap-2 text-sky-600">
            <RiMedalLine className="text-3xl md:text-4xl" />
            <div className="text-xs md:text-sm font-medium">ضمانت اصل بودن</div>
        </div>
    </div>
  )
}

"use client"

import { useState } from "react";
import Cart from "@/components/templates/cart/Cart";
import { IoMdArrowBack } from "react-icons/io";

function formatPrice(price: number) {
  return price.toLocaleString("fa-IR");
}

export default function Page() {
  const [coupon, setCoupon] = useState("");

  const subtotal = 185500000;
  const discount = 15500000;
  const shipping = 0;
  const total = subtotal - discount + shipping;

  return (
    <div className="flex flex-col lg:flex-row gap-6 my-20">
      {/* Products */}
      <div className="flex-[2] min-w-0">
        <Cart />
      </div>

      {/* Summary */}
      <div className="w-full lg:w-96 shrink-0">
        <div className="rounded-xl border border-neutral-300 p-5 sticky top-28">
          <div className="font-bold text-base mb-4">خلاصه سبد خرید</div>

          {/* Price rows */}
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">قیمت کالاها</span>
              <span className="font-medium">
                {formatPrice(subtotal)} تومان
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-neutral-500">تخفیف</span>
              <span className="font-medium text-red-500">
                −{formatPrice(discount)} تومان
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-neutral-500">هزینه ارسال</span>
              <span className="font-medium text-green-600">رایگان</span>
            </div>
          </div>

          <div className="border-t border-neutral-200 my-4" />

          {/* Total */}
          <div className="flex justify-between items-center text-base">
            <span className="font-bold">مبلغ قابل پرداخت</span>
            <span className="font-bold text-sky-600">
              {formatPrice(total)} تومان
            </span>
          </div>

          {/* Coupon */}
          <div className="flex gap-2 mt-5">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="کد تخفیف"
              className="flex-1 border border-neutral-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-sky-500 transition-colors"
            />
            <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-xl text-sm font-medium transition-colors">
              اعمال
            </button>
          </div>

          {/* Checkout button */}
          <button className="w-full mt-4 flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white rounded-xl py-3 font-medium transition-colors">
            <span>ادامه ثبت سفارش</span>
            <IoMdArrowBack className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

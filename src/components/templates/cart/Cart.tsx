"use client";

import { useState } from "react";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

interface CartItem {
  id: number;
  image: string;
  title: string;
  color: string;
  warranty: string;
  price: number;
  quantity: number;
}

const initialItems: CartItem[] = [
  {
    id: 1,
    image: "/temp/products/2.webp",
    title: "لپ تاپ 14 اینچی ایسوس مدل ExpertBook",
    color: "نقره‌ای",
    warranty: "گارانتی ۱۸ ماهه",
    price: 74000000,
    quantity: 1,
  },
  {
    id: 2,
    image: "/temp/products/3.webp",
    title: "گوشی موبایل سامسونگ Galaxy S24",
    color: "مشکی",
    warranty: "گارانتی ۲۴ ماهه",
    price: 45000000,
    quantity: 2,
  },
  {
    id: 3,
    image: "/temp/products/4.webp",
    title: "هدفون بی‌سیم سونی WH-1000XM5",
    color: "سفید",
    warranty: "گارانتی ۱۲ ماهه",
    price: 12500000,
    quantity: 1,
  },
];

function formatPrice(price: number) {
  return price.toLocaleString("fa-IR");
}

export default function Cart() {
  const [items, setItems] = useState(initialItems);
  const [isMainMoreListHide, setIsMainMoreListHide] = useState(true);

  const incrementQty = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setItems([]);
    setIsMainMoreListHide(true);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="rounded-xl border border-neutral-300 flex flex-col w-full py-3 px-4">
      {/* Header */}
      <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="font-bold">سبد خرید شما</div>
          {totalItems > 0 && (
            <div className="flex gap-0.5 items-center text-xs text-neutral-400/85">
              <TbPointFilled />
              <div className="text-xs">{formatPrice(totalItems)} مرسوله</div>
            </div>
          )}
        </div>
        <div
          className="cursor-pointer relative hover:text-neutral-600 transition-colors"
          onClick={() => setIsMainMoreListHide((pre) => !pre)}
        >
          <MdMoreVert className="text-2xl" />
          <div
            className={`absolute top-7 left-0 w-40 px-1.5 py-2 border border-neutral-200 shadow-sm bg-white rounded-xl transition-all duration-150 z-10 ${
              isMainMoreListHide
                ? "opacity-0 invisible translate-y-2"
                : "opacity-100 visible"
            }`}
          >
            <ul>
              <li
                onClick={removeAll}
                className="cursor-pointer flex gap-3 items-center hover:bg-neutral-100 p-2 rounded-xl transition-colors duration-150"
              >
                <FaRegTrashAlt />
                <div className="text-sm">حذف همه</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Empty state */}
      {items.length === 0 && (
        <div className="py-12 text-center text-neutral-400">
          سبد خرید شما خالی است
        </div>
      )}

      {/* Cart Items */}
      <div className="flex flex-col divide-y divide-neutral-100">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 py-4 first:pt-3 last:pb-0 relative"
          >
            {/* Image */}
            <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="112px"
                className="object-contain rounded-xl"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col flex-1 min-w-0 gap-1">
              <div className="font-medium text-neutral-800 text-sm md:text-base line-clamp-2">
                {item.title}
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span>رنگ: {item.color}</span>
                <span>{item.warranty}</span>
              </div>

              {/* Price & Actions */}
              <div className="flex items-center justify-between mt-auto pt-2 flex-wrap gap-2">
                {/* Quantity */}
                <div className="flex items-center gap-0">
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-r-xl text-neutral-600 hover:bg-neutral-100 transition-colors"
                  >
                    +
                  </button>
                  <div className="w-8 h-8 flex items-center justify-center border-t border-b border-neutral-300 text-sm font-medium">
                    {formatPrice(item.quantity)}
                  </div>
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-l-xl text-neutral-600 hover:bg-neutral-100 transition-colors"
                  >
                    -
                  </button>
                </div>

                {/* Price */}
                <div className="flex items-center gap-1 font-bold text-neutral-800">
                  <span>{formatPrice(item.price * item.quantity)}</span>
                  <span className="text-xs font-medium text-neutral-400">تومان</span>
                </div>
              </div>
            </div>

            {/* Remove button */}
            <button
              onClick={() => removeItem(item.id)}
              className="absolute top-4 left-0 md:static w-6 h-6 flex items-center justify-center text-neutral-300 hover:text-red-500 transition-colors"
            >
              <IoMdClose className="text-lg" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

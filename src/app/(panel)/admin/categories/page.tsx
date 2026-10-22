"use client";
import Modal from "@/components/modules/modal/Modal";
import { useState } from "react";
import {
  HiOutlinePlus,
  HiOutlineChevronDown,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";

const categories = [
  {
    name: "الکترونیک",
    count: 45,
    children: [
      { name: "موبایل", count: 18 },
      { name: "لپ تاپ", count: 12 },
      { name: "هدفون", count: 9 },
    ],
  },
  {
    name: "مد و پوشاک",
    count: 78,
    children: [
      { name: "مردانه", count: 34 },
      { name: "زنانه", count: 44 },
    ],
  },
  {
    name: "کتاب",
    count: 56,
    children: [
      { name: "رمان", count: 22 },
      { name: "آموزشی", count: 34 },
    ],
  },
  { name: "خانه و آشپزخانه", count: 34, children: [] },
];

export default function Page() {
  const [isCreateModal, setIsCreateModal] = useState(false);

  const addCategoryHandler = () => {};

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-neutral-800">
            دسته‌بندی‌ها
          </h1>
          <p className="text-xs md:text-sm text-neutral-500 mt-1">
            مدیریت دسته‌بندی محصولات
          </p>
        </div>
        <button
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-medium transition-colors self-start sm:self-auto"
          onClick={() => setIsCreateModal(true)}
        >
          <HiOutlinePlus className="text-lg" />
          <span>افزودن دسته‌بندی</span>
        </button>
      </div>

      <div className="bg-white border border-neutral-200 rounded-xl divide-y divide-neutral-100">
        {categories.map((cat) => (
          <div key={cat.name}>
            <div className="flex items-center justify-between px-4 md:px-6 py-4 hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-3">
                {cat.children.length > 0 && (
                  <HiOutlineChevronDown className="text-neutral-400 text-lg" />
                )}
                <span className="font-medium text-neutral-800 text-sm md:text-base">
                  {cat.name}
                </span>
                <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-lg">
                  {cat.count}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-neutral-100 text-neutral-500">
                  <HiOutlinePencil />
                </button>
                <button className="p-2 rounded-lg hover:bg-red-50 text-red-500">
                  <HiOutlineTrash />
                </button>
              </div>
            </div>
            {cat.children.length > 0 && (
              <div className="pr-10 md:pr-14 border-t border-neutral-50 divide-y divide-neutral-50">
                {cat.children.map((child) => (
                  <div
                    key={child.name}
                    className="flex items-center justify-between px-4 md:px-6 py-3 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-neutral-700">
                        {child.name}
                      </span>
                      <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-lg">
                        {child.count}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-500">
                        <HiOutlinePencil className="text-sm" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-red-50 text-red-500">
                        <HiOutlineTrash className="text-sm" />
                      </button>
                    </div>
                  </div>
                ))}
                {isCreateModal && (
                  <Modal
                    title="افزودن دسته بندی جدید"
                    subTitle="اطلاعات را وارد کنید"
                    onClose={() => setIsCreateModal(false)}
                    inputs={[{ name: "subName", type: "text" }]}
                    onSubmit={addCategoryHandler}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

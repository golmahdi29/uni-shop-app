"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineClipboardList,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineChartBar,
  HiOutlineTag,
  HiOutlineCollection,
  HiOutlineStar,
  HiOutlineMail,
  HiOutlinePhotograph,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle,
  HiOutlineCreditCard,
  HiOutlineTruck,
  HiOutlineColorSwatch,
  HiOutlineCash,
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChat,
  HiOutlineBookOpen,
  HiOutlineSpeakerphone,
} from "react-icons/hi";

type MenuItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

const menuGroups: MenuGroup[] = [
  {
    title: "پیشخوان",
    items: [
      { label: "داشبورد", icon: HiOutlineHome, href: "/admin/dashboard" },
    ],
  },
  {
    title: "مدیریت فروشگاه",
    items: [
      { label: "محصولات", icon: HiOutlineShoppingBag, href: "/admin/products" },
      { label: "دسته‌بندی‌ها", icon: HiOutlineCollection, href: "/admin/categories" },
      { label: "برندها", icon: HiOutlineTag, href: "/admin/brands" },
      { label: "تخفیف‌ها", icon: HiOutlineSpeakerphone, href: "/admin/discounts" },
      { label: "سفارشات", icon: HiOutlineClipboardList, href: "/admin/orders" },
      { label: "کاربران", icon: HiOutlineUsers, href: "/admin/users" },
      { label: "نظرات", icon: HiOutlineStar, href: "/admin/reviews" },
      { label: "پیام‌ها", icon: HiOutlineMail, href: "/admin/messages" },
    ],
  },
  {
    title: "محتوای سایت",
    items: [
      { label: "برگه‌ها", icon: HiOutlineDocumentText, href: "/admin/pages" },
      { label: "اسلایدها", icon: HiOutlinePhotograph, href: "/admin/sliders" },
      { label: "مقالات", icon: HiOutlineBookOpen, href: "/admin/blog" },
      { label: "سوالات متداول", icon: HiOutlineQuestionMarkCircle, href: "/admin/faq" },
    ],
  },
  {
    title: "تنظیمات",
    items: [
      { label: "تنظیمات سایت", icon: HiOutlineCog, href: "/admin" },
      { label: "ظاهر سایت", icon: HiOutlineColorSwatch, href: "/admin/appearance" },
      { label: "درگاه‌های پرداخت", icon: HiOutlineCreditCard, href: "/admin/payments" },
      { label: "روش‌های ارسال", icon: HiOutlineTruck, href: "/admin/shipping" },
      { label: "مالی", icon: HiOutlineCash, href: "/admin/financial" },
    ],
  },
  {
    title: "گزارشات",
    items: [
      { label: "گزارش فروش", icon: HiOutlineChartBar, href: "/admin/reports/sales" },
      { label: "گزارش کاربران", icon: HiOutlineUsers, href: "/admin/reports/users" },
      { label: "گزارش محصولات", icon: HiOutlineShoppingBag, href: "/admin/reports/products" },
    ],
  },
];

export default function PanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white border-l border-neutral-200 flex flex-col transform transition-transform duration-200 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-neutral-200">
          <span className="text-lg font-bold text-neutral-800">پنل مدیریت</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <HiOutlineX className="text-xl text-neutral-600" />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto space-y-6">
          {menuGroups.map((group) => (
            <div key={group.title}>
              <div className="text-xs font-medium text-neutral-400 px-4 mb-2">
                {group.title}
              </div>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                        isActive
                          ? "bg-sky-50 text-sky-600 font-medium"
                          : "text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      <Icon className="text-xl" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 min-w-0">
        <div className="h-16 flex items-center gap-3 px-6 border-b border-neutral-200 bg-white lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <HiOutlineMenu className="text-xl text-neutral-700" />
          </button>
          <span className="text-base font-bold text-neutral-800">پنل مدیریت</span>
        </div>
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}

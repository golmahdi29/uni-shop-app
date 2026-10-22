import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "گزارش باگ",
  description: "گزارش مشکلات و باگ‌های فروشگاه آنلاین دومینور",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

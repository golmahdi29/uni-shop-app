import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اتاق خبر دومینور",
  description: "آخرین اخبار، به‌روزرسانی‌های فناوری و رویدادهای شرکت دومینور",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

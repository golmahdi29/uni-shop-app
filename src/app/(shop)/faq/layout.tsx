import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "پرسش‌های متداول",
  description: "پاسخ به پرسش‌های متداول درباره خرید از دومینور",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "نحوه ثبت سفارش",
  description: "راهنمای گام به گام ثبت سفارش در دومینور",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

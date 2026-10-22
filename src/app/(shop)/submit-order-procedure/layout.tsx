import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "رویه ارسال سفارش",
  description: "مراحل و شرایط ارسال سفارش در دومینور",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

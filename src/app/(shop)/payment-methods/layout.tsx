import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شیوه‌های پرداخت",
  description: "روش‌های پرداخت در دومینور",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

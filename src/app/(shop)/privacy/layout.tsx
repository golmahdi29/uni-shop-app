import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حریم خصوصی",
  description: "حریم خصوصی کاربران در فروشگاه آنلاین دومینور",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با دومینور",
  description: "راه‌های ارتباطی با فروشگاه آنلاین دومینور",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "فرصت‌های شغلی",
  description: "به تیم دومینور بپیوندید — فرصت‌های شغلی و همکاری با ما",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "رویه‌های بازگرداندن کالا",
  description: "شرایط و مراحل بازگرداندن کالا از دومینور",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شرایط استفاده",
  description: "شرایط و قوانین استفاده از وب‌سایت دومینور",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

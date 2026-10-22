import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره دومینور",
  description: "داستان فروشگاه آنلاین دومینور، مأموریت و تیم ما",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "فروشگاه دومینور",
  description: "لیست محصولات و کالاهای فروشگاه دومینور",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

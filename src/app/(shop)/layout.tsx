import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-[95%] md:w-[78%] mx-auto">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}

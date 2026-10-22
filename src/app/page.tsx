import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import GoToUp from "@/components/modules/goToUp/GoToUp";
import Advantages from "@/components/templates/home/advantages/Advantages";
import Banner from "@/components/templates/home/banner/Banner";
import Banners from "@/components/templates/home/banners/Banners";
import Bestseller from "@/components/templates/home/bestseller/Bestseller";
import Brands from "@/components/templates/home/brands/Brands";
import Hotest from "@/components/templates/home/hotest/Hotest";
import LandingSlider from "@/components/templates/home/landingSlider/LandingSlider";
import LastArticles from "@/components/templates/home/lastArticles/LastArticles";
import Newest from "@/components/templates/home/newest/Newest";
import Offer from "@/components/templates/home/offer/Offer";
import TopCategory from "@/components/templates/home/topCategory/TopCategory";

export default function Home() {
  return (
    <>
      <div className="w-[95%] md:w-[78%] mx-auto">
        <Navbar />

        <LandingSlider />
        <TopCategory />
        <Offer />
        <Banners />
        <Newest />
        <Brands />
        <Bestseller />
        <Banner />
        <Hotest />
        <LastArticles />
        <Advantages />
        <GoToUp />
      </div>
      <Footer />
    </>
  );
}

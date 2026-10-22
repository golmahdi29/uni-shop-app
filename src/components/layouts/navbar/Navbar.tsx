"use client";

import { useState, useEffect } from "react";
import SearchBar from "@/components/modules/searchbar/SearchBar";
import Image from "next/image";
import Link from "next/link";

import { FaRegUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineFire } from "react-icons/hi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdLaptop } from "react-icons/md";
import { ImHeadphones } from "react-icons/im";
import { BsPcDisplay } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

export default function Navbar() {
  const [isDropdownopen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => setUserRole(data.user?.role ?? null))
      .catch(() => setUserRole(null));
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center w-full mt-5 *:w-full *:flex">
        <div className="flex items-center gap-3">
          <div
            className="bg-sky-600 hover:bg-sky-600/90 transition-colors p-2 rounded-xl cursor-pointer h-full md:hidden block"
            onClick={() => setIsMenuOpen((pre) => !pre)}
          >
            <RxHamburgerMenu className="text-xl text-neutral-50" />
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
        <Link href={"/"} className="w-full justify-center">
          <Image
            src={"/images/logos/logo.webp"}
            alt="logo"
            width={190}
            height={190}
          />
        </Link>
        <div className="flex items-center md:gap-5 justify-end">
          <Link
            href={userRole ? `/${userRole}` : "/login"}
            className="md:py-3 lg:px-5 p-2 rounded-xl bg-sky-600 hover:bg-sky-600/90 transition-colors text-white flex items-center gap-2 text-sm"
          >
            {userRole ? <FaRegUser className="text-lg" /> : <FiLogIn className="text-lg" />}
            <div className="lg:block hidden">{userRole ? "حساب کاربری" : "ورود"}</div>
          </Link>
          <div className="w-0.5 h-4 bg-neutral-200 md:block hidden"></div>
          <Link href={"/cart"} className="relative p-3">
            <BsHandbag className="md:text-2xl text-xl" />
            <div className="rounded-full bg-sky-600 flex items-center justify-center absolute md:top-0 md:right-0 top-1 right-1 md:h-5 md:w-5 h-4 w-4 p-2 text-neutral-50 md:text-sm text-xs">
              ۲
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full h-px bg-neutral-200 my-3"></div>

      {/* Desktop Menu */}
      <div className="justify-between items-center w-full mt-5 *:flex md:flex hidden">
        <div className="gap-5 relative">
          <Link href="/products" className="peer flex items-center gap-2 text-sm mr-4 font-medium cursor-pointer hover:text-sky-600/90 transition-colors">
            <RxHamburgerMenu />
            دسته‌بندی محصولات
          </Link>
          <div className="flex items-center gap-5">
            <div className="w-0.5 h-4 bg-neutral-200"></div>

            <div className="text-sm text-neutral-500 *:flex *:gap-2 *:items-center font-medium flex gap-5 *:hover:text-sky-600/90 *:transition-colors">
              <Link href="/products">
                <BsHandbag className="text-lg" />
                فروشگاه
              </Link>
              <Link href="/products">
                <HiOutlineFire className="text-lg" />
                پرفروش‌ترین ها
              </Link>
              <Link href="/faq">
                <AiOutlineQuestionCircle className="text-lg" />
                سوالات پرتکرار
              </Link>
            </div>
          </div>

          <div className="w-200 absolute top-full rounded-xl flex p-4 *:p-4 *:w-full shadow-lg translate-y-2 hover:translate-y-0 peer-hover:translate-y-0 duration-300 invisible opacity-0 peer-hover:visible peer-hover:opacity-100 hover:visible hover:opacity-100 transition-all z-50 bg-neutral-50">
            <div className="bg-neutral-300 rounded-xl">
              <div className="*:flex *:gap-3 *:items-center *:mb-5 *:last:mb-0 text-sm font-medium *:hover:text-sky-600/90 *:transition-colors">
                <Link href="/products?category=موبایل">
                  <HiOutlineDevicePhoneMobile className="text-lg" />
                  <div>موبایل</div>
                </Link>
                <Link href="/products?category=لپتاپ">
                  <MdLaptop className="text-lg" />
                  <div>لپ تاپ و تبلت</div>
                </Link>
                <Link href="/products?category=هدفون">
                  <ImHeadphones className="text-lg" />
                  <div>هدفون و هندزفری</div>
                </Link>
                <Link href="/products?category=کامپیوتر">
                  <BsPcDisplay className="text-lg" />
                  <div>کامپیوتر</div>
                </Link>
                <Link href="/products?category=صوتی">
                  <GoDeviceCameraVideo className="text-lg" />
                  <div>صوتی و تصویری</div>
                </Link>
              </div>
            </div>

            <div className="p-0! mx-5 w-4! rounded-xl bg-sky-600"></div>

            <div>
              <div className="*:flex *:gap-3 *:items-center *:mb-5 *:last:mb-0 text-sm font-medium *:hover:text-sky-600/90 *:transition-colors">
                <Link href="/products?category=موبایل">
                  <div>موبایل</div>
                </Link>
                <Link href="/products?category=لپتاپ">
                  <div>لپ تاپ و تبلت</div>
                </Link>
                <Link href="/products?category=هدفون">
                  <div>هدفون و هندزفری</div>
                </Link>
                <Link href="/products?category=کامپیوتر">
                  <div>کامپیوتر</div>
                </Link>
                <Link href="/products?category=صوتی">
                  <div>صوتی و تصویری</div>
                </Link>
              </div>
            </div>

            <div className="p-0! mx-5 w-4! rounded-xl bg-sky-600"></div>

            <div>
              <div className="*:flex *:gap-3 *:items-center *:mb-5 *:last:mb-0 text-sm font-medium *:hover:text-sky-600/90 *:transition-colors">
                <Link href="/products?category=موبایل">
                  <div>موبایل</div>
                </Link>
                <Link href="/products?category=لپتاپ">
                  <div>لپ تاپ و تبلت</div>
                </Link>
                <Link href="/products?category=هدفون">
                  <div>هدفون و هندزفری</div>
                </Link>
                <Link href="/products?category=کامپیوتر">
                  <div>کامپیوتر</div>
                </Link>
                <Link href="/products?category=صوتی">
                  <div>صوتی و تصویری</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end items-center gap-2 text-sm">
          <MdOutlinePhoneEnabled className="text-lg text-sky-600" />
          ۰۹۱۲۳۴۵۶۷۸۹
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 bottom-0 shadow-xl p-2 z-100 w-[60%] h-screen bg-neutral-50 md:hidden block transition-all duration-200 ease-out ${!isMenuOpen ? "translate-x-full" : "translate-x-0"}`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-3">
          <div>
            <Link href={"/"} className="w-full justify-center">
              <Image
                src={"/images/logos/logo.webp"}
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div
            className="text-2xl text-sky-800"
            onClick={() => setIsMenuOpen((pre) => !pre)}
          >
            <IoClose />
          </div>
        </div>
        <div className="w-full h-0.5 bg-neutral-200 rounded-xl"></div>

        {/* Main Menu */}
        <div onClick={() => setIsDropdownOpen((pre) => !pre)}>
          <div
            className={`peer flex items-center justify-between gap-2 text-sm mt-7 font-medium cursor-pointer hover:text-sky-600/90 transition-colors duration-200 p-3 rounded-xl ${isDropdownopen ? "bg-sky-600 text-neutral-50" : ""}`}
          >
            <Link href="/products" className={`flex items-center gap-2 text-xs`}>
              <RxHamburgerMenu />
              دسته‌بندی محصولات
            </Link>
            <div>
              {isDropdownopen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </div>
          </div>

          {/* Dropdown */}
          <div
            className={`bg-neutral-300 rounded-xl p-3 mt-2 duration-200 ease-out transition-all **:opacity-0 opacity-0 ${isDropdownopen ? "max-h-screen opacity-100 **:opacity-100" : " invisible max-h-0"}`}
          >
            <div className="*:flex *:gap-3 *:items-center *:mb-5 *:last:mb-0 text-xs font-medium *:hover:text-sky-600/90 *:transition-colors">
              <Link href="/products?category=موبایل">
                <HiOutlineDevicePhoneMobile className="text-lg" />
                <div>موبایل</div>
              </Link>
              <Link href="/products?category=لپتاپ">
                <MdLaptop className="text-xs" />
                <div>لپ تاپ و تبلت</div>
              </Link>
              <Link href="/products?category=هدفون">
                <ImHeadphones className="text-xs" />
                <div>هدفون و هندزفری</div>
              </Link>
              <Link href="/products?category=کامپیوتر">
                <BsPcDisplay className="text-xs" />
                <div>کامپیوتر</div>
              </Link>
              <Link href="/products?category=صوتی">
                <GoDeviceCameraVideo className="text-xs" />
                <div>صوتی و تصویری</div>
              </Link>
            </div>
          </div>

          <div
            className={`flex flex-col ${isDropdownopen ? "mt-8" : ""} gap-5 duration-200 px-3`}
          >
            <div className="text-xs text-neutral-500 *:flex *:gap-2 *:items-center font-medium flex flex-col gap-5 *:hover:text-sky-600/90 *:transition-colors">
              <Link href="/products">
                <BsHandbag className="text-lg" />
                فروشگاه
              </Link>
              <Link href="/products">
                <HiOutlineFire className="text-lg" />
                پرفروش‌ترین ها
              </Link>
              <Link href="/faq">
                <AiOutlineQuestionCircle className="text-lg" />
                سوالات پرتکرار
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

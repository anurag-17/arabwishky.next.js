"use client";
import { useCart } from "@/app/context-cart/context-cart";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const NAV_LINKS = [
  {
    label: "אודות",
    href: "/about",
  },
  {
    label: "וויסקי",
    href: "/whisky",
  },
  {
    label: "קניות לפי קטגוריות",
    href: "/coctails",
  },
  {
    label: "בית",
    href: "/",
  },
];
const Navbar = () => {
  const { cart, wishlist } = useCart();
  const pathname = usePathname();

  const [bgColor, setBgColor] = useState(
    pathname === "/" ? "transparent" : "#070301"
  );
  const [scroll, setscroll] = useState("");

  console.log(pathname, bgColor);

  useEffect(() => {
    const handleScroll = () => {
      const newColor = window.scrollY === 200 ? "transparent" : "#070301";
      setBgColor(newColor);
      setscroll(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className={`fixed w-full top-0 z-50 h-[40px] sm:h-[50px] md:h-[55px] lg:h-[80px] xl:h-auto ${
          bgColor === "transparent" ? "bg-transparent" : "bg-[#070301]"
        } `}
      >
        <div className="flex mx-auto 2xl:w-[1500px]  xl:w-[1000px] lg:w-[650px] sm:w-[500px] md:w-[600px] w-[70%] items-center">
          <div className="container mx-auto">
            <div className=" flexBetween py-[2px] sm:py-1 md:py-2 lg:py-3 xl:py-4 ">
              <button className=" text-white regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold focus-visible:outline-none text-[8px] sm:text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]">
                התחברות/רישום
              </button>
              <div className="">
                <ul className="hidden h-full gap-8 xl:gap-12 lg:flex text-[white]  ">
                  {NAV_LINKS.map((link, inx) => (
                    <Link
                      href={link.href}
                      key={inx}
                      className={`regular-16  flexCenter cursor-pointer pb-1 transition-all hover:font-bold transition-duration-5000 transition-ease-in-out transition-delay-100 text-[8px] sm:text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]
                    ${
                      pathname == link.href
                        ? "border-b border-white"
                        : "border-b border-transparent hover:border-white"
                    }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="relative flex gap-6">
                    <div>
                      <Link href="/cart">
                        {cart.length > 0 && (
                          <span className="absolute 2xl:text-[14px] text-[10px] 2xl:bottom-[25px] 2xl:left-[25px] xl:bottom-[25px] xl:left-[24px] lg:bottom-[20px] lg:left-[23px] md:bottom-[16px] md:left-[37px] sm:bottom-[13px] sm:left-[34px] bottom-[11px] left-[30px] border rounded-full p-[1px] lg:py-1  px-2 2xl:py-[2px] 2xl:px-[8px] text-white bg-[#315031]">
                            {cart.length}
                          </span>
                        )}
                        <img
                          src="/images/shopbag.svg"
                          className="cursor-pointer 2xl:w-[40px] 2xl:h-[40px]  xl:w-10 xl:h-10 lg:w-8 lg:h-8 md:w-4  sm:w-[14px] w-3 relative"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link href="/wishlist">
                        {wishlist.length > 0 && (
                          <span className="absolute 2xl:text-[14px] text-[10px] 2xl:bottom-[25px] 2xl:left-[95px] xl:bottom-[25px] xl:left-[90px] lg:bottom-[20px] lg:left-[23px] md:bottom-[16px] md:left-[37px] sm:bottom-[13px] sm:left-[34px] bottom-[11px] left-[30px] border rounded-full p-[1px] lg:py-1  px-2 2xl:py-[2px] 2xl:px-[8px] text-white bg-[#315031]">
                            {wishlist.length}
                          </span>
                        )}
                        <img
                          src="/images/heart.svg"
                          className="cursor-pointer 2xl:w-[35px] 2xl:h-[35px]  xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-3  sm:w-[12px] w-2 relative"
                        />
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="">
                <Link href="/">
                  <Image
                    src="/images/logo.webp"
                    alt="logo"
                    height={80}
                    width={80}
                    className="2xl:h-[80px] 2xl:w-[80px] xl:h-[60px] xl:w-[60px] lg:h-[60px] lg:w-[60px] md:h-[40px] md:w-[40px] sm:h-[40px] sm:w-[40px] w-[35px] h-[35px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;

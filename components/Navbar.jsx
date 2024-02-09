"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NAV_LINKS = [
  {
    label: "צור קשר",
    href: "/contact",
  },
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

    const pathname = usePathname()

  return (
    <>
      <section className={` fixed w-full top-0 z-50
      ${pathname == "/"  ? "bg-transparent" : "bg-[#070301] " }
      `}>
        <div className="container mx-auto">
          <div className=" flexBetween py-4 ">
            <button className=" text-white regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold focus-visible:outline-none">
              התחברות/רישום
            </button>
            <div className="">
              <ul className="hidden h-full gap-12 lg:flex text-[white]  ">
                {NAV_LINKS.map((link, inx) => (
                  <Link
                    href={link.href}
                    key={inx}
                    className={`regular-16  flexCenter cursor-pointer pb-1 transition-all hover:font-bold transition-duration-5000 transition-ease-in-out transition-delay-100 
                    ${pathname == link.href  ? "border-b border-white" : "border-b border-transparent hover:border-white" }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="">
              <Link href="/">
                <Image
                  src="/images/logo.webp"
                  alt="logo"
                  height={70}
                  width={70}
                />
              </Link>
            </div>
          </div>
        </div>  
      </section>
    </>
  );
};

export default Navbar;

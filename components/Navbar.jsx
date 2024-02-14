"use client";
import { useCart } from "@/app/context-cart/context-cart";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dialogMatch, setDialogMatch] = useState(false);

  const [bgColor, setBgColor] = useState(
    pathname === "/" ? "transparent" : "#070301"
  );
  const [scroll, setscroll] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    setFormData({
      name: "",
      email: "",
    });
    setDialogMatch(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

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
        className={`fixed w-full top-0 z-50 h-[50px] sm:h-[60px] md:h-[65px] lg:h-[80px] xl:h-auto flex items-center ${
          bgColor === "transparent" ? "bg-transparent" : "bg-[#070301]"
        } `}
      >
        <div className="flex mx-auto 2xl:w-[1500px]  xl:w-[1000px] lg:w-[880px]  md:w-[600px] w-full items-center">
          <div className=" ml-3" id="nav-drawer">
            <div className="text-center my-auto ">
              <button
                className="  focus:ring-4  font-medium rounded-lg text-[10px] mx-auto focus:outline-none "
                type="button"
                onClick={openDrawer}
              >
                <div className="mt-3  ">
                  <div className="bg-white sm:p-[1.2px] md:p-[1.5px] p-[1px] my-1 sm:w-6 w-5"></div>
                  <div className="bg-white sm:p-[1px] md:p-[1.5px] p-[1px] my-1"></div>
                  <div className="bg-white sm:p-[1px] md:p-[1.5px] p-[1px] my-1"></div>
                </div>
              </button>
            </div>
            {/* Drawer */}
            {isDrawerOpen && (
              <div
                id="drawer-form"
                className="fixed top-0 left-0 z-40 h-screen  overflow-y-auto transition-transform -translate-x-0 bg-black w-5/12 sm:w-3/12 dark:bg-gray-800 xsm-drawer"
                tabIndex={-1}
                aria-labelledby="drawer-form-label"
              >
                <div>
                  <button
                    type="button"
                    onClick={closeDrawer}
                    className="text-white  shadow-2xl text-sm  p-1 mt-2 mr-2 border rounded-lg float-right "
                  >
                    <img  src="/images/wrong.svg"className="mx-auto md:w-5 sm:w-4 w-3" />
                 
                  </button>
                </div>
                <div className="mt-10 ">
                  <div className=" lg:w-3/12 xl:w-2/12 md:w-full sm:w-full my-4">
                    {/* <Image src={leaves} className="mx-auto md:w-10 sm:w-6 w-4" /> */}

                    <h1
                      className=" 2xl:text-[35px] xl:text-[30px] lg:text-[25px] md:text-[25px] md:mb-5 sm:text-[20px] sm:mb-5 text-[14px]  text-center text-white"
                      id="nav-head"
                    >
                      Rum
                    </h1>
                  </div>
                  <hr />
                  <div className=" flex flex-col">
                    <ul className=" h-full gap-8 xl:gap-12 md:flex text-white  ">
                      {NAV_LINKS.map((link, inx) => (
                        <Link
                          href={link.href}
                          key={inx}
                          className={`regular-16  flexCenter cursor-pointer pb-1 transition-all hover:font-bold transition-duration-5000 transition-ease-in-out transition-delay-100 text-[12px] sm:text-[14px] my-1 sm:my-2  text-white
                    ${
                      pathname == link.href
                        ? "border-b border-white"
                        : "border-b border-transparent hover:border-white"
                    }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="container mx-auto">
            <div className=" flexBetween py-[8px] sm:py-1 md:py-2 lg:py-3 xl:py-4 ">
              <div className="md:block hidden">
                <button
                  onClick={() => setDialogMatch(true)}
                  className="  text-white regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold focus-visible:outline-none text-[8px] sm:text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                >
                  התחברות/רישום
                </button>
              </div>

              <div className="">
                <ul className="hidden md:block h-full gap-8 xl:gap-12 md:flex text-[white]  ">
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
                          <span className="absolute 2xl:text-[14px] text-[10px] 2xl:bottom-[25px] 2xl:left-[21px] xl:bottom-[20px] xl:left-[15px] lg:bottom-[14px] lg:left-[12px] md:bottom-[16px] md:left-[8px]  border rounded-full p-[1px] lg:py-[2px] lg:px-[6px]   px-1 2xl:py-[2px] 2xl:px-[8px] text-white bg-black">
                            {cart.length}
                          </span>
                        )}
                        <img
                          src="/images/shopbag.svg"
                          className="cursor-pointer 2xl:w-[40px] 2xl:h-[40px]  xl:w-7 xl:h-7 lg:w-6 lg:h-6 md:w-5  sm:w-[14px] w-3 relative"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link href="/wishlist">
                        {wishlist.length > 0 && (
                          <span className="absolute 2xl:text-[14px] text-[10px] 2xl:bottom-[25px] 2xl:left-[90px] xl:bottom-[20px] xl:left-[70px] lg:bottom-[14px] lg:left-[62px] md:bottom-[16px] md:left-[55px] border rounded-full p-[1px] lg:py-[2px] lg:px-[6px] px-1 2xl:py-[2px] 2xl:px-[8px] text-white bg-black">
                            {wishlist.length}
                          </span>
                        )}
                        <img
                          src="/images/heart.svg"
                          className="cursor-pointer 2xl:w-[35px] 2xl:h-[35px]  xl:w-6 xl:h-6 lg:w-5 lg:h-5 md:w-4  sm:w-[12px] w-2 relative"
                        />
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="flex gap-8 sm:gap-6 mr-3 md:mr-0">
                <div className="relative block md:hidden flex gap-8 sm:gap-6 items-center">
                  <div>
                    <Link href="/cart">
                      {cart.length > 0 && (
                        <span className="absolute text-[10px]  sm:left-[12px] sm:bottom-[20px] left-[12px] bottom-[18px]   border rounded-full p-[1px] px-1 text-white bg-black">
                          {cart.length}
                        </span>
                      )}
                      <img
                        src="/images/shopbag.svg"
                        className="cursor-pointer 2xl:w-[40px] 2xl:h-[40px]  xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-5  sm:w-[20px] w-5 relative"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/wishlist">
                      {wishlist.length > 0 && (
                        <span className="absolute text-[10px] sm:bottom-[20px] sm:left-[60px] left-[65px] bottom-[18px]  border rounded-full p-[1px] px-1 text-white bg-black">
                          {wishlist.length}
                        </span>
                      )}
                      <img
                        src="/images/heart.svg"
                        className="cursor-pointer 2xl:w-[35px] 2xl:h-[35px]  xl:w-6 xl:h-6 lg:w-5 lg:h-5 md:w-4  sm:w-[20px] w-4 relative"
                      />
                    </Link>
                  </div>
                </div>
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
      <Transition appear show={dialogMatch} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setDialogMatch(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[90%] sm:w-full sm:max-w-[600px] transform overflow-hidden rounded-2xl bg-white p-4  sm:px-2 lg:px-8 2xl:p-4 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end ">
                    <button
                      onClick={() => setDialogMatch(false)}
                      className="w-8"
                    >
                      <img
                        src="/images/wrongb.svg"
                        className="w-6"
                        alt="close"
                      />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-[20px] xl:text-[30px] font-semibold  text-gray-900 flex justify-center"
                  >
                    Login
                  </Dialog.Title>
                  <div className="mt-2 flex justify-center  mx-auto w-5/6">
                    <form onSubmit={handleSubmit} className="w-full ">
                      <input
                        className="custom_input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Email"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <br />
                      <input
                        className="custom_input"
                        type="password"
                        id="password"
                        name="email"
                        placeholder="Password"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <br />
                      <div className="flex justify-center">
                        <button
                          className="xl:text-[16px] 2xl:text-[18px] 2xl:my-5  font-bold border px-6 py-1 rounded-md mt-3 bg-black text-white hover:border hover:border-black hover:text-black hover:bg-transparent"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#060201] md:pt-10 lg:pt-12 xl:pt-24 pt-5">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="sm:my-2 lg:my-0  lg:mx-0">
              <h1
                className=" mt-2 text-[10px] sm:text-[12px] md:text-[14px] text-white lg:text-[14px] lg:leading-[20px]
                xl:text-[16px] 2xl:text-[18px] 2xl:leading-[26px] text-center lg:text-right"
                id="head2"
              >
                בוא נהיה חברים!
              </h1>
              <ul className=" my-2 flex justify-center gap-4 2xl:my-6 lg:justify-end lg:gap-5 lg:my-3 xl:gap-7 xl:my-4  lg:text-right">
                <li>
                  <Link href="https://www.facebook.com" target="_blank">
                    <Image
                      src="/images/facebookk.svg"
                      alt="loading"
                      height={30}
                      width={30}
                      // className="cursor-pointer w-4 sm:w-4 md:w-5 lg:w-full"
                    />
                  </Link>
                  {""}
                </li>
                <li>
                  <Link href="https://www.instagram.com" target="_blank">
                    <Image
                      src="/images/instagg.svg"
                      alt="loading"
                      height={30}
                      width={30}
                      // className="cursor-pointer w-4 sm:w-4 md:w-6 lg:w-full "
                    />
                  </Link>
                  {""}
                </li>
              </ul>
              <p
                className=" text-[8px] sm:text-[10px] md:text-[12px] my-2 text-center lg:text-right text-[#FFFFFF] lg:text-[12px] xl:text-[14px] xl:leading-[24px] 2xl:text-[18px] 2xl:leading-[26px]"
                id="pera"
              >
                קנייתך באתר מאובטחת ומוכרת ע”י חברות האשראי
              </p>
              <ul className="flex gap-1 justify-center lg:justify-end md:my-3 lg:my-6 xl:my-10">
                <Image
                  src="/images/visa.jpg"
                  alt="loading"
                  height={20}
                  width={20}
                  // className=" w-8  sm:w-10 md:w-12 2xl:w-[58px] 2xl:h-[34px] xl:w-[40px] xl:h-[24px] lg:w-[25px] lg:h-[20px] rounded-md"
                />
                <Image
                  src="/images/mastercard.jpg"
                  alt="loading"
                  height={20}
                  width={20}
                  // className=" w-8  sm:w-10 md:w-12 2xl:w-[58px] 2xl:h-[34px] xl:w-[40px] xl:h-[24px] lg:w-[25px] lg:h-[20px] rounded-md"
                />
                <Image
                  src="/images/american.jpeg"
                  alt="loading"
                  height={20}
                  width={20}
                  // className=" w-8  sm:w-10 md:w-12  2xl:w-[58px] 2xl:h-[34px] xl:w-[40px] xl:h-[24px] lg:w-[25px] lg:h-[20px] rounded-md"
                />
                <Image
                  src="/images/Diners-Club.png"
                  alt="loading"
                  height={20}
                  width={20}
                  // className=" w-8  sm:w-10 md:w-12  2xl:w-[58px] 2xl:h-[34px] xl:w-[40px] xl:h-[24px] lg:w-[25px] lg:h-[20px] rounded-md"
                />
              </ul>
            </div>
            <div className=" sm:my-2 md:my-2 lg:my-0 mx-auto  lg:mx-0">
              <h1
                className="text-[10px] sm:text-[12px] md:text-[14px] mt-2 text-white lg:text-[14px] lg:leading-[20px]
                xl:text-[16px] xl:leading-[30px] 2xl:leading-[26px] 2xl:text-[18px] text-center lg:text-right"
                id="head2"
              >
                צור קשר
              </h1>
              <ul className="text-[8px] sm:text-[10px] md:text-[12px] my-2 xl:my-6 text-center lg:text-right">
                <li className=" cursor-pointer sm:my-1 lg:my-1 xl:my-[6px] 2xl:my-3 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 2xl:leading-[24px]">
                  <Link href="mailto:alcohol.market@gmail.com">
                    alcohol.market@gmail.com
                  </Link>
                </li>
                <li className=" cursor-pointer sm:my-1 lg:my-1 xl:my-[6px] 2xl:my-3 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 2xl:leading-[24px]">
                  <Link href="tel:+38 9878 5897 598">+38 9878 5897 598</Link>
                </li>
              </ul>
            </div>
            <div className="sm:my-2 md:my-2 lg:my-0  mx-auto  lg:mx-0 ">
              <h1
                className="text-[10px] sm:text-[12px] md:text-[14px] mt-2  text-[#FFFFFF]  lg:text-[14px] lg:leading-[20px]
                xl:text-[16px] xl:leading-[30px] 2xl:leading-[26px] 2xl:text-[18px] text-center lg:text-right"
                id="head2"
              >
                קישורים אחרים
              </h1>
              <ul className="text-[8px] sm:text-[10px] md:text-[12px] sm:my-1 my-2 text-[#FFFFFF]  xl:my-6 text-center lg:text-right">
                <li
                  id=""
                  className="  cursor-pointer lg:my-1 xl:my-0 2xl:my-0 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 2xl:leading-[24px]"
                >
                  אלכוהול לאירועים
                </li>
                <li className=" cursor-pointer sm:my-1 lg:my-1 xl:my-[6px] 2xl:my-3 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 2xl:leading-[24px]">
                  מתנות ומארזים
                </li>
                <Link href="/about">
                  <li className="cursor-pointer lg:my-1 xl:my-0 2xl:my-0 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 2xl:leading-[24px]">
                    אודות
                  </li>
                </Link>
              </ul>
            </div>
            <div className=" sm:my-2 md:my-2 lg:my-0 lg:mx-0">
              <ul className="flex justify-center lg:justify-end">
                <Image
                  src="/images/logo.webp"
                  alt="loading"
                  height={80}
                  width={80}
                  //     className=" 2xl:w-[120px] 2xl:h-[120px]
                  //   xl:w-[80px] xl:h-[80px]
                  //   lg:w-[60px] lg:h-[60px]
                  //   md:w-[80px] md:h-[80px]
                  //   sm:w-[60px] sm:h-[60px]
                  //   w-[50px] h-[50px]"
                />
              </ul>
            </div>
          </div>
          <hr
            className="opacity-[20%] text-[#FFFFFF] mt-4 w-[280px] sm:w-[500px] 
            2xl:w-[1200px]  xl:w-[850px]  lg:w-[650px] mx-auto 2xl:mt-5"
          />
          <h1 className="text-[#FFFFFF]  text-center text-[8px] sm:text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] xl:py-3 py-2">
            © 2024 לולו. כל הזכויות שמורות.
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;

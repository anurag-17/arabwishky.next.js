"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import menu from "../public/images/menu.webp";
import facebook from "../public/images/facebook.webp";
import insta from "../public/images/INSTA.webp";
import search from "../public/images/search.webp";
import trash from "../public/images/trash.webp";
import userr from "../public/images/userr.webp";
import Rectangle1 from "../public/images/Rectangle9.svg";
import Rectangle2 from "../public/images/Rectangle10.svg";
import Rectangle3 from "../public/images/Rectangle11.png";
import Rectangle4 from "../public/images/Rectangle12.svg";
import Rectangle5 from "../public/images/Rectangle13.png";
import Rectangle6 from "../public/images/Rectangle15.png";
import bottle1 from "../public/images/bottle1.webp";
import bottle2 from "../public/images/bottle2.webp";
import bottle3 from "../public/images/bottle3.webp";
import bottle4 from "../public/images/bottle4.webp";
import Group11 from "../public/images/Group11.webp";
import div411 from "../public/images/div411.webp";
import div422 from "../public/images/div422.webp";
import div433 from "../public/images/div433.webp";
import div44 from "../public/images/div44.png";
import div455 from "../public/images/div455.webp";
import instaa from "../public/images/instagg.svg";
import facebookk from "../public/images/facebookk.svg";
import giftcaed from "../public/images/giftcaed.svg";
import Carousal from "./carousal";

const Page = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <section>
        <div>
            <div className="h-[100vh] lg:w-full  flexCenter flex-col"
              id="poster-img"
            >
          <div className="container mx-auto">
              <div className=" flex justify-end items-center">
                <div className=" text-right  flex justify-center flex-col">
                  <h1
                    className="text-[16px] leading-[18px] w-[100px]  mt-12 sm:w-[200px] 
                  lg:text-right ml-auto  sm:text-[30px] sm:mt-8 sm:leading-[35px] md:text-[35px] md:mt-14 md:leading-[40px] lg:text-[45px] mt-  lg:mt-8 lg:w-[300px]  lg:leading-[50px] xl:text-[60px] xl:leading-[70px] xl:mt-[90px] xl:w-[400px] 2xl:text-[100px] 2xl:leading-[110px] 2xl:mt-36 2xl:w-[564px]"
                    id="head1"
                  >
                    ויסקי בלנדד סקוטי חדש
                  </h1>

                  <p
                    className="text-white text-right ml-auto text-[6px] leading-[8px] w-[145px] mt-3 w-
               sm:text-[10px] sm:leading-[14px] sm:mt-2 sm:w-[250px]
               md:text-[12px] md:leading-[16px] md:mt-2   md:w-[300px]
               lg:text-[10px] lg:leading-[20px] lg:mt-10 lg:w-[320px]  
                 xl:text-[13px] xl:mt-12 xl:leading-[26px] xl:w-[415px] 2xl:text-[18px] 2xl:mt-[70px] 2xl:leading-[28px] 2xl:w-[571px]"
                    id="pera"
                  >
                    חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות
                    משחקים אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה
                    אחר, כלל פיסיקה צרפתית אגרונומיה אל, בשפות היסטוריה של היא.
                  </p>
                  <div className="flex 2xl:mt-8 mt-3  ">
                    <button
                      id="button"
                      className=" border text-center border-[#C1B505] ml-auto text-[#C1B505] 
                    text-[5px] py-[2px] px-[10px]
                  sm:text-[14px] sm:mt-4 sm:py-[2px] sm:px-4 
                  md:text-[16px] md:mt-4 md:py-1 md:px-5
                  lg:text-[14px] lg:mt-8 lg:py-1 lg:px-6 
                   xl:text-[14px] xl:leading-[22px] xl:py-[0px] xl:px-0 xl:w-[140px] xl:h-[38px]  xl:mt-8
                   2xl:text-[20px] 2xl:leading-[30px] 2xl:border-[3px] 2xl:w-[208px] 2xl:h-[54px] 2xl:mt-12 2xl:py-[0px] "
                    >
                      קנה עכשיו
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#F6F5E6] relative  lg:py-10  xl:py-20 2xl:pt-32 ">
            <img
              src="images/Frame-left.png"
              className="absolute left-0 2xl:w-[155px] 2xl:h-[265px] xl:w-[125px] xl:h-[215px] lg:w-[75px] lg:h-[145px] md:w-[75px] md:h-[145px]  sm:w-[75px] sm:h-[145px]  sm:top-[52%] w-[75px] h-[145px] top-[55%] md:top-[52%] xl:top-[52%] lg:top-[52%]"
            />
            <img
              src="images/Frame-right.png"
              className="absolute right-0 2xl:w-[124px] 2xl:h-[260px] xl:w-[94px] xl:h-[180px] lg:w-[64px] lg:h-[140px] md:w-[64px] md:h-[140px] sm:w-[64px] sm:h-[140px] sm:top-[82%] w-[64px] h-[140px] top-[82%] md:top-[82%] xl:top-[82.5%] lg:top-[79.5%]"
            />
            <div className="flex justify-center">
              <div className=" w-full ">
                <h1
                  className="text-center text-black 
                text-[20px] mt-5 mb-1
              sm:text-[25px] sm:leading-[40px] sm:mt-7 sm:mb-3
              md:text-[25px] md:leading-[40px] md:mt-9 md:mb-4
             lg:text-[25px] lg:leading-[30px] lg:my-5
              xl:text-[35px] xl:leading-[50px] xl:my-7
              2xl:text-[50px] 2xl:leading-[60px] 2xl:mt-[120]
              "
                  id="head2"
                >
                  קניות לפי קטגוריות
                </h1>
                <div className="flex flex-col lg:flex-row gap-5 justify-center 2xl:mt-5 mt-3">
                  <div>
                    <Image
                      src="/images/Rectangle15.png"
                      alt="icon"
                      height={247}
                      width={247}
                      className=" 
                      w-40 mx-auto
                      sm:w-48
                      md:w-56
                  lg:w-32 
                  xl:w-40 
                  2xl:w-[247px] 2xl:h-[247px] "
                    />
                    <h1
                      className="text-center 
                      text-[12px] mt-2
                sm:text-[14px] sm:leading-[25px]
                md:t6xt-[18px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[20px] 2xl:leading-[30px]
             "
                      id="pera4"
                    >
                      מתכוני קוקטיילים
                    </h1>
                  </div>
                  <div>
                    <Image
                      src={Rectangle1}
                      alt="icon"
                      height={247}
                      width={247}
                      className=" 
                      w-40 mx-auto
                      sm:w-48
                      md:w-56
                  lg:w-32 
                  xl:w-40 
                  2xl:w-[247px] 2xl:h-[247px]"
                    />
                    <h1
                      className="text-center
                      text-[12px] mt-2 
                      sm:text-[14px] sm:leading-[25px]
                md:text-[16px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[20px] 2xl:leading-[30px]"
                      id="pera4"
                    >
                      טקילה
                    </h1>
                  </div>
                  <div>
                    <Image
                      src={Rectangle2}
                      alt="icon"
                      height={247}
                      width={247}
                      className="  w-40 mx-auto
                      sm:w-48
                      md:w-56
                       lg:w-32  
                       xl:w-40  
                       2xl:w-[247px] 2xl:h-[247px]"
                    />
                    <h1
                      className="text-center 
                      text-[12px] mt-2
                      sm:text-[14px] sm:leading-[25px]
                md:text-[16px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[20px] 2xl:leading-[30px]"
                      id="pera4"
                    >
                      וויסקי
                    </h1>
                  </div>

                  <div>
                    <Image
                      src="/images/Rectangle11.png"
                      alt="icon"
                      className=" 
                      w-40 mx-auto
                      sm:w-48
                      md:w-56
                  lg:w-32 
                  xl:w-40 
                  2xl:w-[247px] 2xl:h-[247px]"
                      height={247}
                      width={247}
                    />
                    <h1
                      className="text-center 
                      text-[12px] mt-2
                      sm:text-[14px] sm:leading-[25px]
                md:text-[16px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[20px] 2xl:leading-[30px]"
                      id="pera4"
                    >
                      {" "}
                      גין
                    </h1>
                  </div>
                  <div>
                    <Image
                      src={Rectangle4}
                      alt="icon"
                      height={247}
                      width={247}
                      className="  w-40 mx-auto
                      sm:w-48
                      md:w-56
                       lg:w-32 xl:w-40 
                        2xl:w-[247px] 2xl:h-[247px] "
                    />
                    <h1
                      className="text-center 
                      text-[12px] mt-2
                      sm:text-[14px] sm:leading-[25px]
                md:text-[16px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[20px] 2xl:leading-[30px]"
                      id="pera4"
                    >
                      {" "}
                      סופר פרימיום
                    </h1>
                  </div>
                  <div>
                    <Image
                      src="/images/Rectangle13.png"
                      alt="icon"
                      height={247}
                      width={247}
                      className=" 
                      w-40 mx-auto
                      sm:w-48
                      md:w-56
                  lg:w-32  
                  xl:w-40  
                  2xl:w-[247px] 2xl:h-[247px]"
                    />
                    <h1
                      className="text-center 
                      text-[12px] mt-2
                      sm:text-[14px] sm:leading-[25px]
                md:text-[16px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[20px] 2xl:leading-[30px]"
                      id="pera4"
                    >
                      {" "}
                      מתכוני קוקטיילים
                    </h1>
                  </div>
                </div>

                <div className="2xl:mt-32 mx:auto 2xl:w-[1200px] xl:w-[850px] lg:w-[650px]  mx-auto">
                  <h1
                    className="text-center text-black text-[25px] mt-10
                sm:text-[25px] sm:leading-[25px] sm:mt-14  
                md:text-[30px] md:leading-[25px] md:mt-16  
          lg:text-[25px] lg:leading-[35px] lg:mb-3 lg:mt-16  
          xl:text-[35px] xl:leading-[45px] xl:mb-5 xl:mt:24
          2xl:text-[50px] 2xl:leading-[60px] 2xl:mb-12 2xl:mt:48
          "
                    id="head2"
                  >
                    {" "}
                    טעימה ממבצעי החודש
                  </h1>
                  <div className="flex flex-col lg:flex-row lg:gap-4 xl:gap-6 2xl:gap-[40px] justify-center">
                    <div
                      className="  sm:my-10  md:my-10 mx-auto lg:w-48 
                           xl:w-60  2xl:w-80
                      "
                    >
                      <div
                        className=" mt-3 lg:mt-0 w-full sm:w-[180px] md:w-[220px] 2xl:w-[268px] xl:w-[194px] lg:w-[135px] 2xl:pb-10"
                        id="imgbg"
                      >
                        <Image
                          src={bottle1}
                          alt="icon"
                          className="w-[100px] h-[258px] sm:w-[120px] sm:h-[300px] md:w-[140px] md:h-[350px]
                           mx-auto lg:w-[90px] lg:h-[250px] xl:w-[130px] xl:h-[360px] 2xl:w-[170px] 2xl:h-[448px] "
                        />
                      </div>
                      <div
                        className="text-center text-[10px] my-1 sm:text-[12px] sm:leading-[24px] md:text-[14px] md:leading-[28px] 
                        lg:text-[8px] lg:leading-[16px] lg:mt-3
                        xl:text-[10px] xl:leading-[20px] xl:mt-5
                        2xl:text-[16px] 2xl:leading-[30px] 2xl:mt-6
                       "
                        id="pera3"
                      >
                        וויסקי 1888 גראן רזרב 700 מל
                      </div>
                      <h1
                        className="text-center text-[12px] mt-1 sm:text-[16px] md:text-[20px]
                          lg:text-[14px] xl:text-[22px] xl:leading-[20px] xl:mt-2 2xl:text-[34px] 2xl:leading-[30px] 2xl:mt-2"
                        id="pera4"
                      >
                        ₪ 125.00
                      </h1>
                      <div className="flex ">
                        <button
                          id="button"
                          className="text-center border  border-[#C1B505] ml-auto text-[#C1B505] mx-auto text-[10px] py-[3px] px-[12px] mt-1 mb-5
                                   sm:text-[14px]  sm:mt-4 sm:py-1 sm:px-6 sm:mb-0
                                md:text-[14px]  md:mt-6 md:py-1 md:px-6 
                               lg:text-[10px]  lg:leading-[18px] lg:mt-3 lg:py-1 lg:px-5 
                               xl:text-[14px] xl:leading-[22px] xl:py-[0px] xl:px-0 xl:w-[140px] xl:h-[38px]   xl:mt-8 
                                            2xl:text-[20px] 2xl:leading-[30px] 2xl:mt-12 2xl:border-[3px] 2xl:w-[208px] 2xl:h-[54px]"
                        >
                          הוספה לסל
                        </button>
                      </div>
                    </div>
                    <div
                      className="sm:my-10  md:my-10 mx-auto lg:w-48 
                           xl:w-60  2xl:w-80
                      "
                    >
                      <div
                        className=" mt-3 lg:mt-0 w-full sm:w-[180px] md:w-[220px] 2xl:w-[268px] xl:w-[194px] lg:w-[135px]"
                        id="imgbg"
                      >
                        <Image
                          src={bottle2}
                          alt="icon"
                          className="w-[100px] h-[258px] sm:w-[120px] sm:h-[300px] md:w-[140px] md:h-[350px]
                           mx-auto lg:w-[90px] lg:h-[250px] xl:w-[130px] xl:h-[360px] 2xl:w-[170px] 2xl:h-[448px]"
                        />
                      </div>
                      <h1
                        className="text-center text-[10px] my-1 sm:text-[12px] sm:leading-[24px] md:text-[14px] md:leading-[28px] 
                        lg:text-[8px] lg:leading-[16px] lg:mt-3
                    xl:text-[10px] xl:leading-[20px] xl:mt-5
                     2xl:text-[16px] 2xl:leading-[30px] 2xl:mt-6
                       "
                        id="pera3"
                      >
                        וויסקי 1888 גראן רזרב 700 מל
                      </h1>
                      <h1
                        className="text-center text-[12px] mt-1  sm:text-[16px] md:text-[20px]
                         lg:text-[14px] xl:text-[22px] xl:leading-[20px] xl:mt-2 2xl:text-[34px] 2xl:leading-[30px] 2xl:mt-2"
                        id="pera4"
                      >
                        ₪ 125.00
                      </h1>
                      <div className="flex ">
                        <button
                          id="button"
                          className="text-center border border-[#C1B505] ml-auto text-[#C1B505] mx-auto text-[10px] py-[3px] px-[12px] mt-1 mb-5
                    sm:text-[14px]  sm:mt-4 sm:py-1 sm:px-6 sm:mb-0
                    md:text-[14px]  md:mt-6 md:py-1 md:px-6 
                    lg:text-[10px]  lg:leading-[18px] lg:mt-3 lg:py-1 lg:px-5 
                    xl:text-[14px] xl:leading-[22px] xl:py-[0px] xl:px-0 xl:w-[140px] xl:h-[38px]   xl:mt-8
                    2xl:text-[20px] 2xl:leading-[30px] 2xl:mt-12 2xl:border-[3px] 2xl:w-[208px] 2xl:h-[54px]"
                        >
                          הוספה לסל
                        </button>
                      </div>
                    </div>
                    <div
                      className="  sm:my-10  md:my-10 mx-auto lg:w-48 
                           xl:w-60  2xl:w-[268px]
                      "
                    >
                      <div
                        className=" w-full sm:w-[180px] md:w-[220px] 2xl:w-[268px] xl:w-[194px] lg:w-[135px]"
                        id="imgbg"
                      >
                        <Image
                          src={bottle3}
                          alt="icon"
                          className="w-[100px] h-[258px] sm:w-[120px] sm:h-[300px] md:w-[140px] md:h-[350px]
                           mx-auto  lg:w-[90px] lg:h-[250px] xl:w-[130px] xl:h-[360px] 2xl:w-[170px] 2xl:h-[448px]"
                        />
                      </div>
                      <h1
                        className="text-center text-[10px] my-1 sm:text-[12px] sm:leading-[24px] md:text-[14px] md:leading-[28px] 
                        lg:text-[8px] lg:leading-[16px] lg:mt-3
                    xl:text-[10px] xl:leading-[20px] xl:mt-5
                     2xl:text-[16px] 2xl:leading-[30px] 2xl:mt-6
                       "
                        id="pera3"
                      >
                        וויסקי 1888 גראן רזרב 700 מל
                      </h1>
                      <h1
                        className="text-center text-[12px] mt-1 sm:text-[16px] md:text-[20px]
                         lg:text-[14px] xl:text-[22px] xl:leading-[20px] xl:mt-2 2xl:text-[34px] 2xl:leading-[30px] 2xl:mt-2"
                        id="pera4"
                      >
                        ₪ 125.00
                      </h1>
                      <div className="flex ">
                        <button
                          id="button"
                          className="text-center border border-[#C1B505] ml-auto text-[#C1B505] mx-auto mt-1 mb-5 text-[10px] py-[3px] px-[12px]
                    sm:text-[14px]  sm:mt-4 sm:py-1 sm:px-6 sm:mb-0
                 my-1  md:text-[14px]  md:mt-6 md:py-1 md:px-6 
                  lg:text-[10px]  lg:leading-[18px] lg:mt-3 lg:py-1 lg:px-5 
                  xl:text-[14px] xl:leading-[22px] xl:py-[0px] xl:px-0 xl:w-[140px] xl:h-[38px]  xl:mt-8 
                   2xl:text-[20px] 2xl:leading-[30px] 2xl:mt-12 2xl:border-[3px] 2xl:w-[208px] 2xl:h-[54px]"
                        >
                          {" "}
                          הוספה לסל
                        </button>
                      </div>
                    </div>
                    <div
                      className="  sm:my-10  md:my-10 mx-auto lg:w-48 
                           xl:w-60  2xl:w-80
                      "
                    >
                      <div
                        className="w-full sm:w-[180px] md:w-[220px] 2xl:w-[268px] xl:w-[194px] lg:w-[135px]"
                        id="imgbg"
                      >
                        <Image
                          src={bottle4}
                          alt="icon"
                          className=" w-[100px] h-[258px] sm:w-[120px] sm:h-[300px] md:w-[140px] md:h-[350px]
                          mx-auto   lg:w-[90px] lg:h-[250px] xl:w-[130px] xl:h-[360px] 2xl:w-[170px] 2xl:h-[448px]"
                        />
                      </div>
                      <h1
                        className="text-center text-[10px] my-1 sm:text-[12px] sm:leading-[24px] md:text-[14px] md:leading-[28px] 
                        lg:text-[8px] lg:leading-[16px] lg:mt-3
                    xl:text-[10px] xl:leading-[20px] xl:mt-5
                     2xl:text-[16px] 2xl:leading-[30px] 2xl:mt-6
                       "
                        id="pera3"
                      >
                        וויסקי 1888 גראן רזרב 700 מל
                      </h1>
                      <h1
                        className="text-center text-[12px] mt-1  sm:text-[16px] md:text-[20px]
                         lg:text-[14px] xl:text-[22px] xl:leading-[20px] xl:mt-2 2xl:text-[34px] 2xl:leading-[30px] 2xl:mt-2"
                        id="pera4"
                      >
                        ₪ 125.00
                      </h1>
                      <div className="flex ">
                        <button
                          id="button"
                          className="text-center border border-[#C1B505] ml-auto text-[#C1B505] mx-auto mb-5 text-[10px] py-[3px] px-[12px]
                    sm:text-[14px]  sm:mt-4 sm:py-1 sm:px-6 
                my-1  md:text-[14px]  md:mt-6 md:py-1 md:px-6 
                  lg:text-[10px]  lg:leading-[18px] lg:mt-3 lg:py-1 lg:px-5 
                  xl:text-[14px] xl:leading-[22px] xl:py-[0px] xl:px-0 xl:w-[140px] xl:h-[38px]   xl:mt-8 
                   2xl:text-[20px] 2xl:leading-[30px] 2xl:mt-12 2xl:border-[3px] 2xl:w-[208px] 2xl:h-[54px]"
                        >
                          הוספה לסל
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="h-[370px] sm:h-[530px] md:h-[650px]  lg:h-[480px] xl:h-[620px] 2xl:h-[970px] pt-2 sm:pt-5 sm:pb-5 md:pt-2 lg:pt-14  md:pb-0 lg:pb-0  xl:pt-[1px]  2xl:pt-20  "
            id="div3"
          >
            <Carousal />
          </div>
          <div
            className="h-[750px] sm:h-[1200px] md:h-[1450px] lg:h-[500px] xl:h-[700px] 2xl:h-[1010px] 2xl:py-20  lg:pt-10 pt-10 relative"
            id="div4"
          >
            <img
              id="hidden"
              src="images/glas.svg"
              className="absolute opacity-[0.1] lg:w-16 lg:left-[-10px] lg:top-[23%] xl:w-24 xl:left-[-20px] 2xl:w-40  xl:top-[25%] 2xl:left-[-40px]  vert-move"
            />
            <img
              id="hidden"
              src="images/glas2.svg"
              className="absolute opacity-[0.1] lg:w-16 xl:w-24  2xl:w-32  xl:xl:top-[28%] 2xl:xl:top-[30%] lg:top-[35%] right-0 vert-move "
            />

            <img
              id="hidden"
              src="images/star.svg"
              className="absolute opacity-[0.3]
           lg:w-8 lg:top-3 lg:left-44
           xl:w-24 xl:top-16 xl:left-56 
           2xl:w-[76px] 2xl:h-[76px] 2xl:top-28 2xl:left-96  
           zoom-in-out-box"
            />
            <img
              id="hidden"
              src="images/star2.svg"
              className="absolute 
           lg:w-16 lg:bottom-12 lg:left-28
          xl:w-[180px] xl:bottom-24 xl:left-32
          2xl:w-[200px] 2xl:h-[240px] 2xl:bottom-14 2xl:left-52  starroted"
            />
            <div className="mx-auto 2xl:w-[1200px]  xl:w-[850px]  lg:w-[650px] sm:w-[500px] md:w-[600px]  w-[280px] 2xl:mt-10  xl:mt-10  ">
              <h1
                className=" text-center text-white 2xl:text-[50px] 2xl:leading-[60px] xl:text-[35px] xl:leading-[40px] lg:text-[22px] lg:leading-[30px] md:text-[30px] sm:text-[25px] text-[25px] "
                id="head2"
              >
                דילים לאירועים
              </h1>
              <img
                id="hidden"
                src="images/ring.svg"
                className=" z-10 absolute  
                lg:w-[50px] lg:h-[106px] lg:top-[50px] lg:right-[150px]
            xl:w-[50px] xl:h-[106px] xl:top-[87px] xl:right-[240px]
            2xl:w-[90px] 2xl:h-[106px] 2xl:top-[188px] 2xl:right-[325px]"
              />

              <div className="flex flex-col mx-auto sm:flex-col lg:mb-0 lg:flex-row 2xl:gap-[30px] 2xl:mt-20 xl:gap-[20px] xl:mt-12  lg:mt-10  lg:gap-[12px] md:my-4 sm:my-3 my-5">
                <div
                  className=" w-full h-auto mx-auto
                2xl:w-[539px] xl:w-[750px] lg:w-[620px]"
                >
                  <Image
                    className=" mx-auto lg:mx-0 md:w-full lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[420px]  2xl:w-[539px]  2xl:h-[630px]  "
                    src={div411}
                  />
                </div>
                <div className=" relative  flex flex-wrap gap-[10px] mt-[10px] lg:mt-0 mx-auto 2xl:gap-[30px]  2xl:w-[630px] xl:gap-[20px] lg:gap-[12px] lg:pb-0 xl:pb-16 2xl:pb-16">
                  <Image
                    className="w-[135px] md:w-[290px] mx-auto sm:w-[240px] lg:w-[160px]  lg:h-[170px] xl:w-[200px]  xl:h-[200px] 2xl:w-[300px]  2xl:h-[300px]"
                    src={div422}
                  />

                  <div className=" flex bg-[#9B2A0C] text-white rounded-[10px] w-[135px] md:w-[290px] mx-auto sm:w-[240px]  lg:w-[160px]  lg:h-[170px] xl:w-[200px]  xl:h-[200px] 2xl:w-[300px]  2xl:h-[300px] ">
                    <div className="mx-auto my-auto">
                      <h1
                        id="head2"
                        className="   mx-auto text-right
                        w-[100px] h-[55px] text-[18px] leading-[22px]
                        sm:w-[140px] sm:h-[90px] sm:text-[25px] sm:leading-[30px]
                        md:w-[170px] md:h-[100px] md:text-[30px] md:leading-[40px]
                        lg:w-[110px] lg:h-[60px] lg:text-[20px] lg:leading-[30px]
                        xl:w-[150px] xl:h-[80px] xl:text-[28px] xl:leading-[40px] 
                         2xl:w-[209px] 2xl:h-[100px] 2xl:text-[40px] 2xl:leading-[50px] "
                      >
                        קבלו 30% הנחה על עסקת אירועים
                      </h1>{" "}
                      <button
                        id="button"
                        className=" text-center border border-[#C1B505] ml-auto text-[#C1B505] mx-auto mb-5 
                        text-[10px]  mt-0 py-1 px-7
                    sm:text-[14px]  sm:mt-0 sm:py-2 sm:px-10
                 md:text-[16px]  md:mt-4 md:py-2 md:px-14
                  lg:text-[10px]  lg:leading-[18px] lg:mt-3 lg:py-1 lg:px-8 
                  xl:text-[14px] xl:leading-[22px] xl:py-[0px] xl:px-0 xl:w-[150px] xl:h-[38px]  xl:mt-4  
                   2xl:text-[20px] 2xl:leading-[30px] 2xl:mt-8 2xl:border-[3px] 2xl:w-[208px] 2xl:h-[54px]"
                      >
                        הוספה לסל
                      </button>
                    </div>
                  </div>
                  <Image
                    className=" w-[135px] mb-0 md:w-[290px] mx-auto sm:w-[240px]  lg:w-[160px]  lg:h-[170px] xl:w-[200px]  xl:h-[200px] 2xl:w-[300px]  2xl:h-[300px]"
                    src={div433}
                  />
                  <Image
                    className=" w-[135px] mb-0 md:w-[290px] mx-auto sm:w-[240px]   lg:w-[160px]  lg:h-[170px] xl:w-[200px]  xl:h-[200px] 2xl:w-[300px]  2xl:h-[300px]"
                    src={div455}
                  />
                </div>
                <div
                  id="hidden"
                  className="z-10 absolute xl:bottom-60 xl:right-28 lg:bottom-40 lg:right-24 opacity-[0.2] 2xl:w-[150px]"
                >
                  <img
                    src="images/minis.svg"
                    className=" mx-auto 2xl:w-[76px] 2xl:h-[76px] lg:w-[56px] lg:h-[56px]"
                  />
                  <img
                    src="images/miniss.svg"
                    className=" 2xl:w-[46px] 2xl:h-[46px] lg:w-[36px] lg:h-[36px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F6F5E6] ">
            <div className="flex justify-center pb-0 lg:justify-between flex-col lg:flex-row mx-auto sm:py-12  lg:py-16 2xl:w-[1200px]  xl:w-[850px]  lg:w-[650px] sm:w-[500px] md:w-[600px] w-[280px]">
              <div className="w-full 2xl:mt-24 mx-auto pt-10 sm:pt-0 ">
                <Image
                  src={giftcaed}
                  className="2xl:w-[573px]  2xl:h-[419px] xl:w-[440px] xl:h-[390px]  lg:w-[280px] sm:w-[300px] md:w-[350px] mx-auto lg:mx-0"
                />
                <img
                  src="images/underline.svg"
                  className="lg:w-[1070px] lg:h-[23px] 2xl:mt-5  mx-auto"
                />
              </div>
              <div className="flex justify-center">
                <div className="w-full 2xl:mt-36 2xl:w-[421px] xl:w-[340px] xl:mt-24 mx-auto">
                  <h1
                    className="text-[18px] sm:text-[30px] md:text-[35px]  lg:text-[27px] lg:leading-[35px] xl:text-[40px] xl:leading-[45px] 2xl:text-[50px] 2xl:leading-[60px] text-center lg:text-right"
                    id="head2"
                  >
                    כרטיס נטען
                  </h1>
                  <p
                    className="my-3 mx-auto text-center lg:text-right  start text-[12px] leading-[15px] sm:text-[16px] sm:leading-[25px] sm:w-[350px]  md:w-[350px]  md:text-[16px] md:leading-[25px] lg:ml-0 lg:text-[12px] lg:leading-[20px] lg:mt-3 lg:w-[260px]
                   xl:text-[14px] xl:leading-[20px] xl:mt-5 xl:w-[305px] xl:ml-9 2xl:ml-0
                   2xl:w-[421px] 2xl:h-[84px] 2xl:text-[18px] 2xl:leading-[28px] 2xl:mt-8"
                    id="pera"
                  >
                    חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות
                    משחקים אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה
                    אחר, כלל פיסיקה צרפתית אגרונומיה אל,
                  </p>
                  <div className="flex  lg:justify-end">
                    <button
                      id="button"
                      className="mx-auto lg:mx-0 text-center border border-[#C1B505] ml-auto text-[#C1B505] text-[10px] py-[2px] px-[10px] mt-2 mb-10
                     sm:text-[14px]  sm:mt-4 sm:py-1 sm:px-6 
                  md:text-[14px]  md:mt-6 md:py-1 md:px-6 
                  lg:text-[10px]  lg:mt-8 lg:py-1 lg:px-6 
                  xl:text-[14px] xl:leading-[22px] xl:py-[0px] xl:px-0 xl:w-[140px] xl:h-[38px]   xl:mt-8 
                    2xl:mt-14 2xl:mb-60 2xl:text-[20px] 2xl:leading-[30px] 2xl:border-[3px] 2xl:w-[208px] 2xl:h-[54px]"
                    >
                      מתנה עכשיו
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#9B2A0C] py-10 sm:py-10  lg:py-16 xl:py-20 2xl:p-16 mx-auto">
              <div className="flex flex-col justify-between items-center lg:flex-row mx-auto 2xl:w-[1200px]  xl:w-[850px] lg:w-[650px] sm:w-[500px] md:w-[600px] w-[208px]">
                <div className="flex w-full lg:w-8/12 mx-auto lg:mx-0  lg:my-0 sm:w-2/3 2xl:w-[779px] 2xl:h-[70px]">
                  <span
                    className="bg-[#C1B505] text-[#FFFFFF] text-[10px] py-2 px-2  rounded-sm sm:p-2 md:py-4 md:px-5 my-auto items-center text-center 
                     lg:py-[12px] xl:py-[16px] 2xl:py-[20px] 2xl:px-[30px] lg:rounded-md rounded-r-none lg:rounded-r-none 2xl:text-[20px] 2xl:leading-[30px] lg:w-[70px]  xl:w-[108px] 2xl:w-[208px] "
                    id="pera4"
                  >
                    הירשם
                  </span>
                  <input
                    type="search"
                    placeholder="הזן את כתובת הדואר האלקטרוני שלך"
                    className="bg-[#A9482E]   my-auto focus:outline-none w-[80%] 
                    sm:w-[80%]  md:w-[90%] sm:p-1 md:p-3 p-1
                     cursor-pointer text-[#FFFFFF] rounded-sm rounded-l-none lg:rounded-md lg:text-[10px]  lg:rounded-l-none lg:p-3 xl:p-4  2xl:p-7   text-right mt-0 bottm-input"
                  />
                </div>

                <div className=" my-2 flex flex-col justify-center lg:justify-end 2xl:w-[353px]">
                  <h1
                    className="text-center lg:text-right text-white text-[16px] sm:text-[25px] lg:text-[25px] xl:text-[35px] xl:leading-[50px] 2xl:text-[50px] 2xl:leading-[60px] "
                    id="head2"
                  >
                    !תיויומח מבל
                  </h1>
                  <p
                    className="text-white text-right text-[10px] sm:text-[16px] lg:mt-2 lg:text-[14px] xl:mt-4 xl:text-[16px] xl:leading-[20px] 2xl:mt-6 2xl:text-[18px] 2xl:leading-[28px] "
                    id="pera"
                  >
                    אנחנו נציע לך מוצרים ומבצעים משתלמים
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-[#060201] md:pt-10 lg:pt-12 xl:pt-24 pt-5">
            <div className="flex flex-col-reverse lg:flex-row justify-between mx-auto 2xl:w-[1200px]  xl:w-[850px]  lg:w-[650px] sm:w-[500px]  w-[280px]">
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
                    <Link
                      href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzAyOTYwMDAzLCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"
                      target="_blank"
                    >
                      <img
                        src="images/facebookk.svg"
                        className="cursor-pointer w-4 sm:w-4 md:w-5 lg:w-full"
                      />
                    </Link>
                    {""}
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/accounts/login/"
                      target="_blank"
                    >
                      <img
                        src="images/instagg.svg"
                        className="cursor-pointer w-4 sm:w-4 md:w-6 lg:w-full "
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
                  <img
                    src="images/visa.jpg"
                    className=" w-8  sm:w-10 md:w-12 2xl:w-[58px] 2xl:h-[34px] xl:w-[40px] xl:h-[24px] lg:w-[25px] lg:h-[20px] rounded-md"
                  />
                  <img
                    src="images/mastercard.jpg"
                    className=" w-8  sm:w-10 md:w-12 2xl:w-[58px] 2xl:h-[34px] xl:w-[40px] xl:h-[24px] lg:w-[25px] lg:h-[20px] rounded-md"
                  />
                  <img
                    src="images/american.jpeg"
                    className=" w-8  sm:w-10 md:w-12  2xl:w-[58px] 2xl:h-[34px] xl:w-[40px] xl:h-[24px] lg:w-[25px] lg:h-[20px] rounded-md"
                  />
                  <img
                    src="images/Diners-Club.png"
                    className=" w-8  sm:w-10 md:w-12  2xl:w-[58px] 2xl:h-[34px] xl:w-[40px] xl:h-[24px] lg:w-[25px] lg:h-[20px] rounded-md"
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
                  <li className="cursor-pointer lg:my-1 xl:my-0 2xl:my-0 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 2xl:leading-[24px]">
                    מוצרים נלווים
                  </li>
                </ul>
              </div>
              <div className=" sm:my-2 md:my-2 lg:my-0 lg:mx-0">
                <ul className="flex justify-center lg:justify-end">
                  <img
                    src="images/logo.webp"
                    className=" 2xl:w-[120px] 2xl:h-[120px]
                  xl:w-[80px] xl:h-[80px]
                  lg:w-[60px] lg:h-[60px]
                  md:w-[80px] md:h-[80px]
                  sm:w-[60px] sm:h-[60px]
                  w-[50px] h-[50px]"
                  />
                </ul>
              </div>
            </div>
            <hr
              className="opacity-[20%] text-[#FFFFFF] mt-4 w-[280px] sm:w-[500px] 
            2xl:w-[1200px]  xl:w-[850px]  lg:w-[650px] mx-auto 2xl:mt-5"
            />
            <h1 className="text-[#FFFFFF]  text-center text-[8px] sm:text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] xl:py-3 py-2">
              © 2023 לולו. כל הזכויות שמורות.
            </h1>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Page;

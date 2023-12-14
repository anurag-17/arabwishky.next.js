"use client";
import React from "react";
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
import Rectangle6 from "../public/images/Rectangle15.svg";
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
import american from "../public/images/american.jpeg";
import mastercard from "../public/images/mastercard.jpg";
import visa from "../public/images/visa.jpg";
import giftcaed from "../public/images/giftcaed.svg";
import Carousal from "./carousal";

const page = () => {
 

  return (
    <>
      <section>
        <div>
          <div className="lg:h-screen " id="poster-img">
            <nav
              className=" 
              sm:py-3
              md:py-4
            lg:py-6
              xl:py-8 
              2xl:py-10 "
            >
              <div className="flex mx-auto justify-between 2xl:w-[1200px] xl:w-[850px] lg:w-[650px] sm:w-[500px] md:w-[600px] w-[280px]">
                <ul className="flex  ">
                  <ul className="flex gap-2 justify-around my-auto 2xl:gap-[70px] xl:gap-[40px] lg:gap-[35px] ">
                    <Link href="#">
                      <Image
                        src={menu}
                        alt="icon"
                        className=" w-2 sm:w-5 md:w-6 lg:w-5 xl:w-[30px] 2xl:w-[42px]"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src={trash}
                        alt="icon"
                        className=" w-2 sm:w-5 md:w-6 lg:w-5 xl:w-[25px] 2xl:w-[36px] "
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src={userr}
                        alt="icon"
                        className=" w-2 sm:w-5 md:w-6 lg:w-5 xl:w-[25px] 2xl:w-[34px]  "
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src={search}
                        alt="icon"
                        className=" w-2 ml-12 absolute sm:w-3 sm:ml-3 sm:mt-1  md:w-4 lg:w-3 lg:mt-1 md:ml-3 md:mt-2  xl:w-[14px]  2xl:w-[22px] xl:ml-4 xl:mt-1 2xl:mt-2 2xl:ml-4"
                      />
                    </Link>
                  </ul>
                  <input
                    placeholder="חפש מוצרים"
                    type="search"
                    className=" w-1/2  
                    rounded-md bg-[#FFFFFF0D] text-right cursor-pointer text-[#878787] relative  border border-1 border-[#878787] p-0 
                  sm:p-[2px] sm:w-5/12
                  md:p-1 md:w-2/4
                  lg:h-8
                  xl:h-10
                  2xl:h-14  2xl:w-[437px]"
                  />
                </ul>
                <ul className="">
                  <h1
                    className="text-[#B15953] 
                    sm:text-[20px]
                    md:text-[25px]
                   lg:text-[20px] leading-normal
                   xl:text-[30px] 
                  2xl:text-[48px] 2xl:leading-[58px]"
                    id="heading1"
                  >
                    Logo
                  </h1>
                </ul>
              </div>
            </nav>
            <div className=" flex justify-end mx-auto  2xl:w-[1200px] xl:w-[850px] lg:w-[650px] sm:w-[500px] md:w-[600px] w-[280px]">
              <div className=" text-right">
                <h1
                  className="text-[16px] leading-[18px] w-[100px]  mt-3 sm:w-[200px] 
                  lg:text-right ml-auto  sm:text-[30px] sm:mt-8 sm:leading-[35px] md:text-[35px] md:mt-8 md:leading-[40px] lg:text-[45px]  lg:mt-14 lg:w-[300px]  lg:leading-[50px] xl:text-[60px] xl:leading-[70px] xl:mt-[65px] xl:w-[400px] 2xl:text-[100px] 2xl:leading-[110px] 2xl:mt-32 2xl:w-[564px]"
                  id="head1"
                >
                  ויסקי בלנדד סקוטי חדש
                </h1>

                <p
                  className="text-white text-right ml-auto text-[6px] leading-[8px] w-[135px] mt-2 w-
               sm:text-[10px] sm:leading-[14px] sm:mt-2 sm:w-[250px]
               md:text-[12px] md:leading-[16px] md:mt-2   md:w-[300px]
               lg:text-[10px] lg:leading-[20px] lg:mt-10 lg:w-[320px]  
                 xl:text-[13px] xl:mt-14 xl:leading-[26px] xl:w-[415px] 2xl:text-[18px] 2xl:mt-[70px] 2xl:leading-[28px] 2xl:w-[571px]"
                  id="pera"
                >
                  חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות משחקים
                  אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה אחר, כלל
                  פיסיקה צרפתית אגרונומיה אל, בשפות היסטוריה של היא.
                </p>
                <div className="flex lg:mb-36 2xl:mt-8 mt-3 mb-7">
                  <button
                    id="button"
                    className=" border border-1 lg:border-2border-2 border-[#C1B505] text-right ml-auto text-[#C1B505] 
                    text-[4px] px-[7px] 
                  sm:text-[14px] sm:mt-4 sm:py-[2px] sm:px-4 sm:mb-8
                  md:text-[16px] md:mt-4 md:py-1 md:px-5 md:mb-12
                  lg:text-[14px] lg:mt-8 lg:py-1 lg:px-6
                   xl:text-[18px] xl:mt-8 xl:py-[6px] xl:px-8 
                   2xl:text-[25px]  2xl:mt-12 2xl:py-3 2xl:px-12"
                  >
                    קנה עכשיו
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-[#F6F5E6] relative  lg:py-10  xl:py-20 2xl:py-32 ">
          <img src="images/Frame-left.png" className="absolute left-0 2xl:w-[155px] 2xl:h-[265px] xl:w-[125px] xl:h-[215px] lg:w-[75px] lg:h-[145px] md:w-[75px] md:h-[145px]  sm:w-[75px] sm:h-[145px]  sm:top-[52%] w-[75px] h-[145px] top-[55%] md:top-[52%] xl:top-[52%] lg:top-[52%]"/>
          <img src="images/Frame-right.png" className="absolute right-0 2xl:w-[124px] 2xl:h-[260px] xl:w-[94px] xl:h-[180px] lg:w-[64px] lg:h-[140px] md:w-[64px] md:h-[140px] sm:w-[64px] sm:h-[140px] sm:top-[82%] w-[64px] h-[140px] top-[82%] md:top-[82%] xl:top-[82.5%] lg:top-[79.5%]"/>
            <div className="flex justify-center">
              <div className="2xl:w-[1200px] xl:w-[850px] lg:w-[650px] sm:w-[500px] md:w-[600px] ">
                <h1
                  className="text-center text-black 
                text-[14px] mt-5 mb-1
              sm:text-[25px] sm:leading-[40px] sm:mt-7 sm:mb-3
              md:text-[25px] md:leading-[40px] md:mt-9 md:mb-4
             lg:text-[25px] lg:leading-[30px] lg:my-5
              xl:text-[35px] xl:leading-[50px] xl:my-7
              2xl:text-[50px] 2xl:leading-[60px] 2xl:my-10
              "
                  id="head2"
                >
                  קניות לפי קטגוריות
                </h1>
                <div className="flex flex-col lg:flex-row gap-5 justify-center">
                  <div>
                    <Image
                      src="/images/Rectangle15.svg"
                      alt="icon"
                      height={247}
                      width={247}
                      className=" 
                      w-40 mx-auto
                      sm:w-48
                      md:w-56
                  lg:w-32 
                  xl:w-40 
                  2xl:w-64 "
                    />
                    <h1
                      className="text-center 
                      text-[10px] mt-2
                sm:text-[14px] sm:leading-[25px]
                md:t6xt-[18px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[25px] 2xl:leading-[50px]
             "
                      id="para2"
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
                  2xl:w-64  "
                    />
                    <h1
                      className="text-center
                      text-[10px] mt-2 
                      sm:text-[14px] sm:leading-[25px]
                md:text-[16px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[25px] 2xl:leading-[50px]"
                      id="para2"
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
                       2xl:w-64 "
                    />
                    <h1
                      className="text-center 
                      text-[10px] mt-2
                      sm:text-[14px] sm:leading-[25px]
                md:text-[16px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[25px] 2xl:leading-[50px]"
                      id="para2"
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
                  2xl:w-64 "
                      height={247}
                      width={247}
                    />
                    <h1
                      className="text-center 
                      text-[10px] mt-2
                      sm:text-[14px] sm:leading-[25px]
                md:text-[16px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[25px] 2xl:leading-[50px]"
                      id="para2"
                    >
                      {" "}
                      hello
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
                       lg:w-32 xl:w-40  2xl:w-64  "
                    />
                    <h1
                      className="text-center 
                      text-[10px] mt-2
                      sm:text-[14px] sm:leading-[25px]
                md:text-[16px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[25px] 2xl:leading-[50px]"
                      id="para2"
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
                   2xl:w-64 "
                    />
                    <h1
                      className="text-center 
                      text-[10px] mt-2
                      sm:text-[14px] sm:leading-[25px]
                md:text-[16px] md:leading-[35px]
                lg:text-[16px] lg:leading-[30px]
                 xl:text-[18px] xl:leading-[40px]
                2xl:text-[25px] 2xl:leading-[50px]"
                      id="para2"
                    >
                      {" "}
                      מתכוני קוקטיילים
                    </h1>
                  </div>
                </div>

                <div className="2xl:mt-32 mx:auto 2xl:w-[1200px] xl:w-[850px] lg:w-[650px] ">
                  <h1
                    className="text-center text-black mt-5
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
                  <div className="flex flex-col lg:flex-row lg:gap-4 xl:gap-6 2xl:gap-10 justify-center">
                    <div
                      className="  sm:my-10  md:my-10 mx-auto lg:w-48 
                           xl:w-60  2xl:w-80
                      "
                    >
                      <div
                        className=" mt-3 lg:mt-0 w-[140px] sm:w-[180px] md:w-[220px] 2xl:w-[268px] xl:w-[194px] lg:w-[135px]"
                        id="imgbg"
                      >
                        <Image
                          src={bottle1}
                          alt="icon"
                          className="w-[100px] h-[258px] sm:w-[120px] sm:h-[300px] md:w-[140px] md:h-[350px]
                           mx-auto lg:w-[90px] lg:h-[250px] xl:w-[130px] xl:h-[360px] 2xl:w-[170px] 2xl:h-[448px]"
                        />
                      </div>
                      <h1
                        className="text-center  sm:text-[12px] sm:leading-[24px] md:text-[14px] md:leading-[28px] 
                        lg:text-[8px] lg:leading-[16px] lg:mt-3
                    xl:text-[10px] xl:leading-[20px] xl:mt-5
                     2xl:text-[16px] 2xl:leading-[30px] 2xl:mt-6
                       "
                        id="pera3"
                      >
                        {/* וויסקי 1888 גראן רזרב 700 מ"ל */}
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
                          className="text-right border border-1 lg:border-2 border-[#C1B505] ml-auto text-[#C1B505] mx-auto text-[8px] py-[2px] px-[8px] mt-1 mb-5
                    sm:text-[14px]  sm:mt-4 sm:py-1 sm:px-6 sm:mb-0
                  md:text-[14px]  md:mt-6 md:py-1 md:px-6 
                  lg:text-[10px]  lg:leading-[18px] lg:mt-3 lg:py-1 lg:px-5 
                   xl:text-[14px] xl:leading-[20px] xl:mt-8 xl:py-2 xl:px-7
                   2xl:text-[20px] 2xl:leading-[30px] 2xl:mt-12 2xl:py-3 2xl:px-12"
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
                        className=" mt-3 lg:mt-0 w-[140px] sm:w-[180px] md:w-[220px] 2xl:w-[268px] xl:w-[194px] lg:w-[135px]"
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
                        className="text-center sm:text-[12px] sm:leading-[24px] md:text-[14px] md:leading-[28px] 
                        lg:text-[8px] lg:leading-[16px] lg:mt-3
                    xl:text-[10px] xl:leading-[20px] xl:mt-5
                     2xl:text-[16px] 2xl:leading-[30px] 2xl:mt-6
                       "
                        id="pera3"
                      >
                        {/* וויסקי 1888 גראן רזרב 700 מ"ל */}
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
                          className="text-right border-2 border-[#C1B505] ml-auto text-[#C1B505] mx-auto text-[8px] py-[2px] px-[8px] mt-1 mb-5
                    sm:text-[14px]  sm:mt-4 sm:py-1 sm:px-6 sm:mb-0
                    md:text-[14px]  md:mt-6 md:py-1 md:px-6 
                    lg:text-[10px]  lg:leading-[18px] lg:mt-3 lg:py-1 lg:px-5 
                    xl:text-[14px] xl:leading-[20px] xl:mt-8 xl:py-2 xl:px-7
                    2xl:text-[20px] 2xl:leading-[30px] 2xl:mt-12 2xl:py-3 2xl:px-12"
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
                        className=" w-[140px] sm:w-[180px] md:w-[220px] 2xl:w-[268px] xl:w-[194px] lg:w-[135px]"
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
                        className="text-center sm:text-[12px] sm:leading-[24px] md:text-[14px] md:leading-[28px] 
                        lg:text-[8px] lg:leading-[16px] lg:mt-3
                    xl:text-[10px] xl:leading-[20px] xl:mt-5
                     2xl:text-[16px] 2xl:leading-[30px] 2xl:mt-6
                       "
                        id="pera3"
                      >
                        {/* וויסקי 1888 גראן רזרב 700 מ"ל */}
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
                          className="text-right border-2 border-[#C1B505] ml-auto text-[#C1B505] mx-auto mt-1 mb-5
                    sm:text-[14px]  sm:mt-4 sm:py-1 sm:px-6 sm:mb-0
                 text-[8px] py-[2px] px-[8px] my-1  md:text-[14px]  md:mt-6 md:py-1 md:px-6 
                  lg:text-[10px]  lg:leading-[18px] lg:mt-3 lg:py-1 lg:px-5 
                   xl:text-[14px] xl:leading-[20px] xl:mt-8 xl:py-2 xl:px-7
                   2xl:text-[20px] 2xl:leading-[30px] 2xl:mt-12 2xl:py-3 2xl:px-12"
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
                        className=" w-[140px] sm:w-[180px] md:w-[220px] 2xl:w-[268px] xl:w-[194px] lg:w-[135px]"
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
                        className="text-center sm:text-[12px] sm:leading-[24px] md:text-[14px] md:leading-[28px] 
                        lg:text-[8px] lg:leading-[16px] lg:mt-3
                    xl:text-[10px] xl:leading-[20px] xl:mt-5
                     2xl:text-[16px] 2xl:leading-[30px] 2xl:mt-6
                       "
                        id="pera3"
                      >
                        {/* וויסקי 1888 גראן רזרב 700 מ"ל */}
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
                          className="text-right border-2 border-[#C1B505] ml-auto text-[#C1B505] mx-auto mb-5 
                    sm:text-[14px]  sm:mt-4 sm:py-1 sm:px-6 
                 text-[8px] py-[2px] px-[8px] my-1  md:text-[14px]  md:mt-6 md:py-1 md:px-6 
                  lg:text-[10px]  lg:leading-[18px] lg:mt-3 lg:py-1 lg:px-5 
                   xl:text-[14px] xl:leading-[20px] xl:mt-8 xl:py-2 xl:px-7
                   2xl:text-[20px] 2xl:leading-[30px] 2xl:mt-12 2xl:py-3 2xl:px-12"
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

          <div className="2xl:h-screen" id="div3">
            <Carousal/>
          </div>
          <div className="2xl:h lg:h-screen xl:py-16 lg:pt-10 pt-10" id="div4">
            <div className="mx-auto 2xl:w-[1200px]  xl:w-[850px]  lg:w-[650px] sm:w-[500px] md:w-[600px]  w-[280px]">
              <h1
                className=" text-center text-white 2xl:text-[50px] 2xl:leading-[60px] xl:text-[35px] xl:leading-[40px] lg:text-[22px] lg:leading-[30px]"
                id="head2"
              >
                דילים לאירועים
              </h1>
              <div className="flex flex-col mx-auto sm:flex-col lg:mb-20 lg:flex-row 2xl:gap-[30px] 2xl:mt-16 xl:gap-[20px] xl:mt-12  lg:mt-6  lg:gap-[12px] ">
                <div
                  className=" w-full h-auto mx-auto
                2xl:w-[539px] xl:w-[750px] lg:w-[620px]"
                >
                  <Image
                    className=" mx-auto lg:mx-0 md:w-full lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[420px]  2xl:w-[539px]  2xl:h-[630px]  "
                    src={div411}
                  />
                </div>
                <div className="flex flex-wrap gap-[10px] mt-[10px] lg:mt-0 mx-auto 2xl:gap-[30px]  2xl:w-[630px] xl:gap-[20px] lg:gap-[12px] lg:pb-12 xl:pb-16 2xl:pb-20">
                  <Image
                    className="w-[135px] md:w-[290px] mx-auto sm:w-[240px] lg:w-[160px]  lg:h-[170px] xl:w-[200px]  xl:h-[200px] 2xl:w-[300px]  2xl:h-[300px]"
                    src={div422}
                  />
                  <Image
                    className="w-[135px] md:w-[290px] mx-auto sm:w-[240px]  lg:w-[160px]  lg:h-[170px] xl:w-[200px]  xl:h-[200px] 2xl:w-[300px]  2xl:h-[300px]"
                    src={div44}
                  />
                  <Image
                    className=" w-[135px] mb-0 md:w-[290px] mx-auto sm:w-[240px]  lg:w-[160px]  lg:h-[170px] xl:w-[200px]  xl:h-[200px] 2xl:w-[300px]  2xl:h-[300px]"
                    src={div433}
                  />
                  <Image
                    className=" w-[135px] mb-0 md:w-[290px] mx-auto sm:w-[240px]   lg:w-[160px]  lg:h-[170px] xl:w-[200px]  xl:h-[200px] 2xl:w-[300px]  2xl:h-[300px]"
                    src={div455}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F6F5E6] ">
            <div className="flex justify-center pb-10 lg:justify-between flex-col lg:flex-row mx-auto sm:py-12  lg:py-16 2xl:w-[1200px]  xl:w-[850px]  lg:w-[650px] sm:w-[500px] md:w-[600px] w-[280px]">
              <div className="w-full 2xl:mt-24 mx-auto pt-10 sm:pt-0 ">
                <Image
                  src={giftcaed}
                  className="2xl:w-[573px]  2xl:h-[419px] xl:w-[440px] xl:h-[390px]  lg:w-[280px] sm:w-[300px] md:w-[350px] mx-auto lg:mx-0"
                />
              </div>
              <div className="w-full 2xl:mt-36 2xl:w-[421px] xl:w-[340px] xl:mt-24 mx-auto">
                <h1
                  className="text-[18px] sm:text-[30px] md:text-[35px]  lg:text-[27px] lg:leading-[35px] xl:text-[40px] xl:leading-[45px] 2xl:text-[50px] 2xl:leading-[60px] text-right"
                  id="head2"
                >
                  כרטיס נטען
                </h1>
                <p
                  className=" text-right  start text-[12px] leading-[15px] sm:text-[16px] sm:leading-[25px] sm:w-[350px] sm:ml-[30%]  md:w-[350px] md:ml-[42%] md:text-[16px] md:leading-[25px] lg:ml-0 lg:text-[12px] lg:leading-[20px] lg:mt-3 xl:mt-5 xl:text-[14px] xl:leading-[20px] 2xl:text-[18px] 2xl:leading-28px] 2xl:mt-8"
                  id="pera"
                >
                  חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות משחקים
                  אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה אחר, כלל
                  פיסיקה צרפתית אגרונומיה אל,
                </p>
                <div className="flex justify-end">
                  <button
                    id="button"
                    className="text-right border-2 border-[#C1B505] ml-auto text-[#C1B505] text-[10px] py-[2px] px-[10px] my-2
                    sm:text-[14px]  sm:mt-4 sm:py-1 sm:px-6 
                  md:text-[14px]  md:mt-6 md:py-1 md:px-6 
                  lg:text-[10px]  lg:mt-8 lg:py-1 lg:px-6 
                   xl:text-[14px]  xl:mt-8 xl:py-2 xl:px-10
                   2xl:text-[20px]  2xl:mt-14 2xl:mb-60 2xl:py-3 2xl:px-[70px]"
                  >
                    מתנה עכשיו
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#9B2A0C] sm:py-10  lg:py-16 xl:py-20 2xl:p-16 mx-auto">
              <div className="flex flex-col lg:flex-row mx-auto 2xl:w-[1200px]  xl:w-[850px] lg:w-[650px] sm:w-[500px] md:w-[600px] w-[280px]">
                <div className=" w-full lg:w-8/12 mx-auto lg:mx-0  lg:my-0 sm:w-1/2">
                  <span
                    className="bg-[#C1B505] text-[#FFFFFF] text-[10px] py-1 px-2  rounded-sm sm:p-2 md:p-3
                     lg:p-[10px] xl:p-[14px] 2xl:p-[24px] 2xl:px-[30px] lg:rounded-md rounded-r-none lg:rounded-r-none 2xl:text-[20px] 2xl:leading-[30px]"
                    id="pera4"
                  >
                    הירשם
                  </span>
                  <input
                    type="search"
                    placeholder="הזן את כתובת הדואר האלקטרוני שלך"
                    className="bg-[#A9482E]  sm:w-[82%]  md:w-[77%] sm:p-2 md:p-3
                    xl:w-5/6 cursor-pointer text-[#FFFFFF] rounded-sm rounded-l-none lg:rounded-md text-[10px] py-1 lg:rounded-l-none lg:p-2 xl:p-3  2xl:p-6 text-right mt-5 "
                  />
                </div>
                <div className="text-right my-2  mx-auto lg:w-4/12 lg:flex lg:flex-col lg:justify-between lg:text-right ">
                  <h1
                    className=" text-white text-[16px] sm:text-[25px] lg:text-[25px] xl:text-[35px] xl:leading-[50px] 2xl:text-[50px] 2xl:leading-[60px]"
                    id="head2"
                  >
                    בלי מחוייבות!
                  </h1>
                  <p
                    className="text-white text-[10px] sm:text-[16px] lg:mt-2 lg:text-[14px] xl:mt-4 xl:text-[16px] xl:leading-[20px] 2xl:mt-6 2xl:text-[18px] 2xl:leading-[28px]"
                    id="pera"
                  >
                    אנחנו נציע לך מוצרים ומבצעים משתלמים
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-black lg:pt-12 xl:pt-24 pt-5">
            <div className="flex flex-col-reverse lg:flex-row justify-between mx-auto 2xl:w-[1200px]  xl:w-[850px]  lg:w-[650px] sm:w-[500px]  w-[280px]">
              <div className=" lg:my-0  lg:w-full lg:mx-0">
                <h1
                  className=" mt-2 text-[10px] sm:text-[12px] md:text-[14px] text-white lg:text-[14px] lg:leading-[20px]
                xl:text-[16px] 2xl:text-[18px] 2xl:leading-[26px] text-center lg:text-right"
                  id="head2"
                >
                  בוא נהיה חברים!
                </h1>
                <ul className=" my-2 flex justify-center gap-4 2xl:my-6 lg:justify-end lg:gap-5 lg:my-3 xl:gap-7 xl:my-4  lg:text-right">
                  <li>
                    <Image
                      src={instaa}
                      className="cursor-pointer w-4 sm:w-6 md:w-8 lg:w-full "
                    />
                    {""}
                  </li>
                  <li>
                    <Image
                      src={facebookk}
                      className="cursor-pointer w-4 sm:w-6 md:w-8 lg:w-full"
                    />
                    {""}
                  </li>
                </ul>
                <p
                  className=" text-[8px] sm:text-[10px] md:text-[12px] my-2 text-center lg:text-right text-white lg:text-[12px] xl:text-[14px] xl:leading-[24px] 2xl:text-[18px] 2xl:leading-[26px]"
                  id="pera"
                >
                  קנייתך באתר מאובטחת ומוכרת ע”י חברות האשראי
                </p>
                <ul className="flex gap-1 justify-center lg:justify-end lg:my-6 xl:my-10">
                  <Image
                    src={visa}
                    className=" w-8  sm:w-10 md:w-12 2xl:w-[50px] 2xl:h-[30px] xl:w-[40px] xl:h-[24px] lg:w-[25px] lg:h-[20px] rounded-md"
                  />
                  <Image
                    src={mastercard}
                    className=" w-8  sm:w-10 md:w-12 2xl:w-[50px] 2xl:h-[30px] xl:w-[40px] xl:h-[24px] lg:w-[25px] lg:h-[20px] rounded-md"
                  />
                  <Image
                    src={american}
                    className=" w-8  sm:w-10 md:w-12  2xl:w-[50px] 2xl:h-[30px] xl:w-[40px] xl:h-[24px] lg:w-[25px] lg:h-[20px] rounded-md"
                  />
                </ul>
              </div>
              <div className=" lg:my-0 mx-auto lg:w-full xl:w-5/6 lg:mx-0">
                <h1
                  className="text-[10px] sm:text-[12px] md:text-[14px] mt-2 text-white lg:text-[14px] lg:leading-[20px]
                xl:text-[16px] xl:leading-[30px] 2xl:leading-[26px] 2xl:text-[18px] text-center lg:text-right"
                  id="head2"
                >
                  צור קשר
                </h1>
                <ul className="text-[8px] sm:text-[10px] md:text-[12px] my-2 text-white xl:my-6 text-center lg:text-right">
                  <li className=" cursor-pointer lg:my-1 xl:my-0 2xl:my-0 lg:text-[12px] xl:text-[14px] 2xl:text-[16px]">
                    alcohol.market@gmail.com
                  </li>
                  <li className=" cursor-pointer sm:my-2 lg:my-1 xl:my-[6px] 2xl:my-3 lg:text-[12px] xl:text-[14px] 2xl:text-[16px]">
                    +38 9878 5897 598
                  </li>
                </ul>
              </div>
              <div className=" lg:my-0  mx-auto lg:w-3/4 lg:mx-0 ">
                <h1
                  className="text-[10px] sm:text-[12px] md:text-[14px] mt-2  text-white lg:text-[14px] lg:leading-[20px]
                xl:text-[16px] xl:leading-[30px] 2xl:leading-[26px] 2xl:text-[18px] text-center lg:text-right"
                  id="head2"
                >
                  קישורים אחרים
                </h1>
                <ul className="text-[8px] sm:text-[10px] md:text-[12px] sm:my-3 my-2 text-white xl:my-6 text-center lg:text-right">
                  <li className="  cursor-pointer lg:my-1 xl:my-0 2xl:my-0 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 2xl:leading-[24px]">
                    אלכוהול לאירועים
                  </li>
                  <li className=" cursor-pointer sm:my-2 lg:my-1 xl:my-[6px] 2xl:my-3 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 2xl:leading-[24px]">
                    מתנות ומארזים
                  </li>
                  <li className="cursor-pointer lg:my-1 xl:my-0 2xl:my-0 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 2xl:leading-[24px]">
                    מוצרים נלווים
                  </li>
                </ul>
              </div>
              <div className=" lg:my-0 lg:w-3/6 xl:w-4/6 lg:mx-0">
                <ul>
                  <h1
                    className="cursor-pointer text-[#B15953] text-center text-[20px] 
                   lg:text-right sm:text-[25px]
                   lg:text-[20px] leading-normal
                   xl:text-[30px] xl:leading-[35px]
                  2xl:text-[48px] 2xl:leading-[35px] "
                    id="heading1"
                  >
                    Logo
                  </h1>
                </ul>
              </div>
            </div>
            <hr
              className="opacity-[20%] text-[#FFFFFF] mt-4 w-[280px] sm:w-[500px] 
            2xl:w-[1200px]  xl:w-[850px]  lg:w-[650px] mx-auto 2xl:mt-5"
            />
            <h1 className="text-white text-center text-[8px] sm:text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] xl:py-3 py-2">
              © 2023 לולו. כל הזכויות שמורות.
            </h1>
          </footer>

         
        </div>
      </section>
    </>
  );
};

export default page;

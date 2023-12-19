import React from "react";
import { useState } from "react";

const Carousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 3));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 0));
  };

  return (
    <div className=" ">
      <div
        id="animation-carousel"
        className="relative  mx-auto xl:mt-10  2xl:w-[1200px]  xl:w-[850px] lg:w-[650px] sm:w-[500px] md:w-[600px] w-[280px] 2xl:py-0 2xl:my-0 xl:py-0"
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="relative sm:h-56 mx-auto rounded-lg md:h-96 2xl:w-[1000px] xl:w-[700px] lg:w-[500px] sm:w-[400px] md:w-[500px] w-[240px]">
          {/* Item 1 */}
          <div
            className={`w-60 duration-200 ease-linear ${
              activeIndex === 0 ? "" : "hidden"
            }`}
            data-carousel-item=""
          >
            <div className="md:mt-10 sm:mt-5 mt-5 lg:mt-0 ">
              <div className="flex flex-col mx-auto 2xl:w-[1000px] xl:w-[700px]  lg:w-[500px] sm:w-[400px] md:w-[500px] w-[240px] 2xl:py-0 xl:py-10">
                <div>
                  <h1
                    className="text-center text-white 
                text-[15px] 
              sm:my-0 sm:text-[25px] sm:leading-[40px] 
              md:my-0 md:text-[35px] md:leading-[45px]
              lg:my-0 lg:text-[30px] lg:leading-[40px] lg:mt-0
              xl:text-[35px] xl:leading-45px]
              2xl:text-[50px] 2xl:leading-[60px] 2xl:mt-7
               "
                    id="head2"
                  >
                    מבצעים
                  </h1>
                </div>

                <div className="flex flex-col mt-1 lg:flex-row my-auto justify-between  xl:mt-[35px] 2xl:mt-[70px]  ">
                  <div className=" mx-auto lg:my-auto  2xl:w-[535px] w-2/6 sm:w-2/6 lg:w-2/6 md:mt-6 sm:mt-6 mt-3 lg:mt-5 xl:mt-0 ">
                    <img
                      src="images/Group11.webp"
                      className="mx-auto 
                    w-[100px] h-[130px] sm:w-[120px] sm:h-[180px]   md:w-[160px] md:h-[240px]
                     2xl:w-[426px] 2xl:h-[638px] xl:w-[420px] xl:h-auto lg:w-[260px] lg:h-[280px]"
                    />
                  </div>
                  <div className=" text-right  2xl:my-24  2xl:w-[665px] sm:mt-4 md:mt-6 lg:mt-0  lg:w-4/6">
                    <div className="text-right items-end">
                      <h1
                        className="text-center lg:text-right text-white text-[12px] mt-2
                        sm:text-[20px] sm:leading-[20px] sm:mt-0 
                        md:text-[18px] md:leading-[25px] 
                           lg:w-[200px] lg:text-[20px] lg:leading-[25px] lg:mt-16 lg:ml-[133px]
                                xl:w-[240px] xl:text-[25px] xl:leading-[35px] xl:ml-[48%]
                            2xl:text-[40px] 2xl:leading-[50px] 2xl:w-[405px] 2xl:mt-0 2xl:ml-[21%] xl:mt-6"
                        id="head2"
                      >
                        קבל 10% הנחה על ההזמנה הראשונה שלך
                      </h1>
                      <p
                      id="pera"
                        className="flex justify-end mx-auto text-center lg:text-right text-white text-[10px] w-[220px] mt-2
                            sm:text-[12px] sm:leading-[18px] sm:my-4 sm:w-[220px] 
                          md:text-[11px] md:leading-[18px] md:my-4  md:w-[280px]
                           lg:text-[12px] lg:leading-[16px] lg:my-5 lg:w-[280px] lg:ml-[52px]
                           xl:text-[16px] xl:leading-[25px] xl:my-7 xl:w-[400px] xl:ml-[65px]
                              2xl:text-[18px] 2xl:leading-[28px] 2xl:my-7 2xl:w-[421px] 2xl:ml-[110px]"
                      >
                        חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות
                        משחקים אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה
                        אחר, כלל פיסיקה צרפתית אגרונומיה אל,
                      </p>
                      <div
                        className="flex justify-center lg:justify-end md:gap-3 gap-2 sm:gap-2 lg:gap-2 xl:gap-0 2xl:my-8 my-2 2xl:mr-[4%] mr-4"
                        id="pera4"
                      >
                        <del
                          className="flex text-[#ffffffe6] opacity-[23%]
                           "
                        >
                          <h2
                            className=" my-auto text-right text-[12px] sm:text-[14px] md:text-[16px]
                        lg:text-[16px] xl:text-[20px] 2xl:text-[22px] xl:leading-[50px] "
                          >
                            ₪ 125.00
                          </h2>
                        </del>
                        <h1
                          className="text-right text-[#FFFFFF] text-[14px] sm:text-[18px] md:text-[20px]
                       lg:text-[16px] xl:text-[28px] 2xl:text-[34px] xl:leading-[50px] xl:w-[161px]"
                        >
                          ₪ 125.00
                        </h1>
                      </div>

                      <div className="flex justify-center lg:justify-end ">
                        <button
                          className=" border border-[#C1B505] text-[#C1B505] text-[12px]
                        sm:text-[10px] py-[3px] px-[17px] sm:py-[4px] sm:px-[20px] mb-2 
                       sm:mr-0  lg:px-4   md:text-[14px] md:py-1 md:px-6 md:mt-3  lg:text-[14px] lg:py-1  lg:my-3  xl:my-3   xl:text-[14px] xl:leading-[22px] xl:py-[0px] xl:px-0 xl:w-[140px] xl:h-[38px]  
                    2xl:text-[20px] 2xl:leading-[30px]  2xl:w-[208px] 2xl:h-[54px] 2xl:px-[60px] 2xl:border-[3px] 2xl:my-4 2xl:mr-[4%]"
                          id="pera4"
                        >
                          קנה עכשיו
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 */}
         
          <div
            className={`w-60 duration-200 ease-linear ${
              activeIndex === 1 ? "" : "hidden"
            }`}
            data-carousel-item=""
          >
            <div className="md:mt-10 sm:mt-5 mt-5 lg:mt-0 ">
              <div className="flex flex-col mx-auto 2xl:w-[1000px] xl:w-[700px]  lg:w-[500px] sm:w-[400px] md:w-[500px] w-[240px] 2xl:py-0 xl:py-10">
                <div>
                  <h1
                    className="text-center text-white 
                text-[15px] 
              sm:my-0 sm:text-[25px] sm:leading-[40px] 
              md:my-0 md:text-[35px] md:leading-[45px]
              lg:my-0 lg:text-[30px] lg:leading-[40px] lg:mt-0
              xl:text-[35px] xl:leading-45px]
              2xl:text-[50px] 2xl:leading-[60px] 2xl:mt-7
               "
                    id="head2"
                  >
                    מבצעים
                  </h1>
                </div>

                <div className="flex flex-col mt-1 lg:flex-row my-auto justify-between  xl:mt-[35px] 2xl:mt-[70px]  ">
                <div className=" lg:my-auto  2xl:w-[535px] w-2/6 sm:w-2/6 lg:w-2/6 md:mt-6 sm:mt-6 mt-3 lg:mt-5 xl:mt-0 mx-auto">
                    <img
                      src="images/Group22.webp"
                      className="mx-auto 
                    w-[100px] h-[130px] sm:w-[120px] sm:h-[180px]   md:w-[160px] md:h-[240px]
                     2xl:w-[426px] 2xl:h-[638px] xl:w-[360px] xl:h-auto lg:w-[260px] lg:h-[280px]"
                    />
                  </div>
                  <div className=" text-right  2xl:my-24  2xl:w-[665px] sm:mt-4 md:mt-6 lg:mt-0  lg:w-4/6">
                    <div className="text-right items-end">
                      <h1
                        className="text-center lg:text-right text-white text-[12px] mt-2
                        sm:text-[20px] sm:leading-[20px] sm:mt-0 
                        md:text-[18px] md:leading-[25px] 
                           lg:w-[200px] lg:text-[20px] lg:leading-[25px] lg:mt-16 lg:ml-[133px]
                                xl:w-[240px] xl:text-[25px] xl:leading-[35px] xl:ml-[48%]
                            2xl:text-[40px] 2xl:leading-[50px] 2xl:w-[405px] 2xl:mt-0 2xl:ml-[21%] xl:mt-6"
                        id="head2"
                      >
                        קבל 10% הנחה על ההזמנה הראשונה שלך
                      </h1>
                      <p
                      id="pera"
                        className="flex justify-end mx-auto text-center lg:text-right text-white text-[10px] w-[220px] mt-2
                            sm:text-[12px] sm:leading-[18px] sm:my-4 sm:w-[220px] 
                          md:text-[11px] md:leading-[18px] md:my-4  md:w-[280px]
                           lg:text-[12px] lg:leading-[16px] lg:my-5 lg:w-[280px] lg:ml-[52px]
                           xl:text-[16px] xl:leading-[25px] xl:my-7 xl:w-[400px] xl:ml-[65px]
                              2xl:text-[18px] 2xl:leading-[28px] 2xl:my-7 2xl:w-[421px] 2xl:ml-[110px]"
                      >
                        חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות
                        משחקים אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה
                        אחר, כלל פיסיקה צרפתית אגרונומיה אל,
                      </p>
                      <div
                        className="flex justify-center lg:justify-end md:gap-3 gap-2 sm:gap-2 lg:gap-2 xl:gap-0 2xl:my-8 my-2 2xl:mr-[4%] mr-4"
                        id="pera4"
                      >
                        <del
                          className="flex text-[#ffffffe6] opacity-[23%]
                           "
                        >
                          <h2
                            className=" my-auto text-right text-[12px] sm:text-[14px] md:text-[16px]
                        lg:text-[16px] xl:text-[20px] 2xl:text-[22px] xl:leading-[50px] "
                          >
                            ₪ 125.00
                          </h2>
                        </del>
                        <h1
                          className="text-right text-[#FFFFFF] text-[14px] sm:text-[18px] md:text-[20px]
                       lg:text-[16px] xl:text-[28px] 2xl:text-[34px] xl:leading-[50px] xl:w-[161px]"
                        >
                          ₪ 125.00
                        </h1>
                      </div>

                      <div className="flex justify-center lg:justify-end ">
                        <button
                          className=" border border-[#C1B505] text-[#C1B505] text-[12px]
                        sm:text-[10px] py-[3px] px-[17px] sm:py-[4px] sm:px-[20px] mr-4 mb-2 
                       sm:mr-0  lg:px-4   md:text-[14px] md:py-1 md:px-6 md:mt-3  lg:text-[14px] lg:py-1  lg:my-3  xl:my-3   xl:text-[14px] xl:leading-[22px] xl:py-[0px] xl:px-0 xl:w-[140px] xl:h-[38px]  
                    2xl:text-[20px] 2xl:leading-[30px]  2xl:w-[208px] 2xl:h-[54px] 2xl:px-[60px] 2xl:border-[3px] 2xl:my-4 2xl:mr-[4%]"
                          id="pera4"
                        >
                          קנה עכשיו
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 3 (add more items as needed) */}
         


          <div
            className={`w-60 duration-200 ease-linear ${
              activeIndex === 2 ? "" : "hidden"
            }`}
            data-carousel-item=""
          >
            <div className="md:mt-10 sm:mt-5 mt-5 lg:mt-0 ">
              <div className="flex flex-col mx-auto 2xl:w-[1000px] xl:w-[700px]  lg:w-[500px] sm:w-[400px] md:w-[500px] w-[240px] 2xl:py-0 xl:py-10">
                <div>
                  <h1
                    className="text-center text-white 
                text-[15px] 
              sm:my-0 sm:text-[25px] sm:leading-[40px] 
              md:my-0 md:text-[35px] md:leading-[45px]
              lg:my-0 lg:text-[30px] lg:leading-[40px] lg:mt-0
              xl:text-[35px] xl:leading-45px]
              2xl:text-[50px] 2xl:leading-[60px] 2xl:mt-7
               "
                    id="head2"
                  >
                    מבצעים
                  </h1>
                </div>

                <div className="flex flex-col mt-1 lg:flex-row my-auto justify-between  xl:mt-[35px] 2xl:mt-[70px]  ">
                <div className=" lg:my-auto  2xl:w-[535px] w-2/6 sm:w-2/6 lg:w-2/6 md:mt-6 sm:mt-6 mt-3 lg:mt-5 xl:mt-0 mx-auto">
                <img
                      src="images/Group33.webp"
                      className="mx-auto 
                    w-[100px] h-[130px] sm:w-[120px] sm:h-[180px]   md:w-[160px] md:h-[240px]
                     2xl:w-[426px] 2xl:h-[638px] xl:w-[360px] xl:h-auto lg:w-[260px] lg:h-[280px]"
                    />
                  </div>
                  <div className=" text-right  2xl:my-24  2xl:w-[665px] sm:mt-4 md:mt-6 lg:mt-0  lg:w-4/6">
                    <div className="text-right items-end">
                      <h1
                        className="text-center lg:text-right text-white text-[12px] mt-2
                        sm:text-[20px] sm:leading-[20px] sm:mt-0 
                        md:text-[18px] md:leading-[25px] 
                           lg:w-[200px] lg:text-[20px] lg:leading-[25px] lg:mt-16 lg:ml-[133px]
                                xl:w-[240px] xl:text-[25px] xl:leading-[35px] xl:ml-[48%]
                            2xl:text-[40px] 2xl:leading-[50px] 2xl:w-[405px] 2xl:mt-0 2xl:ml-[21%] xl:mt-6"
                        id="head2"
                      >
                        קבל 10% הנחה על ההזמנה הראשונה שלך
                      </h1>
                      <p
                      id="pera"
                        className="flex justify-end mx-auto text-center lg:text-right text-white text-[10px] w-[220px] mt-2
                            sm:text-[12px] sm:leading-[18px] sm:my-4 sm:w-[220px] 
                          md:text-[11px] md:leading-[18px] md:my-4  md:w-[280px]
                           lg:text-[12px] lg:leading-[16px] lg:my-5 lg:w-[280px] lg:ml-[52px]
                           xl:text-[16px] xl:leading-[25px] xl:my-7 xl:w-[400px] xl:ml-[65px]
                              2xl:text-[18px] 2xl:leading-[28px] 2xl:my-7 2xl:w-[421px] 2xl:ml-[110px]"
                      >
                        חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות
                        משחקים אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה
                        אחר, כלל פיסיקה צרפתית אגרונומיה אל,
                      </p>
                      <div
                        className="flex justify-center lg:justify-end md:gap-3 gap-2 sm:gap-2 lg:gap-2 xl:gap-0 2xl:my-8 my-2 2xl:mr-[4%] mr-4"
                        id="pera4"
                      >
                        <del
                          className="flex text-[#ffffffe6] opacity-[23%]
                           "
                        >
                          <h2
                            className=" my-auto text-right text-[12px] sm:text-[14px] md:text-[16px]
                        lg:text-[16px] xl:text-[20px] 2xl:text-[22px] xl:leading-[50px] "
                          >
                            ₪ 125.00
                          </h2>
                        </del>
                        <h1
                          className="text-right text-[#FFFFFF] text-[14px] sm:text-[18px] md:text-[20px]
                       lg:text-[16px] xl:text-[28px] 2xl:text-[34px] xl:leading-[50px] xl:w-[161px]"
                        >
                          ₪ 125.00
                        </h1>
                      </div>

                      <div className="flex justify-center lg:justify-end ">
                        <button
                          className=" border border-[#C1B505] text-[#C1B505] text-[12px]
                        sm:text-[10px] py-[3px] px-[17px] sm:py-[4px] sm:px-[20px] mr-4 mb-2 
                       sm:mr-0  lg:px-4   md:text-[14px] md:py-1 md:px-6 md:mt-3  lg:text-[14px] lg:py-1  lg:my-3  xl:my-3   xl:text-[14px] xl:leading-[22px] xl:py-[0px] xl:px-0 xl:w-[140px] xl:h-[38px]  
                    2xl:text-[20px] 2xl:leading-[30px]  2xl:w-[208px] 2xl:h-[54px] 2xl:px-[60px] 2xl:border-[3px] 2xl:my-4 2xl:mr-[4%]"
                          id="pera4"
                        >
                          קנה עכשיו
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 4 (add more items as needed) */}
         


          <div
            className={`w-60 duration-200 ease-linear ${
              activeIndex === 3 ? "" : "hidden"
            }`}
            data-carousel-item=""
          >
            <div className="md:mt-10 sm:mt-5 mt-5 lg:mt-0 ">
              <div className="flex flex-col mx-auto 2xl:w-[1000px] xl:w-[700px]  lg:w-[500px] sm:w-[400px] md:w-[500px] w-[240px] 2xl:py-0 xl:py-10">
                <div>
                  <h1
                    className="text-center text-white 
                text-[15px] 
              sm:my-0 sm:text-[25px] sm:leading-[40px] 
              md:my-0 md:text-[35px] md:leading-[45px]
              lg:my-0 lg:text-[30px] lg:leading-[40px] lg:mt-0
              xl:text-[35px] xl:leading-45px]
              2xl:text-[50px] 2xl:leading-[60px] 2xl:mt-7
               "
                    id="head2"
                  >
                    מבצעים
                  </h1>
                </div>

                <div className="flex flex-col mt-1 lg:flex-row my-auto justify-between  xl:mt-[35px] 2xl:mt-[70px]  ">
                <div className=" lg:my-auto  2xl:w-[535px] w-2/6 sm:w-2/6 lg:w-2/6 md:mt-6 sm:mt-6 mt-3 lg:mt-5 xl:mt-0 mx-auto">
                <img
                      src="images/Group44.webp"
                      className="mx-auto 
                    w-[100px] h-[130px] sm:w-[120px] sm:h-[180px]   md:w-[160px] md:h-[240px]
                     2xl:w-[426px] 2xl:h-[638px] xl:w-[360px] xl:h-auto lg:w-[260px] lg:h-[280px]"
                    />
                  </div>
                  <div className=" text-right  2xl:my-24  2xl:w-[665px] sm:mt-4 md:mt-6 lg:mt-0  lg:w-4/6">
                    <div className="text-right items-end">
                      <h1
                        className="text-center lg:text-right text-white text-[12px] mt-2
                        sm:text-[20px] sm:leading-[20px] sm:mt-0 
                        md:text-[18px] md:leading-[25px] 
                           lg:w-[200px] lg:text-[20px] lg:leading-[25px] lg:mt-16 lg:ml-[133px]
                                xl:w-[240px] xl:text-[25px] xl:leading-[35px] xl:ml-[48%]
                            2xl:text-[40px] 2xl:leading-[50px] 2xl:w-[405px] 2xl:mt-0 2xl:ml-[21%] xl:mt-6"
                        id="head2"
                      >
                        קבל 10% הנחה על ההזמנה הראשונה שלך
                      </h1>
                      <p
                      id="pera"
                        className="flex justify-end mx-auto text-center lg:text-right text-white text-[10px] w-[220px] mt-2
                            sm:text-[12px] sm:leading-[18px] sm:my-4 sm:w-[220px] 
                          md:text-[11px] md:leading-[18px] md:my-4  md:w-[280px]
                           lg:text-[12px] lg:leading-[16px] lg:my-5 lg:w-[280px] lg:ml-[52px]
                           xl:text-[16px] xl:leading-[25px] xl:my-7 xl:w-[400px] xl:ml-[65px]
                              2xl:text-[18px] 2xl:leading-[28px] 2xl:my-7 2xl:w-[421px] 2xl:ml-[110px]"
                      >
                        חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות
                        משחקים אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה
                        אחר, כלל פיסיקה צרפתית אגרונומיה אל,
                      </p>
                      <div
                        className="flex justify-center lg:justify-end md:gap-3 gap-2 sm:gap-2 lg:gap-2 xl:gap-0 2xl:my-8 my-2 2xl:mr-[4%] mr-4"
                        id="pera4"
                      >
                        <del
                          className="flex text-[#ffffffe6] opacity-[23%]
                           "
                        >
                          <h2
                            className=" my-auto text-right text-[12px] sm:text-[14px] md:text-[16px]
                        lg:text-[16px] xl:text-[20px] 2xl:text-[22px] xl:leading-[50px] "
                          >
                            ₪ 125.00
                          </h2>
                        </del>
                        <h1
                          className="text-right text-[#FFFFFF] text-[14px] sm:text-[18px] md:text-[20px]
                       lg:text-[16px] xl:text-[28px] 2xl:text-[34px] xl:leading-[50px] xl:w-[161px]"
                        >
                          ₪ 125.00
                        </h1>
                      </div>

                      <div className="flex justify-center lg:justify-end ">
                        <button
                          className=" border border-[#C1B505] text-[#C1B505] text-[12px]
                        sm:text-[10px] py-[3px] px-[17px] sm:py-[4px] sm:px-[20px] mr-4 mb-2 
                       sm:mr-0  lg:px-4   md:text-[14px] md:py-1 md:px-6 md:mt-3  lg:text-[14px] lg:py-1  lg:my-3  xl:my-3   xl:text-[14px] xl:leading-[22px] xl:py-[0px] xl:px-0 xl:w-[140px] xl:h-[38px]  
                    2xl:text-[20px] 2xl:leading-[30px]  2xl:w-[208px] 2xl:h-[54px] 2xl:px-[60px] 2xl:border-[3px] 2xl:my-4 2xl:mr-[4%]"
                          id="pera4"
                        >
                          קנה עכשיו
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute 2xl:top-[38%] 2xl:bottom-[40%]  2xl:mt-[300px] xl:top-[72%] xl:bottom-[40%] lg:top-[50%] lg:bottom-[40%] md:top-[70%] md:bottom-[40%] sm:top-[90%] sm:bottom-[40%] top-[45%] bottom-[40%] start-0 z-30 flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-[68px] 2xl:w-[68px]  cursor-pointer group focus:outline-none bg-[#ffffff33] 2xl:p-1 rounded-full"
          data-carousel-prev=""
          onClick={handlePrevClick}
        >
          <img
            src="/images/arrow-left.svg"
            className=" 2xl:w-10 xl:w-6 lg:w-5 md:w-5 sm:w-5 w-3 opacity-[100%] "
          />
        </button>
        <button
          type="button"
          className="absolute 2xl:top-[38%] 2xl:bottom-[40%]  2xl:mt-[300px] xl:top-[72%] xl:bottom-[40%] lg:top-[50%] lg:bottom-[40%] md:top-[70%] md:bottom-[40%]  sm:top-[90%] sm:bottom-[40%] top-[45%] bottom-[40%] end-0 z-30 flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-[68px] 2xl:w-[68px]  cursor-pointer group focus:outline-none bg-[#ffffff33] 2xl:p-1 rounded-full "
          data-carousel-next=""
          onClick={handleNextClick}
        >
          <img
            src="/images/arrow-right.svg"
            className=" 2xl:w-10 xl:w-6 lg:w-5 md:w-5 sm:w-5 w-3 opacity-[100%] "

          />
        </button>
      </div>
    </div>
  );
};

export default Carousal;

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
    <div className="pt-2 sm:pt-5 sm:pb-5 md:pt-8 lg:pt-10 xl:pt-1 xl:pb-7 2xl:pt-0 ">
      <div
        id="animation-carousel"
        className="relative  mx-auto xl:my-20 2xl:w-[1200px]  xl:w-[850px] lg:w-[650px] sm:w-[500px] md:w-[600px] w-[280px] 2xl:py-0 2xl:my-0 xl:py-0"
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
            <div className=" ">
              <div className="flex flex-col mx-auto 2xl:w-[1000px] xl:w-[700px]  lg:w-[500px] sm:w-[400px] md:w-[500px] w-[240px] 2xl:py-28 xl:py-0">
                <div>
                  <h1
                    className="text-center text-white 
                text-[12px] 
              sm:my-0 sm:text-[30px] sm:leading-[40px] 
              md:my-0 md:text-[35px] md:leading-[45px]
              lg:my-0 lg:text-[30px] lg:leading-[40px] lg:mt-0
              xl:text-[35px] xl:leading-45px]
              2xl:text-[50px] 2xl:leading-[60px]
               "
                    id="head2"
                  >
                    מבצעים
                  </h1>
                </div>

                <div className="flex  mt-1 lg:flex-row my-auto justify-between   2xl:mt-[65px]  ">
                  <div className=" lg:my-auto  2xl:w-[535px] w-2/6 sm:w-2/6 lg:w-2/6 md:mt-4 lg:mt-5 ">
                    <img
                      src="images/Group11.webp"
                      className="mx-auto 
                    w-[100px] h-[130px] sm:w-[120px] sm:h-[180px]   md:w-[160px] md:h-[240px]
                     2xl:w-[426px] 2xl:h-[638px] xl:w-[360px] xl:h-auto lg:w-[260px] lg:h-[280px]"
                    />
                  </div>
                  <div className=" text-right  2xl:my-24  2xl:w-[665px] sm:mt-4 md:mt-6 lg:mt-0  w-4/6">
                    <div className="text-right items-end">
                      <h1
                        className=" text-white text-[10px]  w-[80px] ml-[65px]
                    sm:text-[15px] sm:leading-[20px] sm:mt-0 sm:w-[150px] sm:ml-[115px]
                    md:text-[18px] md:leading-[25px] md:ml-[190px] md:w-[140px]
                    lg:w-[200px] lg:text-[20px] lg:leading-[25px] lg:mt-16 lg:ml-[133px]
                    xl:w-[240px] xl:text-[25px] xl:leading-[35px] xl:ml-[48%]
                    2xl:text-[40px] 2xl:leading-[50px] 2xl:w-[415px] 2xl:mt-0 2xl:ml-[21%] xl:mt-6"
                        id="head2"
                      >
                        קבל 20% הנחה על ההזמנה הראשונה שלך
                      </h1>
                      <p
                        className="flex justify-end text-right text-white text-[7px] w-[130px] ml-[15px] mt-1
                sm:text-[9px] sm:leading-[12px] sm:my-2 sm:w-[220px] 
               sm:ml-[45px] md:text-[11px] md:leading-[18px] md:my-4 md:ml-[52px] md:w-[280px]
                lg:text-[12px] lg:leading-[16px] lg:my-5 lg:w-[280px] lg:ml-[52px]
                xl:text-[16px] xl:leading-[25px] xl:my-7 xl:w-[400px] xl:ml-[65px]
                2xl:text-[18px] 2xl:leading-[28px] 2xl:my-7 2xl:w-[421px] 2xl:ml-[110px]"
                      >
                        חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות
                        משחקים אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה
                        אחר, כלל פיסיקה צרפתית אגרונומיה אל,
                      </p>
                      <div
                        className="flex justify-end lg:gap-2 2xl:my-14 my-2 2xl:mr-[4%] mr-4 sm:mr-0"
                        id="pera4"
                      >
                        <del
                          className="text-[#834F42] opacity-[23%]
                    lg:w-[161px] "
                        >
                          <h2
                            className="text-right text-[8px] sm:[12px] md:[14px]
                        lg:text-[16px] xl:text-[20px] 2xl:text-[22px] xl:leading-[50px] "
                          >
                            ₪ 125.00
                          </h2>
                        </del>
                        <h1
                          className="text-right text-[#FFFFFF] text-[10px] sm:[14px] md:[20px]
                       lg:text-[16px] xl:text-[28px] 2xl:text-[34px] xl:leading-[50px] xl:w-[161px] "
                        >
                          ₪ 125.00
                        </h1>
                      </div>

                      <div className=" ">
                        <button
                          className=" border border-[#C1B505] text-[#C1B505] 
                        text-[8px] py-[2px] px-[6px] mr-4 mb-2
                        
                       sm:mr-0  lg:px-4   md:text-[14px] md:py-1 md:px-6 md:mt-3  lg:text-[14px] lg:py-1  lg:my-3 xl:text-[18px] xl:py-1 xl:px-8 xl:my-3
                    2xl:text-[20px] 2xl:leading-[30px] 2xl:py-[10px] 2xl:px-[60px] 2xl:border-[3px] 2xl:my-4 2xl:mr-[4%]"
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
            <div className=" ">
              <div className="flex flex-col mx-auto 2xl:w-[1000px] xl:w-[700px]  lg:w-[500px] sm:w-[400px] md:w-[500px] w-[240px] 2xl:py-28 xl:py-0">
                <div>
                  <h1
                    className="text-center text-white 
                text-[12px] 
              sm:my-0 sm:text-[30px] sm:leading-[40px] 
              md:my-0 md:text-[35px] md:leading-[45px]
              lg:my-0 lg:text-[30px] lg:leading-[40px] lg:mt-0
              xl:text-[35px] xl:leading-45px]
              2xl:text-[50px] 2xl:leading-[60px]
               "
                    id="head2"
                  >
                    מבצעים
                  </h1>
                </div>

                <div className="flex  mt-1 lg:flex-row my-auto justify-between   2xl:mt-[65px]  ">
                  <div className=" lg:my-auto  2xl:w-[535px] w-2/6 sm:w-2/6 lg:w-2/6 md:mt-4 lg:mt-5 xl:mt-0">
                    <img
                      src="images/Group22.webp"
                      className="mx-auto 
                    w-[100px] h-[130px] sm:w-[120px] sm:h-[180px]   md:w-[160px] md:h-[240px]
                     2xl:w-[426px] 2xl:h-[638px] xl:w-[360px] xl:h-auto lg:w-[260px] lg:h-[280px]"
                    />
                  </div>
                  <div className=" text-right  2xl:my-24  2xl:w-[665px] sm:mt-4 md:mt-6 lg:mt-0  w-4/6">
                    <div className="text-right items-end">
                      <h1
                        className=" text-white text-[10px] w-[80px] ml-[65px]
                    sm:text-[15px] sm:leading-[20px] sm:mt-0 sm:w-[150px] sm:ml-[115px]
                    md:text-[18px] md:leading-[25px] md:ml-[190px] md:w-[140px]
                    lg:w-[200px] lg:text-[20px] lg:leading-[25px] lg:mt-16 lg:ml-[133px]
                    xl:w-[240px] xl:text-[25px] xl:leading-[35px] xl:ml-[48%]
                    2xl:text-[40px] 2xl:leading-[50px] 2xl:w-[415px] 2xl:mt-0 2xl:ml-[21%] xl:mt-6"
                        id="head2"
                      >
                        קבל 20% הנחה על ההזמנה הראשונה שלך
                      </h1>
                      <p
                        className="flex justify-end text-right text-white text-[7px] w-[130px] ml-[15px] mt-1
                sm:text-[9px] sm:leading-[12px] sm:my-2 sm:w-[220px]
               sm:ml-[45px] md:text-[11px] md:leading-[18px] md:my-4 md:ml-[52px] md:w-[280px]
                lg:text-[12px] lg:leading-[16px] lg:my-5 lg:w-[280px] lg:ml-[52px]
                xl:text-[16px] xl:leading-[25px] xl:my-7 xl:w-[400px] xl:ml-[65px]
                2xl:text-[18px] 2xl:leading-[28px] 2xl:my-7 2xl:w-[421px] 2xl:ml-[110px]"
                      >
                        חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות
                        משחקים אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה
                        אחר, כלל פיסיקה צרפתית אגרונומיה אל,
                      </p>
                      <div
                        className="flex justify-end lg:gap-2 2xl:my-14 my-2 2xl:mr-[4%] mr-4 sm:mr-0"
                        id="pera4"
                      >
                        <del
                          className="text-[#834F42] opacity-[23%]
                    lg:w-[161px] "
                        >
                          <h2
                            className="text-right text-[8px] sm:[12px] md:[14px]
                        lg:text-[16px] xl:text-[20px] 2xl:text-[22px] xl:leading-[50px] "
                          >
                            ₪ 125.00
                          </h2>
                        </del>
                        <h1
                          className="text-right text-[#FFFFFF] text-[10px] sm:[14px] md:[20px]
                       lg:text-[16px] xl:text-[28px] 2xl:text-[34px] xl:leading-[50px] xl:w-[161px] "
                        >
                          ₪ 125.00
                        </h1>
                      </div>

                      <div className=" ">
                        <button
                          className=" border border-[#C1B505] text-[#C1B505] 
                        text-[8px] py-[2px] px-[6px] mr-4 mb-2
                        
                       sm:mr-0  lg:px-4   md:text-[14px] md:py-1 md:px-6 md:mt-3  lg:text-[14px] lg:py-1  lg:my-3 xl:text-[18px] xl:py-1 xl:px-8 xl:my-3
                    2xl:text-[20px] 2xl:leading-[30px] 2xl:py-[10px] 2xl:px-[60px] 2xl:border-[3px] 2xl:my-4 2xl:mr-[4%]"
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
            <div className=" ">
              <div className="flex flex-col mx-auto 2xl:w-[1000px] xl:w-[700px]  lg:w-[500px] sm:w-[400px] md:w-[500px] w-[240px] 2xl:py-28 xl:py-0">
                <div>
                  <h1
                    className="text-center text-white 
                text-[12px] 
              sm:my-0 sm:text-[30px] sm:leading-[40px] 
              md:my-0 md:text-[35px] md:leading-[45px]
              lg:my-0 lg:text-[30px] lg:leading-[40px] lg:mt-0
              xl:text-[35px] xl:leading-45px]
              2xl:text-[50px] 2xl:leading-[60px]
               "
                    id="head2"
                  >
                    מבצעים
                  </h1>
                </div>

                <div className="flex  mt-1 lg:flex-row my-auto justify-between   2xl:mt-[65px]  ">
                  <div className=" lg:my-auto  2xl:w-[535px] w-2/6 sm:w-2/6 lg:w-2/6 md:mt-4 lg:mt-5 xl:mt-0">
                    <img
                      src="images/Group33.webp"
                      className="mx-auto 
                    w-[100px] h-[130px] sm:w-[120px] sm:h-[180px]   md:w-[160px] md:h-[240px]
                     2xl:w-[426px] 2xl:h-[638px] xl:w-[360px] xl:h-auto lg:w-[260px] lg:h-[280px]"
                    />
                  </div>
                  <div className=" text-right  2xl:my-24  2xl:w-[665px] sm:mt-4 md:mt-6 lg:mt-0  w-4/6">
                    <div className="text-right items-end">
                      <h1
                        className=" text-white text-[10px] w-[80px] ml-[65px]
                    sm:text-[15px] sm:leading-[20px] sm:mt-0 sm:w-[150px] sm:ml-[115px]
                    md:text-[18px] md:leading-[25px] md:ml-[190px] md:w-[140px]
                    lg:w-[200px] lg:text-[20px] lg:leading-[25px] lg:mt-16 lg:ml-[133px]
                    xl:w-[240px] xl:text-[25px] xl:leading-[35px] xl:ml-[48%]
                    2xl:text-[40px] 2xl:leading-[50px] 2xl:w-[415px] 2xl:mt-0 2xl:ml-[21%] xl:mt-6"
                        id="head2"
                      >
                        קבל 20% הנחה על ההזמנה הראשונה שלך
                      </h1>
                      <p
                        className="flex justify-end text-right text-white text-[7px] w-[130px] ml-[15px] mt-1
                sm:text-[9px] sm:leading-[12px] sm:my-2 sm:w-[220px]
               sm:ml-[45px] md:text-[11px] md:leading-[18px] md:my-4 md:ml-[52px] md:w-[280px]
                lg:text-[12px] lg:leading-[16px] lg:my-5 lg:w-[280px] lg:ml-[52px]
                xl:text-[16px] xl:leading-[25px] xl:my-7 xl:w-[400px] xl:ml-[65px]
                2xl:text-[18px] 2xl:leading-[28px] 2xl:my-7 2xl:w-[421px] 2xl:ml-[110px]"
                      >
                        חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות
                        משחקים אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה
                        אחר, כלל פיסיקה צרפתית אגרונומיה אל,
                      </p>
                      <div
                        className="flex justify-end lg:gap-2 2xl:my-14 my-2 2xl:mr-[4%] mr-4 sm:mr-0"
                        id="pera4"
                      >
                        <del
                          className="text-[#834F42] opacity-[23%]
                    lg:w-[161px] "
                        >
                          <h2
                            className="text-right text-[8px] sm:[12px] md:[14px]
                        lg:text-[16px] xl:text-[20px] 2xl:text-[22px] xl:leading-[50px] "
                          >
                            ₪ 125.00
                          </h2>
                        </del>
                        <h1
                          className="text-right text-[#FFFFFF] text-[10px] sm:[14px] md:[20px]
                       lg:text-[16px] xl:text-[28px] 2xl:text-[34px] xl:leading-[50px] xl:w-[161px] "
                        >
                          ₪ 125.00
                        </h1>
                      </div>

                      <div className=" ">
                        <button
                          className=" border border-[#C1B505] text-[#C1B505] 
                        text-[8px] py-[2px] px-[6px] mr-4 mb-2
                        
                       sm:mr-0  lg:px-4   md:text-[14px] md:py-1 md:px-6 md:mt-3  lg:text-[14px] lg:py-1  lg:my-3 xl:text-[18px] xl:py-1 xl:px-8 xl:my-3
                    2xl:text-[20px] 2xl:leading-[30px] 2xl:py-[10px] 2xl:px-[60px] 2xl:border-[3px] 2xl:my-4 2xl:mr-[4%]"
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
            <div className=" ">
              <div className="flex flex-col mx-auto 2xl:w-[1000px] xl:w-[700px]  lg:w-[500px] sm:w-[400px] md:w-[500px] w-[240px] 2xl:py-28 xl:py-0">
                <div>
                  <h1
                    className="text-center text-white 
                text-[12px] 
              sm:my-0 sm:text-[30px] sm:leading-[40px] 
              md:my-0 md:text-[35px] md:leading-[45px]
              lg:my-0 lg:text-[30px] lg:leading-[40px] lg:mt-0
              xl:text-[35px] xl:leading-45px]
              2xl:text-[50px] 2xl:leading-[60px]
               "
                    id="head2"
                  >
                    מבצעים
                  </h1>
                </div>

                <div className="flex  mt-1 lg:flex-row my-auto justify-between   2xl:mt-[65px]  ">
                  <div className=" lg:my-auto  2xl:w-[535px] w-2/6 sm:w-2/6 lg:w-2/6 md:mt-4 lg:mt-5 xl:mt-0">
                    <img
                      src="images/Group44.webp"
                      className="mx-auto 
                    w-[100px] h-[130px] sm:w-[120px] sm:h-[180px]   md:w-[160px] md:h-[240px]
                     2xl:w-[426px] 2xl:h-[638px] xl:w-[360px] xl:h-auto lg:w-[260px] lg:h-[280px]"
                    />
                  </div>
                  <div className=" text-right  2xl:my-24  2xl:w-[665px] sm:mt-4 md:mt-6 lg:mt-0  w-4/6">
                    <div className="text-right items-end">
                      <h1
                        className=" text-white text-[10px] w-[80px] ml-[65px]
                    sm:text-[15px] sm:leading-[20px] sm:mt-0 sm:w-[150px] sm:ml-[115px]
                    md:text-[18px] md:leading-[25px] md:ml-[190px] md:w-[140px]
                    lg:w-[200px] lg:text-[20px] lg:leading-[25px] lg:mt-16 lg:ml-[133px]
                    xl:w-[240px] xl:text-[25px] xl:leading-[35px] xl:ml-[48%]
                    2xl:text-[40px] 2xl:leading-[50px] 2xl:w-[415px] 2xl:mt-0 2xl:ml-[21%] xl:mt-6"
                        id="head2"
                      >
                        קבל 20% הנחה על ההזמנה הראשונה שלך
                      </h1>
                      <p
                        className="flex justify-end text-right text-white text-[7px] w-[130px] ml-[15px] mt-1
                sm:text-[9px] sm:leading-[12px] sm:my-2 sm:w-[220px]
               sm:ml-[45px] md:text-[11px] md:leading-[18px] md:my-4 md:ml-[52px] md:w-[280px]
                lg:text-[12px] lg:leading-[16px] lg:my-5 lg:w-[280px] lg:ml-[52px]
                xl:text-[16px] xl:leading-[25px] xl:my-7 xl:w-[400px] xl:ml-[65px]
                2xl:text-[18px] 2xl:leading-[28px] 2xl:my-7 2xl:w-[421px] 2xl:ml-[110px]"
                      >
                        חפש צרפתית איטליה או. מיזם מאמרשיחהצפה תנך אם, בדף שמות
                        משחקים אל, בדף ב יכול בויקיפדיה. או לערכים אווירונאוטיקה
                        אחר, כלל פיסיקה צרפתית אגרונומיה אל,
                      </p>
                      <div
                        className="flex justify-end lg:gap-2 2xl:my-14 my-2 2xl:mr-[4%] mr-4 sm:mr-0"
                        id="pera4"
                      >
                        <del
                          className="text-[#834F42] opacity-[23%]
                    lg:w-[161px] "
                        >
                          <h2
                            className="text-right text-[8px] sm:[12px] md:[14px]
                        lg:text-[16px] xl:text-[20px] 2xl:text-[22px] xl:leading-[50px] "
                          >
                            ₪ 125.00
                          </h2>
                        </del>
                        <h1
                          className="text-right text-[#FFFFFF] text-[10px] sm:[14px] md:[20px]
                       lg:text-[16px] xl:text-[28px] 2xl:text-[34px] xl:leading-[50px] xl:w-[161px] "
                        >
                          ₪ 125.00
                        </h1>
                      </div>

                      <div className=" ">
                        <button
                          className=" border border-[#C1B505] text-[#C1B505] 
                        text-[8px] py-[2px] px-[6px] mr-4 mb-2
                        
                       sm:mr-0  lg:px-4   md:text-[14px] md:py-1 md:px-6 md:mt-3  lg:text-[14px] lg:py-1  lg:my-3 xl:text-[18px] xl:py-1 xl:px-8 xl:my-3
                    2xl:text-[20px] 2xl:leading-[30px] 2xl:py-[10px] 2xl:px-[60px] 2xl:border-[3px] 2xl:my-4 2xl:mr-[4%]"
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
          className="absolute top-[45%] bottom-[50%] 2xl:mt-[300px] start-0 z-30 flex items-center justify-center h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-10 xl:w-10  cursor-pointer group focus:outline-none border rounded-full "
          data-carousel-prev=""
          onClick={handlePrevClick}
        >
          <img
            src="/images/arrow-left.svg"
            className=" 2xl:w-14 xl:w-5 lg:w-9 md:w-8 sm:w-7 w-3 opacity-[100%] "
          />
        </button>
        <button
          type="button"
          className="absolute top-[45%]  bottom-[50%] 2xl:mt-[300px] end-0 z-30 flex items-center justify-center h-4 w-4 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-10 xl:w-10 cursor-pointer group focus:outline-none border rounded-full "
          data-carousel-next=""
          onClick={handleNextClick}
        >
          <img
            src="/images/arrow-right.svg"
            className=" 2xl:w-14 xl:w-5 lg:w-9 md:w-8 sm:w-7 w-3 "
          />
        </button>
      </div>
    </div>
  );
};

export default Carousal;
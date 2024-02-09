"use client";
import React, { useEffect, useState } from "react";
import { whiskys } from "@/configs/data";
import Heading from "@/components/Heading";
import Image from "next/image";

const WhiskyDetailsPage = ({ params }) => {
  const slug = params?.slug;
  const [whiskyDetails, setWhiskyDetails] = useState(null);

  const getCocktailBySlug = () => {
    const foundCocktail = whiskys.find((item) => item.slug === slug);
    if (foundCocktail) {
      setWhiskyDetails(foundCocktail);
    }
  };

  useEffect(() => {
    if (slug) {
      getCocktailBySlug();
    }
  }, [slug]);

  // console.log(whiskyDetails);

  return (
    <>
      <section className="pt-[120px] md:pb-[50px] pt-20px pb-[20px]">
        <div className="container mx-auto">
          <Heading title={whiskyDetails?.name} />
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 lg:gap-10 p-3 md:p-4  mt-4 md:mt-6 justify-center items-center border 
           border-[#d6d1d1] rounded-lg">
            <div className="">
              <Image
                src={whiskyDetails?.image}
                alt="coctails"
                height={300}
                width={300}
                className="mx-auto h-auto"
              />
            </div>
            <div className="flex  flex-col gap-y-3 text-right">
              <div className=" ">
                <h2 className="text-[24px] lg:text-[34px] 2xl:text-[38px] font-medium  my-2">
                {whiskyDetails?.name}
                </h2>
              </div>
                <p className="text-[14px]">גודל: {whiskyDetails?.size}</p>
                <p className="text-[14px]">מחיר: ₪ {whiskyDetails?.price}.00</p>
                <p className="text-[14px]">מדינת מוצא: {whiskyDetails?.origin_country}</p>
                <p className="text-[14px]">סוג רוח: {whiskyDetails?.spirit_type}</p>
                <p className="text-[14px]">רכיבים : {whiskyDetails?.ingredients}</p>
                <p className="text-[14px]">אף: {whiskyDetails?.smell}</p>
                <p className="text-[15px] lg:text-[16px] font-medium  my-2">פרטי קוקטייל: {whiskyDetails?.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhiskyDetailsPage;

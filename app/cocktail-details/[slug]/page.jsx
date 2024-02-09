"use client";
import React, { useEffect, useState } from "react";
import { cocktails } from "@/configs/data";
import Heading from "@/components/Heading";
import Image from "next/image";

const CocktailDetailsPage = ({ params }) => {
  const slug = params?.slug;
  const [cocktailDetails, setCocktailDetails] = useState(null);

  const getCocktailBySlug = () => {
    const foundCocktail = cocktails.find((cocktail) => cocktail.slug === slug);
    if (foundCocktail) {
      setCocktailDetails(foundCocktail);
    }
  };

  useEffect(() => {
    if (slug) {
      getCocktailBySlug();
    }
  }, [slug]);

  console.log(cocktailDetails);

  return (
    <>
      <section className="pt-[120px] md:pb-[50px] pt-20px pb-[20px]">
        <div className="container mx-auto">
          <Heading title={cocktailDetails?.name} />
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 lg:gap-10 p-5 md:p-8 mt-4 md:mt-6 justify-center items-center border 
           border-[#d6d1d1] rounded-lg">
            <div className="">
              <Image
                src={cocktailDetails?.image}
                alt="coctails"
                height={300}
                width={300}
                className="mx-auto h-auto"
              />
            </div>
            <div className="flexEnd flex-col text-right">
              <div className=" ">
                <h2 className="text-[24px] lg:text-[34px] 2xl:text-[38px] font-medium  my-2">
                {cocktailDetails?.name}
                </h2>
                <p className="text-[15px] lg:text-[16px] font-medium  my-2">פרטי קוקטייל: {cocktailDetails?.description}</p>
                <p className="text-[14px]">מחיר: ${cocktailDetails?.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CocktailDetailsPage;

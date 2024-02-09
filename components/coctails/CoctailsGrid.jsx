"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "../Heading";

const CocktailsGrid = ({ cocktails }) => {
  return (
    <section className="pt-[120px] md:pb-[50px] pt-20px pb-[20px]">
      <div className="container mx-auto">
        <Heading title="קניות לפי קטגוריות" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-3 md:pt-5 justify-center items-center">
          {cocktails.map((cocktail, index) => (
            <Link key={index} href={`/cocktail-details/${cocktail.slug}`}>
              <div
                className="border shadow-md hover:shadow-2xl border-[#f3f3f3] cursor-pointer p-4 rounded-lg"
              >
                <div className="md:h-[320px] relative overflow-hidden">
                  <Image
                    src={cocktail.image}
                    alt="coctails"
                    height={300}
                    width={300}
                    className="mx-auto max-h-[300px] h-full  transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="flexCenter flex-col">
                  <h2 className="text-lg font-medium  mt-2">{cocktail.name}</h2>
                  <p className="text-[14px]">Price: ₪ {cocktail.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CocktailsGrid;
"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "../Heading";

const WhiskysGrid = ({ whiskys }) => {
  return (
    <section className="pt-[70px] md:pb-[50px] lg:pt-[100px] pt-20px pb-[20px]">
           <div className=" mx-auto 2xl:w-[1500px]  xl:w-[1000px] lg:w-[880px] sm:w-[500px] md:w-[600px] w-[70%]">

        <Heading title="וויסקי" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-3 md:pt-5 justify-center items-center">
          {whiskys.map((items, index) => (
            <Link key={index} href={`/whisky-details/${items.slug}`}>
              <div
                className="border shadow-md hover:shadow-2xl border-[#f3f3f3] cursor-pointer p-4 rounded-lg"
              >
                <div className=" relative overflow-hidden">
                  <Image
                    src={items.image}
                    alt="coctails"
                    height={80}
                    width={80}
                    className="mx-auto w-40 lg:max-h-[300px]   transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="flexCenter flex-col">
                  <h2 className="text-[16px] lg:text-[18px] 2xl:text-[24px]font-medium  mt-2">{items.name}</h2>
                  <p className="text-[12px] lg:text-[14px] 2xl:text-[22px]">Price: ₪ {items.price}.00</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiskysGrid;

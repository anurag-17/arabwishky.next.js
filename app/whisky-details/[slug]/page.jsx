"use client";
import React, { useEffect, useState } from "react";
import { whiskys } from "@/configs/data";
import Heading from "@/components/Heading";
import Image from "next/image";
import { useCart } from "@/app/context-cart/context-cart";
import { useRouter } from "next/navigation";

const WhiskyDetailsPage = ({ params }) => {
  const { addToCart, cart } = useCart();
  const { addToWishlist, wishlist } = useCart();

  const router = useRouter();
  const slug = params?.slug || "";

  const [whiskyDetails, setWhiskyDetails] = useState(null);

  console.log(whiskyDetails, "y");

  const getCocktailBySlug = () => {
    const foundCocktail = whiskys.find((item) => item.slug === slug);
    if (foundCocktail) {
      setWhiskyDetails(foundCocktail);
    }
    // console.log(foundCocktail, "me")
  };
  useEffect(() => {
    if (slug) {
      getCocktailBySlug();
    }
  }, [slug]);

  // console.log(whiskyDetails);

  return (
    <>
      <section className="pt-[100px] 2xl:pt-[120px] md:pb-[50px]  pb-[20px]">
        <div className="container mx-auto">
          <Heading title={whiskyDetails?.name} />
          <div
            className="grid grid-cols-1 sm:grid-cols-2  gap-5 lg:gap-10 p-3  2xl:p-8  2xl:mt-6 justify-center items-center border 
           border-[#d6d1d1] rounded-lg"
          >
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
              <p className="text-[14px]">
                מדינת מוצא: {whiskyDetails?.origin_country}
              </p>
              <p className="text-[14px]">
                סוג רוח: {whiskyDetails?.spirit_type}
              </p>
              <p className="text-[14px]">
                רכיבים : {whiskyDetails?.ingredients}
              </p>
              <p className="text-[14px]">אף: {whiskyDetails?.smell}</p>
              <p className="text-[15px] lg:text-[16px] font-medium  my-2">
                פרטי קוקטייל: {whiskyDetails?.description}
              </p>
              <div className="flex justify-around w-full">
                <div className="w-1/3">
                  <button
                    onClick={() => {
                      addToCart(whiskyDetails);
                      alert("product Added");
                    }}
                    className="bg-black hover:bg-transparent hover:text-black hover:border border hover:border-black text-white  py-2 px-4 2xl:py-3 2xl:px-8 rounded text-[16px] 2xl:text-[18px] w-full  "
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/3">
                  <button
                    onClick={() => {
                      addToWishlist(whiskyDetails);
                      alert("product Added to Wishlist");
                    }}
                    className="bg-black hover:bg-transparent hover:text-black hover:border border hover:border-black text-white  py-2 px-4 2xl:py-3 2xl:px-8 rounded text-[16px] 2xl:text-[18px] w-full  "
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhiskyDetailsPage;

"use client";
import React, { useEffect, useState } from "react";
import { cocktails } from "@/configs/data";
import Heading from "@/components/Heading";
import Image from "next/image";
import { useCart } from "@/app/context-cart/context-cart";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CocktailDetailsPage = ({ params }) => {
  const { addToCart, cart } = useCart();
  const { addToWishlist, wishlist } = useCart();
  const router = useRouter();
  const slug = params?.slug || "";
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
       <section className="pt-[70px] md:pb-[50px] 2xl:lg:pt-[150px] lg:pt-[100px] pt-20px pb-[20px]">
       <ToastContainer autoClose={1000} />

           <div className=" mx-auto 2xl:w-[1500px]  xl:w-[1000px] lg:w-[880px] sm:w-[550px] md:w-[600px] w-[70%]">

          <Heading title={cocktailDetails?.name} />
          <div
            className="grid grid-cols-1 sm:grid-cols-2  gap-5 lg:gap-10 p-3  2xl:p-8  2xl:mt-6 justify-center items-center border 
           border-[#d6d1d1] rounded-lg"
          >
            <div className="">
              <Image
                src={cocktailDetails?.image}
                alt="coctails"
                height={200}
                width={200}
                className="mx-auto 2xl:h-auto "
              />
            </div>
            <div className="flexEnd flex-col text-right">
              <div className=" ">
                <h2 className="text-[24px] lg:text-[34px] 2xl:text-[38px] font-medium  my-2">
                  {cocktailDetails?.name}
                </h2>
                <p className="text-[12px] lg:text-[16px] 2xl:text-[22px]">מחיר: ${cocktailDetails?.price}</p>
                <p className="text-[12px] lg:text-[16px] 2xl:text-[22px]  my-2">
                  פרטי קוקטייל: {cocktailDetails?.description}
                </p>
              </div>
              <div className="w-full flex justify-end  lg:mb-4">
              <div className="w-8/12 lg:w-2/4 ">

            <button
                onClick={() => {
                  addToCart(cocktailDetails);
                  toast.success("Product added to Cart");
                }}
                className="bg-black hover:bg-transparent hover:text-black hover:border border hover:border-black text-white  py-2 px-4 2xl:py-3 2xl:px-8 rounded text-[12px] lg:text-[14px] 2xl:text-[18px] w-full mt-3 2xl:mt-5 "
              >
                Add to Cart
              </button>
           
             <button
                onClick={() => {
                  addToWishlist(cocktailDetails);
                  toast.success("Product added to Wishlist");
                }}
                className="bg-black hover:bg-transparent hover:text-black hover:border border hover:border-black text-white  py-2 px-4 2xl:py-3 2xl:px-8 rounded text-[12px] lg:text-[14px] 2xl:text-[18px] w-full mt-3 2xl:mt-5 "
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

export default CocktailDetailsPage;

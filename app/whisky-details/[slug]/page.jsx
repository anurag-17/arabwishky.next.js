"use client";
import React, { useEffect, useState } from "react";
import { whiskys } from "@/configs/data";
import Heading from "@/components/Heading";
import Image from "next/image";
import { useCart } from "@/app/context-cart/context-cart";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
    <section className="pt-[70px] md:pb-[50px] lg:pt-[100px] 2xl:lg:pt-[150px] pb-[20px]">
    <ToastContainer/>

      <div className=" mx-auto 2xl:w-[1500px]  xl:w-[1000px] lg:w-[880px] sm:w-[500px] md:w-[600px] w-[70%]">
          <Heading title={whiskyDetails?.name} />
          <div
            className="grid grid-cols-1 sm:grid-cols-2  gap-5 lg:gap-10 px-3  2xl:p-8  2xl:mt-6 justify-center items-center border 
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
              <p className="text-[12px] lg:text-[16px] 2xl:text-[22px]">גודל: {whiskyDetails?.size}</p>
              <p className="text-[12px] lg:text-[16px] 2xl:text-[22px]">מחיר: ₪ {whiskyDetails?.price}.00</p>
              <p className="text-[12px] lg:text-[16px] 2xl:text-[22px]">
                מדינת מוצא: {whiskyDetails?.origin_country}
              </p>
            
              <p className="text-[12px] lg:text-[16px] 2xl:text-[22px]">אף: {whiskyDetails?.smell}</p>
              <p className="   text-[12px] lg:text-[16px] 2xl:text-[22px]font-medium  my-2">
                פרטי קוקטייל: {whiskyDetails?.description}
              </p>
              <div className="flex justify-end lg:mb-4">
              <div className="w-8/12 lg:w-2/4 ">

                  <button
                    onClick={() => {
                      addToCart(whiskyDetails);
                      toast.success("Product added");
                    }}
                    className="bg-black hover:bg-transparent hover:text-black hover:border border hover:border-black text-white  py-2 px-4 2xl:py-3 2xl:px-8 rounded text-[12px] lg:text-[14px] 2xl:text-[18px] w-full  mt-3 2xl:mt-5  "
                  >
                    Add to Cart
                  </button>
            
                  <button
                    onClick={() => {
                      addToWishlist(whiskyDetails);
                      toast.success("Product added to Wishlist");
                    }}
                    className="bg-black hover:bg-transparent hover:text-black hover:border border hover:border-black text-white  py-2 px-4 2xl:py-3 2xl:px-8 rounded text-[12px] lg:text-[14px] 2xl:text-[18px] w-full  mt-3 2xl:mt-5  "
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

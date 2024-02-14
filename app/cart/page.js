"use client";
import React from "react";
import { useCart } from "../context-cart/context-cart";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  console.log(cart, "cart");

  return (
    <>
      <div className="mx-10 h-screen">
        <div className="2xl:w-[1500px] xl:w-[1000px]  lg:w-[880px]  md:w-[620px] sm:w-[550px] flex justify-between m-auto mt-20 2xl:mt-44 lg:mt-28 sm:mt-18  nav">
          <div className=" w-full">
            <h1 className="font-semibold text-[22px] lg:text-[25px] 2xl:text-[40px]">
              Your Cart
            </h1>
            <div className="flex justify-end">
              <button onClick={clearCart} className="bg-black hover:bg-transparent hover:text-black hover:border border hover:border-black text-white py-1 px-4 2xl:py-3 2xl:px-8 rounded text-[8px] sm:text-[12px] lg:text-[14px] 2xl:text-[18px]  sm:my-3 2xl:my-4">
                Cart Clear
              </button>
            </div>
            {cart.length === 0 ? (
              <div className="flex mt-16">
                <div className="mx-auto">
                  <p className="text-[30px] font-semibold text-center">
                    Cart Empty
                  </p>
                  <Link href="/">
                    <button className="bg-black hover:bg-transparent hover:text-black hover:border border hover:border-black text-white py-1 px-4 2xl:py-3 2xl:px-8 rounded text-[8px] sm:text-[12px] lg:text-[14px] 2xl:text-[18px]  sm:my-3 2xl:my-8  mx-auto flex">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <ul>
                {cart.map((item, ind) => (
                  <div
                    className="border mb-5 lg:mb-10 2xl:mb-14 p-2 2xl:p-4 w-full flex justify-between gap-5"
                    key={ind}
                  >
                    <div className="w-2/12">
                      <Image
                        src={item.image}
                        height={100}
                        width={100}
                        className="2xl:w-44 "
                      />
                    </div>
                    <div className="w-9/12">
                      <h1 className="text-[#1E1E1E] xl:text-[20px] 2xl:text-[30px] 2xl:mt-[18px] 2xl:leading-[50px]  xl:my-2 xl:leading-[35px] lg:my-2 lg:text-[18px] lg:leading-[25px] md:text-[16px] md:my-1 md:leading-[25px] sm:text-[14px] sm:mt-1 sm:leading-[30px] text-[10px] mt-1 leading-[20px] item-name font-semibold">
                        {item.name}
                      </h1>
                      <h1 className=" 2xl:my-3 2xl:text-[36px] 2xl:leading-[25px] xl:text-[22px] xl:my-2 xl:leading-[20px] lg:text-[16px] lg:leading-[25px] md:text-[18px] md:my-1 md:leading-[25px] sm:text-[18px] sm:leading-[25px] text-[14px] item-price">
                        Price : {item.price}
                      </h1>
                      <button
                        onClick={() => {
                          // Add functionality here
                          console.log("Buy now clicked");
                        }}
                        className="bg-black hover:bg-transparent hover:text-black hover:border border hover:border-black text-white py-1 px-4 2xl:py-3 2xl:px-8 rounded text-[8px] sm:text-[12px] lg:text-[14px] 2xl:text-[18px]  sm:my-3 2xl:my-8"
                      >
                        Buy Now
                      </button>
                    </div>
                    <div
                      onClick={() => {
                        removeFromCart(item.slug);
                      }}
                      className="w-5 lg:w-[40px]"
                    >
                      <img
                        src="/images/wrongb.svg"
                        className="w-5 lg:w-6 2xl:w-10"
                        onClick={() => {
                          console.log("Remove from cart clicked");
                        }}
                      />
                    </div>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load cart from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);

    setCart(storedCart);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const saveCartToLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const saveWishlistToLocalStorage = (newWishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, item];
      saveCartToLocalStorage(newCart);
      return newCart;
    });
  };

  const addToWishlist = (item) => {
    setWishlist((prevCart) => {
      const newWishlist = [...prevCart, item];
      saveWishlistToLocalStorage(newWishlist);
      return newWishlist;
    });
  };

  const removeFromWishlist = (slug) => {
    setWishlist((prevCart) => {
      const newWishlist = prevCart.filter((item) => item.slug !== slug);
      saveWishlistToLocalStorage(newWishlist);
      return newWishlist;
    });
  };

  const removeFromCart = (slug) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.slug !== slug);
      saveCartToLocalStorage(newCart);
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

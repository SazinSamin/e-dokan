'use client';

import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    console.log("add to cart")
  }

  return <CartContext.Provider value={addToCart}>

  </CartContext.Provider>


  
}

export default CartContext;
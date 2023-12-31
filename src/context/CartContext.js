"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  
  // cart status
  const [cart, setCart] = useState([]);
  // cart items amount status
  const [itemAmount, setItemAmount] = useState(0);
  // total price 
  const [total , setTotal] = useState(0);

  // add to the cart
  const addToCart = (product) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === product.id;
    });
    //console.log(cartItem);
    // if the item already present in the cart, increase the amount
    if (cartItem) {
      const cartWithNewItem = [...cart].map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(cartWithNewItem);
    } else {
      setCart([...cart, newItem]);
    }
    // console.log(cart);
  };

  // remove item from the cart
  const removeFromCart = (id) => {
    console.log("Remove cart requested");
    const newCart = cart.filter((item) => {
      return item.id != id;
    });
    setCart(newCart);
  };

  // clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };



  // increase curt item amount
  useEffect(()=>{
    if(cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);


  // calculate the total amount
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total.toFixed(2));
  })

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

"use client";

import { CartContext } from "@/context/CartContext";
import { ProductContext } from "@/context/ProductsContext";
import { useContext, useEffect, useState } from "react";

export default function Product({ params }) {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return (item.id = params.id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, desc, image } = product;

  return (
    <section>
      <div className="container mx-auto pt-20 ">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-10 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            ></img>
          </div>
          <div className="flex-1 flex-row">
            <div className=" font-bold">{title}</div>
            <div className=" text-red-500">{price}</div>
            <div>{desc}</div>
          </div>
          <div>
            <button onClick={()=>addToCart(product)} className=" bg-slate-600 rounded-lg text-white w-40 h-10 hover:bg-slate-950">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

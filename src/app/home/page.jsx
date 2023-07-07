'use client';

import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";

export default function Home () {

  // using products context for get the products list
  const { products } = useContext(ProductContext);
  console.log(products);

  return <div>
    {products.map(product => {
      return <p>{product.title}</p>
    })}
  </div>
}

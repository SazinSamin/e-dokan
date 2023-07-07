'use client'

import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  
  // store the fetched products
  const [ products, setProducts] = useState([]);
  
  // fetch the product
  useEffect(()=> {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const jsonResponse = await response.json();
      setProducts(jsonResponse);
    }
    fetchProducts();
  }, []);


  return <ProductContext.Provider value={{products}}>
    {children}
  </ProductContext.Provider>
}

export default ProductProvider;
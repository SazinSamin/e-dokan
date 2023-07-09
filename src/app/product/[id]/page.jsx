import { ProductContext } from "@/context/ProductsContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
export default function Product ({params}) {

  //console.log(params);
  const {product} = useContext(ProductContext);

  const [productView, setProductView] = useState({});

  useEffect(()=> {

  }, [])

  return <div>
    <h1>Product id: {params.id}</h1>
  </div>
}
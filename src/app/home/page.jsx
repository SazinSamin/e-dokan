"use client";

import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";
import ProductComponent from "@/components/Products";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  // using products context for get the products list
  const { products } = useContext(ProductContext);
  // console.log(products);

  return (
    <div className="flex flex-col">
      <section className="py-16">
        <div className=" container">
          <div
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            xl:grid-col-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {products.map((product) => {
              return (
                <div className="">
                  <ProductComponent product={product} key={product.id} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

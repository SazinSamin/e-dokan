'use client'

import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";
import ProductComponent from "@/components/Products";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  // using products context for get the products list
  const { products } = useContext(ProductContext);
  // console.log(products);
  
  return (
    <div className="bg-slate-100 flex flex-col">
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <ProductComponent product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

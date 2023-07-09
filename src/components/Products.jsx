import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import React, { useContext } from "react";
import { GrAdd, GrFormView } from "react-icons/gr";

const ProductComponent = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="bg-slate-300 border border-[#1b12251f] rounded-lg h-72 sm:h-80 mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-48 sm:w-56 mx-auto flex justify-center">
            <img
              className="max-h-40 sm:max-h-48 group-hover:scale-150 transition duration-300"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>
        <div className="absolute top-2 right-2 group-hover:right-4 p-2 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-y-2 transition-all duration-300">
          <button>
            <div
              onClick={() => {
                addToCart(product);
              }}
              className="flex justify-center items-center bg-white w-10 h-10"
            >
              <GrAdd className="text-3xl" />
            </div>
            <Link href={`/product/${product.id}`}>
              <GrFormView className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl" />
            </Link>
          </button>
        </div>
      </div>
      <div>
        <div>{product.category}</div>
        <div>
          <Link href={`/product/${product.id}`}>
            <h2 className="font-semibold mb-3">{product.title}</h2>
          </Link>
        </div>
      </div>
      <div>{`${product.price * 10} ৳`}</div>
    </div>
  );
};

export default ProductComponent;

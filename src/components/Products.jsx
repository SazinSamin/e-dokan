import CartContext from "@/context/CartContext";
import Link from "next/link";
import React, { useContext } from "react";
import { GrAdd, GrFormView } from "react-icons/gr";

const ProductComponent = ({ product }) => {
  //console.log(product);

  return (
    <div>
      <div className=" border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/*image*/}
          <div className="w-[200px] mx-auto flex justify-center">
            <img
              className="max-h-[160px] group-hover:scale-150 transition duration-300"
              src={product.image}
              alt={product.title}
            ></img>
          </div>
        </div>
        <div className="absolute top-2 -right-1 group-hover:right-2 p-2 opacity-0  group-hover:opacity-100 flex flex-col item-center justify-center gap-y-2 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center bg-white w-10 h-10">
              <GrAdd className="text-3x1" />
            </div>
            <Link href={`/product/${product.id}`}>
              <GrFormView className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-x1" />
            </Link>
          </button>
        </div>
      </div>
      <div>
        <div>{product.category}</div>
        <div>
          <Link href={`/product/${product.id}`}>
            <h2 className=" font-semibold mb-3">{product.title}</h2>
          </Link>
        </div>
      </div>
      <div>{`${product.price * 10} ৳`}</div>
    </div>
  );
};

export default ProductComponent;

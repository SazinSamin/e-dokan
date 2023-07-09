import { HiOutlineX } from "react-icons/hi";
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";

import { productLink } from "@/utility/constraints";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";



const CartItem = ({ item }) => {



  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);



  return (
    <div className="flex ">
      <div className="w-full min-h-[120px]  flex item-center gap-x-3">
        {}
        <Link href={`/product/${id}`}>
          <img className="max-w-[50px]" src={image} alt={title}></img>
        </Link>
        <div className="flex flex-col rounded-lg	">
          <div className="flex justify-between">
            <Link href={`/product/${id}`} className="hover:underline">
              {title}
            </Link>
            <div
              onClick={() => {
                removeFromCart(id);
              }}
              className="hover:text-red-500 transition cursor-pointer"
            >
              <HiOutlineX />
            </div>
          </div>
          <div className="  rounded-lg	 flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100[px] rounded-lg	items-center h-full border text-primary font-medium">
              <div onClick={()=>{decreaseAmount(id)}} className="flex-1  h-full flex justify-center items-center cursor-pointer">
                <VscChromeMinimize />
              </div>
              <div className="h-full  flex justify-center items-center px-2">
                {amount}
              </div>
              <div onClick={()=>{increaseAmount(id)}} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <VscAdd />
              </div>
            </div>
            <div className="text-base">{`${price} ৳`}</div>
            <div className="text-base	">{`${amount * price}  ৳`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

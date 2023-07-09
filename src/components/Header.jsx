"use client";

import { FaShoppingBag } from "react-icons/fa";

import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header className="bg-slate-300">
      <div className="container mx-auto flex item-center justify-between h-full">
        <h3>e-dokan</h3>
        <div
          className=" cursor-pointer flex relative max-w-[50px]"
          onClick={() => {
            console.log("clicked");
            setIsOpen(!isOpen);
          }}
        >
          <FaShoppingBag className="text-2x1" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

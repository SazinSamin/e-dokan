"use client";

import { FaShoppingBag } from "react-icons/fa";


import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);

  return (
    <div className="bg-slate-300">
      <h3>e-dokan</h3>
      <div className=" cursor-pointer flex relative"
        onClick={() => {
          console.log("clicked")
          setIsOpen(!isOpen);
        }}
      >
        <FaShoppingBag className="text-2x1"/>
      </div>
    </div>
  );
};

export default Header;

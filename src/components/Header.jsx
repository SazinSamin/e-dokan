"use client";

import logo from '../utility/shop-svgrepo-com.svg';

import { FaShoppingBag } from "react-icons/fa";

import { SidebarContext } from "@/context/SidebarContext";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // header scroll active
  const [isActive, setIsActive] = useState(true);

  useEffect(()=>{
    window.addEventListener('scroll', () =>{
      window.scrollY > 60 ? setIsActive(false) : setIsActive(true);
    })
  })


  return (  
    <header className={`${isActive ? ' bg-slate-300' : 'bg-slate-500'} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex item-center justify-between h-full p-2">
        <h3 className='text-lg font-bold italic'>e-dokan</h3>
        <Link href={'/'}>
          <div>
            <img src={logo}></img>
          </div>
        </Link>
        <div
          className=" cursor-pointer flex relative max-w-[50px]"
          onClick={() => {
            console.log("clicked");
            setIsOpen(!isOpen);
          }}
        >
          <FaShoppingBag className="w-7 h-7" />
          <div className="bg-red-500 absolute -right-3 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

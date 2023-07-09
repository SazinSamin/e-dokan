"use client";

import logo from "../utility/shop-svgrepo-com.svg";

import Image from "next/image";

import { FaShoppingBag } from "react-icons/fa";
import { FaRegMeh } from "react-icons/fa";

import { SidebarContext } from "@/context/SidebarContext";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import { AuthenticationContext } from "@/context/AuthenticationContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { isAuthenticate } = useContext(AuthenticationContext);

  // header scroll active
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(false) : setIsActive(true);
    });
  });

  return (
    <header
      className={`${
        isActive ? " bg-slate-300" : "bg-slate-500"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex item-center justify-between h-full p-2">
        <div className="flex item-center justify-center items-center">
          <Link href={"/sign"}>
            <div>
              <Image src={logo} height={30} width={40}></Image>
            </div>
          </Link>
          <h3 className="text-lg font-bold italic">
            <Link href="/home">e-dokan</Link>
          </h3>
        </div>
        <div className="flex item-center justify-center">
          <Link href={"/sign"}>
            <div className="bg-blue-500 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-3xl">
              <button>Sign In</button>
            </div>
          </Link>
          <Link href={"/sign"}>
            <div className="ml-2 mr-2 bg-blue-500 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-3xl">
              <button>Sign Up</button>
            </div>
          </Link>
          <div
            className=" cursor-pointer flex relative max-w-[50px]"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FaShoppingBag className="w-7 h-10" />
            <div className="bg-red-500 absolute -right-2 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
            {isAuthenticate ? (
              <div>
                <h1>User</h1>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <button onClick={()=>{
              window.location.href = '/user'
            }}><FaRegMeh /></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

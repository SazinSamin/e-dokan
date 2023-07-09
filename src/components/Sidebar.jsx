import { CartContext } from "@/context/CartContext";
import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";

import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";
import CartItem from "./CartItem";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);

  //console.log(cart);

  return (
    <div>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-slate-300 fixed top-0 h-full shadow-2x1 md:w-[35vw] 
        xl:max-w-[30vw] transition-all 
        duration-300 z-20 px-4 lg:px-[35px]`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">
            Items In Cart({cart.length})
          </div>
          <div
            onClick={handleClose}
            className=" cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <FaArrowLeft />
          </div>
        </div>
        <div>
          {cart.map(item=> {
            console.log(item.title);
            return <CartItem item={item} key={item.id}/>
          })}
        </div>
        <div className="  bg-slate-400 rounded-lg pl-2 flex w-full justify-between items-center">
          <div>
            <span>TOTAL: {total}  ৳</span>
          </div>
          <div onClick={()=>{clearCart()}} className="cursor-pointer py-4 bg-red-600 rounded-lg	 text-white w-12 h-12 flex justify-center items-center text-x1 ">
            <FaTrashAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

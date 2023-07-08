import { SidebarContext } from "@/context/SidebarContext";
import { useContext } from "react";

import { FaArrowLeft } from "react-icons/fa";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

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
            Items In Cart(0)
          </div>
          <div
            onClick={handleClose}
            className=" cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <FaArrowLeft />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

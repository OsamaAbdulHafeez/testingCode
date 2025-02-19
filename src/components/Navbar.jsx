import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = ({setOpenSideBar}) => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-5 md:px-6 lg:px-10 py-4">
      <div className="flex items-center gap-4">
        <span className="cursor-pointer lg:hidden" onClick={()=>setOpenSideBar((prev)=>!prev)}> <RxHamburgerMenu className="w-5 h-5"/></span>
        <h2 className="text-base md:text-lg font-medium text-gray-900 cursor-pointer">
          Story Boards
        </h2>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="p-2 border rounded-full cursor-pointer hover:bg-gray-200 transition">
            <IoIosSearch className="w-4 h-4 md:w-5 md:h-5" />
          </span>
          <span className="p-2 border rounded-full cursor-pointer hover:bg-gray-200 transition">
            <IoIosNotificationsOutline className="w-4 h-4 md:w-5 md:h-5" />
          </span>
        </div>

        <button className="flex items-center gap-2 sm:gap-3 bg-gray-800 text-stone-100 py-2 px-3 sm:px-4 sm:py-1 rounded-lg text-sm sm:text-base hover:bg-gray-200 transition hover:text-gray-800">
          <FaPlus size={14} />
          <span className="hidden sm:block">Add Story</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
